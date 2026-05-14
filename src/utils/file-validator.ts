import { fileTypeFromBuffer } from 'file-type'

const ALLOWED_FILE_TYPES = {
  'application/pdf': {
    extensions: ['pdf'],
    magicNumbers: ['25504446'] // %PDF in hex
  },
  'application/msword': {
    extensions: ['doc'],
    magicNumbers: ['d0cf11e0a1b11ae1'] // OLE2 compound document
  },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
    extensions: ['docx'],
    magicNumbers: ['504b0304'] // ZIP (docx เป็น zip)
  }
} as const

type ValidationResult =
  | { valid: true; detectedMime: string; extension: string }
  | { valid: false; error: string; code: string }

export async function validateFileContent(buffer: Buffer, claimedMime: string): Promise<ValidationResult> {
  const detected = await fileTypeFromBuffer(buffer)
  if (!detected) {
    return {
      valid: false,
      error: 'Unknow file type',
      code: 'UNKNOWN_FILE_TYPE'
    }
  }

  if (!(detected.mime in ALLOWED_FILE_TYPES)) {
    return {
      valid: false,
      error: `${detected.mime} Not allowed`,
      code: 'FILE_TYPE_NOT_ALLOWED'
    }
  }

  if (detected.mime !== claimedMime) {
    return {
      valid: false,
      error: `${claimedMime} => ${detected.mime}; Faker`,
      code: 'MIME_MISMATCH'
    }
  }

  return {
    valid: true,
    detectedMime: detected.mime,
    extension: detected.ext
  }
}
