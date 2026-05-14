
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model homepage_sections
 * 
 */
export type homepage_sections = $Result.DefaultSelection<Prisma.$homepage_sectionsPayload>
/**
 * Model solutions
 * 
 */
export type solutions = $Result.DefaultSelection<Prisma.$solutionsPayload>
/**
 * Model portfolio
 * 
 */
export type portfolio = $Result.DefaultSelection<Prisma.$portfolioPayload>
/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>
/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model press
 * 
 */
export type press = $Result.DefaultSelection<Prisma.$pressPayload>
/**
 * Model careers
 * 
 */
export type careers = $Result.DefaultSelection<Prisma.$careersPayload>
/**
 * Model applicants
 * 
 */
export type applicants = $Result.DefaultSelection<Prisma.$applicantsPayload>
/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>
/**
 * Model media
 * 
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model ai_knowledge
 * 
 */
export type ai_knowledge = $Result.DefaultSelection<Prisma.$ai_knowledgePayload>
/**
 * Model ai_logs
 * 
 */
export type ai_logs = $Result.DefaultSelection<Prisma.$ai_logsPayload>
/**
 * Model ai_image_history
 * 
 */
export type ai_image_history = $Result.DefaultSelection<Prisma.$ai_image_historyPayload>
/**
 * Model hero_banners
 * 
 */
export type hero_banners = $Result.DefaultSelection<Prisma.$hero_bannersPayload>
/**
 * Model changelog
 * 
 */
export type changelog = $Result.DefaultSelection<Prisma.$changelogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homepage_sections`: Exposes CRUD operations for the **homepage_sections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homepage_sections
    * const homepage_sections = await prisma.homepage_sections.findMany()
    * ```
    */
  get homepage_sections(): Prisma.homepage_sectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solutions`: Exposes CRUD operations for the **solutions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solutions
    * const solutions = await prisma.solutions.findMany()
    * ```
    */
  get solutions(): Prisma.solutionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.portfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.press`: Exposes CRUD operations for the **press** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presses
    * const presses = await prisma.press.findMany()
    * ```
    */
  get press(): Prisma.pressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careers`: Exposes CRUD operations for the **careers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.careers.findMany()
    * ```
    */
  get careers(): Prisma.careersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicants`: Exposes CRUD operations for the **applicants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicants.findMany()
    * ```
    */
  get applicants(): Prisma.applicantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_knowledge`: Exposes CRUD operations for the **ai_knowledge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_knowledges
    * const ai_knowledges = await prisma.ai_knowledge.findMany()
    * ```
    */
  get ai_knowledge(): Prisma.ai_knowledgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_logs`: Exposes CRUD operations for the **ai_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_logs
    * const ai_logs = await prisma.ai_logs.findMany()
    * ```
    */
  get ai_logs(): Prisma.ai_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_image_history`: Exposes CRUD operations for the **ai_image_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_image_histories
    * const ai_image_histories = await prisma.ai_image_history.findMany()
    * ```
    */
  get ai_image_history(): Prisma.ai_image_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero_banners`: Exposes CRUD operations for the **hero_banners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hero_banners
    * const hero_banners = await prisma.hero_banners.findMany()
    * ```
    */
  get hero_banners(): Prisma.hero_bannersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.changelog`: Exposes CRUD operations for the **changelog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Changelogs
    * const changelogs = await prisma.changelog.findMany()
    * ```
    */
  get changelog(): Prisma.changelogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    homepage_sections: 'homepage_sections',
    solutions: 'solutions',
    portfolio: 'portfolio',
    clients: 'clients',
    services: 'services',
    press: 'press',
    careers: 'careers',
    applicants: 'applicants',
    leads: 'leads',
    media: 'media',
    settings: 'settings',
    ai_knowledge: 'ai_knowledge',
    ai_logs: 'ai_logs',
    ai_image_history: 'ai_image_history',
    hero_banners: 'hero_banners',
    changelog: 'changelog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "homepage_sections" | "solutions" | "portfolio" | "clients" | "services" | "press" | "careers" | "applicants" | "leads" | "media" | "settings" | "ai_knowledge" | "ai_logs" | "ai_image_history" | "hero_banners" | "changelog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      homepage_sections: {
        payload: Prisma.$homepage_sectionsPayload<ExtArgs>
        fields: Prisma.homepage_sectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.homepage_sectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.homepage_sectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          findFirst: {
            args: Prisma.homepage_sectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.homepage_sectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          findMany: {
            args: Prisma.homepage_sectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>[]
          }
          create: {
            args: Prisma.homepage_sectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          createMany: {
            args: Prisma.homepage_sectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.homepage_sectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>[]
          }
          delete: {
            args: Prisma.homepage_sectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          update: {
            args: Prisma.homepage_sectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          deleteMany: {
            args: Prisma.homepage_sectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.homepage_sectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.homepage_sectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>[]
          }
          upsert: {
            args: Prisma.homepage_sectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homepage_sectionsPayload>
          }
          aggregate: {
            args: Prisma.Homepage_sectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomepage_sections>
          }
          groupBy: {
            args: Prisma.homepage_sectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Homepage_sectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.homepage_sectionsCountArgs<ExtArgs>
            result: $Utils.Optional<Homepage_sectionsCountAggregateOutputType> | number
          }
        }
      }
      solutions: {
        payload: Prisma.$solutionsPayload<ExtArgs>
        fields: Prisma.solutionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.solutionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.solutionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          findFirst: {
            args: Prisma.solutionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.solutionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          findMany: {
            args: Prisma.solutionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>[]
          }
          create: {
            args: Prisma.solutionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          createMany: {
            args: Prisma.solutionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.solutionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>[]
          }
          delete: {
            args: Prisma.solutionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          update: {
            args: Prisma.solutionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          deleteMany: {
            args: Prisma.solutionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.solutionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.solutionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>[]
          }
          upsert: {
            args: Prisma.solutionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$solutionsPayload>
          }
          aggregate: {
            args: Prisma.SolutionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolutions>
          }
          groupBy: {
            args: Prisma.solutionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.solutionsCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionsCountAggregateOutputType> | number
          }
        }
      }
      portfolio: {
        payload: Prisma.$portfolioPayload<ExtArgs>
        fields: Prisma.portfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.portfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.portfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          findFirst: {
            args: Prisma.portfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.portfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          findMany: {
            args: Prisma.portfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>[]
          }
          create: {
            args: Prisma.portfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          createMany: {
            args: Prisma.portfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.portfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>[]
          }
          delete: {
            args: Prisma.portfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          update: {
            args: Prisma.portfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          deleteMany: {
            args: Prisma.portfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.portfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.portfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>[]
          }
          upsert: {
            args: Prisma.portfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.portfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.portfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      press: {
        payload: Prisma.$pressPayload<ExtArgs>
        fields: Prisma.pressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          findFirst: {
            args: Prisma.pressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          findMany: {
            args: Prisma.pressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>[]
          }
          create: {
            args: Prisma.pressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          createMany: {
            args: Prisma.pressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>[]
          }
          delete: {
            args: Prisma.pressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          update: {
            args: Prisma.pressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          deleteMany: {
            args: Prisma.pressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>[]
          }
          upsert: {
            args: Prisma.pressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pressPayload>
          }
          aggregate: {
            args: Prisma.PressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePress>
          }
          groupBy: {
            args: Prisma.pressGroupByArgs<ExtArgs>
            result: $Utils.Optional<PressGroupByOutputType>[]
          }
          count: {
            args: Prisma.pressCountArgs<ExtArgs>
            result: $Utils.Optional<PressCountAggregateOutputType> | number
          }
        }
      }
      careers: {
        payload: Prisma.$careersPayload<ExtArgs>
        fields: Prisma.careersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.careersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.careersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          findFirst: {
            args: Prisma.careersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.careersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          findMany: {
            args: Prisma.careersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          create: {
            args: Prisma.careersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          createMany: {
            args: Prisma.careersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.careersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          delete: {
            args: Prisma.careersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          update: {
            args: Prisma.careersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          deleteMany: {
            args: Prisma.careersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.careersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.careersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>[]
          }
          upsert: {
            args: Prisma.careersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careersPayload>
          }
          aggregate: {
            args: Prisma.CareersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareers>
          }
          groupBy: {
            args: Prisma.careersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareersGroupByOutputType>[]
          }
          count: {
            args: Prisma.careersCountArgs<ExtArgs>
            result: $Utils.Optional<CareersCountAggregateOutputType> | number
          }
        }
      }
      applicants: {
        payload: Prisma.$applicantsPayload<ExtArgs>
        fields: Prisma.applicantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findFirst: {
            args: Prisma.applicantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findMany: {
            args: Prisma.applicantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>[]
          }
          create: {
            args: Prisma.applicantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          createMany: {
            args: Prisma.applicantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.applicantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>[]
          }
          delete: {
            args: Prisma.applicantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          update: {
            args: Prisma.applicantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          deleteMany: {
            args: Prisma.applicantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.applicantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>[]
          }
          upsert: {
            args: Prisma.applicantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          aggregate: {
            args: Prisma.ApplicantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicants>
          }
          groupBy: {
            args: Prisma.applicantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicantsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          create: {
            args: Prisma.mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          createMany: {
            args: Prisma.mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          upsert: {
            args: Prisma.mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      ai_knowledge: {
        payload: Prisma.$ai_knowledgePayload<ExtArgs>
        fields: Prisma.ai_knowledgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_knowledgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_knowledgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          findFirst: {
            args: Prisma.ai_knowledgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_knowledgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          findMany: {
            args: Prisma.ai_knowledgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>[]
          }
          create: {
            args: Prisma.ai_knowledgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          createMany: {
            args: Prisma.ai_knowledgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_knowledgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>[]
          }
          delete: {
            args: Prisma.ai_knowledgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          update: {
            args: Prisma.ai_knowledgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          deleteMany: {
            args: Prisma.ai_knowledgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_knowledgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_knowledgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>[]
          }
          upsert: {
            args: Prisma.ai_knowledgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_knowledgePayload>
          }
          aggregate: {
            args: Prisma.Ai_knowledgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_knowledge>
          }
          groupBy: {
            args: Prisma.ai_knowledgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_knowledgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_knowledgeCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_knowledgeCountAggregateOutputType> | number
          }
        }
      }
      ai_logs: {
        payload: Prisma.$ai_logsPayload<ExtArgs>
        fields: Prisma.ai_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          findFirst: {
            args: Prisma.ai_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          findMany: {
            args: Prisma.ai_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>[]
          }
          create: {
            args: Prisma.ai_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          createMany: {
            args: Prisma.ai_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>[]
          }
          delete: {
            args: Prisma.ai_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          update: {
            args: Prisma.ai_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          deleteMany: {
            args: Prisma.ai_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>[]
          }
          upsert: {
            args: Prisma.ai_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_logsPayload>
          }
          aggregate: {
            args: Prisma.Ai_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_logs>
          }
          groupBy: {
            args: Prisma.ai_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_logsCountAggregateOutputType> | number
          }
        }
      }
      ai_image_history: {
        payload: Prisma.$ai_image_historyPayload<ExtArgs>
        fields: Prisma.ai_image_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_image_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_image_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          findFirst: {
            args: Prisma.ai_image_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_image_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          findMany: {
            args: Prisma.ai_image_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>[]
          }
          create: {
            args: Prisma.ai_image_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          createMany: {
            args: Prisma.ai_image_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_image_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>[]
          }
          delete: {
            args: Prisma.ai_image_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          update: {
            args: Prisma.ai_image_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          deleteMany: {
            args: Prisma.ai_image_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_image_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_image_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>[]
          }
          upsert: {
            args: Prisma.ai_image_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_image_historyPayload>
          }
          aggregate: {
            args: Prisma.Ai_image_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_image_history>
          }
          groupBy: {
            args: Prisma.ai_image_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_image_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_image_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_image_historyCountAggregateOutputType> | number
          }
        }
      }
      hero_banners: {
        payload: Prisma.$hero_bannersPayload<ExtArgs>
        fields: Prisma.hero_bannersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hero_bannersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hero_bannersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          findFirst: {
            args: Prisma.hero_bannersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hero_bannersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          findMany: {
            args: Prisma.hero_bannersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>[]
          }
          create: {
            args: Prisma.hero_bannersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          createMany: {
            args: Prisma.hero_bannersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hero_bannersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>[]
          }
          delete: {
            args: Prisma.hero_bannersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          update: {
            args: Prisma.hero_bannersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          deleteMany: {
            args: Prisma.hero_bannersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hero_bannersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hero_bannersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>[]
          }
          upsert: {
            args: Prisma.hero_bannersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hero_bannersPayload>
          }
          aggregate: {
            args: Prisma.Hero_bannersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero_banners>
          }
          groupBy: {
            args: Prisma.hero_bannersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hero_bannersGroupByOutputType>[]
          }
          count: {
            args: Prisma.hero_bannersCountArgs<ExtArgs>
            result: $Utils.Optional<Hero_bannersCountAggregateOutputType> | number
          }
        }
      }
      changelog: {
        payload: Prisma.$changelogPayload<ExtArgs>
        fields: Prisma.changelogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.changelogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.changelogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          findFirst: {
            args: Prisma.changelogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.changelogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          findMany: {
            args: Prisma.changelogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>[]
          }
          create: {
            args: Prisma.changelogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          createMany: {
            args: Prisma.changelogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.changelogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>[]
          }
          delete: {
            args: Prisma.changelogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          update: {
            args: Prisma.changelogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          deleteMany: {
            args: Prisma.changelogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.changelogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.changelogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>[]
          }
          upsert: {
            args: Prisma.changelogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$changelogPayload>
          }
          aggregate: {
            args: Prisma.ChangelogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChangelog>
          }
          groupBy: {
            args: Prisma.changelogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChangelogGroupByOutputType>[]
          }
          count: {
            args: Prisma.changelogCountArgs<ExtArgs>
            result: $Utils.Optional<ChangelogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    homepage_sections?: homepage_sectionsOmit
    solutions?: solutionsOmit
    portfolio?: portfolioOmit
    clients?: clientsOmit
    services?: servicesOmit
    press?: pressOmit
    careers?: careersOmit
    applicants?: applicantsOmit
    leads?: leadsOmit
    media?: mediaOmit
    settings?: settingsOmit
    ai_knowledge?: ai_knowledgeOmit
    ai_logs?: ai_logsOmit
    ai_image_history?: ai_image_historyOmit
    hero_banners?: hero_bannersOmit
    changelog?: changelogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CareersCountOutputType
   */

  export type CareersCountOutputType = {
    applicants: number
  }

  export type CareersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | CareersCountOutputTypeCountApplicantsArgs
  }

  // Custom InputTypes
  /**
   * CareersCountOutputType without action
   */
  export type CareersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareersCountOutputType
     */
    select?: CareersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareersCountOutputType without action
   */
  export type CareersCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    role: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model homepage_sections
   */

  export type AggregateHomepage_sections = {
    _count: Homepage_sectionsCountAggregateOutputType | null
    _avg: Homepage_sectionsAvgAggregateOutputType | null
    _sum: Homepage_sectionsSumAggregateOutputType | null
    _min: Homepage_sectionsMinAggregateOutputType | null
    _max: Homepage_sectionsMaxAggregateOutputType | null
  }

  export type Homepage_sectionsAvgAggregateOutputType = {
    id: number | null
    is_visible: number | null
    sort_order: number | null
  }

  export type Homepage_sectionsSumAggregateOutputType = {
    id: number | null
    is_visible: number | null
    sort_order: number | null
  }

  export type Homepage_sectionsMinAggregateOutputType = {
    id: number | null
    section_key: string | null
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    is_visible: number | null
    sort_order: number | null
  }

  export type Homepage_sectionsMaxAggregateOutputType = {
    id: number | null
    section_key: string | null
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    is_visible: number | null
    sort_order: number | null
  }

  export type Homepage_sectionsCountAggregateOutputType = {
    id: number
    section_key: number
    title_en: number
    title_th: number
    subtitle_en: number
    subtitle_th: number
    description_en: number
    description_th: number
    is_visible: number
    sort_order: number
    data: number
    _all: number
  }


  export type Homepage_sectionsAvgAggregateInputType = {
    id?: true
    is_visible?: true
    sort_order?: true
  }

  export type Homepage_sectionsSumAggregateInputType = {
    id?: true
    is_visible?: true
    sort_order?: true
  }

  export type Homepage_sectionsMinAggregateInputType = {
    id?: true
    section_key?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    is_visible?: true
    sort_order?: true
  }

  export type Homepage_sectionsMaxAggregateInputType = {
    id?: true
    section_key?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    is_visible?: true
    sort_order?: true
  }

  export type Homepage_sectionsCountAggregateInputType = {
    id?: true
    section_key?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    is_visible?: true
    sort_order?: true
    data?: true
    _all?: true
  }

  export type Homepage_sectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homepage_sections to aggregate.
     */
    where?: homepage_sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homepage_sections to fetch.
     */
    orderBy?: homepage_sectionsOrderByWithRelationInput | homepage_sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: homepage_sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homepage_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homepage_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned homepage_sections
    **/
    _count?: true | Homepage_sectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Homepage_sectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Homepage_sectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Homepage_sectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Homepage_sectionsMaxAggregateInputType
  }

  export type GetHomepage_sectionsAggregateType<T extends Homepage_sectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHomepage_sections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomepage_sections[P]>
      : GetScalarType<T[P], AggregateHomepage_sections[P]>
  }




  export type homepage_sectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homepage_sectionsWhereInput
    orderBy?: homepage_sectionsOrderByWithAggregationInput | homepage_sectionsOrderByWithAggregationInput[]
    by: Homepage_sectionsScalarFieldEnum[] | Homepage_sectionsScalarFieldEnum
    having?: homepage_sectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Homepage_sectionsCountAggregateInputType | true
    _avg?: Homepage_sectionsAvgAggregateInputType
    _sum?: Homepage_sectionsSumAggregateInputType
    _min?: Homepage_sectionsMinAggregateInputType
    _max?: Homepage_sectionsMaxAggregateInputType
  }

  export type Homepage_sectionsGroupByOutputType = {
    id: number
    section_key: string
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    is_visible: number
    sort_order: number | null
    data: JsonValue | null
    _count: Homepage_sectionsCountAggregateOutputType | null
    _avg: Homepage_sectionsAvgAggregateOutputType | null
    _sum: Homepage_sectionsSumAggregateOutputType | null
    _min: Homepage_sectionsMinAggregateOutputType | null
    _max: Homepage_sectionsMaxAggregateOutputType | null
  }

  type GetHomepage_sectionsGroupByPayload<T extends homepage_sectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Homepage_sectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Homepage_sectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Homepage_sectionsGroupByOutputType[P]>
            : GetScalarType<T[P], Homepage_sectionsGroupByOutputType[P]>
        }
      >
    >


  export type homepage_sectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section_key?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    is_visible?: boolean
    sort_order?: boolean
    data?: boolean
  }, ExtArgs["result"]["homepage_sections"]>

  export type homepage_sectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section_key?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    is_visible?: boolean
    sort_order?: boolean
    data?: boolean
  }, ExtArgs["result"]["homepage_sections"]>

  export type homepage_sectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section_key?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    is_visible?: boolean
    sort_order?: boolean
    data?: boolean
  }, ExtArgs["result"]["homepage_sections"]>

  export type homepage_sectionsSelectScalar = {
    id?: boolean
    section_key?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    is_visible?: boolean
    sort_order?: boolean
    data?: boolean
  }

  export type homepage_sectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "section_key" | "title_en" | "title_th" | "subtitle_en" | "subtitle_th" | "description_en" | "description_th" | "is_visible" | "sort_order" | "data", ExtArgs["result"]["homepage_sections"]>

  export type $homepage_sectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "homepage_sections"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      section_key: string
      title_en: string | null
      title_th: string | null
      subtitle_en: string | null
      subtitle_th: string | null
      description_en: string | null
      description_th: string | null
      is_visible: number
      sort_order: number | null
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["homepage_sections"]>
    composites: {}
  }

  type homepage_sectionsGetPayload<S extends boolean | null | undefined | homepage_sectionsDefaultArgs> = $Result.GetResult<Prisma.$homepage_sectionsPayload, S>

  type homepage_sectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<homepage_sectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Homepage_sectionsCountAggregateInputType | true
    }

  export interface homepage_sectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['homepage_sections'], meta: { name: 'homepage_sections' } }
    /**
     * Find zero or one Homepage_sections that matches the filter.
     * @param {homepage_sectionsFindUniqueArgs} args - Arguments to find a Homepage_sections
     * @example
     * // Get one Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends homepage_sectionsFindUniqueArgs>(args: SelectSubset<T, homepage_sectionsFindUniqueArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homepage_sections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {homepage_sectionsFindUniqueOrThrowArgs} args - Arguments to find a Homepage_sections
     * @example
     * // Get one Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends homepage_sectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, homepage_sectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homepage_sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsFindFirstArgs} args - Arguments to find a Homepage_sections
     * @example
     * // Get one Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends homepage_sectionsFindFirstArgs>(args?: SelectSubset<T, homepage_sectionsFindFirstArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homepage_sections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsFindFirstOrThrowArgs} args - Arguments to find a Homepage_sections
     * @example
     * // Get one Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends homepage_sectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, homepage_sectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homepage_sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findMany()
     * 
     * // Get first 10 Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homepage_sectionsWithIdOnly = await prisma.homepage_sections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends homepage_sectionsFindManyArgs>(args?: SelectSubset<T, homepage_sectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homepage_sections.
     * @param {homepage_sectionsCreateArgs} args - Arguments to create a Homepage_sections.
     * @example
     * // Create one Homepage_sections
     * const Homepage_sections = await prisma.homepage_sections.create({
     *   data: {
     *     // ... data to create a Homepage_sections
     *   }
     * })
     * 
     */
    create<T extends homepage_sectionsCreateArgs>(args: SelectSubset<T, homepage_sectionsCreateArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homepage_sections.
     * @param {homepage_sectionsCreateManyArgs} args - Arguments to create many Homepage_sections.
     * @example
     * // Create many Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends homepage_sectionsCreateManyArgs>(args?: SelectSubset<T, homepage_sectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homepage_sections and returns the data saved in the database.
     * @param {homepage_sectionsCreateManyAndReturnArgs} args - Arguments to create many Homepage_sections.
     * @example
     * // Create many Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homepage_sections and only return the `id`
     * const homepage_sectionsWithIdOnly = await prisma.homepage_sections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends homepage_sectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, homepage_sectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Homepage_sections.
     * @param {homepage_sectionsDeleteArgs} args - Arguments to delete one Homepage_sections.
     * @example
     * // Delete one Homepage_sections
     * const Homepage_sections = await prisma.homepage_sections.delete({
     *   where: {
     *     // ... filter to delete one Homepage_sections
     *   }
     * })
     * 
     */
    delete<T extends homepage_sectionsDeleteArgs>(args: SelectSubset<T, homepage_sectionsDeleteArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homepage_sections.
     * @param {homepage_sectionsUpdateArgs} args - Arguments to update one Homepage_sections.
     * @example
     * // Update one Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends homepage_sectionsUpdateArgs>(args: SelectSubset<T, homepage_sectionsUpdateArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homepage_sections.
     * @param {homepage_sectionsDeleteManyArgs} args - Arguments to filter Homepage_sections to delete.
     * @example
     * // Delete a few Homepage_sections
     * const { count } = await prisma.homepage_sections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends homepage_sectionsDeleteManyArgs>(args?: SelectSubset<T, homepage_sectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homepage_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends homepage_sectionsUpdateManyArgs>(args: SelectSubset<T, homepage_sectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homepage_sections and returns the data updated in the database.
     * @param {homepage_sectionsUpdateManyAndReturnArgs} args - Arguments to update many Homepage_sections.
     * @example
     * // Update many Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homepage_sections and only return the `id`
     * const homepage_sectionsWithIdOnly = await prisma.homepage_sections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends homepage_sectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, homepage_sectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Homepage_sections.
     * @param {homepage_sectionsUpsertArgs} args - Arguments to update or create a Homepage_sections.
     * @example
     * // Update or create a Homepage_sections
     * const homepage_sections = await prisma.homepage_sections.upsert({
     *   create: {
     *     // ... data to create a Homepage_sections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homepage_sections we want to update
     *   }
     * })
     */
    upsert<T extends homepage_sectionsUpsertArgs>(args: SelectSubset<T, homepage_sectionsUpsertArgs<ExtArgs>>): Prisma__homepage_sectionsClient<$Result.GetResult<Prisma.$homepage_sectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homepage_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsCountArgs} args - Arguments to filter Homepage_sections to count.
     * @example
     * // Count the number of Homepage_sections
     * const count = await prisma.homepage_sections.count({
     *   where: {
     *     // ... the filter for the Homepage_sections we want to count
     *   }
     * })
    **/
    count<T extends homepage_sectionsCountArgs>(
      args?: Subset<T, homepage_sectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Homepage_sectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homepage_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Homepage_sectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Homepage_sectionsAggregateArgs>(args: Subset<T, Homepage_sectionsAggregateArgs>): Prisma.PrismaPromise<GetHomepage_sectionsAggregateType<T>>

    /**
     * Group by Homepage_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homepage_sectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends homepage_sectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homepage_sectionsGroupByArgs['orderBy'] }
        : { orderBy?: homepage_sectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, homepage_sectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomepage_sectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the homepage_sections model
   */
  readonly fields: homepage_sectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for homepage_sections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homepage_sectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the homepage_sections model
   */
  interface homepage_sectionsFieldRefs {
    readonly id: FieldRef<"homepage_sections", 'Int'>
    readonly section_key: FieldRef<"homepage_sections", 'String'>
    readonly title_en: FieldRef<"homepage_sections", 'String'>
    readonly title_th: FieldRef<"homepage_sections", 'String'>
    readonly subtitle_en: FieldRef<"homepage_sections", 'String'>
    readonly subtitle_th: FieldRef<"homepage_sections", 'String'>
    readonly description_en: FieldRef<"homepage_sections", 'String'>
    readonly description_th: FieldRef<"homepage_sections", 'String'>
    readonly is_visible: FieldRef<"homepage_sections", 'Int'>
    readonly sort_order: FieldRef<"homepage_sections", 'Int'>
    readonly data: FieldRef<"homepage_sections", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * homepage_sections findUnique
   */
  export type homepage_sectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter, which homepage_sections to fetch.
     */
    where: homepage_sectionsWhereUniqueInput
  }

  /**
   * homepage_sections findUniqueOrThrow
   */
  export type homepage_sectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter, which homepage_sections to fetch.
     */
    where: homepage_sectionsWhereUniqueInput
  }

  /**
   * homepage_sections findFirst
   */
  export type homepage_sectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter, which homepage_sections to fetch.
     */
    where?: homepage_sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homepage_sections to fetch.
     */
    orderBy?: homepage_sectionsOrderByWithRelationInput | homepage_sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homepage_sections.
     */
    cursor?: homepage_sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homepage_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homepage_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homepage_sections.
     */
    distinct?: Homepage_sectionsScalarFieldEnum | Homepage_sectionsScalarFieldEnum[]
  }

  /**
   * homepage_sections findFirstOrThrow
   */
  export type homepage_sectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter, which homepage_sections to fetch.
     */
    where?: homepage_sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homepage_sections to fetch.
     */
    orderBy?: homepage_sectionsOrderByWithRelationInput | homepage_sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homepage_sections.
     */
    cursor?: homepage_sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homepage_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homepage_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homepage_sections.
     */
    distinct?: Homepage_sectionsScalarFieldEnum | Homepage_sectionsScalarFieldEnum[]
  }

  /**
   * homepage_sections findMany
   */
  export type homepage_sectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter, which homepage_sections to fetch.
     */
    where?: homepage_sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homepage_sections to fetch.
     */
    orderBy?: homepage_sectionsOrderByWithRelationInput | homepage_sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing homepage_sections.
     */
    cursor?: homepage_sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homepage_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homepage_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homepage_sections.
     */
    distinct?: Homepage_sectionsScalarFieldEnum | Homepage_sectionsScalarFieldEnum[]
  }

  /**
   * homepage_sections create
   */
  export type homepage_sectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * The data needed to create a homepage_sections.
     */
    data: XOR<homepage_sectionsCreateInput, homepage_sectionsUncheckedCreateInput>
  }

  /**
   * homepage_sections createMany
   */
  export type homepage_sectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homepage_sections.
     */
    data: homepage_sectionsCreateManyInput | homepage_sectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * homepage_sections createManyAndReturn
   */
  export type homepage_sectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * The data used to create many homepage_sections.
     */
    data: homepage_sectionsCreateManyInput | homepage_sectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * homepage_sections update
   */
  export type homepage_sectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * The data needed to update a homepage_sections.
     */
    data: XOR<homepage_sectionsUpdateInput, homepage_sectionsUncheckedUpdateInput>
    /**
     * Choose, which homepage_sections to update.
     */
    where: homepage_sectionsWhereUniqueInput
  }

  /**
   * homepage_sections updateMany
   */
  export type homepage_sectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homepage_sections.
     */
    data: XOR<homepage_sectionsUpdateManyMutationInput, homepage_sectionsUncheckedUpdateManyInput>
    /**
     * Filter which homepage_sections to update
     */
    where?: homepage_sectionsWhereInput
    /**
     * Limit how many homepage_sections to update.
     */
    limit?: number
  }

  /**
   * homepage_sections updateManyAndReturn
   */
  export type homepage_sectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * The data used to update homepage_sections.
     */
    data: XOR<homepage_sectionsUpdateManyMutationInput, homepage_sectionsUncheckedUpdateManyInput>
    /**
     * Filter which homepage_sections to update
     */
    where?: homepage_sectionsWhereInput
    /**
     * Limit how many homepage_sections to update.
     */
    limit?: number
  }

  /**
   * homepage_sections upsert
   */
  export type homepage_sectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * The filter to search for the homepage_sections to update in case it exists.
     */
    where: homepage_sectionsWhereUniqueInput
    /**
     * In case the homepage_sections found by the `where` argument doesn't exist, create a new homepage_sections with this data.
     */
    create: XOR<homepage_sectionsCreateInput, homepage_sectionsUncheckedCreateInput>
    /**
     * In case the homepage_sections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homepage_sectionsUpdateInput, homepage_sectionsUncheckedUpdateInput>
  }

  /**
   * homepage_sections delete
   */
  export type homepage_sectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
    /**
     * Filter which homepage_sections to delete.
     */
    where: homepage_sectionsWhereUniqueInput
  }

  /**
   * homepage_sections deleteMany
   */
  export type homepage_sectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homepage_sections to delete
     */
    where?: homepage_sectionsWhereInput
    /**
     * Limit how many homepage_sections to delete.
     */
    limit?: number
  }

  /**
   * homepage_sections without action
   */
  export type homepage_sectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homepage_sections
     */
    select?: homepage_sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homepage_sections
     */
    omit?: homepage_sectionsOmit<ExtArgs> | null
  }


  /**
   * Model solutions
   */

  export type AggregateSolutions = {
    _count: SolutionsCountAggregateOutputType | null
    _avg: SolutionsAvgAggregateOutputType | null
    _sum: SolutionsSumAggregateOutputType | null
    _min: SolutionsMinAggregateOutputType | null
    _max: SolutionsMaxAggregateOutputType | null
  }

  export type SolutionsAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type SolutionsSumAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type SolutionsMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    category: string | null
    icon: string | null
    image_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type SolutionsMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    category: string | null
    icon: string | null
    image_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type SolutionsCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_th: number
    description_en: number
    description_th: number
    content_en: number
    content_th: number
    category: number
    icon: number
    image_url: number
    is_published: number
    is_featured: number
    sort_order: number
    created_at: number
    _all: number
  }


  export type SolutionsAvgAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type SolutionsSumAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type SolutionsMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    category?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type SolutionsMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    category?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type SolutionsCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    category?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
    _all?: true
  }

  export type SolutionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solutions to aggregate.
     */
    where?: solutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solutions to fetch.
     */
    orderBy?: solutionsOrderByWithRelationInput | solutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: solutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned solutions
    **/
    _count?: true | SolutionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolutionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolutionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionsMaxAggregateInputType
  }

  export type GetSolutionsAggregateType<T extends SolutionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSolutions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolutions[P]>
      : GetScalarType<T[P], AggregateSolutions[P]>
  }




  export type solutionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: solutionsWhereInput
    orderBy?: solutionsOrderByWithAggregationInput | solutionsOrderByWithAggregationInput[]
    by: SolutionsScalarFieldEnum[] | SolutionsScalarFieldEnum
    having?: solutionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionsCountAggregateInputType | true
    _avg?: SolutionsAvgAggregateInputType
    _sum?: SolutionsSumAggregateInputType
    _min?: SolutionsMinAggregateInputType
    _max?: SolutionsMaxAggregateInputType
  }

  export type SolutionsGroupByOutputType = {
    id: number
    slug: string
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    category: string | null
    icon: string | null
    image_url: string | null
    is_published: number
    is_featured: number
    sort_order: number | null
    created_at: Date
    _count: SolutionsCountAggregateOutputType | null
    _avg: SolutionsAvgAggregateOutputType | null
    _sum: SolutionsSumAggregateOutputType | null
    _min: SolutionsMinAggregateOutputType | null
    _max: SolutionsMaxAggregateOutputType | null
  }

  type GetSolutionsGroupByPayload<T extends solutionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionsGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionsGroupByOutputType[P]>
        }
      >
    >


  export type solutionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    category?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["solutions"]>

  export type solutionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    category?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["solutions"]>

  export type solutionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    category?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["solutions"]>

  export type solutionsSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    category?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }

  export type solutionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_th" | "description_en" | "description_th" | "content_en" | "content_th" | "category" | "icon" | "image_url" | "is_published" | "is_featured" | "sort_order" | "created_at", ExtArgs["result"]["solutions"]>

  export type $solutionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "solutions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string | null
      title_th: string | null
      description_en: string | null
      description_th: string | null
      content_en: string | null
      content_th: string | null
      category: string | null
      icon: string | null
      image_url: string | null
      is_published: number
      is_featured: number
      sort_order: number | null
      created_at: Date
    }, ExtArgs["result"]["solutions"]>
    composites: {}
  }

  type solutionsGetPayload<S extends boolean | null | undefined | solutionsDefaultArgs> = $Result.GetResult<Prisma.$solutionsPayload, S>

  type solutionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<solutionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionsCountAggregateInputType | true
    }

  export interface solutionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['solutions'], meta: { name: 'solutions' } }
    /**
     * Find zero or one Solutions that matches the filter.
     * @param {solutionsFindUniqueArgs} args - Arguments to find a Solutions
     * @example
     * // Get one Solutions
     * const solutions = await prisma.solutions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends solutionsFindUniqueArgs>(args: SelectSubset<T, solutionsFindUniqueArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solutions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {solutionsFindUniqueOrThrowArgs} args - Arguments to find a Solutions
     * @example
     * // Get one Solutions
     * const solutions = await prisma.solutions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends solutionsFindUniqueOrThrowArgs>(args: SelectSubset<T, solutionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsFindFirstArgs} args - Arguments to find a Solutions
     * @example
     * // Get one Solutions
     * const solutions = await prisma.solutions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends solutionsFindFirstArgs>(args?: SelectSubset<T, solutionsFindFirstArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solutions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsFindFirstOrThrowArgs} args - Arguments to find a Solutions
     * @example
     * // Get one Solutions
     * const solutions = await prisma.solutions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends solutionsFindFirstOrThrowArgs>(args?: SelectSubset<T, solutionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solutions
     * const solutions = await prisma.solutions.findMany()
     * 
     * // Get first 10 Solutions
     * const solutions = await prisma.solutions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solutionsWithIdOnly = await prisma.solutions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends solutionsFindManyArgs>(args?: SelectSubset<T, solutionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solutions.
     * @param {solutionsCreateArgs} args - Arguments to create a Solutions.
     * @example
     * // Create one Solutions
     * const Solutions = await prisma.solutions.create({
     *   data: {
     *     // ... data to create a Solutions
     *   }
     * })
     * 
     */
    create<T extends solutionsCreateArgs>(args: SelectSubset<T, solutionsCreateArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solutions.
     * @param {solutionsCreateManyArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solutions = await prisma.solutions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends solutionsCreateManyArgs>(args?: SelectSubset<T, solutionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solutions and returns the data saved in the database.
     * @param {solutionsCreateManyAndReturnArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solutions = await prisma.solutions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solutions and only return the `id`
     * const solutionsWithIdOnly = await prisma.solutions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends solutionsCreateManyAndReturnArgs>(args?: SelectSubset<T, solutionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solutions.
     * @param {solutionsDeleteArgs} args - Arguments to delete one Solutions.
     * @example
     * // Delete one Solutions
     * const Solutions = await prisma.solutions.delete({
     *   where: {
     *     // ... filter to delete one Solutions
     *   }
     * })
     * 
     */
    delete<T extends solutionsDeleteArgs>(args: SelectSubset<T, solutionsDeleteArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solutions.
     * @param {solutionsUpdateArgs} args - Arguments to update one Solutions.
     * @example
     * // Update one Solutions
     * const solutions = await prisma.solutions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends solutionsUpdateArgs>(args: SelectSubset<T, solutionsUpdateArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solutions.
     * @param {solutionsDeleteManyArgs} args - Arguments to filter Solutions to delete.
     * @example
     * // Delete a few Solutions
     * const { count } = await prisma.solutions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends solutionsDeleteManyArgs>(args?: SelectSubset<T, solutionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solutions
     * const solutions = await prisma.solutions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends solutionsUpdateManyArgs>(args: SelectSubset<T, solutionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions and returns the data updated in the database.
     * @param {solutionsUpdateManyAndReturnArgs} args - Arguments to update many Solutions.
     * @example
     * // Update many Solutions
     * const solutions = await prisma.solutions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solutions and only return the `id`
     * const solutionsWithIdOnly = await prisma.solutions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends solutionsUpdateManyAndReturnArgs>(args: SelectSubset<T, solutionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solutions.
     * @param {solutionsUpsertArgs} args - Arguments to update or create a Solutions.
     * @example
     * // Update or create a Solutions
     * const solutions = await prisma.solutions.upsert({
     *   create: {
     *     // ... data to create a Solutions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solutions we want to update
     *   }
     * })
     */
    upsert<T extends solutionsUpsertArgs>(args: SelectSubset<T, solutionsUpsertArgs<ExtArgs>>): Prisma__solutionsClient<$Result.GetResult<Prisma.$solutionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsCountArgs} args - Arguments to filter Solutions to count.
     * @example
     * // Count the number of Solutions
     * const count = await prisma.solutions.count({
     *   where: {
     *     // ... the filter for the Solutions we want to count
     *   }
     * })
    **/
    count<T extends solutionsCountArgs>(
      args?: Subset<T, solutionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolutionsAggregateArgs>(args: Subset<T, SolutionsAggregateArgs>): Prisma.PrismaPromise<GetSolutionsAggregateType<T>>

    /**
     * Group by Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {solutionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends solutionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: solutionsGroupByArgs['orderBy'] }
        : { orderBy?: solutionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, solutionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the solutions model
   */
  readonly fields: solutionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for solutions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__solutionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the solutions model
   */
  interface solutionsFieldRefs {
    readonly id: FieldRef<"solutions", 'Int'>
    readonly slug: FieldRef<"solutions", 'String'>
    readonly title_en: FieldRef<"solutions", 'String'>
    readonly title_th: FieldRef<"solutions", 'String'>
    readonly description_en: FieldRef<"solutions", 'String'>
    readonly description_th: FieldRef<"solutions", 'String'>
    readonly content_en: FieldRef<"solutions", 'String'>
    readonly content_th: FieldRef<"solutions", 'String'>
    readonly category: FieldRef<"solutions", 'String'>
    readonly icon: FieldRef<"solutions", 'String'>
    readonly image_url: FieldRef<"solutions", 'String'>
    readonly is_published: FieldRef<"solutions", 'Int'>
    readonly is_featured: FieldRef<"solutions", 'Int'>
    readonly sort_order: FieldRef<"solutions", 'Int'>
    readonly created_at: FieldRef<"solutions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * solutions findUnique
   */
  export type solutionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter, which solutions to fetch.
     */
    where: solutionsWhereUniqueInput
  }

  /**
   * solutions findUniqueOrThrow
   */
  export type solutionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter, which solutions to fetch.
     */
    where: solutionsWhereUniqueInput
  }

  /**
   * solutions findFirst
   */
  export type solutionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter, which solutions to fetch.
     */
    where?: solutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solutions to fetch.
     */
    orderBy?: solutionsOrderByWithRelationInput | solutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solutions.
     */
    cursor?: solutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solutions.
     */
    distinct?: SolutionsScalarFieldEnum | SolutionsScalarFieldEnum[]
  }

  /**
   * solutions findFirstOrThrow
   */
  export type solutionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter, which solutions to fetch.
     */
    where?: solutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solutions to fetch.
     */
    orderBy?: solutionsOrderByWithRelationInput | solutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for solutions.
     */
    cursor?: solutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solutions.
     */
    distinct?: SolutionsScalarFieldEnum | SolutionsScalarFieldEnum[]
  }

  /**
   * solutions findMany
   */
  export type solutionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter, which solutions to fetch.
     */
    where?: solutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of solutions to fetch.
     */
    orderBy?: solutionsOrderByWithRelationInput | solutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing solutions.
     */
    cursor?: solutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of solutions.
     */
    distinct?: SolutionsScalarFieldEnum | SolutionsScalarFieldEnum[]
  }

  /**
   * solutions create
   */
  export type solutionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * The data needed to create a solutions.
     */
    data: XOR<solutionsCreateInput, solutionsUncheckedCreateInput>
  }

  /**
   * solutions createMany
   */
  export type solutionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many solutions.
     */
    data: solutionsCreateManyInput | solutionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solutions createManyAndReturn
   */
  export type solutionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * The data used to create many solutions.
     */
    data: solutionsCreateManyInput | solutionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * solutions update
   */
  export type solutionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * The data needed to update a solutions.
     */
    data: XOR<solutionsUpdateInput, solutionsUncheckedUpdateInput>
    /**
     * Choose, which solutions to update.
     */
    where: solutionsWhereUniqueInput
  }

  /**
   * solutions updateMany
   */
  export type solutionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update solutions.
     */
    data: XOR<solutionsUpdateManyMutationInput, solutionsUncheckedUpdateManyInput>
    /**
     * Filter which solutions to update
     */
    where?: solutionsWhereInput
    /**
     * Limit how many solutions to update.
     */
    limit?: number
  }

  /**
   * solutions updateManyAndReturn
   */
  export type solutionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * The data used to update solutions.
     */
    data: XOR<solutionsUpdateManyMutationInput, solutionsUncheckedUpdateManyInput>
    /**
     * Filter which solutions to update
     */
    where?: solutionsWhereInput
    /**
     * Limit how many solutions to update.
     */
    limit?: number
  }

  /**
   * solutions upsert
   */
  export type solutionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * The filter to search for the solutions to update in case it exists.
     */
    where: solutionsWhereUniqueInput
    /**
     * In case the solutions found by the `where` argument doesn't exist, create a new solutions with this data.
     */
    create: XOR<solutionsCreateInput, solutionsUncheckedCreateInput>
    /**
     * In case the solutions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<solutionsUpdateInput, solutionsUncheckedUpdateInput>
  }

  /**
   * solutions delete
   */
  export type solutionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
    /**
     * Filter which solutions to delete.
     */
    where: solutionsWhereUniqueInput
  }

  /**
   * solutions deleteMany
   */
  export type solutionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which solutions to delete
     */
    where?: solutionsWhereInput
    /**
     * Limit how many solutions to delete.
     */
    limit?: number
  }

  /**
   * solutions without action
   */
  export type solutionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the solutions
     */
    select?: solutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the solutions
     */
    omit?: solutionsOmit<ExtArgs> | null
  }


  /**
   * Model portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    client_name_en: string | null
    client_name_th: string | null
    industry: string | null
    challenge_en: string | null
    challenge_th: string | null
    solution_en: string | null
    solution_th: string | null
    result_en: string | null
    result_th: string | null
    cover_image: string | null
    completion_date: Date | null
    website_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    client_name_en: string | null
    client_name_th: string | null
    industry: string | null
    challenge_en: string | null
    challenge_th: string | null
    solution_en: string | null
    solution_th: string | null
    result_en: string | null
    result_th: string | null
    cover_image: string | null
    completion_date: Date | null
    website_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_th: number
    description_en: number
    description_th: number
    content_en: number
    content_th: number
    client_name_en: number
    client_name_th: number
    industry: number
    challenge_en: number
    challenge_th: number
    solution_en: number
    solution_th: number
    result_en: number
    result_th: number
    cover_image: number
    completion_date: number
    website_url: number
    gallery: number
    tags: number
    tech_stack: number
    is_published: number
    is_featured: number
    sort_order: number
    created_at: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    client_name_en?: true
    client_name_th?: true
    industry?: true
    challenge_en?: true
    challenge_th?: true
    solution_en?: true
    solution_th?: true
    result_en?: true
    result_th?: true
    cover_image?: true
    completion_date?: true
    website_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    client_name_en?: true
    client_name_th?: true
    industry?: true
    challenge_en?: true
    challenge_th?: true
    solution_en?: true
    solution_th?: true
    result_en?: true
    result_th?: true
    cover_image?: true
    completion_date?: true
    website_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    client_name_en?: true
    client_name_th?: true
    industry?: true
    challenge_en?: true
    challenge_th?: true
    solution_en?: true
    solution_th?: true
    result_en?: true
    result_th?: true
    cover_image?: true
    completion_date?: true
    website_url?: true
    gallery?: true
    tags?: true
    tech_stack?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which portfolio to aggregate.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type portfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: portfolioWhereInput
    orderBy?: portfolioOrderByWithAggregationInput | portfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: portfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: number
    slug: string
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    client_name_en: string | null
    client_name_th: string | null
    industry: string | null
    challenge_en: string | null
    challenge_th: string | null
    solution_en: string | null
    solution_th: string | null
    result_en: string | null
    result_th: string | null
    cover_image: string | null
    completion_date: Date | null
    website_url: string | null
    gallery: JsonValue | null
    tags: JsonValue | null
    tech_stack: JsonValue | null
    is_published: number
    is_featured: number
    sort_order: number | null
    created_at: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends portfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type portfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    client_name_en?: boolean
    client_name_th?: boolean
    industry?: boolean
    challenge_en?: boolean
    challenge_th?: boolean
    solution_en?: boolean
    solution_th?: boolean
    result_en?: boolean
    result_th?: boolean
    cover_image?: boolean
    completion_date?: boolean
    website_url?: boolean
    gallery?: boolean
    tags?: boolean
    tech_stack?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type portfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    client_name_en?: boolean
    client_name_th?: boolean
    industry?: boolean
    challenge_en?: boolean
    challenge_th?: boolean
    solution_en?: boolean
    solution_th?: boolean
    result_en?: boolean
    result_th?: boolean
    cover_image?: boolean
    completion_date?: boolean
    website_url?: boolean
    gallery?: boolean
    tags?: boolean
    tech_stack?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type portfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    client_name_en?: boolean
    client_name_th?: boolean
    industry?: boolean
    challenge_en?: boolean
    challenge_th?: boolean
    solution_en?: boolean
    solution_th?: boolean
    result_en?: boolean
    result_th?: boolean
    cover_image?: boolean
    completion_date?: boolean
    website_url?: boolean
    gallery?: boolean
    tags?: boolean
    tech_stack?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type portfolioSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    client_name_en?: boolean
    client_name_th?: boolean
    industry?: boolean
    challenge_en?: boolean
    challenge_th?: boolean
    solution_en?: boolean
    solution_th?: boolean
    result_en?: boolean
    result_th?: boolean
    cover_image?: boolean
    completion_date?: boolean
    website_url?: boolean
    gallery?: boolean
    tags?: boolean
    tech_stack?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }

  export type portfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_th" | "description_en" | "description_th" | "content_en" | "content_th" | "client_name_en" | "client_name_th" | "industry" | "challenge_en" | "challenge_th" | "solution_en" | "solution_th" | "result_en" | "result_th" | "cover_image" | "completion_date" | "website_url" | "gallery" | "tags" | "tech_stack" | "is_published" | "is_featured" | "sort_order" | "created_at", ExtArgs["result"]["portfolio"]>

  export type $portfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "portfolio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string | null
      title_th: string | null
      description_en: string | null
      description_th: string | null
      content_en: string | null
      content_th: string | null
      client_name_en: string | null
      client_name_th: string | null
      industry: string | null
      challenge_en: string | null
      challenge_th: string | null
      solution_en: string | null
      solution_th: string | null
      result_en: string | null
      result_th: string | null
      cover_image: string | null
      completion_date: Date | null
      website_url: string | null
      gallery: Prisma.JsonValue | null
      tags: Prisma.JsonValue | null
      tech_stack: Prisma.JsonValue | null
      is_published: number
      is_featured: number
      sort_order: number | null
      created_at: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type portfolioGetPayload<S extends boolean | null | undefined | portfolioDefaultArgs> = $Result.GetResult<Prisma.$portfolioPayload, S>

  type portfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<portfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface portfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['portfolio'], meta: { name: 'portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {portfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends portfolioFindUniqueArgs>(args: SelectSubset<T, portfolioFindUniqueArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {portfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends portfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, portfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends portfolioFindFirstArgs>(args?: SelectSubset<T, portfolioFindFirstArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends portfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, portfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends portfolioFindManyArgs>(args?: SelectSubset<T, portfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {portfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends portfolioCreateArgs>(args: SelectSubset<T, portfolioCreateArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {portfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends portfolioCreateManyArgs>(args?: SelectSubset<T, portfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {portfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends portfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, portfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {portfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends portfolioDeleteArgs>(args: SelectSubset<T, portfolioDeleteArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {portfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends portfolioUpdateArgs>(args: SelectSubset<T, portfolioUpdateArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {portfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends portfolioDeleteManyArgs>(args?: SelectSubset<T, portfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends portfolioUpdateManyArgs>(args: SelectSubset<T, portfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {portfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends portfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, portfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {portfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends portfolioUpsertArgs>(args: SelectSubset<T, portfolioUpsertArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends portfolioCountArgs>(
      args?: Subset<T, portfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends portfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: portfolioGroupByArgs['orderBy'] }
        : { orderBy?: portfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, portfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the portfolio model
   */
  readonly fields: portfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__portfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the portfolio model
   */
  interface portfolioFieldRefs {
    readonly id: FieldRef<"portfolio", 'Int'>
    readonly slug: FieldRef<"portfolio", 'String'>
    readonly title_en: FieldRef<"portfolio", 'String'>
    readonly title_th: FieldRef<"portfolio", 'String'>
    readonly description_en: FieldRef<"portfolio", 'String'>
    readonly description_th: FieldRef<"portfolio", 'String'>
    readonly content_en: FieldRef<"portfolio", 'String'>
    readonly content_th: FieldRef<"portfolio", 'String'>
    readonly client_name_en: FieldRef<"portfolio", 'String'>
    readonly client_name_th: FieldRef<"portfolio", 'String'>
    readonly industry: FieldRef<"portfolio", 'String'>
    readonly challenge_en: FieldRef<"portfolio", 'String'>
    readonly challenge_th: FieldRef<"portfolio", 'String'>
    readonly solution_en: FieldRef<"portfolio", 'String'>
    readonly solution_th: FieldRef<"portfolio", 'String'>
    readonly result_en: FieldRef<"portfolio", 'String'>
    readonly result_th: FieldRef<"portfolio", 'String'>
    readonly cover_image: FieldRef<"portfolio", 'String'>
    readonly completion_date: FieldRef<"portfolio", 'DateTime'>
    readonly website_url: FieldRef<"portfolio", 'String'>
    readonly gallery: FieldRef<"portfolio", 'Json'>
    readonly tags: FieldRef<"portfolio", 'Json'>
    readonly tech_stack: FieldRef<"portfolio", 'Json'>
    readonly is_published: FieldRef<"portfolio", 'Int'>
    readonly is_featured: FieldRef<"portfolio", 'Int'>
    readonly sort_order: FieldRef<"portfolio", 'Int'>
    readonly created_at: FieldRef<"portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * portfolio findUnique
   */
  export type portfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio findUniqueOrThrow
   */
  export type portfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio findFirst
   */
  export type portfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio findFirstOrThrow
   */
  export type portfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio findMany
   */
  export type portfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter, which portfolios to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio create
   */
  export type portfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * The data needed to create a portfolio.
     */
    data: XOR<portfolioCreateInput, portfolioUncheckedCreateInput>
  }

  /**
   * portfolio createMany
   */
  export type portfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many portfolios.
     */
    data: portfolioCreateManyInput | portfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * portfolio createManyAndReturn
   */
  export type portfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * The data used to create many portfolios.
     */
    data: portfolioCreateManyInput | portfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * portfolio update
   */
  export type portfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * The data needed to update a portfolio.
     */
    data: XOR<portfolioUpdateInput, portfolioUncheckedUpdateInput>
    /**
     * Choose, which portfolio to update.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio updateMany
   */
  export type portfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update portfolios.
     */
    data: XOR<portfolioUpdateManyMutationInput, portfolioUncheckedUpdateManyInput>
    /**
     * Filter which portfolios to update
     */
    where?: portfolioWhereInput
    /**
     * Limit how many portfolios to update.
     */
    limit?: number
  }

  /**
   * portfolio updateManyAndReturn
   */
  export type portfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * The data used to update portfolios.
     */
    data: XOR<portfolioUpdateManyMutationInput, portfolioUncheckedUpdateManyInput>
    /**
     * Filter which portfolios to update
     */
    where?: portfolioWhereInput
    /**
     * Limit how many portfolios to update.
     */
    limit?: number
  }

  /**
   * portfolio upsert
   */
  export type portfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * The filter to search for the portfolio to update in case it exists.
     */
    where: portfolioWhereUniqueInput
    /**
     * In case the portfolio found by the `where` argument doesn't exist, create a new portfolio with this data.
     */
    create: XOR<portfolioCreateInput, portfolioUncheckedCreateInput>
    /**
     * In case the portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<portfolioUpdateInput, portfolioUncheckedUpdateInput>
  }

  /**
   * portfolio delete
   */
  export type portfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Filter which portfolio to delete.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio deleteMany
   */
  export type portfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which portfolios to delete
     */
    where?: portfolioWhereInput
    /**
     * Limit how many portfolios to delete.
     */
    limit?: number
  }

  /**
   * portfolio without action
   */
  export type portfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
  }


  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo_url: string | null
    category: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo_url: string | null
    category: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    name: number
    logo_url: number
    category: number
    is_published: number
    is_featured: number
    sort_order: number
    created_at: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    name?: true
    logo_url?: true
    category?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    name?: true
    logo_url?: true
    category?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    name?: true
    logo_url?: true
    category?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    name: string | null
    logo_url: string | null
    category: string | null
    is_published: number
    is_featured: number
    sort_order: number | null
    created_at: Date
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo_url?: boolean
    category?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo_url?: boolean
    category?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo_url?: boolean
    category?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectScalar = {
    id?: boolean
    name?: boolean
    logo_url?: boolean
    category?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo_url" | "category" | "is_published" | "is_featured" | "sort_order" | "created_at", ExtArgs["result"]["clients"]>

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      logo_url: string | null
      category: string | null
      is_published: number
      is_featured: number
      sort_order: number | null
      created_at: Date
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientsCreateManyAndReturnArgs>(args?: SelectSubset<T, clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clientsUpdateManyAndReturnArgs>(args: SelectSubset<T, clientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clients model
   */
  interface clientsFieldRefs {
    readonly id: FieldRef<"clients", 'Int'>
    readonly name: FieldRef<"clients", 'String'>
    readonly logo_url: FieldRef<"clients", 'String'>
    readonly category: FieldRef<"clients", 'String'>
    readonly is_published: FieldRef<"clients", 'Int'>
    readonly is_featured: FieldRef<"clients", 'Int'>
    readonly sort_order: FieldRef<"clients", 'Int'>
    readonly created_at: FieldRef<"clients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data?: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients createManyAndReturn
   */
  export type clientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients updateManyAndReturn
   */
  export type clientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
  }


  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    icon: string | null
    image_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    icon: string | null
    image_url: string | null
    is_published: number | null
    is_featured: number | null
    sort_order: number | null
    created_at: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_th: number
    description_en: number
    description_th: number
    content_en: number
    content_th: number
    icon: number
    image_url: number
    is_published: number
    is_featured: number
    sort_order: number
    created_at: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    description_en?: true
    description_th?: true
    content_en?: true
    content_th?: true
    icon?: true
    image_url?: true
    is_published?: true
    is_featured?: true
    sort_order?: true
    created_at?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    slug: string
    title_en: string | null
    title_th: string | null
    description_en: string | null
    description_th: string | null
    content_en: string | null
    content_th: string | null
    icon: string | null
    image_url: string | null
    is_published: number
    is_featured: number
    sort_order: number | null
    created_at: Date
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    description_en?: boolean
    description_th?: boolean
    content_en?: boolean
    content_th?: boolean
    icon?: boolean
    image_url?: boolean
    is_published?: boolean
    is_featured?: boolean
    sort_order?: boolean
    created_at?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_th" | "description_en" | "description_th" | "content_en" | "content_th" | "icon" | "image_url" | "is_published" | "is_featured" | "sort_order" | "created_at", ExtArgs["result"]["services"]>

  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string | null
      title_th: string | null
      description_en: string | null
      description_th: string | null
      content_en: string | null
      content_th: string | null
      icon: string | null
      image_url: string | null
      is_published: number
      is_featured: number
      sort_order: number | null
      created_at: Date
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly id: FieldRef<"services", 'Int'>
    readonly slug: FieldRef<"services", 'String'>
    readonly title_en: FieldRef<"services", 'String'>
    readonly title_th: FieldRef<"services", 'String'>
    readonly description_en: FieldRef<"services", 'String'>
    readonly description_th: FieldRef<"services", 'String'>
    readonly content_en: FieldRef<"services", 'String'>
    readonly content_th: FieldRef<"services", 'String'>
    readonly icon: FieldRef<"services", 'String'>
    readonly image_url: FieldRef<"services", 'String'>
    readonly is_published: FieldRef<"services", 'Int'>
    readonly is_featured: FieldRef<"services", 'Int'>
    readonly sort_order: FieldRef<"services", 'Int'>
    readonly created_at: FieldRef<"services", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export type servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export type servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
  }


  /**
   * Model press
   */

  export type AggregatePress = {
    _count: PressCountAggregateOutputType | null
    _avg: PressAvgAggregateOutputType | null
    _sum: PressSumAggregateOutputType | null
    _min: PressMinAggregateOutputType | null
    _max: PressMaxAggregateOutputType | null
  }

  export type PressAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
  }

  export type PressSumAggregateOutputType = {
    id: number | null
    is_published: number | null
  }

  export type PressMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    category: string | null
    image_url: string | null
    author: string | null
    excerpt_en: string | null
    excerpt_th: string | null
    content_en: string | null
    content_th: string | null
    is_published: number | null
    published_at: Date | null
    created_at: Date | null
  }

  export type PressMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    category: string | null
    image_url: string | null
    author: string | null
    excerpt_en: string | null
    excerpt_th: string | null
    content_en: string | null
    content_th: string | null
    is_published: number | null
    published_at: Date | null
    created_at: Date | null
  }

  export type PressCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_th: number
    category: number
    image_url: number
    author: number
    excerpt_en: number
    excerpt_th: number
    content_en: number
    content_th: number
    is_published: number
    published_at: number
    created_at: number
    _all: number
  }


  export type PressAvgAggregateInputType = {
    id?: true
    is_published?: true
  }

  export type PressSumAggregateInputType = {
    id?: true
    is_published?: true
  }

  export type PressMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    category?: true
    image_url?: true
    author?: true
    excerpt_en?: true
    excerpt_th?: true
    content_en?: true
    content_th?: true
    is_published?: true
    published_at?: true
    created_at?: true
  }

  export type PressMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    category?: true
    image_url?: true
    author?: true
    excerpt_en?: true
    excerpt_th?: true
    content_en?: true
    content_th?: true
    is_published?: true
    published_at?: true
    created_at?: true
  }

  export type PressCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    category?: true
    image_url?: true
    author?: true
    excerpt_en?: true
    excerpt_th?: true
    content_en?: true
    content_th?: true
    is_published?: true
    published_at?: true
    created_at?: true
    _all?: true
  }

  export type PressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which press to aggregate.
     */
    where?: pressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presses to fetch.
     */
    orderBy?: pressOrderByWithRelationInput | pressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned presses
    **/
    _count?: true | PressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PressMaxAggregateInputType
  }

  export type GetPressAggregateType<T extends PressAggregateArgs> = {
        [P in keyof T & keyof AggregatePress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePress[P]>
      : GetScalarType<T[P], AggregatePress[P]>
  }




  export type pressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pressWhereInput
    orderBy?: pressOrderByWithAggregationInput | pressOrderByWithAggregationInput[]
    by: PressScalarFieldEnum[] | PressScalarFieldEnum
    having?: pressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PressCountAggregateInputType | true
    _avg?: PressAvgAggregateInputType
    _sum?: PressSumAggregateInputType
    _min?: PressMinAggregateInputType
    _max?: PressMaxAggregateInputType
  }

  export type PressGroupByOutputType = {
    id: number
    slug: string
    title_en: string | null
    title_th: string | null
    category: string | null
    image_url: string | null
    author: string | null
    excerpt_en: string | null
    excerpt_th: string | null
    content_en: string | null
    content_th: string | null
    is_published: number
    published_at: Date
    created_at: Date
    _count: PressCountAggregateOutputType | null
    _avg: PressAvgAggregateOutputType | null
    _sum: PressSumAggregateOutputType | null
    _min: PressMinAggregateOutputType | null
    _max: PressMaxAggregateOutputType | null
  }

  type GetPressGroupByPayload<T extends pressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PressGroupByOutputType[P]>
            : GetScalarType<T[P], PressGroupByOutputType[P]>
        }
      >
    >


  export type pressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    category?: boolean
    image_url?: boolean
    author?: boolean
    excerpt_en?: boolean
    excerpt_th?: boolean
    content_en?: boolean
    content_th?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["press"]>

  export type pressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    category?: boolean
    image_url?: boolean
    author?: boolean
    excerpt_en?: boolean
    excerpt_th?: boolean
    content_en?: boolean
    content_th?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["press"]>

  export type pressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    category?: boolean
    image_url?: boolean
    author?: boolean
    excerpt_en?: boolean
    excerpt_th?: boolean
    content_en?: boolean
    content_th?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["press"]>

  export type pressSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    category?: boolean
    image_url?: boolean
    author?: boolean
    excerpt_en?: boolean
    excerpt_th?: boolean
    content_en?: boolean
    content_th?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }

  export type pressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_th" | "category" | "image_url" | "author" | "excerpt_en" | "excerpt_th" | "content_en" | "content_th" | "is_published" | "published_at" | "created_at", ExtArgs["result"]["press"]>

  export type $pressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "press"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string | null
      title_th: string | null
      category: string | null
      image_url: string | null
      author: string | null
      excerpt_en: string | null
      excerpt_th: string | null
      content_en: string | null
      content_th: string | null
      is_published: number
      published_at: Date
      created_at: Date
    }, ExtArgs["result"]["press"]>
    composites: {}
  }

  type pressGetPayload<S extends boolean | null | undefined | pressDefaultArgs> = $Result.GetResult<Prisma.$pressPayload, S>

  type pressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PressCountAggregateInputType | true
    }

  export interface pressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['press'], meta: { name: 'press' } }
    /**
     * Find zero or one Press that matches the filter.
     * @param {pressFindUniqueArgs} args - Arguments to find a Press
     * @example
     * // Get one Press
     * const press = await prisma.press.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pressFindUniqueArgs>(args: SelectSubset<T, pressFindUniqueArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Press that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pressFindUniqueOrThrowArgs} args - Arguments to find a Press
     * @example
     * // Get one Press
     * const press = await prisma.press.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pressFindUniqueOrThrowArgs>(args: SelectSubset<T, pressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Press that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressFindFirstArgs} args - Arguments to find a Press
     * @example
     * // Get one Press
     * const press = await prisma.press.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pressFindFirstArgs>(args?: SelectSubset<T, pressFindFirstArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Press that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressFindFirstOrThrowArgs} args - Arguments to find a Press
     * @example
     * // Get one Press
     * const press = await prisma.press.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pressFindFirstOrThrowArgs>(args?: SelectSubset<T, pressFindFirstOrThrowArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presses
     * const presses = await prisma.press.findMany()
     * 
     * // Get first 10 Presses
     * const presses = await prisma.press.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pressWithIdOnly = await prisma.press.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pressFindManyArgs>(args?: SelectSubset<T, pressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Press.
     * @param {pressCreateArgs} args - Arguments to create a Press.
     * @example
     * // Create one Press
     * const Press = await prisma.press.create({
     *   data: {
     *     // ... data to create a Press
     *   }
     * })
     * 
     */
    create<T extends pressCreateArgs>(args: SelectSubset<T, pressCreateArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presses.
     * @param {pressCreateManyArgs} args - Arguments to create many Presses.
     * @example
     * // Create many Presses
     * const press = await prisma.press.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pressCreateManyArgs>(args?: SelectSubset<T, pressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presses and returns the data saved in the database.
     * @param {pressCreateManyAndReturnArgs} args - Arguments to create many Presses.
     * @example
     * // Create many Presses
     * const press = await prisma.press.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presses and only return the `id`
     * const pressWithIdOnly = await prisma.press.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pressCreateManyAndReturnArgs>(args?: SelectSubset<T, pressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Press.
     * @param {pressDeleteArgs} args - Arguments to delete one Press.
     * @example
     * // Delete one Press
     * const Press = await prisma.press.delete({
     *   where: {
     *     // ... filter to delete one Press
     *   }
     * })
     * 
     */
    delete<T extends pressDeleteArgs>(args: SelectSubset<T, pressDeleteArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Press.
     * @param {pressUpdateArgs} args - Arguments to update one Press.
     * @example
     * // Update one Press
     * const press = await prisma.press.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pressUpdateArgs>(args: SelectSubset<T, pressUpdateArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presses.
     * @param {pressDeleteManyArgs} args - Arguments to filter Presses to delete.
     * @example
     * // Delete a few Presses
     * const { count } = await prisma.press.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pressDeleteManyArgs>(args?: SelectSubset<T, pressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presses
     * const press = await prisma.press.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pressUpdateManyArgs>(args: SelectSubset<T, pressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presses and returns the data updated in the database.
     * @param {pressUpdateManyAndReturnArgs} args - Arguments to update many Presses.
     * @example
     * // Update many Presses
     * const press = await prisma.press.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presses and only return the `id`
     * const pressWithIdOnly = await prisma.press.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pressUpdateManyAndReturnArgs>(args: SelectSubset<T, pressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Press.
     * @param {pressUpsertArgs} args - Arguments to update or create a Press.
     * @example
     * // Update or create a Press
     * const press = await prisma.press.upsert({
     *   create: {
     *     // ... data to create a Press
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Press we want to update
     *   }
     * })
     */
    upsert<T extends pressUpsertArgs>(args: SelectSubset<T, pressUpsertArgs<ExtArgs>>): Prisma__pressClient<$Result.GetResult<Prisma.$pressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressCountArgs} args - Arguments to filter Presses to count.
     * @example
     * // Count the number of Presses
     * const count = await prisma.press.count({
     *   where: {
     *     // ... the filter for the Presses we want to count
     *   }
     * })
    **/
    count<T extends pressCountArgs>(
      args?: Subset<T, pressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Press.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PressAggregateArgs>(args: Subset<T, PressAggregateArgs>): Prisma.PrismaPromise<GetPressAggregateType<T>>

    /**
     * Group by Press.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pressGroupByArgs['orderBy'] }
        : { orderBy?: pressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the press model
   */
  readonly fields: pressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for press.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the press model
   */
  interface pressFieldRefs {
    readonly id: FieldRef<"press", 'Int'>
    readonly slug: FieldRef<"press", 'String'>
    readonly title_en: FieldRef<"press", 'String'>
    readonly title_th: FieldRef<"press", 'String'>
    readonly category: FieldRef<"press", 'String'>
    readonly image_url: FieldRef<"press", 'String'>
    readonly author: FieldRef<"press", 'String'>
    readonly excerpt_en: FieldRef<"press", 'String'>
    readonly excerpt_th: FieldRef<"press", 'String'>
    readonly content_en: FieldRef<"press", 'String'>
    readonly content_th: FieldRef<"press", 'String'>
    readonly is_published: FieldRef<"press", 'Int'>
    readonly published_at: FieldRef<"press", 'DateTime'>
    readonly created_at: FieldRef<"press", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * press findUnique
   */
  export type pressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter, which press to fetch.
     */
    where: pressWhereUniqueInput
  }

  /**
   * press findUniqueOrThrow
   */
  export type pressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter, which press to fetch.
     */
    where: pressWhereUniqueInput
  }

  /**
   * press findFirst
   */
  export type pressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter, which press to fetch.
     */
    where?: pressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presses to fetch.
     */
    orderBy?: pressOrderByWithRelationInput | pressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presses.
     */
    cursor?: pressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presses.
     */
    distinct?: PressScalarFieldEnum | PressScalarFieldEnum[]
  }

  /**
   * press findFirstOrThrow
   */
  export type pressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter, which press to fetch.
     */
    where?: pressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presses to fetch.
     */
    orderBy?: pressOrderByWithRelationInput | pressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presses.
     */
    cursor?: pressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presses.
     */
    distinct?: PressScalarFieldEnum | PressScalarFieldEnum[]
  }

  /**
   * press findMany
   */
  export type pressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter, which presses to fetch.
     */
    where?: pressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presses to fetch.
     */
    orderBy?: pressOrderByWithRelationInput | pressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing presses.
     */
    cursor?: pressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presses.
     */
    distinct?: PressScalarFieldEnum | PressScalarFieldEnum[]
  }

  /**
   * press create
   */
  export type pressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * The data needed to create a press.
     */
    data: XOR<pressCreateInput, pressUncheckedCreateInput>
  }

  /**
   * press createMany
   */
  export type pressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many presses.
     */
    data: pressCreateManyInput | pressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * press createManyAndReturn
   */
  export type pressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * The data used to create many presses.
     */
    data: pressCreateManyInput | pressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * press update
   */
  export type pressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * The data needed to update a press.
     */
    data: XOR<pressUpdateInput, pressUncheckedUpdateInput>
    /**
     * Choose, which press to update.
     */
    where: pressWhereUniqueInput
  }

  /**
   * press updateMany
   */
  export type pressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update presses.
     */
    data: XOR<pressUpdateManyMutationInput, pressUncheckedUpdateManyInput>
    /**
     * Filter which presses to update
     */
    where?: pressWhereInput
    /**
     * Limit how many presses to update.
     */
    limit?: number
  }

  /**
   * press updateManyAndReturn
   */
  export type pressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * The data used to update presses.
     */
    data: XOR<pressUpdateManyMutationInput, pressUncheckedUpdateManyInput>
    /**
     * Filter which presses to update
     */
    where?: pressWhereInput
    /**
     * Limit how many presses to update.
     */
    limit?: number
  }

  /**
   * press upsert
   */
  export type pressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * The filter to search for the press to update in case it exists.
     */
    where: pressWhereUniqueInput
    /**
     * In case the press found by the `where` argument doesn't exist, create a new press with this data.
     */
    create: XOR<pressCreateInput, pressUncheckedCreateInput>
    /**
     * In case the press was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pressUpdateInput, pressUncheckedUpdateInput>
  }

  /**
   * press delete
   */
  export type pressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
    /**
     * Filter which press to delete.
     */
    where: pressWhereUniqueInput
  }

  /**
   * press deleteMany
   */
  export type pressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which presses to delete
     */
    where?: pressWhereInput
    /**
     * Limit how many presses to delete.
     */
    limit?: number
  }

  /**
   * press without action
   */
  export type pressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the press
     */
    select?: pressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the press
     */
    omit?: pressOmit<ExtArgs> | null
  }


  /**
   * Model careers
   */

  export type AggregateCareers = {
    _count: CareersCountAggregateOutputType | null
    _avg: CareersAvgAggregateOutputType | null
    _sum: CareersSumAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  export type CareersAvgAggregateOutputType = {
    id: number | null
  }

  export type CareersSumAggregateOutputType = {
    id: number | null
  }

  export type CareersMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    department: string | null
    location: string | null
    employment_type: string | null
    description_en: string | null
    description_th: string | null
    requirements_en: string | null
    requirements_th: string | null
    responsibilities_en: string | null
    responsibilities_th: string | null
    status: string | null
    created_at: Date | null
  }

  export type CareersMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_th: string | null
    department: string | null
    location: string | null
    employment_type: string | null
    description_en: string | null
    description_th: string | null
    requirements_en: string | null
    requirements_th: string | null
    responsibilities_en: string | null
    responsibilities_th: string | null
    status: string | null
    created_at: Date | null
  }

  export type CareersCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_th: number
    department: number
    location: number
    employment_type: number
    description_en: number
    description_th: number
    requirements_en: number
    requirements_th: number
    responsibilities_en: number
    responsibilities_th: number
    status: number
    created_at: number
    _all: number
  }


  export type CareersAvgAggregateInputType = {
    id?: true
  }

  export type CareersSumAggregateInputType = {
    id?: true
  }

  export type CareersMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    department?: true
    location?: true
    employment_type?: true
    description_en?: true
    description_th?: true
    requirements_en?: true
    requirements_th?: true
    responsibilities_en?: true
    responsibilities_th?: true
    status?: true
    created_at?: true
  }

  export type CareersMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    department?: true
    location?: true
    employment_type?: true
    description_en?: true
    description_th?: true
    requirements_en?: true
    requirements_th?: true
    responsibilities_en?: true
    responsibilities_th?: true
    status?: true
    created_at?: true
  }

  export type CareersCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_th?: true
    department?: true
    location?: true
    employment_type?: true
    description_en?: true
    description_th?: true
    requirements_en?: true
    requirements_th?: true
    responsibilities_en?: true
    responsibilities_th?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type CareersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to aggregate.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned careers
    **/
    _count?: true | CareersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareersMaxAggregateInputType
  }

  export type GetCareersAggregateType<T extends CareersAggregateArgs> = {
        [P in keyof T & keyof AggregateCareers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareers[P]>
      : GetScalarType<T[P], AggregateCareers[P]>
  }




  export type careersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: careersWhereInput
    orderBy?: careersOrderByWithAggregationInput | careersOrderByWithAggregationInput[]
    by: CareersScalarFieldEnum[] | CareersScalarFieldEnum
    having?: careersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareersCountAggregateInputType | true
    _avg?: CareersAvgAggregateInputType
    _sum?: CareersSumAggregateInputType
    _min?: CareersMinAggregateInputType
    _max?: CareersMaxAggregateInputType
  }

  export type CareersGroupByOutputType = {
    id: number
    slug: string
    title_en: string | null
    title_th: string | null
    department: string | null
    location: string | null
    employment_type: string | null
    description_en: string | null
    description_th: string | null
    requirements_en: string | null
    requirements_th: string | null
    responsibilities_en: string | null
    responsibilities_th: string | null
    status: string
    created_at: Date
    _count: CareersCountAggregateOutputType | null
    _avg: CareersAvgAggregateOutputType | null
    _sum: CareersSumAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  type GetCareersGroupByPayload<T extends careersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareersGroupByOutputType[P]>
            : GetScalarType<T[P], CareersGroupByOutputType[P]>
        }
      >
    >


  export type careersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    department?: boolean
    location?: boolean
    employment_type?: boolean
    description_en?: boolean
    description_th?: boolean
    requirements_en?: boolean
    requirements_th?: boolean
    responsibilities_en?: boolean
    responsibilities_th?: boolean
    status?: boolean
    created_at?: boolean
    applicants?: boolean | careers$applicantsArgs<ExtArgs>
    _count?: boolean | CareersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careers"]>

  export type careersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    department?: boolean
    location?: boolean
    employment_type?: boolean
    description_en?: boolean
    description_th?: boolean
    requirements_en?: boolean
    requirements_th?: boolean
    responsibilities_en?: boolean
    responsibilities_th?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["careers"]>

  export type careersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    department?: boolean
    location?: boolean
    employment_type?: boolean
    description_en?: boolean
    description_th?: boolean
    requirements_en?: boolean
    requirements_th?: boolean
    responsibilities_en?: boolean
    responsibilities_th?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["careers"]>

  export type careersSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_th?: boolean
    department?: boolean
    location?: boolean
    employment_type?: boolean
    description_en?: boolean
    description_th?: boolean
    requirements_en?: boolean
    requirements_th?: boolean
    responsibilities_en?: boolean
    responsibilities_th?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type careersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_th" | "department" | "location" | "employment_type" | "description_en" | "description_th" | "requirements_en" | "requirements_th" | "responsibilities_en" | "responsibilities_th" | "status" | "created_at", ExtArgs["result"]["careers"]>
  export type careersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | careers$applicantsArgs<ExtArgs>
    _count?: boolean | CareersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type careersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type careersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $careersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "careers"
    objects: {
      applicants: Prisma.$applicantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string | null
      title_th: string | null
      department: string | null
      location: string | null
      employment_type: string | null
      description_en: string | null
      description_th: string | null
      requirements_en: string | null
      requirements_th: string | null
      responsibilities_en: string | null
      responsibilities_th: string | null
      status: string
      created_at: Date
    }, ExtArgs["result"]["careers"]>
    composites: {}
  }

  type careersGetPayload<S extends boolean | null | undefined | careersDefaultArgs> = $Result.GetResult<Prisma.$careersPayload, S>

  type careersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<careersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareersCountAggregateInputType | true
    }

  export interface careersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['careers'], meta: { name: 'careers' } }
    /**
     * Find zero or one Careers that matches the filter.
     * @param {careersFindUniqueArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends careersFindUniqueArgs>(args: SelectSubset<T, careersFindUniqueArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Careers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {careersFindUniqueOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends careersFindUniqueOrThrowArgs>(args: SelectSubset<T, careersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindFirstArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends careersFindFirstArgs>(args?: SelectSubset<T, careersFindFirstArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Careers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindFirstOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends careersFindFirstOrThrowArgs>(args?: SelectSubset<T, careersFindFirstOrThrowArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.careers.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.careers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careersWithIdOnly = await prisma.careers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends careersFindManyArgs>(args?: SelectSubset<T, careersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Careers.
     * @param {careersCreateArgs} args - Arguments to create a Careers.
     * @example
     * // Create one Careers
     * const Careers = await prisma.careers.create({
     *   data: {
     *     // ... data to create a Careers
     *   }
     * })
     * 
     */
    create<T extends careersCreateArgs>(args: SelectSubset<T, careersCreateArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {careersCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const careers = await prisma.careers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends careersCreateManyArgs>(args?: SelectSubset<T, careersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {careersCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const careers = await prisma.careers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careersWithIdOnly = await prisma.careers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends careersCreateManyAndReturnArgs>(args?: SelectSubset<T, careersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Careers.
     * @param {careersDeleteArgs} args - Arguments to delete one Careers.
     * @example
     * // Delete one Careers
     * const Careers = await prisma.careers.delete({
     *   where: {
     *     // ... filter to delete one Careers
     *   }
     * })
     * 
     */
    delete<T extends careersDeleteArgs>(args: SelectSubset<T, careersDeleteArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Careers.
     * @param {careersUpdateArgs} args - Arguments to update one Careers.
     * @example
     * // Update one Careers
     * const careers = await prisma.careers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends careersUpdateArgs>(args: SelectSubset<T, careersUpdateArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {careersDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.careers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends careersDeleteManyArgs>(args?: SelectSubset<T, careersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const careers = await prisma.careers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends careersUpdateManyArgs>(args: SelectSubset<T, careersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {careersUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const careers = await prisma.careers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careersWithIdOnly = await prisma.careers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends careersUpdateManyAndReturnArgs>(args: SelectSubset<T, careersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Careers.
     * @param {careersUpsertArgs} args - Arguments to update or create a Careers.
     * @example
     * // Update or create a Careers
     * const careers = await prisma.careers.upsert({
     *   create: {
     *     // ... data to create a Careers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Careers we want to update
     *   }
     * })
     */
    upsert<T extends careersUpsertArgs>(args: SelectSubset<T, careersUpsertArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.careers.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends careersCountArgs>(
      args?: Subset<T, careersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareersAggregateArgs>(args: Subset<T, CareersAggregateArgs>): Prisma.PrismaPromise<GetCareersAggregateType<T>>

    /**
     * Group by Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends careersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: careersGroupByArgs['orderBy'] }
        : { orderBy?: careersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, careersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the careers model
   */
  readonly fields: careersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for careers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__careersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicants<T extends careers$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, careers$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the careers model
   */
  interface careersFieldRefs {
    readonly id: FieldRef<"careers", 'Int'>
    readonly slug: FieldRef<"careers", 'String'>
    readonly title_en: FieldRef<"careers", 'String'>
    readonly title_th: FieldRef<"careers", 'String'>
    readonly department: FieldRef<"careers", 'String'>
    readonly location: FieldRef<"careers", 'String'>
    readonly employment_type: FieldRef<"careers", 'String'>
    readonly description_en: FieldRef<"careers", 'String'>
    readonly description_th: FieldRef<"careers", 'String'>
    readonly requirements_en: FieldRef<"careers", 'String'>
    readonly requirements_th: FieldRef<"careers", 'String'>
    readonly responsibilities_en: FieldRef<"careers", 'String'>
    readonly responsibilities_th: FieldRef<"careers", 'String'>
    readonly status: FieldRef<"careers", 'String'>
    readonly created_at: FieldRef<"careers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * careers findUnique
   */
  export type careersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers findUniqueOrThrow
   */
  export type careersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers findFirst
   */
  export type careersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers findFirstOrThrow
   */
  export type careersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers findMany
   */
  export type careersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careersOrderByWithRelationInput | careersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing careers.
     */
    cursor?: careersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareersScalarFieldEnum | CareersScalarFieldEnum[]
  }

  /**
   * careers create
   */
  export type careersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The data needed to create a careers.
     */
    data: XOR<careersCreateInput, careersUncheckedCreateInput>
  }

  /**
   * careers createMany
   */
  export type careersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many careers.
     */
    data: careersCreateManyInput | careersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * careers createManyAndReturn
   */
  export type careersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * The data used to create many careers.
     */
    data: careersCreateManyInput | careersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * careers update
   */
  export type careersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The data needed to update a careers.
     */
    data: XOR<careersUpdateInput, careersUncheckedUpdateInput>
    /**
     * Choose, which careers to update.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers updateMany
   */
  export type careersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update careers.
     */
    data: XOR<careersUpdateManyMutationInput, careersUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to update.
     */
    limit?: number
  }

  /**
   * careers updateManyAndReturn
   */
  export type careersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * The data used to update careers.
     */
    data: XOR<careersUpdateManyMutationInput, careersUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to update.
     */
    limit?: number
  }

  /**
   * careers upsert
   */
  export type careersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * The filter to search for the careers to update in case it exists.
     */
    where: careersWhereUniqueInput
    /**
     * In case the careers found by the `where` argument doesn't exist, create a new careers with this data.
     */
    create: XOR<careersCreateInput, careersUncheckedCreateInput>
    /**
     * In case the careers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<careersUpdateInput, careersUncheckedUpdateInput>
  }

  /**
   * careers delete
   */
  export type careersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    /**
     * Filter which careers to delete.
     */
    where: careersWhereUniqueInput
  }

  /**
   * careers deleteMany
   */
  export type careersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to delete
     */
    where?: careersWhereInput
    /**
     * Limit how many careers to delete.
     */
    limit?: number
  }

  /**
   * careers.applicants
   */
  export type careers$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    cursor?: applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * careers without action
   */
  export type careersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
  }


  /**
   * Model applicants
   */

  export type AggregateApplicants = {
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  export type ApplicantsAvgAggregateOutputType = {
    id: number | null
    career_id: number | null
  }

  export type ApplicantsSumAggregateOutputType = {
    id: number | null
    career_id: number | null
  }

  export type ApplicantsMinAggregateOutputType = {
    id: number | null
    career_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    cv_url: string | null
    notes: string | null
    status: string | null
    created_at: Date | null
  }

  export type ApplicantsMaxAggregateOutputType = {
    id: number | null
    career_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    cv_url: string | null
    notes: string | null
    status: string | null
    created_at: Date | null
  }

  export type ApplicantsCountAggregateOutputType = {
    id: number
    career_id: number
    name: number
    email: number
    phone: number
    cv_url: number
    notes: number
    status: number
    created_at: number
    _all: number
  }


  export type ApplicantsAvgAggregateInputType = {
    id?: true
    career_id?: true
  }

  export type ApplicantsSumAggregateInputType = {
    id?: true
    career_id?: true
  }

  export type ApplicantsMinAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    phone?: true
    cv_url?: true
    notes?: true
    status?: true
    created_at?: true
  }

  export type ApplicantsMaxAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    phone?: true
    cv_url?: true
    notes?: true
    status?: true
    created_at?: true
  }

  export type ApplicantsCountAggregateInputType = {
    id?: true
    career_id?: true
    name?: true
    email?: true
    phone?: true
    cv_url?: true
    notes?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ApplicantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to aggregate.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applicants
    **/
    _count?: true | ApplicantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantsMaxAggregateInputType
  }

  export type GetApplicantsAggregateType<T extends ApplicantsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicants[P]>
      : GetScalarType<T[P], AggregateApplicants[P]>
  }




  export type applicantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithAggregationInput | applicantsOrderByWithAggregationInput[]
    by: ApplicantsScalarFieldEnum[] | ApplicantsScalarFieldEnum
    having?: applicantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantsCountAggregateInputType | true
    _avg?: ApplicantsAvgAggregateInputType
    _sum?: ApplicantsSumAggregateInputType
    _min?: ApplicantsMinAggregateInputType
    _max?: ApplicantsMaxAggregateInputType
  }

  export type ApplicantsGroupByOutputType = {
    id: number
    career_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    cv_url: string | null
    notes: string | null
    status: string
    created_at: Date
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  type GetApplicantsGroupByPayload<T extends applicantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
        }
      >
    >


  export type applicantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cv_url?: boolean
    notes?: boolean
    status?: boolean
    created_at?: boolean
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>

  export type applicantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cv_url?: boolean
    notes?: boolean
    status?: boolean
    created_at?: boolean
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>

  export type applicantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cv_url?: boolean
    notes?: boolean
    status?: boolean
    created_at?: boolean
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>

  export type applicantsSelectScalar = {
    id?: boolean
    career_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cv_url?: boolean
    notes?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type applicantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "career_id" | "name" | "email" | "phone" | "cv_url" | "notes" | "status" | "created_at", ExtArgs["result"]["applicants"]>
  export type applicantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }
  export type applicantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }
  export type applicantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | applicants$careersArgs<ExtArgs>
  }

  export type $applicantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applicants"
    objects: {
      careers: Prisma.$careersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      career_id: number | null
      name: string | null
      email: string | null
      phone: string | null
      cv_url: string | null
      notes: string | null
      status: string
      created_at: Date
    }, ExtArgs["result"]["applicants"]>
    composites: {}
  }

  type applicantsGetPayload<S extends boolean | null | undefined | applicantsDefaultArgs> = $Result.GetResult<Prisma.$applicantsPayload, S>

  type applicantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantsCountAggregateInputType | true
    }

  export interface applicantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicants'], meta: { name: 'applicants' } }
    /**
     * Find zero or one Applicants that matches the filter.
     * @param {applicantsFindUniqueArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicantsFindUniqueArgs>(args: SelectSubset<T, applicantsFindUniqueArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicantsFindUniqueOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicantsFindUniqueOrThrowArgs>(args: SelectSubset<T, applicantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicantsFindFirstArgs>(args?: SelectSubset<T, applicantsFindFirstArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicantsFindFirstOrThrowArgs>(args?: SelectSubset<T, applicantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicants.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantsWithIdOnly = await prisma.applicants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applicantsFindManyArgs>(args?: SelectSubset<T, applicantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicants.
     * @param {applicantsCreateArgs} args - Arguments to create a Applicants.
     * @example
     * // Create one Applicants
     * const Applicants = await prisma.applicants.create({
     *   data: {
     *     // ... data to create a Applicants
     *   }
     * })
     * 
     */
    create<T extends applicantsCreateArgs>(args: SelectSubset<T, applicantsCreateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {applicantsCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicantsCreateManyArgs>(args?: SelectSubset<T, applicantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {applicantsCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applicants and only return the `id`
     * const applicantsWithIdOnly = await prisma.applicants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends applicantsCreateManyAndReturnArgs>(args?: SelectSubset<T, applicantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applicants.
     * @param {applicantsDeleteArgs} args - Arguments to delete one Applicants.
     * @example
     * // Delete one Applicants
     * const Applicants = await prisma.applicants.delete({
     *   where: {
     *     // ... filter to delete one Applicants
     *   }
     * })
     * 
     */
    delete<T extends applicantsDeleteArgs>(args: SelectSubset<T, applicantsDeleteArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicants.
     * @param {applicantsUpdateArgs} args - Arguments to update one Applicants.
     * @example
     * // Update one Applicants
     * const applicants = await prisma.applicants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicantsUpdateArgs>(args: SelectSubset<T, applicantsUpdateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {applicantsDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicantsDeleteManyArgs>(args?: SelectSubset<T, applicantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicantsUpdateManyArgs>(args: SelectSubset<T, applicantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {applicantsUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applicants and only return the `id`
     * const applicantsWithIdOnly = await prisma.applicants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends applicantsUpdateManyAndReturnArgs>(args: SelectSubset<T, applicantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applicants.
     * @param {applicantsUpsertArgs} args - Arguments to update or create a Applicants.
     * @example
     * // Update or create a Applicants
     * const applicants = await prisma.applicants.upsert({
     *   create: {
     *     // ... data to create a Applicants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicants we want to update
     *   }
     * })
     */
    upsert<T extends applicantsUpsertArgs>(args: SelectSubset<T, applicantsUpsertArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicants.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends applicantsCountArgs>(
      args?: Subset<T, applicantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantsAggregateArgs>(args: Subset<T, ApplicantsAggregateArgs>): Prisma.PrismaPromise<GetApplicantsAggregateType<T>>

    /**
     * Group by Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applicantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantsGroupByArgs['orderBy'] }
        : { orderBy?: applicantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applicantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applicants model
   */
  readonly fields: applicantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careers<T extends applicants$careersArgs<ExtArgs> = {}>(args?: Subset<T, applicants$careersArgs<ExtArgs>>): Prisma__careersClient<$Result.GetResult<Prisma.$careersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the applicants model
   */
  interface applicantsFieldRefs {
    readonly id: FieldRef<"applicants", 'Int'>
    readonly career_id: FieldRef<"applicants", 'Int'>
    readonly name: FieldRef<"applicants", 'String'>
    readonly email: FieldRef<"applicants", 'String'>
    readonly phone: FieldRef<"applicants", 'String'>
    readonly cv_url: FieldRef<"applicants", 'String'>
    readonly notes: FieldRef<"applicants", 'String'>
    readonly status: FieldRef<"applicants", 'String'>
    readonly created_at: FieldRef<"applicants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * applicants findUnique
   */
  export type applicantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findUniqueOrThrow
   */
  export type applicantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findFirst
   */
  export type applicantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findFirstOrThrow
   */
  export type applicantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findMany
   */
  export type applicantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants create
   */
  export type applicantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to create a applicants.
     */
    data?: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
  }

  /**
   * applicants createMany
   */
  export type applicantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantsCreateManyInput | applicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applicants createManyAndReturn
   */
  export type applicantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * The data used to create many applicants.
     */
    data: applicantsCreateManyInput | applicantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * applicants update
   */
  export type applicantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to update a applicants.
     */
    data: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
    /**
     * Choose, which applicants to update.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants updateMany
   */
  export type applicantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyInput>
    /**
     * Filter which applicants to update
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to update.
     */
    limit?: number
  }

  /**
   * applicants updateManyAndReturn
   */
  export type applicantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyInput>
    /**
     * Filter which applicants to update
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * applicants upsert
   */
  export type applicantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The filter to search for the applicants to update in case it exists.
     */
    where: applicantsWhereUniqueInput
    /**
     * In case the applicants found by the `where` argument doesn't exist, create a new applicants with this data.
     */
    create: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
    /**
     * In case the applicants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
  }

  /**
   * applicants delete
   */
  export type applicantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter which applicants to delete.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants deleteMany
   */
  export type applicantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to delete.
     */
    limit?: number
  }

  /**
   * applicants.careers
   */
  export type applicants$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the careers
     */
    select?: careersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the careers
     */
    omit?: careersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: careersInclude<ExtArgs> | null
    where?: careersWhereInput
  }

  /**
   * applicants without action
   */
  export type applicantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    phone: string | null
    message: string | null
    status: string | null
    notes: string | null
    created_at: Date | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    phone: string | null
    message: string | null
    status: string | null
    notes: string | null
    created_at: Date | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    phone: number
    message: number
    status: number
    notes: number
    created_at: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    message?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    message?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    message?: true
    status?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    company: string | null
    phone: string | null
    message: string | null
    status: string
    notes: string | null
    created_at: Date
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "company" | "phone" | "message" | "status" | "notes" | "created_at", ExtArgs["result"]["leads"]>

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      company: string | null
      phone: string | null
      message: string | null
      status: string
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {leadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leadsUpdateManyAndReturnArgs>(args: SelectSubset<T, leadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'Int'>
    readonly name: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly company: FieldRef<"leads", 'String'>
    readonly phone: FieldRef<"leads", 'String'>
    readonly message: FieldRef<"leads", 'String'>
    readonly status: FieldRef<"leads", 'String'>
    readonly notes: FieldRef<"leads", 'String'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data?: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads updateManyAndReturn
   */
  export type leadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    filename: string | null
    url: string | null
    alt_text: string | null
    folder: string | null
    created_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    url: string | null
    alt_text: string | null
    folder: string | null
    created_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    filename: number
    url: number
    alt_text: number
    folder: number
    created_at: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    alt_text?: true
    folder?: true
    created_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    alt_text?: true
    folder?: true
    created_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    alt_text?: true
    folder?: true
    created_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    filename: string | null
    url: string | null
    alt_text: string | null
    folder: string
    created_at: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    alt_text?: boolean
    folder?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["media"]>

  export type mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    alt_text?: boolean
    folder?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["media"]>

  export type mediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    alt_text?: boolean
    folder?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["media"]>

  export type mediaSelectScalar = {
    id?: boolean
    filename?: boolean
    url?: boolean
    alt_text?: boolean
    folder?: boolean
    created_at?: boolean
  }

  export type mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "url" | "alt_text" | "folder" | "created_at", ExtArgs["result"]["media"]>

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string | null
      url: string | null
      alt_text: string | null
      folder: string
      created_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {mediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends mediaCreateArgs>(args: SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {mediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaCreateManyArgs>(args?: SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {mediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {mediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mediaUpdateManyAndReturnArgs>(args: SelectSubset<T, mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {mediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends mediaUpsertArgs>(args: SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the media model
   */
  interface mediaFieldRefs {
    readonly id: FieldRef<"media", 'Int'>
    readonly filename: FieldRef<"media", 'String'>
    readonly url: FieldRef<"media", 'String'>
    readonly alt_text: FieldRef<"media", 'String'>
    readonly folder: FieldRef<"media", 'String'>
    readonly created_at: FieldRef<"media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media create
   */
  export type mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data needed to create a media.
     */
    data?: XOR<mediaCreateInput, mediaUncheckedCreateInput>
  }

  /**
   * media createMany
   */
  export type mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media createManyAndReturn
   */
  export type mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media updateManyAndReturn
   */
  export type mediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media upsert
   */
  export type mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The filter to search for the media to update in case it exists.
     */
    where: mediaWhereUniqueInput
    /**
     * In case the media found by the `where` argument doesn't exist, create a new media with this data.
     */
    create: XOR<mediaCreateInput, mediaUncheckedCreateInput>
    /**
     * In case the media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to delete.
     */
    limit?: number
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    key: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    key: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    key?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    key?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    key: string
    value: JsonValue | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: Prisma.JsonValue | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {settingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'Int'>
    readonly key: FieldRef<"settings", 'String'>
    readonly value: FieldRef<"settings", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings updateManyAndReturn
   */
  export type settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Model ai_knowledge
   */

  export type AggregateAi_knowledge = {
    _count: Ai_knowledgeCountAggregateOutputType | null
    _avg: Ai_knowledgeAvgAggregateOutputType | null
    _sum: Ai_knowledgeSumAggregateOutputType | null
    _min: Ai_knowledgeMinAggregateOutputType | null
    _max: Ai_knowledgeMaxAggregateOutputType | null
  }

  export type Ai_knowledgeAvgAggregateOutputType = {
    id: number | null
    is_active: number | null
  }

  export type Ai_knowledgeSumAggregateOutputType = {
    id: number | null
    is_active: number | null
  }

  export type Ai_knowledgeMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    category: string | null
    is_active: number | null
    created_at: Date | null
  }

  export type Ai_knowledgeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    category: string | null
    is_active: number | null
    created_at: Date | null
  }

  export type Ai_knowledgeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Ai_knowledgeAvgAggregateInputType = {
    id?: true
    is_active?: true
  }

  export type Ai_knowledgeSumAggregateInputType = {
    id?: true
    is_active?: true
  }

  export type Ai_knowledgeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    is_active?: true
    created_at?: true
  }

  export type Ai_knowledgeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    is_active?: true
    created_at?: true
  }

  export type Ai_knowledgeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Ai_knowledgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_knowledge to aggregate.
     */
    where?: ai_knowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_knowledges to fetch.
     */
    orderBy?: ai_knowledgeOrderByWithRelationInput | ai_knowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_knowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_knowledges
    **/
    _count?: true | Ai_knowledgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_knowledgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_knowledgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_knowledgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_knowledgeMaxAggregateInputType
  }

  export type GetAi_knowledgeAggregateType<T extends Ai_knowledgeAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_knowledge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_knowledge[P]>
      : GetScalarType<T[P], AggregateAi_knowledge[P]>
  }




  export type ai_knowledgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_knowledgeWhereInput
    orderBy?: ai_knowledgeOrderByWithAggregationInput | ai_knowledgeOrderByWithAggregationInput[]
    by: Ai_knowledgeScalarFieldEnum[] | Ai_knowledgeScalarFieldEnum
    having?: ai_knowledgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_knowledgeCountAggregateInputType | true
    _avg?: Ai_knowledgeAvgAggregateInputType
    _sum?: Ai_knowledgeSumAggregateInputType
    _min?: Ai_knowledgeMinAggregateInputType
    _max?: Ai_knowledgeMaxAggregateInputType
  }

  export type Ai_knowledgeGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    category: string | null
    is_active: number
    created_at: Date
    _count: Ai_knowledgeCountAggregateOutputType | null
    _avg: Ai_knowledgeAvgAggregateOutputType | null
    _sum: Ai_knowledgeSumAggregateOutputType | null
    _min: Ai_knowledgeMinAggregateOutputType | null
    _max: Ai_knowledgeMaxAggregateOutputType | null
  }

  type GetAi_knowledgeGroupByPayload<T extends ai_knowledgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_knowledgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_knowledgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_knowledgeGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_knowledgeGroupByOutputType[P]>
        }
      >
    >


  export type ai_knowledgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_knowledge"]>

  export type ai_knowledgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_knowledge"]>

  export type ai_knowledgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_knowledge"]>

  export type ai_knowledgeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type ai_knowledgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "is_active" | "created_at", ExtArgs["result"]["ai_knowledge"]>

  export type $ai_knowledgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_knowledge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      category: string | null
      is_active: number
      created_at: Date
    }, ExtArgs["result"]["ai_knowledge"]>
    composites: {}
  }

  type ai_knowledgeGetPayload<S extends boolean | null | undefined | ai_knowledgeDefaultArgs> = $Result.GetResult<Prisma.$ai_knowledgePayload, S>

  type ai_knowledgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_knowledgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_knowledgeCountAggregateInputType | true
    }

  export interface ai_knowledgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_knowledge'], meta: { name: 'ai_knowledge' } }
    /**
     * Find zero or one Ai_knowledge that matches the filter.
     * @param {ai_knowledgeFindUniqueArgs} args - Arguments to find a Ai_knowledge
     * @example
     * // Get one Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_knowledgeFindUniqueArgs>(args: SelectSubset<T, ai_knowledgeFindUniqueArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_knowledge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_knowledgeFindUniqueOrThrowArgs} args - Arguments to find a Ai_knowledge
     * @example
     * // Get one Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_knowledgeFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_knowledgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_knowledge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeFindFirstArgs} args - Arguments to find a Ai_knowledge
     * @example
     * // Get one Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_knowledgeFindFirstArgs>(args?: SelectSubset<T, ai_knowledgeFindFirstArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_knowledge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeFindFirstOrThrowArgs} args - Arguments to find a Ai_knowledge
     * @example
     * // Get one Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_knowledgeFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_knowledgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_knowledges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_knowledges
     * const ai_knowledges = await prisma.ai_knowledge.findMany()
     * 
     * // Get first 10 Ai_knowledges
     * const ai_knowledges = await prisma.ai_knowledge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_knowledgeWithIdOnly = await prisma.ai_knowledge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_knowledgeFindManyArgs>(args?: SelectSubset<T, ai_knowledgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_knowledge.
     * @param {ai_knowledgeCreateArgs} args - Arguments to create a Ai_knowledge.
     * @example
     * // Create one Ai_knowledge
     * const Ai_knowledge = await prisma.ai_knowledge.create({
     *   data: {
     *     // ... data to create a Ai_knowledge
     *   }
     * })
     * 
     */
    create<T extends ai_knowledgeCreateArgs>(args: SelectSubset<T, ai_knowledgeCreateArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_knowledges.
     * @param {ai_knowledgeCreateManyArgs} args - Arguments to create many Ai_knowledges.
     * @example
     * // Create many Ai_knowledges
     * const ai_knowledge = await prisma.ai_knowledge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_knowledgeCreateManyArgs>(args?: SelectSubset<T, ai_knowledgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_knowledges and returns the data saved in the database.
     * @param {ai_knowledgeCreateManyAndReturnArgs} args - Arguments to create many Ai_knowledges.
     * @example
     * // Create many Ai_knowledges
     * const ai_knowledge = await prisma.ai_knowledge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_knowledges and only return the `id`
     * const ai_knowledgeWithIdOnly = await prisma.ai_knowledge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_knowledgeCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_knowledgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_knowledge.
     * @param {ai_knowledgeDeleteArgs} args - Arguments to delete one Ai_knowledge.
     * @example
     * // Delete one Ai_knowledge
     * const Ai_knowledge = await prisma.ai_knowledge.delete({
     *   where: {
     *     // ... filter to delete one Ai_knowledge
     *   }
     * })
     * 
     */
    delete<T extends ai_knowledgeDeleteArgs>(args: SelectSubset<T, ai_knowledgeDeleteArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_knowledge.
     * @param {ai_knowledgeUpdateArgs} args - Arguments to update one Ai_knowledge.
     * @example
     * // Update one Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_knowledgeUpdateArgs>(args: SelectSubset<T, ai_knowledgeUpdateArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_knowledges.
     * @param {ai_knowledgeDeleteManyArgs} args - Arguments to filter Ai_knowledges to delete.
     * @example
     * // Delete a few Ai_knowledges
     * const { count } = await prisma.ai_knowledge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_knowledgeDeleteManyArgs>(args?: SelectSubset<T, ai_knowledgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_knowledges
     * const ai_knowledge = await prisma.ai_knowledge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_knowledgeUpdateManyArgs>(args: SelectSubset<T, ai_knowledgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_knowledges and returns the data updated in the database.
     * @param {ai_knowledgeUpdateManyAndReturnArgs} args - Arguments to update many Ai_knowledges.
     * @example
     * // Update many Ai_knowledges
     * const ai_knowledge = await prisma.ai_knowledge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_knowledges and only return the `id`
     * const ai_knowledgeWithIdOnly = await prisma.ai_knowledge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ai_knowledgeUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_knowledgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_knowledge.
     * @param {ai_knowledgeUpsertArgs} args - Arguments to update or create a Ai_knowledge.
     * @example
     * // Update or create a Ai_knowledge
     * const ai_knowledge = await prisma.ai_knowledge.upsert({
     *   create: {
     *     // ... data to create a Ai_knowledge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_knowledge we want to update
     *   }
     * })
     */
    upsert<T extends ai_knowledgeUpsertArgs>(args: SelectSubset<T, ai_knowledgeUpsertArgs<ExtArgs>>): Prisma__ai_knowledgeClient<$Result.GetResult<Prisma.$ai_knowledgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeCountArgs} args - Arguments to filter Ai_knowledges to count.
     * @example
     * // Count the number of Ai_knowledges
     * const count = await prisma.ai_knowledge.count({
     *   where: {
     *     // ... the filter for the Ai_knowledges we want to count
     *   }
     * })
    **/
    count<T extends ai_knowledgeCountArgs>(
      args?: Subset<T, ai_knowledgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_knowledgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_knowledgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_knowledgeAggregateArgs>(args: Subset<T, Ai_knowledgeAggregateArgs>): Prisma.PrismaPromise<GetAi_knowledgeAggregateType<T>>

    /**
     * Group by Ai_knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_knowledgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_knowledgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_knowledgeGroupByArgs['orderBy'] }
        : { orderBy?: ai_knowledgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_knowledgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_knowledgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_knowledge model
   */
  readonly fields: ai_knowledgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_knowledge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_knowledgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_knowledge model
   */
  interface ai_knowledgeFieldRefs {
    readonly id: FieldRef<"ai_knowledge", 'Int'>
    readonly title: FieldRef<"ai_knowledge", 'String'>
    readonly content: FieldRef<"ai_knowledge", 'String'>
    readonly category: FieldRef<"ai_knowledge", 'String'>
    readonly is_active: FieldRef<"ai_knowledge", 'Int'>
    readonly created_at: FieldRef<"ai_knowledge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_knowledge findUnique
   */
  export type ai_knowledgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter, which ai_knowledge to fetch.
     */
    where: ai_knowledgeWhereUniqueInput
  }

  /**
   * ai_knowledge findUniqueOrThrow
   */
  export type ai_knowledgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter, which ai_knowledge to fetch.
     */
    where: ai_knowledgeWhereUniqueInput
  }

  /**
   * ai_knowledge findFirst
   */
  export type ai_knowledgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter, which ai_knowledge to fetch.
     */
    where?: ai_knowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_knowledges to fetch.
     */
    orderBy?: ai_knowledgeOrderByWithRelationInput | ai_knowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_knowledges.
     */
    cursor?: ai_knowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_knowledges.
     */
    distinct?: Ai_knowledgeScalarFieldEnum | Ai_knowledgeScalarFieldEnum[]
  }

  /**
   * ai_knowledge findFirstOrThrow
   */
  export type ai_knowledgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter, which ai_knowledge to fetch.
     */
    where?: ai_knowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_knowledges to fetch.
     */
    orderBy?: ai_knowledgeOrderByWithRelationInput | ai_knowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_knowledges.
     */
    cursor?: ai_knowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_knowledges.
     */
    distinct?: Ai_knowledgeScalarFieldEnum | Ai_knowledgeScalarFieldEnum[]
  }

  /**
   * ai_knowledge findMany
   */
  export type ai_knowledgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter, which ai_knowledges to fetch.
     */
    where?: ai_knowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_knowledges to fetch.
     */
    orderBy?: ai_knowledgeOrderByWithRelationInput | ai_knowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_knowledges.
     */
    cursor?: ai_knowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_knowledges.
     */
    distinct?: Ai_knowledgeScalarFieldEnum | Ai_knowledgeScalarFieldEnum[]
  }

  /**
   * ai_knowledge create
   */
  export type ai_knowledgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * The data needed to create a ai_knowledge.
     */
    data?: XOR<ai_knowledgeCreateInput, ai_knowledgeUncheckedCreateInput>
  }

  /**
   * ai_knowledge createMany
   */
  export type ai_knowledgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_knowledges.
     */
    data: ai_knowledgeCreateManyInput | ai_knowledgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_knowledge createManyAndReturn
   */
  export type ai_knowledgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * The data used to create many ai_knowledges.
     */
    data: ai_knowledgeCreateManyInput | ai_knowledgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_knowledge update
   */
  export type ai_knowledgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * The data needed to update a ai_knowledge.
     */
    data: XOR<ai_knowledgeUpdateInput, ai_knowledgeUncheckedUpdateInput>
    /**
     * Choose, which ai_knowledge to update.
     */
    where: ai_knowledgeWhereUniqueInput
  }

  /**
   * ai_knowledge updateMany
   */
  export type ai_knowledgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_knowledges.
     */
    data: XOR<ai_knowledgeUpdateManyMutationInput, ai_knowledgeUncheckedUpdateManyInput>
    /**
     * Filter which ai_knowledges to update
     */
    where?: ai_knowledgeWhereInput
    /**
     * Limit how many ai_knowledges to update.
     */
    limit?: number
  }

  /**
   * ai_knowledge updateManyAndReturn
   */
  export type ai_knowledgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * The data used to update ai_knowledges.
     */
    data: XOR<ai_knowledgeUpdateManyMutationInput, ai_knowledgeUncheckedUpdateManyInput>
    /**
     * Filter which ai_knowledges to update
     */
    where?: ai_knowledgeWhereInput
    /**
     * Limit how many ai_knowledges to update.
     */
    limit?: number
  }

  /**
   * ai_knowledge upsert
   */
  export type ai_knowledgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * The filter to search for the ai_knowledge to update in case it exists.
     */
    where: ai_knowledgeWhereUniqueInput
    /**
     * In case the ai_knowledge found by the `where` argument doesn't exist, create a new ai_knowledge with this data.
     */
    create: XOR<ai_knowledgeCreateInput, ai_knowledgeUncheckedCreateInput>
    /**
     * In case the ai_knowledge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_knowledgeUpdateInput, ai_knowledgeUncheckedUpdateInput>
  }

  /**
   * ai_knowledge delete
   */
  export type ai_knowledgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
    /**
     * Filter which ai_knowledge to delete.
     */
    where: ai_knowledgeWhereUniqueInput
  }

  /**
   * ai_knowledge deleteMany
   */
  export type ai_knowledgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_knowledges to delete
     */
    where?: ai_knowledgeWhereInput
    /**
     * Limit how many ai_knowledges to delete.
     */
    limit?: number
  }

  /**
   * ai_knowledge without action
   */
  export type ai_knowledgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_knowledge
     */
    select?: ai_knowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_knowledge
     */
    omit?: ai_knowledgeOmit<ExtArgs> | null
  }


  /**
   * Model ai_logs
   */

  export type AggregateAi_logs = {
    _count: Ai_logsCountAggregateOutputType | null
    _avg: Ai_logsAvgAggregateOutputType | null
    _sum: Ai_logsSumAggregateOutputType | null
    _min: Ai_logsMinAggregateOutputType | null
    _max: Ai_logsMaxAggregateOutputType | null
  }

  export type Ai_logsAvgAggregateOutputType = {
    id: number | null
    is_lead_captured: number | null
  }

  export type Ai_logsSumAggregateOutputType = {
    id: number | null
    is_lead_captured: number | null
  }

  export type Ai_logsMinAggregateOutputType = {
    id: number | null
    session_id: string | null
    user_message: string | null
    ai_response: string | null
    sentiment: string | null
    is_lead_captured: number | null
    created_at: Date | null
  }

  export type Ai_logsMaxAggregateOutputType = {
    id: number | null
    session_id: string | null
    user_message: string | null
    ai_response: string | null
    sentiment: string | null
    is_lead_captured: number | null
    created_at: Date | null
  }

  export type Ai_logsCountAggregateOutputType = {
    id: number
    session_id: number
    user_message: number
    ai_response: number
    sentiment: number
    is_lead_captured: number
    created_at: number
    _all: number
  }


  export type Ai_logsAvgAggregateInputType = {
    id?: true
    is_lead_captured?: true
  }

  export type Ai_logsSumAggregateInputType = {
    id?: true
    is_lead_captured?: true
  }

  export type Ai_logsMinAggregateInputType = {
    id?: true
    session_id?: true
    user_message?: true
    ai_response?: true
    sentiment?: true
    is_lead_captured?: true
    created_at?: true
  }

  export type Ai_logsMaxAggregateInputType = {
    id?: true
    session_id?: true
    user_message?: true
    ai_response?: true
    sentiment?: true
    is_lead_captured?: true
    created_at?: true
  }

  export type Ai_logsCountAggregateInputType = {
    id?: true
    session_id?: true
    user_message?: true
    ai_response?: true
    sentiment?: true
    is_lead_captured?: true
    created_at?: true
    _all?: true
  }

  export type Ai_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_logs to aggregate.
     */
    where?: ai_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_logs to fetch.
     */
    orderBy?: ai_logsOrderByWithRelationInput | ai_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_logs
    **/
    _count?: true | Ai_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_logsMaxAggregateInputType
  }

  export type GetAi_logsAggregateType<T extends Ai_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_logs[P]>
      : GetScalarType<T[P], AggregateAi_logs[P]>
  }




  export type ai_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_logsWhereInput
    orderBy?: ai_logsOrderByWithAggregationInput | ai_logsOrderByWithAggregationInput[]
    by: Ai_logsScalarFieldEnum[] | Ai_logsScalarFieldEnum
    having?: ai_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_logsCountAggregateInputType | true
    _avg?: Ai_logsAvgAggregateInputType
    _sum?: Ai_logsSumAggregateInputType
    _min?: Ai_logsMinAggregateInputType
    _max?: Ai_logsMaxAggregateInputType
  }

  export type Ai_logsGroupByOutputType = {
    id: number
    session_id: string | null
    user_message: string | null
    ai_response: string | null
    sentiment: string | null
    is_lead_captured: number
    created_at: Date
    _count: Ai_logsCountAggregateOutputType | null
    _avg: Ai_logsAvgAggregateOutputType | null
    _sum: Ai_logsSumAggregateOutputType | null
    _min: Ai_logsMinAggregateOutputType | null
    _max: Ai_logsMaxAggregateOutputType | null
  }

  type GetAi_logsGroupByPayload<T extends ai_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_logsGroupByOutputType[P]>
        }
      >
    >


  export type ai_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_message?: boolean
    ai_response?: boolean
    sentiment?: boolean
    is_lead_captured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_logs"]>

  export type ai_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_message?: boolean
    ai_response?: boolean
    sentiment?: boolean
    is_lead_captured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_logs"]>

  export type ai_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_message?: boolean
    ai_response?: boolean
    sentiment?: boolean
    is_lead_captured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_logs"]>

  export type ai_logsSelectScalar = {
    id?: boolean
    session_id?: boolean
    user_message?: boolean
    ai_response?: boolean
    sentiment?: boolean
    is_lead_captured?: boolean
    created_at?: boolean
  }

  export type ai_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "user_message" | "ai_response" | "sentiment" | "is_lead_captured" | "created_at", ExtArgs["result"]["ai_logs"]>

  export type $ai_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: string | null
      user_message: string | null
      ai_response: string | null
      sentiment: string | null
      is_lead_captured: number
      created_at: Date
    }, ExtArgs["result"]["ai_logs"]>
    composites: {}
  }

  type ai_logsGetPayload<S extends boolean | null | undefined | ai_logsDefaultArgs> = $Result.GetResult<Prisma.$ai_logsPayload, S>

  type ai_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_logsCountAggregateInputType | true
    }

  export interface ai_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_logs'], meta: { name: 'ai_logs' } }
    /**
     * Find zero or one Ai_logs that matches the filter.
     * @param {ai_logsFindUniqueArgs} args - Arguments to find a Ai_logs
     * @example
     * // Get one Ai_logs
     * const ai_logs = await prisma.ai_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_logsFindUniqueArgs>(args: SelectSubset<T, ai_logsFindUniqueArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_logsFindUniqueOrThrowArgs} args - Arguments to find a Ai_logs
     * @example
     * // Get one Ai_logs
     * const ai_logs = await prisma.ai_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsFindFirstArgs} args - Arguments to find a Ai_logs
     * @example
     * // Get one Ai_logs
     * const ai_logs = await prisma.ai_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_logsFindFirstArgs>(args?: SelectSubset<T, ai_logsFindFirstArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsFindFirstOrThrowArgs} args - Arguments to find a Ai_logs
     * @example
     * // Get one Ai_logs
     * const ai_logs = await prisma.ai_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_logs
     * const ai_logs = await prisma.ai_logs.findMany()
     * 
     * // Get first 10 Ai_logs
     * const ai_logs = await prisma.ai_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_logsWithIdOnly = await prisma.ai_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_logsFindManyArgs>(args?: SelectSubset<T, ai_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_logs.
     * @param {ai_logsCreateArgs} args - Arguments to create a Ai_logs.
     * @example
     * // Create one Ai_logs
     * const Ai_logs = await prisma.ai_logs.create({
     *   data: {
     *     // ... data to create a Ai_logs
     *   }
     * })
     * 
     */
    create<T extends ai_logsCreateArgs>(args: SelectSubset<T, ai_logsCreateArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_logs.
     * @param {ai_logsCreateManyArgs} args - Arguments to create many Ai_logs.
     * @example
     * // Create many Ai_logs
     * const ai_logs = await prisma.ai_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_logsCreateManyArgs>(args?: SelectSubset<T, ai_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_logs and returns the data saved in the database.
     * @param {ai_logsCreateManyAndReturnArgs} args - Arguments to create many Ai_logs.
     * @example
     * // Create many Ai_logs
     * const ai_logs = await prisma.ai_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_logs and only return the `id`
     * const ai_logsWithIdOnly = await prisma.ai_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_logs.
     * @param {ai_logsDeleteArgs} args - Arguments to delete one Ai_logs.
     * @example
     * // Delete one Ai_logs
     * const Ai_logs = await prisma.ai_logs.delete({
     *   where: {
     *     // ... filter to delete one Ai_logs
     *   }
     * })
     * 
     */
    delete<T extends ai_logsDeleteArgs>(args: SelectSubset<T, ai_logsDeleteArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_logs.
     * @param {ai_logsUpdateArgs} args - Arguments to update one Ai_logs.
     * @example
     * // Update one Ai_logs
     * const ai_logs = await prisma.ai_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_logsUpdateArgs>(args: SelectSubset<T, ai_logsUpdateArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_logs.
     * @param {ai_logsDeleteManyArgs} args - Arguments to filter Ai_logs to delete.
     * @example
     * // Delete a few Ai_logs
     * const { count } = await prisma.ai_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_logsDeleteManyArgs>(args?: SelectSubset<T, ai_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_logs
     * const ai_logs = await prisma.ai_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_logsUpdateManyArgs>(args: SelectSubset<T, ai_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_logs and returns the data updated in the database.
     * @param {ai_logsUpdateManyAndReturnArgs} args - Arguments to update many Ai_logs.
     * @example
     * // Update many Ai_logs
     * const ai_logs = await prisma.ai_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_logs and only return the `id`
     * const ai_logsWithIdOnly = await prisma.ai_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ai_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_logs.
     * @param {ai_logsUpsertArgs} args - Arguments to update or create a Ai_logs.
     * @example
     * // Update or create a Ai_logs
     * const ai_logs = await prisma.ai_logs.upsert({
     *   create: {
     *     // ... data to create a Ai_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_logs we want to update
     *   }
     * })
     */
    upsert<T extends ai_logsUpsertArgs>(args: SelectSubset<T, ai_logsUpsertArgs<ExtArgs>>): Prisma__ai_logsClient<$Result.GetResult<Prisma.$ai_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsCountArgs} args - Arguments to filter Ai_logs to count.
     * @example
     * // Count the number of Ai_logs
     * const count = await prisma.ai_logs.count({
     *   where: {
     *     // ... the filter for the Ai_logs we want to count
     *   }
     * })
    **/
    count<T extends ai_logsCountArgs>(
      args?: Subset<T, ai_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_logsAggregateArgs>(args: Subset<T, Ai_logsAggregateArgs>): Prisma.PrismaPromise<GetAi_logsAggregateType<T>>

    /**
     * Group by Ai_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_logsGroupByArgs['orderBy'] }
        : { orderBy?: ai_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_logs model
   */
  readonly fields: ai_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_logs model
   */
  interface ai_logsFieldRefs {
    readonly id: FieldRef<"ai_logs", 'Int'>
    readonly session_id: FieldRef<"ai_logs", 'String'>
    readonly user_message: FieldRef<"ai_logs", 'String'>
    readonly ai_response: FieldRef<"ai_logs", 'String'>
    readonly sentiment: FieldRef<"ai_logs", 'String'>
    readonly is_lead_captured: FieldRef<"ai_logs", 'Int'>
    readonly created_at: FieldRef<"ai_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_logs findUnique
   */
  export type ai_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter, which ai_logs to fetch.
     */
    where: ai_logsWhereUniqueInput
  }

  /**
   * ai_logs findUniqueOrThrow
   */
  export type ai_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter, which ai_logs to fetch.
     */
    where: ai_logsWhereUniqueInput
  }

  /**
   * ai_logs findFirst
   */
  export type ai_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter, which ai_logs to fetch.
     */
    where?: ai_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_logs to fetch.
     */
    orderBy?: ai_logsOrderByWithRelationInput | ai_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_logs.
     */
    cursor?: ai_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_logs.
     */
    distinct?: Ai_logsScalarFieldEnum | Ai_logsScalarFieldEnum[]
  }

  /**
   * ai_logs findFirstOrThrow
   */
  export type ai_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter, which ai_logs to fetch.
     */
    where?: ai_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_logs to fetch.
     */
    orderBy?: ai_logsOrderByWithRelationInput | ai_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_logs.
     */
    cursor?: ai_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_logs.
     */
    distinct?: Ai_logsScalarFieldEnum | Ai_logsScalarFieldEnum[]
  }

  /**
   * ai_logs findMany
   */
  export type ai_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter, which ai_logs to fetch.
     */
    where?: ai_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_logs to fetch.
     */
    orderBy?: ai_logsOrderByWithRelationInput | ai_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_logs.
     */
    cursor?: ai_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_logs.
     */
    distinct?: Ai_logsScalarFieldEnum | Ai_logsScalarFieldEnum[]
  }

  /**
   * ai_logs create
   */
  export type ai_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a ai_logs.
     */
    data?: XOR<ai_logsCreateInput, ai_logsUncheckedCreateInput>
  }

  /**
   * ai_logs createMany
   */
  export type ai_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_logs.
     */
    data: ai_logsCreateManyInput | ai_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_logs createManyAndReturn
   */
  export type ai_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * The data used to create many ai_logs.
     */
    data: ai_logsCreateManyInput | ai_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_logs update
   */
  export type ai_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a ai_logs.
     */
    data: XOR<ai_logsUpdateInput, ai_logsUncheckedUpdateInput>
    /**
     * Choose, which ai_logs to update.
     */
    where: ai_logsWhereUniqueInput
  }

  /**
   * ai_logs updateMany
   */
  export type ai_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_logs.
     */
    data: XOR<ai_logsUpdateManyMutationInput, ai_logsUncheckedUpdateManyInput>
    /**
     * Filter which ai_logs to update
     */
    where?: ai_logsWhereInput
    /**
     * Limit how many ai_logs to update.
     */
    limit?: number
  }

  /**
   * ai_logs updateManyAndReturn
   */
  export type ai_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * The data used to update ai_logs.
     */
    data: XOR<ai_logsUpdateManyMutationInput, ai_logsUncheckedUpdateManyInput>
    /**
     * Filter which ai_logs to update
     */
    where?: ai_logsWhereInput
    /**
     * Limit how many ai_logs to update.
     */
    limit?: number
  }

  /**
   * ai_logs upsert
   */
  export type ai_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the ai_logs to update in case it exists.
     */
    where: ai_logsWhereUniqueInput
    /**
     * In case the ai_logs found by the `where` argument doesn't exist, create a new ai_logs with this data.
     */
    create: XOR<ai_logsCreateInput, ai_logsUncheckedCreateInput>
    /**
     * In case the ai_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_logsUpdateInput, ai_logsUncheckedUpdateInput>
  }

  /**
   * ai_logs delete
   */
  export type ai_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
    /**
     * Filter which ai_logs to delete.
     */
    where: ai_logsWhereUniqueInput
  }

  /**
   * ai_logs deleteMany
   */
  export type ai_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_logs to delete
     */
    where?: ai_logsWhereInput
    /**
     * Limit how many ai_logs to delete.
     */
    limit?: number
  }

  /**
   * ai_logs without action
   */
  export type ai_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_logs
     */
    select?: ai_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_logs
     */
    omit?: ai_logsOmit<ExtArgs> | null
  }


  /**
   * Model ai_image_history
   */

  export type AggregateAi_image_history = {
    _count: Ai_image_historyCountAggregateOutputType | null
    _avg: Ai_image_historyAvgAggregateOutputType | null
    _sum: Ai_image_historySumAggregateOutputType | null
    _min: Ai_image_historyMinAggregateOutputType | null
    _max: Ai_image_historyMaxAggregateOutputType | null
  }

  export type Ai_image_historyAvgAggregateOutputType = {
    id: number | null
  }

  export type Ai_image_historySumAggregateOutputType = {
    id: number | null
  }

  export type Ai_image_historyMinAggregateOutputType = {
    id: number | null
    prompt: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Ai_image_historyMaxAggregateOutputType = {
    id: number | null
    prompt: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Ai_image_historyCountAggregateOutputType = {
    id: number
    prompt: number
    image_url: number
    created_at: number
    _all: number
  }


  export type Ai_image_historyAvgAggregateInputType = {
    id?: true
  }

  export type Ai_image_historySumAggregateInputType = {
    id?: true
  }

  export type Ai_image_historyMinAggregateInputType = {
    id?: true
    prompt?: true
    image_url?: true
    created_at?: true
  }

  export type Ai_image_historyMaxAggregateInputType = {
    id?: true
    prompt?: true
    image_url?: true
    created_at?: true
  }

  export type Ai_image_historyCountAggregateInputType = {
    id?: true
    prompt?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type Ai_image_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_image_history to aggregate.
     */
    where?: ai_image_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_image_histories to fetch.
     */
    orderBy?: ai_image_historyOrderByWithRelationInput | ai_image_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_image_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_image_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_image_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_image_histories
    **/
    _count?: true | Ai_image_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_image_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_image_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_image_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_image_historyMaxAggregateInputType
  }

  export type GetAi_image_historyAggregateType<T extends Ai_image_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_image_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_image_history[P]>
      : GetScalarType<T[P], AggregateAi_image_history[P]>
  }




  export type ai_image_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_image_historyWhereInput
    orderBy?: ai_image_historyOrderByWithAggregationInput | ai_image_historyOrderByWithAggregationInput[]
    by: Ai_image_historyScalarFieldEnum[] | Ai_image_historyScalarFieldEnum
    having?: ai_image_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_image_historyCountAggregateInputType | true
    _avg?: Ai_image_historyAvgAggregateInputType
    _sum?: Ai_image_historySumAggregateInputType
    _min?: Ai_image_historyMinAggregateInputType
    _max?: Ai_image_historyMaxAggregateInputType
  }

  export type Ai_image_historyGroupByOutputType = {
    id: number
    prompt: string | null
    image_url: string | null
    created_at: Date
    _count: Ai_image_historyCountAggregateOutputType | null
    _avg: Ai_image_historyAvgAggregateOutputType | null
    _sum: Ai_image_historySumAggregateOutputType | null
    _min: Ai_image_historyMinAggregateOutputType | null
    _max: Ai_image_historyMaxAggregateOutputType | null
  }

  type GetAi_image_historyGroupByPayload<T extends ai_image_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_image_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_image_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_image_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_image_historyGroupByOutputType[P]>
        }
      >
    >


  export type ai_image_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    image_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_image_history"]>

  export type ai_image_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    image_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_image_history"]>

  export type ai_image_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    image_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ai_image_history"]>

  export type ai_image_historySelectScalar = {
    id?: boolean
    prompt?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type ai_image_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "image_url" | "created_at", ExtArgs["result"]["ai_image_history"]>

  export type $ai_image_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_image_history"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prompt: string | null
      image_url: string | null
      created_at: Date
    }, ExtArgs["result"]["ai_image_history"]>
    composites: {}
  }

  type ai_image_historyGetPayload<S extends boolean | null | undefined | ai_image_historyDefaultArgs> = $Result.GetResult<Prisma.$ai_image_historyPayload, S>

  type ai_image_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_image_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_image_historyCountAggregateInputType | true
    }

  export interface ai_image_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_image_history'], meta: { name: 'ai_image_history' } }
    /**
     * Find zero or one Ai_image_history that matches the filter.
     * @param {ai_image_historyFindUniqueArgs} args - Arguments to find a Ai_image_history
     * @example
     * // Get one Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_image_historyFindUniqueArgs>(args: SelectSubset<T, ai_image_historyFindUniqueArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_image_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_image_historyFindUniqueOrThrowArgs} args - Arguments to find a Ai_image_history
     * @example
     * // Get one Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_image_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_image_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_image_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyFindFirstArgs} args - Arguments to find a Ai_image_history
     * @example
     * // Get one Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_image_historyFindFirstArgs>(args?: SelectSubset<T, ai_image_historyFindFirstArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_image_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyFindFirstOrThrowArgs} args - Arguments to find a Ai_image_history
     * @example
     * // Get one Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_image_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_image_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_image_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_image_histories
     * const ai_image_histories = await prisma.ai_image_history.findMany()
     * 
     * // Get first 10 Ai_image_histories
     * const ai_image_histories = await prisma.ai_image_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_image_historyWithIdOnly = await prisma.ai_image_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_image_historyFindManyArgs>(args?: SelectSubset<T, ai_image_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_image_history.
     * @param {ai_image_historyCreateArgs} args - Arguments to create a Ai_image_history.
     * @example
     * // Create one Ai_image_history
     * const Ai_image_history = await prisma.ai_image_history.create({
     *   data: {
     *     // ... data to create a Ai_image_history
     *   }
     * })
     * 
     */
    create<T extends ai_image_historyCreateArgs>(args: SelectSubset<T, ai_image_historyCreateArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_image_histories.
     * @param {ai_image_historyCreateManyArgs} args - Arguments to create many Ai_image_histories.
     * @example
     * // Create many Ai_image_histories
     * const ai_image_history = await prisma.ai_image_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_image_historyCreateManyArgs>(args?: SelectSubset<T, ai_image_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_image_histories and returns the data saved in the database.
     * @param {ai_image_historyCreateManyAndReturnArgs} args - Arguments to create many Ai_image_histories.
     * @example
     * // Create many Ai_image_histories
     * const ai_image_history = await prisma.ai_image_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_image_histories and only return the `id`
     * const ai_image_historyWithIdOnly = await prisma.ai_image_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_image_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_image_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_image_history.
     * @param {ai_image_historyDeleteArgs} args - Arguments to delete one Ai_image_history.
     * @example
     * // Delete one Ai_image_history
     * const Ai_image_history = await prisma.ai_image_history.delete({
     *   where: {
     *     // ... filter to delete one Ai_image_history
     *   }
     * })
     * 
     */
    delete<T extends ai_image_historyDeleteArgs>(args: SelectSubset<T, ai_image_historyDeleteArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_image_history.
     * @param {ai_image_historyUpdateArgs} args - Arguments to update one Ai_image_history.
     * @example
     * // Update one Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_image_historyUpdateArgs>(args: SelectSubset<T, ai_image_historyUpdateArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_image_histories.
     * @param {ai_image_historyDeleteManyArgs} args - Arguments to filter Ai_image_histories to delete.
     * @example
     * // Delete a few Ai_image_histories
     * const { count } = await prisma.ai_image_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_image_historyDeleteManyArgs>(args?: SelectSubset<T, ai_image_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_image_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_image_histories
     * const ai_image_history = await prisma.ai_image_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_image_historyUpdateManyArgs>(args: SelectSubset<T, ai_image_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_image_histories and returns the data updated in the database.
     * @param {ai_image_historyUpdateManyAndReturnArgs} args - Arguments to update many Ai_image_histories.
     * @example
     * // Update many Ai_image_histories
     * const ai_image_history = await prisma.ai_image_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_image_histories and only return the `id`
     * const ai_image_historyWithIdOnly = await prisma.ai_image_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ai_image_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_image_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_image_history.
     * @param {ai_image_historyUpsertArgs} args - Arguments to update or create a Ai_image_history.
     * @example
     * // Update or create a Ai_image_history
     * const ai_image_history = await prisma.ai_image_history.upsert({
     *   create: {
     *     // ... data to create a Ai_image_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_image_history we want to update
     *   }
     * })
     */
    upsert<T extends ai_image_historyUpsertArgs>(args: SelectSubset<T, ai_image_historyUpsertArgs<ExtArgs>>): Prisma__ai_image_historyClient<$Result.GetResult<Prisma.$ai_image_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_image_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyCountArgs} args - Arguments to filter Ai_image_histories to count.
     * @example
     * // Count the number of Ai_image_histories
     * const count = await prisma.ai_image_history.count({
     *   where: {
     *     // ... the filter for the Ai_image_histories we want to count
     *   }
     * })
    **/
    count<T extends ai_image_historyCountArgs>(
      args?: Subset<T, ai_image_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_image_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_image_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_image_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_image_historyAggregateArgs>(args: Subset<T, Ai_image_historyAggregateArgs>): Prisma.PrismaPromise<GetAi_image_historyAggregateType<T>>

    /**
     * Group by Ai_image_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_image_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_image_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_image_historyGroupByArgs['orderBy'] }
        : { orderBy?: ai_image_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_image_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_image_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_image_history model
   */
  readonly fields: ai_image_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_image_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_image_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_image_history model
   */
  interface ai_image_historyFieldRefs {
    readonly id: FieldRef<"ai_image_history", 'Int'>
    readonly prompt: FieldRef<"ai_image_history", 'String'>
    readonly image_url: FieldRef<"ai_image_history", 'String'>
    readonly created_at: FieldRef<"ai_image_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_image_history findUnique
   */
  export type ai_image_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter, which ai_image_history to fetch.
     */
    where: ai_image_historyWhereUniqueInput
  }

  /**
   * ai_image_history findUniqueOrThrow
   */
  export type ai_image_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter, which ai_image_history to fetch.
     */
    where: ai_image_historyWhereUniqueInput
  }

  /**
   * ai_image_history findFirst
   */
  export type ai_image_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter, which ai_image_history to fetch.
     */
    where?: ai_image_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_image_histories to fetch.
     */
    orderBy?: ai_image_historyOrderByWithRelationInput | ai_image_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_image_histories.
     */
    cursor?: ai_image_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_image_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_image_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_image_histories.
     */
    distinct?: Ai_image_historyScalarFieldEnum | Ai_image_historyScalarFieldEnum[]
  }

  /**
   * ai_image_history findFirstOrThrow
   */
  export type ai_image_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter, which ai_image_history to fetch.
     */
    where?: ai_image_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_image_histories to fetch.
     */
    orderBy?: ai_image_historyOrderByWithRelationInput | ai_image_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_image_histories.
     */
    cursor?: ai_image_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_image_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_image_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_image_histories.
     */
    distinct?: Ai_image_historyScalarFieldEnum | Ai_image_historyScalarFieldEnum[]
  }

  /**
   * ai_image_history findMany
   */
  export type ai_image_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter, which ai_image_histories to fetch.
     */
    where?: ai_image_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_image_histories to fetch.
     */
    orderBy?: ai_image_historyOrderByWithRelationInput | ai_image_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_image_histories.
     */
    cursor?: ai_image_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_image_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_image_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_image_histories.
     */
    distinct?: Ai_image_historyScalarFieldEnum | Ai_image_historyScalarFieldEnum[]
  }

  /**
   * ai_image_history create
   */
  export type ai_image_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * The data needed to create a ai_image_history.
     */
    data?: XOR<ai_image_historyCreateInput, ai_image_historyUncheckedCreateInput>
  }

  /**
   * ai_image_history createMany
   */
  export type ai_image_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_image_histories.
     */
    data: ai_image_historyCreateManyInput | ai_image_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_image_history createManyAndReturn
   */
  export type ai_image_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * The data used to create many ai_image_histories.
     */
    data: ai_image_historyCreateManyInput | ai_image_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_image_history update
   */
  export type ai_image_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * The data needed to update a ai_image_history.
     */
    data: XOR<ai_image_historyUpdateInput, ai_image_historyUncheckedUpdateInput>
    /**
     * Choose, which ai_image_history to update.
     */
    where: ai_image_historyWhereUniqueInput
  }

  /**
   * ai_image_history updateMany
   */
  export type ai_image_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_image_histories.
     */
    data: XOR<ai_image_historyUpdateManyMutationInput, ai_image_historyUncheckedUpdateManyInput>
    /**
     * Filter which ai_image_histories to update
     */
    where?: ai_image_historyWhereInput
    /**
     * Limit how many ai_image_histories to update.
     */
    limit?: number
  }

  /**
   * ai_image_history updateManyAndReturn
   */
  export type ai_image_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * The data used to update ai_image_histories.
     */
    data: XOR<ai_image_historyUpdateManyMutationInput, ai_image_historyUncheckedUpdateManyInput>
    /**
     * Filter which ai_image_histories to update
     */
    where?: ai_image_historyWhereInput
    /**
     * Limit how many ai_image_histories to update.
     */
    limit?: number
  }

  /**
   * ai_image_history upsert
   */
  export type ai_image_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * The filter to search for the ai_image_history to update in case it exists.
     */
    where: ai_image_historyWhereUniqueInput
    /**
     * In case the ai_image_history found by the `where` argument doesn't exist, create a new ai_image_history with this data.
     */
    create: XOR<ai_image_historyCreateInput, ai_image_historyUncheckedCreateInput>
    /**
     * In case the ai_image_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_image_historyUpdateInput, ai_image_historyUncheckedUpdateInput>
  }

  /**
   * ai_image_history delete
   */
  export type ai_image_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
    /**
     * Filter which ai_image_history to delete.
     */
    where: ai_image_historyWhereUniqueInput
  }

  /**
   * ai_image_history deleteMany
   */
  export type ai_image_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_image_histories to delete
     */
    where?: ai_image_historyWhereInput
    /**
     * Limit how many ai_image_histories to delete.
     */
    limit?: number
  }

  /**
   * ai_image_history without action
   */
  export type ai_image_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_image_history
     */
    select?: ai_image_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_image_history
     */
    omit?: ai_image_historyOmit<ExtArgs> | null
  }


  /**
   * Model hero_banners
   */

  export type AggregateHero_banners = {
    _count: Hero_bannersCountAggregateOutputType | null
    _avg: Hero_bannersAvgAggregateOutputType | null
    _sum: Hero_bannersSumAggregateOutputType | null
    _min: Hero_bannersMinAggregateOutputType | null
    _max: Hero_bannersMaxAggregateOutputType | null
  }

  export type Hero_bannersAvgAggregateOutputType = {
    id: number | null
    sort_order: number | null
    is_active: number | null
  }

  export type Hero_bannersSumAggregateOutputType = {
    id: number | null
    sort_order: number | null
    is_active: number | null
  }

  export type Hero_bannersMinAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    media_type: string | null
    media_url: string | null
    button_text_en: string | null
    button_text_th: string | null
    button_link: string | null
    sort_order: number | null
    is_active: number | null
    created_at: Date | null
  }

  export type Hero_bannersMaxAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    media_type: string | null
    media_url: string | null
    button_text_en: string | null
    button_text_th: string | null
    button_link: string | null
    sort_order: number | null
    is_active: number | null
    created_at: Date | null
  }

  export type Hero_bannersCountAggregateOutputType = {
    id: number
    title_en: number
    title_th: number
    subtitle_en: number
    subtitle_th: number
    description_en: number
    description_th: number
    media_type: number
    media_url: number
    button_text_en: number
    button_text_th: number
    button_link: number
    sort_order: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Hero_bannersAvgAggregateInputType = {
    id?: true
    sort_order?: true
    is_active?: true
  }

  export type Hero_bannersSumAggregateInputType = {
    id?: true
    sort_order?: true
    is_active?: true
  }

  export type Hero_bannersMinAggregateInputType = {
    id?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    media_type?: true
    media_url?: true
    button_text_en?: true
    button_text_th?: true
    button_link?: true
    sort_order?: true
    is_active?: true
    created_at?: true
  }

  export type Hero_bannersMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    media_type?: true
    media_url?: true
    button_text_en?: true
    button_text_th?: true
    button_link?: true
    sort_order?: true
    is_active?: true
    created_at?: true
  }

  export type Hero_bannersCountAggregateInputType = {
    id?: true
    title_en?: true
    title_th?: true
    subtitle_en?: true
    subtitle_th?: true
    description_en?: true
    description_th?: true
    media_type?: true
    media_url?: true
    button_text_en?: true
    button_text_th?: true
    button_link?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Hero_bannersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero_banners to aggregate.
     */
    where?: hero_bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_banners to fetch.
     */
    orderBy?: hero_bannersOrderByWithRelationInput | hero_bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hero_bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hero_banners
    **/
    _count?: true | Hero_bannersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hero_bannersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hero_bannersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hero_bannersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hero_bannersMaxAggregateInputType
  }

  export type GetHero_bannersAggregateType<T extends Hero_bannersAggregateArgs> = {
        [P in keyof T & keyof AggregateHero_banners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero_banners[P]>
      : GetScalarType<T[P], AggregateHero_banners[P]>
  }




  export type hero_bannersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hero_bannersWhereInput
    orderBy?: hero_bannersOrderByWithAggregationInput | hero_bannersOrderByWithAggregationInput[]
    by: Hero_bannersScalarFieldEnum[] | Hero_bannersScalarFieldEnum
    having?: hero_bannersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hero_bannersCountAggregateInputType | true
    _avg?: Hero_bannersAvgAggregateInputType
    _sum?: Hero_bannersSumAggregateInputType
    _min?: Hero_bannersMinAggregateInputType
    _max?: Hero_bannersMaxAggregateInputType
  }

  export type Hero_bannersGroupByOutputType = {
    id: number
    title_en: string | null
    title_th: string | null
    subtitle_en: string | null
    subtitle_th: string | null
    description_en: string | null
    description_th: string | null
    media_type: string
    media_url: string | null
    button_text_en: string | null
    button_text_th: string | null
    button_link: string | null
    sort_order: number
    is_active: number
    created_at: Date
    _count: Hero_bannersCountAggregateOutputType | null
    _avg: Hero_bannersAvgAggregateOutputType | null
    _sum: Hero_bannersSumAggregateOutputType | null
    _min: Hero_bannersMinAggregateOutputType | null
    _max: Hero_bannersMaxAggregateOutputType | null
  }

  type GetHero_bannersGroupByPayload<T extends hero_bannersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hero_bannersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hero_bannersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hero_bannersGroupByOutputType[P]>
            : GetScalarType<T[P], Hero_bannersGroupByOutputType[P]>
        }
      >
    >


  export type hero_bannersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    media_type?: boolean
    media_url?: boolean
    button_text_en?: boolean
    button_text_th?: boolean
    button_link?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["hero_banners"]>

  export type hero_bannersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    media_type?: boolean
    media_url?: boolean
    button_text_en?: boolean
    button_text_th?: boolean
    button_link?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["hero_banners"]>

  export type hero_bannersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    media_type?: boolean
    media_url?: boolean
    button_text_en?: boolean
    button_text_th?: boolean
    button_link?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["hero_banners"]>

  export type hero_bannersSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_th?: boolean
    subtitle_en?: boolean
    subtitle_th?: boolean
    description_en?: boolean
    description_th?: boolean
    media_type?: boolean
    media_url?: boolean
    button_text_en?: boolean
    button_text_th?: boolean
    button_link?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type hero_bannersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_th" | "subtitle_en" | "subtitle_th" | "description_en" | "description_th" | "media_type" | "media_url" | "button_text_en" | "button_text_th" | "button_link" | "sort_order" | "is_active" | "created_at", ExtArgs["result"]["hero_banners"]>

  export type $hero_bannersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hero_banners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_en: string | null
      title_th: string | null
      subtitle_en: string | null
      subtitle_th: string | null
      description_en: string | null
      description_th: string | null
      media_type: string
      media_url: string | null
      button_text_en: string | null
      button_text_th: string | null
      button_link: string | null
      sort_order: number
      is_active: number
      created_at: Date
    }, ExtArgs["result"]["hero_banners"]>
    composites: {}
  }

  type hero_bannersGetPayload<S extends boolean | null | undefined | hero_bannersDefaultArgs> = $Result.GetResult<Prisma.$hero_bannersPayload, S>

  type hero_bannersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hero_bannersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hero_bannersCountAggregateInputType | true
    }

  export interface hero_bannersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hero_banners'], meta: { name: 'hero_banners' } }
    /**
     * Find zero or one Hero_banners that matches the filter.
     * @param {hero_bannersFindUniqueArgs} args - Arguments to find a Hero_banners
     * @example
     * // Get one Hero_banners
     * const hero_banners = await prisma.hero_banners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hero_bannersFindUniqueArgs>(args: SelectSubset<T, hero_bannersFindUniqueArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero_banners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hero_bannersFindUniqueOrThrowArgs} args - Arguments to find a Hero_banners
     * @example
     * // Get one Hero_banners
     * const hero_banners = await prisma.hero_banners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hero_bannersFindUniqueOrThrowArgs>(args: SelectSubset<T, hero_bannersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero_banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersFindFirstArgs} args - Arguments to find a Hero_banners
     * @example
     * // Get one Hero_banners
     * const hero_banners = await prisma.hero_banners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hero_bannersFindFirstArgs>(args?: SelectSubset<T, hero_bannersFindFirstArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero_banners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersFindFirstOrThrowArgs} args - Arguments to find a Hero_banners
     * @example
     * // Get one Hero_banners
     * const hero_banners = await prisma.hero_banners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hero_bannersFindFirstOrThrowArgs>(args?: SelectSubset<T, hero_bannersFindFirstOrThrowArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hero_banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hero_banners
     * const hero_banners = await prisma.hero_banners.findMany()
     * 
     * // Get first 10 Hero_banners
     * const hero_banners = await prisma.hero_banners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hero_bannersWithIdOnly = await prisma.hero_banners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hero_bannersFindManyArgs>(args?: SelectSubset<T, hero_bannersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero_banners.
     * @param {hero_bannersCreateArgs} args - Arguments to create a Hero_banners.
     * @example
     * // Create one Hero_banners
     * const Hero_banners = await prisma.hero_banners.create({
     *   data: {
     *     // ... data to create a Hero_banners
     *   }
     * })
     * 
     */
    create<T extends hero_bannersCreateArgs>(args: SelectSubset<T, hero_bannersCreateArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hero_banners.
     * @param {hero_bannersCreateManyArgs} args - Arguments to create many Hero_banners.
     * @example
     * // Create many Hero_banners
     * const hero_banners = await prisma.hero_banners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hero_bannersCreateManyArgs>(args?: SelectSubset<T, hero_bannersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hero_banners and returns the data saved in the database.
     * @param {hero_bannersCreateManyAndReturnArgs} args - Arguments to create many Hero_banners.
     * @example
     * // Create many Hero_banners
     * const hero_banners = await prisma.hero_banners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hero_banners and only return the `id`
     * const hero_bannersWithIdOnly = await prisma.hero_banners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hero_bannersCreateManyAndReturnArgs>(args?: SelectSubset<T, hero_bannersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero_banners.
     * @param {hero_bannersDeleteArgs} args - Arguments to delete one Hero_banners.
     * @example
     * // Delete one Hero_banners
     * const Hero_banners = await prisma.hero_banners.delete({
     *   where: {
     *     // ... filter to delete one Hero_banners
     *   }
     * })
     * 
     */
    delete<T extends hero_bannersDeleteArgs>(args: SelectSubset<T, hero_bannersDeleteArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero_banners.
     * @param {hero_bannersUpdateArgs} args - Arguments to update one Hero_banners.
     * @example
     * // Update one Hero_banners
     * const hero_banners = await prisma.hero_banners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hero_bannersUpdateArgs>(args: SelectSubset<T, hero_bannersUpdateArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hero_banners.
     * @param {hero_bannersDeleteManyArgs} args - Arguments to filter Hero_banners to delete.
     * @example
     * // Delete a few Hero_banners
     * const { count } = await prisma.hero_banners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hero_bannersDeleteManyArgs>(args?: SelectSubset<T, hero_bannersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hero_banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hero_banners
     * const hero_banners = await prisma.hero_banners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hero_bannersUpdateManyArgs>(args: SelectSubset<T, hero_bannersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hero_banners and returns the data updated in the database.
     * @param {hero_bannersUpdateManyAndReturnArgs} args - Arguments to update many Hero_banners.
     * @example
     * // Update many Hero_banners
     * const hero_banners = await prisma.hero_banners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hero_banners and only return the `id`
     * const hero_bannersWithIdOnly = await prisma.hero_banners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hero_bannersUpdateManyAndReturnArgs>(args: SelectSubset<T, hero_bannersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero_banners.
     * @param {hero_bannersUpsertArgs} args - Arguments to update or create a Hero_banners.
     * @example
     * // Update or create a Hero_banners
     * const hero_banners = await prisma.hero_banners.upsert({
     *   create: {
     *     // ... data to create a Hero_banners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero_banners we want to update
     *   }
     * })
     */
    upsert<T extends hero_bannersUpsertArgs>(args: SelectSubset<T, hero_bannersUpsertArgs<ExtArgs>>): Prisma__hero_bannersClient<$Result.GetResult<Prisma.$hero_bannersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hero_banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersCountArgs} args - Arguments to filter Hero_banners to count.
     * @example
     * // Count the number of Hero_banners
     * const count = await prisma.hero_banners.count({
     *   where: {
     *     // ... the filter for the Hero_banners we want to count
     *   }
     * })
    **/
    count<T extends hero_bannersCountArgs>(
      args?: Subset<T, hero_bannersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hero_bannersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero_banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hero_bannersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hero_bannersAggregateArgs>(args: Subset<T, Hero_bannersAggregateArgs>): Prisma.PrismaPromise<GetHero_bannersAggregateType<T>>

    /**
     * Group by Hero_banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hero_bannersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hero_bannersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hero_bannersGroupByArgs['orderBy'] }
        : { orderBy?: hero_bannersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hero_bannersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHero_bannersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hero_banners model
   */
  readonly fields: hero_bannersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hero_banners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hero_bannersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hero_banners model
   */
  interface hero_bannersFieldRefs {
    readonly id: FieldRef<"hero_banners", 'Int'>
    readonly title_en: FieldRef<"hero_banners", 'String'>
    readonly title_th: FieldRef<"hero_banners", 'String'>
    readonly subtitle_en: FieldRef<"hero_banners", 'String'>
    readonly subtitle_th: FieldRef<"hero_banners", 'String'>
    readonly description_en: FieldRef<"hero_banners", 'String'>
    readonly description_th: FieldRef<"hero_banners", 'String'>
    readonly media_type: FieldRef<"hero_banners", 'String'>
    readonly media_url: FieldRef<"hero_banners", 'String'>
    readonly button_text_en: FieldRef<"hero_banners", 'String'>
    readonly button_text_th: FieldRef<"hero_banners", 'String'>
    readonly button_link: FieldRef<"hero_banners", 'String'>
    readonly sort_order: FieldRef<"hero_banners", 'Int'>
    readonly is_active: FieldRef<"hero_banners", 'Int'>
    readonly created_at: FieldRef<"hero_banners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hero_banners findUnique
   */
  export type hero_bannersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter, which hero_banners to fetch.
     */
    where: hero_bannersWhereUniqueInput
  }

  /**
   * hero_banners findUniqueOrThrow
   */
  export type hero_bannersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter, which hero_banners to fetch.
     */
    where: hero_bannersWhereUniqueInput
  }

  /**
   * hero_banners findFirst
   */
  export type hero_bannersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter, which hero_banners to fetch.
     */
    where?: hero_bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_banners to fetch.
     */
    orderBy?: hero_bannersOrderByWithRelationInput | hero_bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hero_banners.
     */
    cursor?: hero_bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hero_banners.
     */
    distinct?: Hero_bannersScalarFieldEnum | Hero_bannersScalarFieldEnum[]
  }

  /**
   * hero_banners findFirstOrThrow
   */
  export type hero_bannersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter, which hero_banners to fetch.
     */
    where?: hero_bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_banners to fetch.
     */
    orderBy?: hero_bannersOrderByWithRelationInput | hero_bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hero_banners.
     */
    cursor?: hero_bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hero_banners.
     */
    distinct?: Hero_bannersScalarFieldEnum | Hero_bannersScalarFieldEnum[]
  }

  /**
   * hero_banners findMany
   */
  export type hero_bannersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter, which hero_banners to fetch.
     */
    where?: hero_bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hero_banners to fetch.
     */
    orderBy?: hero_bannersOrderByWithRelationInput | hero_bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hero_banners.
     */
    cursor?: hero_bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hero_banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hero_banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hero_banners.
     */
    distinct?: Hero_bannersScalarFieldEnum | Hero_bannersScalarFieldEnum[]
  }

  /**
   * hero_banners create
   */
  export type hero_bannersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * The data needed to create a hero_banners.
     */
    data?: XOR<hero_bannersCreateInput, hero_bannersUncheckedCreateInput>
  }

  /**
   * hero_banners createMany
   */
  export type hero_bannersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hero_banners.
     */
    data: hero_bannersCreateManyInput | hero_bannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero_banners createManyAndReturn
   */
  export type hero_bannersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * The data used to create many hero_banners.
     */
    data: hero_bannersCreateManyInput | hero_bannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero_banners update
   */
  export type hero_bannersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * The data needed to update a hero_banners.
     */
    data: XOR<hero_bannersUpdateInput, hero_bannersUncheckedUpdateInput>
    /**
     * Choose, which hero_banners to update.
     */
    where: hero_bannersWhereUniqueInput
  }

  /**
   * hero_banners updateMany
   */
  export type hero_bannersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hero_banners.
     */
    data: XOR<hero_bannersUpdateManyMutationInput, hero_bannersUncheckedUpdateManyInput>
    /**
     * Filter which hero_banners to update
     */
    where?: hero_bannersWhereInput
    /**
     * Limit how many hero_banners to update.
     */
    limit?: number
  }

  /**
   * hero_banners updateManyAndReturn
   */
  export type hero_bannersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * The data used to update hero_banners.
     */
    data: XOR<hero_bannersUpdateManyMutationInput, hero_bannersUncheckedUpdateManyInput>
    /**
     * Filter which hero_banners to update
     */
    where?: hero_bannersWhereInput
    /**
     * Limit how many hero_banners to update.
     */
    limit?: number
  }

  /**
   * hero_banners upsert
   */
  export type hero_bannersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * The filter to search for the hero_banners to update in case it exists.
     */
    where: hero_bannersWhereUniqueInput
    /**
     * In case the hero_banners found by the `where` argument doesn't exist, create a new hero_banners with this data.
     */
    create: XOR<hero_bannersCreateInput, hero_bannersUncheckedCreateInput>
    /**
     * In case the hero_banners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hero_bannersUpdateInput, hero_bannersUncheckedUpdateInput>
  }

  /**
   * hero_banners delete
   */
  export type hero_bannersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
    /**
     * Filter which hero_banners to delete.
     */
    where: hero_bannersWhereUniqueInput
  }

  /**
   * hero_banners deleteMany
   */
  export type hero_bannersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero_banners to delete
     */
    where?: hero_bannersWhereInput
    /**
     * Limit how many hero_banners to delete.
     */
    limit?: number
  }

  /**
   * hero_banners without action
   */
  export type hero_bannersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero_banners
     */
    select?: hero_bannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero_banners
     */
    omit?: hero_bannersOmit<ExtArgs> | null
  }


  /**
   * Model changelog
   */

  export type AggregateChangelog = {
    _count: ChangelogCountAggregateOutputType | null
    _avg: ChangelogAvgAggregateOutputType | null
    _sum: ChangelogSumAggregateOutputType | null
    _min: ChangelogMinAggregateOutputType | null
    _max: ChangelogMaxAggregateOutputType | null
  }

  export type ChangelogAvgAggregateOutputType = {
    id: number | null
    is_published: number | null
  }

  export type ChangelogSumAggregateOutputType = {
    id: number | null
    is_published: number | null
  }

  export type ChangelogMinAggregateOutputType = {
    id: number | null
    version: string | null
    title_en: string | null
    title_th: string | null
    content_en: string | null
    content_th: string | null
    type: string | null
    is_published: number | null
    published_at: Date | null
    created_at: Date | null
  }

  export type ChangelogMaxAggregateOutputType = {
    id: number | null
    version: string | null
    title_en: string | null
    title_th: string | null
    content_en: string | null
    content_th: string | null
    type: string | null
    is_published: number | null
    published_at: Date | null
    created_at: Date | null
  }

  export type ChangelogCountAggregateOutputType = {
    id: number
    version: number
    title_en: number
    title_th: number
    content_en: number
    content_th: number
    type: number
    is_published: number
    published_at: number
    created_at: number
    _all: number
  }


  export type ChangelogAvgAggregateInputType = {
    id?: true
    is_published?: true
  }

  export type ChangelogSumAggregateInputType = {
    id?: true
    is_published?: true
  }

  export type ChangelogMinAggregateInputType = {
    id?: true
    version?: true
    title_en?: true
    title_th?: true
    content_en?: true
    content_th?: true
    type?: true
    is_published?: true
    published_at?: true
    created_at?: true
  }

  export type ChangelogMaxAggregateInputType = {
    id?: true
    version?: true
    title_en?: true
    title_th?: true
    content_en?: true
    content_th?: true
    type?: true
    is_published?: true
    published_at?: true
    created_at?: true
  }

  export type ChangelogCountAggregateInputType = {
    id?: true
    version?: true
    title_en?: true
    title_th?: true
    content_en?: true
    content_th?: true
    type?: true
    is_published?: true
    published_at?: true
    created_at?: true
    _all?: true
  }

  export type ChangelogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which changelog to aggregate.
     */
    where?: changelogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of changelogs to fetch.
     */
    orderBy?: changelogOrderByWithRelationInput | changelogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: changelogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` changelogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` changelogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned changelogs
    **/
    _count?: true | ChangelogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChangelogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChangelogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChangelogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChangelogMaxAggregateInputType
  }

  export type GetChangelogAggregateType<T extends ChangelogAggregateArgs> = {
        [P in keyof T & keyof AggregateChangelog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChangelog[P]>
      : GetScalarType<T[P], AggregateChangelog[P]>
  }




  export type changelogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: changelogWhereInput
    orderBy?: changelogOrderByWithAggregationInput | changelogOrderByWithAggregationInput[]
    by: ChangelogScalarFieldEnum[] | ChangelogScalarFieldEnum
    having?: changelogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChangelogCountAggregateInputType | true
    _avg?: ChangelogAvgAggregateInputType
    _sum?: ChangelogSumAggregateInputType
    _min?: ChangelogMinAggregateInputType
    _max?: ChangelogMaxAggregateInputType
  }

  export type ChangelogGroupByOutputType = {
    id: number
    version: string | null
    title_en: string | null
    title_th: string | null
    content_en: string | null
    content_th: string | null
    type: string
    is_published: number
    published_at: Date
    created_at: Date
    _count: ChangelogCountAggregateOutputType | null
    _avg: ChangelogAvgAggregateOutputType | null
    _sum: ChangelogSumAggregateOutputType | null
    _min: ChangelogMinAggregateOutputType | null
    _max: ChangelogMaxAggregateOutputType | null
  }

  type GetChangelogGroupByPayload<T extends changelogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChangelogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChangelogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChangelogGroupByOutputType[P]>
            : GetScalarType<T[P], ChangelogGroupByOutputType[P]>
        }
      >
    >


  export type changelogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    title_en?: boolean
    title_th?: boolean
    content_en?: boolean
    content_th?: boolean
    type?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["changelog"]>

  export type changelogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    title_en?: boolean
    title_th?: boolean
    content_en?: boolean
    content_th?: boolean
    type?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["changelog"]>

  export type changelogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    title_en?: boolean
    title_th?: boolean
    content_en?: boolean
    content_th?: boolean
    type?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["changelog"]>

  export type changelogSelectScalar = {
    id?: boolean
    version?: boolean
    title_en?: boolean
    title_th?: boolean
    content_en?: boolean
    content_th?: boolean
    type?: boolean
    is_published?: boolean
    published_at?: boolean
    created_at?: boolean
  }

  export type changelogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "title_en" | "title_th" | "content_en" | "content_th" | "type" | "is_published" | "published_at" | "created_at", ExtArgs["result"]["changelog"]>

  export type $changelogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "changelog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: string | null
      title_en: string | null
      title_th: string | null
      content_en: string | null
      content_th: string | null
      type: string
      is_published: number
      published_at: Date
      created_at: Date
    }, ExtArgs["result"]["changelog"]>
    composites: {}
  }

  type changelogGetPayload<S extends boolean | null | undefined | changelogDefaultArgs> = $Result.GetResult<Prisma.$changelogPayload, S>

  type changelogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<changelogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChangelogCountAggregateInputType | true
    }

  export interface changelogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['changelog'], meta: { name: 'changelog' } }
    /**
     * Find zero or one Changelog that matches the filter.
     * @param {changelogFindUniqueArgs} args - Arguments to find a Changelog
     * @example
     * // Get one Changelog
     * const changelog = await prisma.changelog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends changelogFindUniqueArgs>(args: SelectSubset<T, changelogFindUniqueArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Changelog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {changelogFindUniqueOrThrowArgs} args - Arguments to find a Changelog
     * @example
     * // Get one Changelog
     * const changelog = await prisma.changelog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends changelogFindUniqueOrThrowArgs>(args: SelectSubset<T, changelogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Changelog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogFindFirstArgs} args - Arguments to find a Changelog
     * @example
     * // Get one Changelog
     * const changelog = await prisma.changelog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends changelogFindFirstArgs>(args?: SelectSubset<T, changelogFindFirstArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Changelog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogFindFirstOrThrowArgs} args - Arguments to find a Changelog
     * @example
     * // Get one Changelog
     * const changelog = await prisma.changelog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends changelogFindFirstOrThrowArgs>(args?: SelectSubset<T, changelogFindFirstOrThrowArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Changelogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Changelogs
     * const changelogs = await prisma.changelog.findMany()
     * 
     * // Get first 10 Changelogs
     * const changelogs = await prisma.changelog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const changelogWithIdOnly = await prisma.changelog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends changelogFindManyArgs>(args?: SelectSubset<T, changelogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Changelog.
     * @param {changelogCreateArgs} args - Arguments to create a Changelog.
     * @example
     * // Create one Changelog
     * const Changelog = await prisma.changelog.create({
     *   data: {
     *     // ... data to create a Changelog
     *   }
     * })
     * 
     */
    create<T extends changelogCreateArgs>(args: SelectSubset<T, changelogCreateArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Changelogs.
     * @param {changelogCreateManyArgs} args - Arguments to create many Changelogs.
     * @example
     * // Create many Changelogs
     * const changelog = await prisma.changelog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends changelogCreateManyArgs>(args?: SelectSubset<T, changelogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Changelogs and returns the data saved in the database.
     * @param {changelogCreateManyAndReturnArgs} args - Arguments to create many Changelogs.
     * @example
     * // Create many Changelogs
     * const changelog = await prisma.changelog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Changelogs and only return the `id`
     * const changelogWithIdOnly = await prisma.changelog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends changelogCreateManyAndReturnArgs>(args?: SelectSubset<T, changelogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Changelog.
     * @param {changelogDeleteArgs} args - Arguments to delete one Changelog.
     * @example
     * // Delete one Changelog
     * const Changelog = await prisma.changelog.delete({
     *   where: {
     *     // ... filter to delete one Changelog
     *   }
     * })
     * 
     */
    delete<T extends changelogDeleteArgs>(args: SelectSubset<T, changelogDeleteArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Changelog.
     * @param {changelogUpdateArgs} args - Arguments to update one Changelog.
     * @example
     * // Update one Changelog
     * const changelog = await prisma.changelog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends changelogUpdateArgs>(args: SelectSubset<T, changelogUpdateArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Changelogs.
     * @param {changelogDeleteManyArgs} args - Arguments to filter Changelogs to delete.
     * @example
     * // Delete a few Changelogs
     * const { count } = await prisma.changelog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends changelogDeleteManyArgs>(args?: SelectSubset<T, changelogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Changelogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Changelogs
     * const changelog = await prisma.changelog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends changelogUpdateManyArgs>(args: SelectSubset<T, changelogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Changelogs and returns the data updated in the database.
     * @param {changelogUpdateManyAndReturnArgs} args - Arguments to update many Changelogs.
     * @example
     * // Update many Changelogs
     * const changelog = await prisma.changelog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Changelogs and only return the `id`
     * const changelogWithIdOnly = await prisma.changelog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends changelogUpdateManyAndReturnArgs>(args: SelectSubset<T, changelogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Changelog.
     * @param {changelogUpsertArgs} args - Arguments to update or create a Changelog.
     * @example
     * // Update or create a Changelog
     * const changelog = await prisma.changelog.upsert({
     *   create: {
     *     // ... data to create a Changelog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Changelog we want to update
     *   }
     * })
     */
    upsert<T extends changelogUpsertArgs>(args: SelectSubset<T, changelogUpsertArgs<ExtArgs>>): Prisma__changelogClient<$Result.GetResult<Prisma.$changelogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Changelogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogCountArgs} args - Arguments to filter Changelogs to count.
     * @example
     * // Count the number of Changelogs
     * const count = await prisma.changelog.count({
     *   where: {
     *     // ... the filter for the Changelogs we want to count
     *   }
     * })
    **/
    count<T extends changelogCountArgs>(
      args?: Subset<T, changelogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChangelogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Changelog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChangelogAggregateArgs>(args: Subset<T, ChangelogAggregateArgs>): Prisma.PrismaPromise<GetChangelogAggregateType<T>>

    /**
     * Group by Changelog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {changelogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends changelogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: changelogGroupByArgs['orderBy'] }
        : { orderBy?: changelogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, changelogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangelogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the changelog model
   */
  readonly fields: changelogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for changelog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__changelogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the changelog model
   */
  interface changelogFieldRefs {
    readonly id: FieldRef<"changelog", 'Int'>
    readonly version: FieldRef<"changelog", 'String'>
    readonly title_en: FieldRef<"changelog", 'String'>
    readonly title_th: FieldRef<"changelog", 'String'>
    readonly content_en: FieldRef<"changelog", 'String'>
    readonly content_th: FieldRef<"changelog", 'String'>
    readonly type: FieldRef<"changelog", 'String'>
    readonly is_published: FieldRef<"changelog", 'Int'>
    readonly published_at: FieldRef<"changelog", 'DateTime'>
    readonly created_at: FieldRef<"changelog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * changelog findUnique
   */
  export type changelogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter, which changelog to fetch.
     */
    where: changelogWhereUniqueInput
  }

  /**
   * changelog findUniqueOrThrow
   */
  export type changelogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter, which changelog to fetch.
     */
    where: changelogWhereUniqueInput
  }

  /**
   * changelog findFirst
   */
  export type changelogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter, which changelog to fetch.
     */
    where?: changelogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of changelogs to fetch.
     */
    orderBy?: changelogOrderByWithRelationInput | changelogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for changelogs.
     */
    cursor?: changelogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` changelogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` changelogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of changelogs.
     */
    distinct?: ChangelogScalarFieldEnum | ChangelogScalarFieldEnum[]
  }

  /**
   * changelog findFirstOrThrow
   */
  export type changelogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter, which changelog to fetch.
     */
    where?: changelogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of changelogs to fetch.
     */
    orderBy?: changelogOrderByWithRelationInput | changelogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for changelogs.
     */
    cursor?: changelogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` changelogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` changelogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of changelogs.
     */
    distinct?: ChangelogScalarFieldEnum | ChangelogScalarFieldEnum[]
  }

  /**
   * changelog findMany
   */
  export type changelogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter, which changelogs to fetch.
     */
    where?: changelogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of changelogs to fetch.
     */
    orderBy?: changelogOrderByWithRelationInput | changelogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing changelogs.
     */
    cursor?: changelogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` changelogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` changelogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of changelogs.
     */
    distinct?: ChangelogScalarFieldEnum | ChangelogScalarFieldEnum[]
  }

  /**
   * changelog create
   */
  export type changelogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * The data needed to create a changelog.
     */
    data?: XOR<changelogCreateInput, changelogUncheckedCreateInput>
  }

  /**
   * changelog createMany
   */
  export type changelogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many changelogs.
     */
    data: changelogCreateManyInput | changelogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * changelog createManyAndReturn
   */
  export type changelogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * The data used to create many changelogs.
     */
    data: changelogCreateManyInput | changelogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * changelog update
   */
  export type changelogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * The data needed to update a changelog.
     */
    data: XOR<changelogUpdateInput, changelogUncheckedUpdateInput>
    /**
     * Choose, which changelog to update.
     */
    where: changelogWhereUniqueInput
  }

  /**
   * changelog updateMany
   */
  export type changelogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update changelogs.
     */
    data: XOR<changelogUpdateManyMutationInput, changelogUncheckedUpdateManyInput>
    /**
     * Filter which changelogs to update
     */
    where?: changelogWhereInput
    /**
     * Limit how many changelogs to update.
     */
    limit?: number
  }

  /**
   * changelog updateManyAndReturn
   */
  export type changelogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * The data used to update changelogs.
     */
    data: XOR<changelogUpdateManyMutationInput, changelogUncheckedUpdateManyInput>
    /**
     * Filter which changelogs to update
     */
    where?: changelogWhereInput
    /**
     * Limit how many changelogs to update.
     */
    limit?: number
  }

  /**
   * changelog upsert
   */
  export type changelogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * The filter to search for the changelog to update in case it exists.
     */
    where: changelogWhereUniqueInput
    /**
     * In case the changelog found by the `where` argument doesn't exist, create a new changelog with this data.
     */
    create: XOR<changelogCreateInput, changelogUncheckedCreateInput>
    /**
     * In case the changelog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<changelogUpdateInput, changelogUncheckedUpdateInput>
  }

  /**
   * changelog delete
   */
  export type changelogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
    /**
     * Filter which changelog to delete.
     */
    where: changelogWhereUniqueInput
  }

  /**
   * changelog deleteMany
   */
  export type changelogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which changelogs to delete
     */
    where?: changelogWhereInput
    /**
     * Limit how many changelogs to delete.
     */
    limit?: number
  }

  /**
   * changelog without action
   */
  export type changelogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the changelog
     */
    select?: changelogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the changelog
     */
    omit?: changelogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Homepage_sectionsScalarFieldEnum: {
    id: 'id',
    section_key: 'section_key',
    title_en: 'title_en',
    title_th: 'title_th',
    subtitle_en: 'subtitle_en',
    subtitle_th: 'subtitle_th',
    description_en: 'description_en',
    description_th: 'description_th',
    is_visible: 'is_visible',
    sort_order: 'sort_order',
    data: 'data'
  };

  export type Homepage_sectionsScalarFieldEnum = (typeof Homepage_sectionsScalarFieldEnum)[keyof typeof Homepage_sectionsScalarFieldEnum]


  export const SolutionsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_th: 'title_th',
    description_en: 'description_en',
    description_th: 'description_th',
    content_en: 'content_en',
    content_th: 'content_th',
    category: 'category',
    icon: 'icon',
    image_url: 'image_url',
    is_published: 'is_published',
    is_featured: 'is_featured',
    sort_order: 'sort_order',
    created_at: 'created_at'
  };

  export type SolutionsScalarFieldEnum = (typeof SolutionsScalarFieldEnum)[keyof typeof SolutionsScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_th: 'title_th',
    description_en: 'description_en',
    description_th: 'description_th',
    content_en: 'content_en',
    content_th: 'content_th',
    client_name_en: 'client_name_en',
    client_name_th: 'client_name_th',
    industry: 'industry',
    challenge_en: 'challenge_en',
    challenge_th: 'challenge_th',
    solution_en: 'solution_en',
    solution_th: 'solution_th',
    result_en: 'result_en',
    result_th: 'result_th',
    cover_image: 'cover_image',
    completion_date: 'completion_date',
    website_url: 'website_url',
    gallery: 'gallery',
    tags: 'tags',
    tech_stack: 'tech_stack',
    is_published: 'is_published',
    is_featured: 'is_featured',
    sort_order: 'sort_order',
    created_at: 'created_at'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo_url: 'logo_url',
    category: 'category',
    is_published: 'is_published',
    is_featured: 'is_featured',
    sort_order: 'sort_order',
    created_at: 'created_at'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_th: 'title_th',
    description_en: 'description_en',
    description_th: 'description_th',
    content_en: 'content_en',
    content_th: 'content_th',
    icon: 'icon',
    image_url: 'image_url',
    is_published: 'is_published',
    is_featured: 'is_featured',
    sort_order: 'sort_order',
    created_at: 'created_at'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const PressScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_th: 'title_th',
    category: 'category',
    image_url: 'image_url',
    author: 'author',
    excerpt_en: 'excerpt_en',
    excerpt_th: 'excerpt_th',
    content_en: 'content_en',
    content_th: 'content_th',
    is_published: 'is_published',
    published_at: 'published_at',
    created_at: 'created_at'
  };

  export type PressScalarFieldEnum = (typeof PressScalarFieldEnum)[keyof typeof PressScalarFieldEnum]


  export const CareersScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_th: 'title_th',
    department: 'department',
    location: 'location',
    employment_type: 'employment_type',
    description_en: 'description_en',
    description_th: 'description_th',
    requirements_en: 'requirements_en',
    requirements_th: 'requirements_th',
    responsibilities_en: 'responsibilities_en',
    responsibilities_th: 'responsibilities_th',
    status: 'status',
    created_at: 'created_at'
  };

  export type CareersScalarFieldEnum = (typeof CareersScalarFieldEnum)[keyof typeof CareersScalarFieldEnum]


  export const ApplicantsScalarFieldEnum: {
    id: 'id',
    career_id: 'career_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    cv_url: 'cv_url',
    notes: 'notes',
    status: 'status',
    created_at: 'created_at'
  };

  export type ApplicantsScalarFieldEnum = (typeof ApplicantsScalarFieldEnum)[keyof typeof ApplicantsScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    phone: 'phone',
    message: 'message',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    url: 'url',
    alt_text: 'alt_text',
    folder: 'folder',
    created_at: 'created_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const Ai_knowledgeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Ai_knowledgeScalarFieldEnum = (typeof Ai_knowledgeScalarFieldEnum)[keyof typeof Ai_knowledgeScalarFieldEnum]


  export const Ai_logsScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    user_message: 'user_message',
    ai_response: 'ai_response',
    sentiment: 'sentiment',
    is_lead_captured: 'is_lead_captured',
    created_at: 'created_at'
  };

  export type Ai_logsScalarFieldEnum = (typeof Ai_logsScalarFieldEnum)[keyof typeof Ai_logsScalarFieldEnum]


  export const Ai_image_historyScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type Ai_image_historyScalarFieldEnum = (typeof Ai_image_historyScalarFieldEnum)[keyof typeof Ai_image_historyScalarFieldEnum]


  export const Hero_bannersScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_th: 'title_th',
    subtitle_en: 'subtitle_en',
    subtitle_th: 'subtitle_th',
    description_en: 'description_en',
    description_th: 'description_th',
    media_type: 'media_type',
    media_url: 'media_url',
    button_text_en: 'button_text_en',
    button_text_th: 'button_text_th',
    button_link: 'button_link',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Hero_bannersScalarFieldEnum = (typeof Hero_bannersScalarFieldEnum)[keyof typeof Hero_bannersScalarFieldEnum]


  export const ChangelogScalarFieldEnum: {
    id: 'id',
    version: 'version',
    title_en: 'title_en',
    title_th: 'title_th',
    content_en: 'content_en',
    content_th: 'content_th',
    type: 'type',
    is_published: 'is_published',
    published_at: 'published_at',
    created_at: 'created_at'
  };

  export type ChangelogScalarFieldEnum = (typeof ChangelogScalarFieldEnum)[keyof typeof ChangelogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    role?: StringNullableFilter<"user"> | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    role?: StringNullableFilter<"user"> | string | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type homepage_sectionsWhereInput = {
    AND?: homepage_sectionsWhereInput | homepage_sectionsWhereInput[]
    OR?: homepage_sectionsWhereInput[]
    NOT?: homepage_sectionsWhereInput | homepage_sectionsWhereInput[]
    id?: IntFilter<"homepage_sections"> | number
    section_key?: StringFilter<"homepage_sections"> | string
    title_en?: StringNullableFilter<"homepage_sections"> | string | null
    title_th?: StringNullableFilter<"homepage_sections"> | string | null
    subtitle_en?: StringNullableFilter<"homepage_sections"> | string | null
    subtitle_th?: StringNullableFilter<"homepage_sections"> | string | null
    description_en?: StringNullableFilter<"homepage_sections"> | string | null
    description_th?: StringNullableFilter<"homepage_sections"> | string | null
    is_visible?: IntFilter<"homepage_sections"> | number
    sort_order?: IntNullableFilter<"homepage_sections"> | number | null
    data?: JsonNullableFilter<"homepage_sections">
  }

  export type homepage_sectionsOrderByWithRelationInput = {
    id?: SortOrder
    section_key?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    subtitle_en?: SortOrderInput | SortOrder
    subtitle_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type homepage_sectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    section_key?: string
    AND?: homepage_sectionsWhereInput | homepage_sectionsWhereInput[]
    OR?: homepage_sectionsWhereInput[]
    NOT?: homepage_sectionsWhereInput | homepage_sectionsWhereInput[]
    title_en?: StringNullableFilter<"homepage_sections"> | string | null
    title_th?: StringNullableFilter<"homepage_sections"> | string | null
    subtitle_en?: StringNullableFilter<"homepage_sections"> | string | null
    subtitle_th?: StringNullableFilter<"homepage_sections"> | string | null
    description_en?: StringNullableFilter<"homepage_sections"> | string | null
    description_th?: StringNullableFilter<"homepage_sections"> | string | null
    is_visible?: IntFilter<"homepage_sections"> | number
    sort_order?: IntNullableFilter<"homepage_sections"> | number | null
    data?: JsonNullableFilter<"homepage_sections">
  }, "id" | "section_key">

  export type homepage_sectionsOrderByWithAggregationInput = {
    id?: SortOrder
    section_key?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    subtitle_en?: SortOrderInput | SortOrder
    subtitle_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: homepage_sectionsCountOrderByAggregateInput
    _avg?: homepage_sectionsAvgOrderByAggregateInput
    _max?: homepage_sectionsMaxOrderByAggregateInput
    _min?: homepage_sectionsMinOrderByAggregateInput
    _sum?: homepage_sectionsSumOrderByAggregateInput
  }

  export type homepage_sectionsScalarWhereWithAggregatesInput = {
    AND?: homepage_sectionsScalarWhereWithAggregatesInput | homepage_sectionsScalarWhereWithAggregatesInput[]
    OR?: homepage_sectionsScalarWhereWithAggregatesInput[]
    NOT?: homepage_sectionsScalarWhereWithAggregatesInput | homepage_sectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"homepage_sections"> | number
    section_key?: StringWithAggregatesFilter<"homepage_sections"> | string
    title_en?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    subtitle_en?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    subtitle_th?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"homepage_sections"> | string | null
    is_visible?: IntWithAggregatesFilter<"homepage_sections"> | number
    sort_order?: IntNullableWithAggregatesFilter<"homepage_sections"> | number | null
    data?: JsonNullableWithAggregatesFilter<"homepage_sections">
  }

  export type solutionsWhereInput = {
    AND?: solutionsWhereInput | solutionsWhereInput[]
    OR?: solutionsWhereInput[]
    NOT?: solutionsWhereInput | solutionsWhereInput[]
    id?: IntFilter<"solutions"> | number
    slug?: StringFilter<"solutions"> | string
    title_en?: StringNullableFilter<"solutions"> | string | null
    title_th?: StringNullableFilter<"solutions"> | string | null
    description_en?: StringNullableFilter<"solutions"> | string | null
    description_th?: StringNullableFilter<"solutions"> | string | null
    content_en?: StringNullableFilter<"solutions"> | string | null
    content_th?: StringNullableFilter<"solutions"> | string | null
    category?: StringNullableFilter<"solutions"> | string | null
    icon?: StringNullableFilter<"solutions"> | string | null
    image_url?: StringNullableFilter<"solutions"> | string | null
    is_published?: IntFilter<"solutions"> | number
    is_featured?: IntFilter<"solutions"> | number
    sort_order?: IntNullableFilter<"solutions"> | number | null
    created_at?: DateTimeFilter<"solutions"> | Date | string
  }

  export type solutionsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type solutionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: solutionsWhereInput | solutionsWhereInput[]
    OR?: solutionsWhereInput[]
    NOT?: solutionsWhereInput | solutionsWhereInput[]
    title_en?: StringNullableFilter<"solutions"> | string | null
    title_th?: StringNullableFilter<"solutions"> | string | null
    description_en?: StringNullableFilter<"solutions"> | string | null
    description_th?: StringNullableFilter<"solutions"> | string | null
    content_en?: StringNullableFilter<"solutions"> | string | null
    content_th?: StringNullableFilter<"solutions"> | string | null
    category?: StringNullableFilter<"solutions"> | string | null
    icon?: StringNullableFilter<"solutions"> | string | null
    image_url?: StringNullableFilter<"solutions"> | string | null
    is_published?: IntFilter<"solutions"> | number
    is_featured?: IntFilter<"solutions"> | number
    sort_order?: IntNullableFilter<"solutions"> | number | null
    created_at?: DateTimeFilter<"solutions"> | Date | string
  }, "id" | "slug">

  export type solutionsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: solutionsCountOrderByAggregateInput
    _avg?: solutionsAvgOrderByAggregateInput
    _max?: solutionsMaxOrderByAggregateInput
    _min?: solutionsMinOrderByAggregateInput
    _sum?: solutionsSumOrderByAggregateInput
  }

  export type solutionsScalarWhereWithAggregatesInput = {
    AND?: solutionsScalarWhereWithAggregatesInput | solutionsScalarWhereWithAggregatesInput[]
    OR?: solutionsScalarWhereWithAggregatesInput[]
    NOT?: solutionsScalarWhereWithAggregatesInput | solutionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"solutions"> | number
    slug?: StringWithAggregatesFilter<"solutions"> | string
    title_en?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    content_th?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    category?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    icon?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"solutions"> | string | null
    is_published?: IntWithAggregatesFilter<"solutions"> | number
    is_featured?: IntWithAggregatesFilter<"solutions"> | number
    sort_order?: IntNullableWithAggregatesFilter<"solutions"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"solutions"> | Date | string
  }

  export type portfolioWhereInput = {
    AND?: portfolioWhereInput | portfolioWhereInput[]
    OR?: portfolioWhereInput[]
    NOT?: portfolioWhereInput | portfolioWhereInput[]
    id?: IntFilter<"portfolio"> | number
    slug?: StringFilter<"portfolio"> | string
    title_en?: StringNullableFilter<"portfolio"> | string | null
    title_th?: StringNullableFilter<"portfolio"> | string | null
    description_en?: StringNullableFilter<"portfolio"> | string | null
    description_th?: StringNullableFilter<"portfolio"> | string | null
    content_en?: StringNullableFilter<"portfolio"> | string | null
    content_th?: StringNullableFilter<"portfolio"> | string | null
    client_name_en?: StringNullableFilter<"portfolio"> | string | null
    client_name_th?: StringNullableFilter<"portfolio"> | string | null
    industry?: StringNullableFilter<"portfolio"> | string | null
    challenge_en?: StringNullableFilter<"portfolio"> | string | null
    challenge_th?: StringNullableFilter<"portfolio"> | string | null
    solution_en?: StringNullableFilter<"portfolio"> | string | null
    solution_th?: StringNullableFilter<"portfolio"> | string | null
    result_en?: StringNullableFilter<"portfolio"> | string | null
    result_th?: StringNullableFilter<"portfolio"> | string | null
    cover_image?: StringNullableFilter<"portfolio"> | string | null
    completion_date?: DateTimeNullableFilter<"portfolio"> | Date | string | null
    website_url?: StringNullableFilter<"portfolio"> | string | null
    gallery?: JsonNullableFilter<"portfolio">
    tags?: JsonNullableFilter<"portfolio">
    tech_stack?: JsonNullableFilter<"portfolio">
    is_published?: IntFilter<"portfolio"> | number
    is_featured?: IntFilter<"portfolio"> | number
    sort_order?: IntNullableFilter<"portfolio"> | number | null
    created_at?: DateTimeFilter<"portfolio"> | Date | string
  }

  export type portfolioOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    client_name_en?: SortOrderInput | SortOrder
    client_name_th?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    challenge_en?: SortOrderInput | SortOrder
    challenge_th?: SortOrderInput | SortOrder
    solution_en?: SortOrderInput | SortOrder
    solution_th?: SortOrderInput | SortOrder
    result_en?: SortOrderInput | SortOrder
    result_th?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    completion_date?: SortOrderInput | SortOrder
    website_url?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    tech_stack?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type portfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: portfolioWhereInput | portfolioWhereInput[]
    OR?: portfolioWhereInput[]
    NOT?: portfolioWhereInput | portfolioWhereInput[]
    title_en?: StringNullableFilter<"portfolio"> | string | null
    title_th?: StringNullableFilter<"portfolio"> | string | null
    description_en?: StringNullableFilter<"portfolio"> | string | null
    description_th?: StringNullableFilter<"portfolio"> | string | null
    content_en?: StringNullableFilter<"portfolio"> | string | null
    content_th?: StringNullableFilter<"portfolio"> | string | null
    client_name_en?: StringNullableFilter<"portfolio"> | string | null
    client_name_th?: StringNullableFilter<"portfolio"> | string | null
    industry?: StringNullableFilter<"portfolio"> | string | null
    challenge_en?: StringNullableFilter<"portfolio"> | string | null
    challenge_th?: StringNullableFilter<"portfolio"> | string | null
    solution_en?: StringNullableFilter<"portfolio"> | string | null
    solution_th?: StringNullableFilter<"portfolio"> | string | null
    result_en?: StringNullableFilter<"portfolio"> | string | null
    result_th?: StringNullableFilter<"portfolio"> | string | null
    cover_image?: StringNullableFilter<"portfolio"> | string | null
    completion_date?: DateTimeNullableFilter<"portfolio"> | Date | string | null
    website_url?: StringNullableFilter<"portfolio"> | string | null
    gallery?: JsonNullableFilter<"portfolio">
    tags?: JsonNullableFilter<"portfolio">
    tech_stack?: JsonNullableFilter<"portfolio">
    is_published?: IntFilter<"portfolio"> | number
    is_featured?: IntFilter<"portfolio"> | number
    sort_order?: IntNullableFilter<"portfolio"> | number | null
    created_at?: DateTimeFilter<"portfolio"> | Date | string
  }, "id" | "slug">

  export type portfolioOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    client_name_en?: SortOrderInput | SortOrder
    client_name_th?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    challenge_en?: SortOrderInput | SortOrder
    challenge_th?: SortOrderInput | SortOrder
    solution_en?: SortOrderInput | SortOrder
    solution_th?: SortOrderInput | SortOrder
    result_en?: SortOrderInput | SortOrder
    result_th?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    completion_date?: SortOrderInput | SortOrder
    website_url?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    tech_stack?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: portfolioCountOrderByAggregateInput
    _avg?: portfolioAvgOrderByAggregateInput
    _max?: portfolioMaxOrderByAggregateInput
    _min?: portfolioMinOrderByAggregateInput
    _sum?: portfolioSumOrderByAggregateInput
  }

  export type portfolioScalarWhereWithAggregatesInput = {
    AND?: portfolioScalarWhereWithAggregatesInput | portfolioScalarWhereWithAggregatesInput[]
    OR?: portfolioScalarWhereWithAggregatesInput[]
    NOT?: portfolioScalarWhereWithAggregatesInput | portfolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"portfolio"> | number
    slug?: StringWithAggregatesFilter<"portfolio"> | string
    title_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    content_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    client_name_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    client_name_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    industry?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    challenge_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    challenge_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    solution_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    solution_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    result_en?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    result_th?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    cover_image?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    completion_date?: DateTimeNullableWithAggregatesFilter<"portfolio"> | Date | string | null
    website_url?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    gallery?: JsonNullableWithAggregatesFilter<"portfolio">
    tags?: JsonNullableWithAggregatesFilter<"portfolio">
    tech_stack?: JsonNullableWithAggregatesFilter<"portfolio">
    is_published?: IntWithAggregatesFilter<"portfolio"> | number
    is_featured?: IntWithAggregatesFilter<"portfolio"> | number
    sort_order?: IntNullableWithAggregatesFilter<"portfolio"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"portfolio"> | Date | string
  }

  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    id?: IntFilter<"clients"> | number
    name?: StringNullableFilter<"clients"> | string | null
    logo_url?: StringNullableFilter<"clients"> | string | null
    category?: StringNullableFilter<"clients"> | string | null
    is_published?: IntFilter<"clients"> | number
    is_featured?: IntFilter<"clients"> | number
    sort_order?: IntNullableFilter<"clients"> | number | null
    created_at?: DateTimeFilter<"clients"> | Date | string
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    name?: StringNullableFilter<"clients"> | string | null
    logo_url?: StringNullableFilter<"clients"> | string | null
    category?: StringNullableFilter<"clients"> | string | null
    is_published?: IntFilter<"clients"> | number
    is_featured?: IntFilter<"clients"> | number
    sort_order?: IntNullableFilter<"clients"> | number | null
    created_at?: DateTimeFilter<"clients"> | Date | string
  }, "id">

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clients"> | number
    name?: StringNullableWithAggregatesFilter<"clients"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"clients"> | string | null
    category?: StringNullableWithAggregatesFilter<"clients"> | string | null
    is_published?: IntWithAggregatesFilter<"clients"> | number
    is_featured?: IntWithAggregatesFilter<"clients"> | number
    sort_order?: IntNullableWithAggregatesFilter<"clients"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"clients"> | Date | string
  }

  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    id?: IntFilter<"services"> | number
    slug?: StringFilter<"services"> | string
    title_en?: StringNullableFilter<"services"> | string | null
    title_th?: StringNullableFilter<"services"> | string | null
    description_en?: StringNullableFilter<"services"> | string | null
    description_th?: StringNullableFilter<"services"> | string | null
    content_en?: StringNullableFilter<"services"> | string | null
    content_th?: StringNullableFilter<"services"> | string | null
    icon?: StringNullableFilter<"services"> | string | null
    image_url?: StringNullableFilter<"services"> | string | null
    is_published?: IntFilter<"services"> | number
    is_featured?: IntFilter<"services"> | number
    sort_order?: IntNullableFilter<"services"> | number | null
    created_at?: DateTimeFilter<"services"> | Date | string
  }

  export type servicesOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    title_en?: StringNullableFilter<"services"> | string | null
    title_th?: StringNullableFilter<"services"> | string | null
    description_en?: StringNullableFilter<"services"> | string | null
    description_th?: StringNullableFilter<"services"> | string | null
    content_en?: StringNullableFilter<"services"> | string | null
    content_th?: StringNullableFilter<"services"> | string | null
    icon?: StringNullableFilter<"services"> | string | null
    image_url?: StringNullableFilter<"services"> | string | null
    is_published?: IntFilter<"services"> | number
    is_featured?: IntFilter<"services"> | number
    sort_order?: IntNullableFilter<"services"> | number | null
    created_at?: DateTimeFilter<"services"> | Date | string
  }, "id" | "slug">

  export type servicesOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"services"> | number
    slug?: StringWithAggregatesFilter<"services"> | string
    title_en?: StringNullableWithAggregatesFilter<"services"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"services"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"services"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"services"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"services"> | string | null
    content_th?: StringNullableWithAggregatesFilter<"services"> | string | null
    icon?: StringNullableWithAggregatesFilter<"services"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"services"> | string | null
    is_published?: IntWithAggregatesFilter<"services"> | number
    is_featured?: IntWithAggregatesFilter<"services"> | number
    sort_order?: IntNullableWithAggregatesFilter<"services"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"services"> | Date | string
  }

  export type pressWhereInput = {
    AND?: pressWhereInput | pressWhereInput[]
    OR?: pressWhereInput[]
    NOT?: pressWhereInput | pressWhereInput[]
    id?: IntFilter<"press"> | number
    slug?: StringFilter<"press"> | string
    title_en?: StringNullableFilter<"press"> | string | null
    title_th?: StringNullableFilter<"press"> | string | null
    category?: StringNullableFilter<"press"> | string | null
    image_url?: StringNullableFilter<"press"> | string | null
    author?: StringNullableFilter<"press"> | string | null
    excerpt_en?: StringNullableFilter<"press"> | string | null
    excerpt_th?: StringNullableFilter<"press"> | string | null
    content_en?: StringNullableFilter<"press"> | string | null
    content_th?: StringNullableFilter<"press"> | string | null
    is_published?: IntFilter<"press"> | number
    published_at?: DateTimeFilter<"press"> | Date | string
    created_at?: DateTimeFilter<"press"> | Date | string
  }

  export type pressOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    excerpt_en?: SortOrderInput | SortOrder
    excerpt_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type pressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: pressWhereInput | pressWhereInput[]
    OR?: pressWhereInput[]
    NOT?: pressWhereInput | pressWhereInput[]
    title_en?: StringNullableFilter<"press"> | string | null
    title_th?: StringNullableFilter<"press"> | string | null
    category?: StringNullableFilter<"press"> | string | null
    image_url?: StringNullableFilter<"press"> | string | null
    author?: StringNullableFilter<"press"> | string | null
    excerpt_en?: StringNullableFilter<"press"> | string | null
    excerpt_th?: StringNullableFilter<"press"> | string | null
    content_en?: StringNullableFilter<"press"> | string | null
    content_th?: StringNullableFilter<"press"> | string | null
    is_published?: IntFilter<"press"> | number
    published_at?: DateTimeFilter<"press"> | Date | string
    created_at?: DateTimeFilter<"press"> | Date | string
  }, "id" | "slug">

  export type pressOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    excerpt_en?: SortOrderInput | SortOrder
    excerpt_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    _count?: pressCountOrderByAggregateInput
    _avg?: pressAvgOrderByAggregateInput
    _max?: pressMaxOrderByAggregateInput
    _min?: pressMinOrderByAggregateInput
    _sum?: pressSumOrderByAggregateInput
  }

  export type pressScalarWhereWithAggregatesInput = {
    AND?: pressScalarWhereWithAggregatesInput | pressScalarWhereWithAggregatesInput[]
    OR?: pressScalarWhereWithAggregatesInput[]
    NOT?: pressScalarWhereWithAggregatesInput | pressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"press"> | number
    slug?: StringWithAggregatesFilter<"press"> | string
    title_en?: StringNullableWithAggregatesFilter<"press"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"press"> | string | null
    category?: StringNullableWithAggregatesFilter<"press"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"press"> | string | null
    author?: StringNullableWithAggregatesFilter<"press"> | string | null
    excerpt_en?: StringNullableWithAggregatesFilter<"press"> | string | null
    excerpt_th?: StringNullableWithAggregatesFilter<"press"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"press"> | string | null
    content_th?: StringNullableWithAggregatesFilter<"press"> | string | null
    is_published?: IntWithAggregatesFilter<"press"> | number
    published_at?: DateTimeWithAggregatesFilter<"press"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"press"> | Date | string
  }

  export type careersWhereInput = {
    AND?: careersWhereInput | careersWhereInput[]
    OR?: careersWhereInput[]
    NOT?: careersWhereInput | careersWhereInput[]
    id?: IntFilter<"careers"> | number
    slug?: StringFilter<"careers"> | string
    title_en?: StringNullableFilter<"careers"> | string | null
    title_th?: StringNullableFilter<"careers"> | string | null
    department?: StringNullableFilter<"careers"> | string | null
    location?: StringNullableFilter<"careers"> | string | null
    employment_type?: StringNullableFilter<"careers"> | string | null
    description_en?: StringNullableFilter<"careers"> | string | null
    description_th?: StringNullableFilter<"careers"> | string | null
    requirements_en?: StringNullableFilter<"careers"> | string | null
    requirements_th?: StringNullableFilter<"careers"> | string | null
    responsibilities_en?: StringNullableFilter<"careers"> | string | null
    responsibilities_th?: StringNullableFilter<"careers"> | string | null
    status?: StringFilter<"careers"> | string
    created_at?: DateTimeFilter<"careers"> | Date | string
    applicants?: ApplicantsListRelationFilter
  }

  export type careersOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    employment_type?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    requirements_en?: SortOrderInput | SortOrder
    requirements_th?: SortOrderInput | SortOrder
    responsibilities_en?: SortOrderInput | SortOrder
    responsibilities_th?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    applicants?: applicantsOrderByRelationAggregateInput
  }

  export type careersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: careersWhereInput | careersWhereInput[]
    OR?: careersWhereInput[]
    NOT?: careersWhereInput | careersWhereInput[]
    title_en?: StringNullableFilter<"careers"> | string | null
    title_th?: StringNullableFilter<"careers"> | string | null
    department?: StringNullableFilter<"careers"> | string | null
    location?: StringNullableFilter<"careers"> | string | null
    employment_type?: StringNullableFilter<"careers"> | string | null
    description_en?: StringNullableFilter<"careers"> | string | null
    description_th?: StringNullableFilter<"careers"> | string | null
    requirements_en?: StringNullableFilter<"careers"> | string | null
    requirements_th?: StringNullableFilter<"careers"> | string | null
    responsibilities_en?: StringNullableFilter<"careers"> | string | null
    responsibilities_th?: StringNullableFilter<"careers"> | string | null
    status?: StringFilter<"careers"> | string
    created_at?: DateTimeFilter<"careers"> | Date | string
    applicants?: ApplicantsListRelationFilter
  }, "id" | "slug">

  export type careersOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    employment_type?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    requirements_en?: SortOrderInput | SortOrder
    requirements_th?: SortOrderInput | SortOrder
    responsibilities_en?: SortOrderInput | SortOrder
    responsibilities_th?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: careersCountOrderByAggregateInput
    _avg?: careersAvgOrderByAggregateInput
    _max?: careersMaxOrderByAggregateInput
    _min?: careersMinOrderByAggregateInput
    _sum?: careersSumOrderByAggregateInput
  }

  export type careersScalarWhereWithAggregatesInput = {
    AND?: careersScalarWhereWithAggregatesInput | careersScalarWhereWithAggregatesInput[]
    OR?: careersScalarWhereWithAggregatesInput[]
    NOT?: careersScalarWhereWithAggregatesInput | careersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"careers"> | number
    slug?: StringWithAggregatesFilter<"careers"> | string
    title_en?: StringNullableWithAggregatesFilter<"careers"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"careers"> | string | null
    department?: StringNullableWithAggregatesFilter<"careers"> | string | null
    location?: StringNullableWithAggregatesFilter<"careers"> | string | null
    employment_type?: StringNullableWithAggregatesFilter<"careers"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"careers"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"careers"> | string | null
    requirements_en?: StringNullableWithAggregatesFilter<"careers"> | string | null
    requirements_th?: StringNullableWithAggregatesFilter<"careers"> | string | null
    responsibilities_en?: StringNullableWithAggregatesFilter<"careers"> | string | null
    responsibilities_th?: StringNullableWithAggregatesFilter<"careers"> | string | null
    status?: StringWithAggregatesFilter<"careers"> | string
    created_at?: DateTimeWithAggregatesFilter<"careers"> | Date | string
  }

  export type applicantsWhereInput = {
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    id?: IntFilter<"applicants"> | number
    career_id?: IntNullableFilter<"applicants"> | number | null
    name?: StringNullableFilter<"applicants"> | string | null
    email?: StringNullableFilter<"applicants"> | string | null
    phone?: StringNullableFilter<"applicants"> | string | null
    cv_url?: StringNullableFilter<"applicants"> | string | null
    notes?: StringNullableFilter<"applicants"> | string | null
    status?: StringFilter<"applicants"> | string
    created_at?: DateTimeFilter<"applicants"> | Date | string
    careers?: XOR<CareersNullableScalarRelationFilter, careersWhereInput> | null
  }

  export type applicantsOrderByWithRelationInput = {
    id?: SortOrder
    career_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    careers?: careersOrderByWithRelationInput
  }

  export type applicantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    career_id?: IntNullableFilter<"applicants"> | number | null
    name?: StringNullableFilter<"applicants"> | string | null
    email?: StringNullableFilter<"applicants"> | string | null
    phone?: StringNullableFilter<"applicants"> | string | null
    cv_url?: StringNullableFilter<"applicants"> | string | null
    notes?: StringNullableFilter<"applicants"> | string | null
    status?: StringFilter<"applicants"> | string
    created_at?: DateTimeFilter<"applicants"> | Date | string
    careers?: XOR<CareersNullableScalarRelationFilter, careersWhereInput> | null
  }, "id">

  export type applicantsOrderByWithAggregationInput = {
    id?: SortOrder
    career_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: applicantsCountOrderByAggregateInput
    _avg?: applicantsAvgOrderByAggregateInput
    _max?: applicantsMaxOrderByAggregateInput
    _min?: applicantsMinOrderByAggregateInput
    _sum?: applicantsSumOrderByAggregateInput
  }

  export type applicantsScalarWhereWithAggregatesInput = {
    AND?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    OR?: applicantsScalarWhereWithAggregatesInput[]
    NOT?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"applicants"> | number
    career_id?: IntNullableWithAggregatesFilter<"applicants"> | number | null
    name?: StringNullableWithAggregatesFilter<"applicants"> | string | null
    email?: StringNullableWithAggregatesFilter<"applicants"> | string | null
    phone?: StringNullableWithAggregatesFilter<"applicants"> | string | null
    cv_url?: StringNullableWithAggregatesFilter<"applicants"> | string | null
    notes?: StringNullableWithAggregatesFilter<"applicants"> | string | null
    status?: StringWithAggregatesFilter<"applicants"> | string
    created_at?: DateTimeWithAggregatesFilter<"applicants"> | Date | string
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: IntFilter<"leads"> | number
    name?: StringNullableFilter<"leads"> | string | null
    email?: StringNullableFilter<"leads"> | string | null
    company?: StringNullableFilter<"leads"> | string | null
    phone?: StringNullableFilter<"leads"> | string | null
    message?: StringNullableFilter<"leads"> | string | null
    status?: StringFilter<"leads"> | string
    notes?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeFilter<"leads"> | Date | string
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    name?: StringNullableFilter<"leads"> | string | null
    email?: StringNullableFilter<"leads"> | string | null
    company?: StringNullableFilter<"leads"> | string | null
    phone?: StringNullableFilter<"leads"> | string | null
    message?: StringNullableFilter<"leads"> | string | null
    status?: StringFilter<"leads"> | string
    notes?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeFilter<"leads"> | Date | string
  }, "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leads"> | number
    name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    email?: StringNullableWithAggregatesFilter<"leads"> | string | null
    company?: StringNullableWithAggregatesFilter<"leads"> | string | null
    phone?: StringNullableWithAggregatesFilter<"leads"> | string | null
    message?: StringNullableWithAggregatesFilter<"leads"> | string | null
    status?: StringWithAggregatesFilter<"leads"> | string
    notes?: StringNullableWithAggregatesFilter<"leads"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"leads"> | Date | string
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    id?: IntFilter<"media"> | number
    filename?: StringNullableFilter<"media"> | string | null
    url?: StringNullableFilter<"media"> | string | null
    alt_text?: StringNullableFilter<"media"> | string | null
    folder?: StringFilter<"media"> | string
    created_at?: DateTimeFilter<"media"> | Date | string
  }

  export type mediaOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    folder?: SortOrder
    created_at?: SortOrder
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    filename?: StringNullableFilter<"media"> | string | null
    url?: StringNullableFilter<"media"> | string | null
    alt_text?: StringNullableFilter<"media"> | string | null
    folder?: StringFilter<"media"> | string
    created_at?: DateTimeFilter<"media"> | Date | string
  }, "id">

  export type mediaOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    folder?: SortOrder
    created_at?: SortOrder
    _count?: mediaCountOrderByAggregateInput
    _avg?: mediaAvgOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
    _sum?: mediaSumOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"media"> | number
    filename?: StringNullableWithAggregatesFilter<"media"> | string | null
    url?: StringNullableWithAggregatesFilter<"media"> | string | null
    alt_text?: StringNullableWithAggregatesFilter<"media"> | string | null
    folder?: StringWithAggregatesFilter<"media"> | string
    created_at?: DateTimeWithAggregatesFilter<"media"> | Date | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: IntFilter<"settings"> | number
    key?: StringFilter<"settings"> | string
    value?: JsonNullableFilter<"settings">
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    value?: JsonNullableFilter<"settings">
  }, "id" | "key">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"settings"> | number
    key?: StringWithAggregatesFilter<"settings"> | string
    value?: JsonNullableWithAggregatesFilter<"settings">
  }

  export type ai_knowledgeWhereInput = {
    AND?: ai_knowledgeWhereInput | ai_knowledgeWhereInput[]
    OR?: ai_knowledgeWhereInput[]
    NOT?: ai_knowledgeWhereInput | ai_knowledgeWhereInput[]
    id?: IntFilter<"ai_knowledge"> | number
    title?: StringNullableFilter<"ai_knowledge"> | string | null
    content?: StringNullableFilter<"ai_knowledge"> | string | null
    category?: StringNullableFilter<"ai_knowledge"> | string | null
    is_active?: IntFilter<"ai_knowledge"> | number
    created_at?: DateTimeFilter<"ai_knowledge"> | Date | string
  }

  export type ai_knowledgeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ai_knowledgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ai_knowledgeWhereInput | ai_knowledgeWhereInput[]
    OR?: ai_knowledgeWhereInput[]
    NOT?: ai_knowledgeWhereInput | ai_knowledgeWhereInput[]
    title?: StringNullableFilter<"ai_knowledge"> | string | null
    content?: StringNullableFilter<"ai_knowledge"> | string | null
    category?: StringNullableFilter<"ai_knowledge"> | string | null
    is_active?: IntFilter<"ai_knowledge"> | number
    created_at?: DateTimeFilter<"ai_knowledge"> | Date | string
  }, "id">

  export type ai_knowledgeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: ai_knowledgeCountOrderByAggregateInput
    _avg?: ai_knowledgeAvgOrderByAggregateInput
    _max?: ai_knowledgeMaxOrderByAggregateInput
    _min?: ai_knowledgeMinOrderByAggregateInput
    _sum?: ai_knowledgeSumOrderByAggregateInput
  }

  export type ai_knowledgeScalarWhereWithAggregatesInput = {
    AND?: ai_knowledgeScalarWhereWithAggregatesInput | ai_knowledgeScalarWhereWithAggregatesInput[]
    OR?: ai_knowledgeScalarWhereWithAggregatesInput[]
    NOT?: ai_knowledgeScalarWhereWithAggregatesInput | ai_knowledgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ai_knowledge"> | number
    title?: StringNullableWithAggregatesFilter<"ai_knowledge"> | string | null
    content?: StringNullableWithAggregatesFilter<"ai_knowledge"> | string | null
    category?: StringNullableWithAggregatesFilter<"ai_knowledge"> | string | null
    is_active?: IntWithAggregatesFilter<"ai_knowledge"> | number
    created_at?: DateTimeWithAggregatesFilter<"ai_knowledge"> | Date | string
  }

  export type ai_logsWhereInput = {
    AND?: ai_logsWhereInput | ai_logsWhereInput[]
    OR?: ai_logsWhereInput[]
    NOT?: ai_logsWhereInput | ai_logsWhereInput[]
    id?: IntFilter<"ai_logs"> | number
    session_id?: StringNullableFilter<"ai_logs"> | string | null
    user_message?: StringNullableFilter<"ai_logs"> | string | null
    ai_response?: StringNullableFilter<"ai_logs"> | string | null
    sentiment?: StringNullableFilter<"ai_logs"> | string | null
    is_lead_captured?: IntFilter<"ai_logs"> | number
    created_at?: DateTimeFilter<"ai_logs"> | Date | string
  }

  export type ai_logsOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_message?: SortOrderInput | SortOrder
    ai_response?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    is_lead_captured?: SortOrder
    created_at?: SortOrder
  }

  export type ai_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ai_logsWhereInput | ai_logsWhereInput[]
    OR?: ai_logsWhereInput[]
    NOT?: ai_logsWhereInput | ai_logsWhereInput[]
    session_id?: StringNullableFilter<"ai_logs"> | string | null
    user_message?: StringNullableFilter<"ai_logs"> | string | null
    ai_response?: StringNullableFilter<"ai_logs"> | string | null
    sentiment?: StringNullableFilter<"ai_logs"> | string | null
    is_lead_captured?: IntFilter<"ai_logs"> | number
    created_at?: DateTimeFilter<"ai_logs"> | Date | string
  }, "id">

  export type ai_logsOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_message?: SortOrderInput | SortOrder
    ai_response?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    is_lead_captured?: SortOrder
    created_at?: SortOrder
    _count?: ai_logsCountOrderByAggregateInput
    _avg?: ai_logsAvgOrderByAggregateInput
    _max?: ai_logsMaxOrderByAggregateInput
    _min?: ai_logsMinOrderByAggregateInput
    _sum?: ai_logsSumOrderByAggregateInput
  }

  export type ai_logsScalarWhereWithAggregatesInput = {
    AND?: ai_logsScalarWhereWithAggregatesInput | ai_logsScalarWhereWithAggregatesInput[]
    OR?: ai_logsScalarWhereWithAggregatesInput[]
    NOT?: ai_logsScalarWhereWithAggregatesInput | ai_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ai_logs"> | number
    session_id?: StringNullableWithAggregatesFilter<"ai_logs"> | string | null
    user_message?: StringNullableWithAggregatesFilter<"ai_logs"> | string | null
    ai_response?: StringNullableWithAggregatesFilter<"ai_logs"> | string | null
    sentiment?: StringNullableWithAggregatesFilter<"ai_logs"> | string | null
    is_lead_captured?: IntWithAggregatesFilter<"ai_logs"> | number
    created_at?: DateTimeWithAggregatesFilter<"ai_logs"> | Date | string
  }

  export type ai_image_historyWhereInput = {
    AND?: ai_image_historyWhereInput | ai_image_historyWhereInput[]
    OR?: ai_image_historyWhereInput[]
    NOT?: ai_image_historyWhereInput | ai_image_historyWhereInput[]
    id?: IntFilter<"ai_image_history"> | number
    prompt?: StringNullableFilter<"ai_image_history"> | string | null
    image_url?: StringNullableFilter<"ai_image_history"> | string | null
    created_at?: DateTimeFilter<"ai_image_history"> | Date | string
  }

  export type ai_image_historyOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ai_image_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ai_image_historyWhereInput | ai_image_historyWhereInput[]
    OR?: ai_image_historyWhereInput[]
    NOT?: ai_image_historyWhereInput | ai_image_historyWhereInput[]
    prompt?: StringNullableFilter<"ai_image_history"> | string | null
    image_url?: StringNullableFilter<"ai_image_history"> | string | null
    created_at?: DateTimeFilter<"ai_image_history"> | Date | string
  }, "id">

  export type ai_image_historyOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ai_image_historyCountOrderByAggregateInput
    _avg?: ai_image_historyAvgOrderByAggregateInput
    _max?: ai_image_historyMaxOrderByAggregateInput
    _min?: ai_image_historyMinOrderByAggregateInput
    _sum?: ai_image_historySumOrderByAggregateInput
  }

  export type ai_image_historyScalarWhereWithAggregatesInput = {
    AND?: ai_image_historyScalarWhereWithAggregatesInput | ai_image_historyScalarWhereWithAggregatesInput[]
    OR?: ai_image_historyScalarWhereWithAggregatesInput[]
    NOT?: ai_image_historyScalarWhereWithAggregatesInput | ai_image_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ai_image_history"> | number
    prompt?: StringNullableWithAggregatesFilter<"ai_image_history"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"ai_image_history"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ai_image_history"> | Date | string
  }

  export type hero_bannersWhereInput = {
    AND?: hero_bannersWhereInput | hero_bannersWhereInput[]
    OR?: hero_bannersWhereInput[]
    NOT?: hero_bannersWhereInput | hero_bannersWhereInput[]
    id?: IntFilter<"hero_banners"> | number
    title_en?: StringNullableFilter<"hero_banners"> | string | null
    title_th?: StringNullableFilter<"hero_banners"> | string | null
    subtitle_en?: StringNullableFilter<"hero_banners"> | string | null
    subtitle_th?: StringNullableFilter<"hero_banners"> | string | null
    description_en?: StringNullableFilter<"hero_banners"> | string | null
    description_th?: StringNullableFilter<"hero_banners"> | string | null
    media_type?: StringFilter<"hero_banners"> | string
    media_url?: StringNullableFilter<"hero_banners"> | string | null
    button_text_en?: StringNullableFilter<"hero_banners"> | string | null
    button_text_th?: StringNullableFilter<"hero_banners"> | string | null
    button_link?: StringNullableFilter<"hero_banners"> | string | null
    sort_order?: IntFilter<"hero_banners"> | number
    is_active?: IntFilter<"hero_banners"> | number
    created_at?: DateTimeFilter<"hero_banners"> | Date | string
  }

  export type hero_bannersOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    subtitle_en?: SortOrderInput | SortOrder
    subtitle_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    media_type?: SortOrder
    media_url?: SortOrderInput | SortOrder
    button_text_en?: SortOrderInput | SortOrder
    button_text_th?: SortOrderInput | SortOrder
    button_link?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type hero_bannersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hero_bannersWhereInput | hero_bannersWhereInput[]
    OR?: hero_bannersWhereInput[]
    NOT?: hero_bannersWhereInput | hero_bannersWhereInput[]
    title_en?: StringNullableFilter<"hero_banners"> | string | null
    title_th?: StringNullableFilter<"hero_banners"> | string | null
    subtitle_en?: StringNullableFilter<"hero_banners"> | string | null
    subtitle_th?: StringNullableFilter<"hero_banners"> | string | null
    description_en?: StringNullableFilter<"hero_banners"> | string | null
    description_th?: StringNullableFilter<"hero_banners"> | string | null
    media_type?: StringFilter<"hero_banners"> | string
    media_url?: StringNullableFilter<"hero_banners"> | string | null
    button_text_en?: StringNullableFilter<"hero_banners"> | string | null
    button_text_th?: StringNullableFilter<"hero_banners"> | string | null
    button_link?: StringNullableFilter<"hero_banners"> | string | null
    sort_order?: IntFilter<"hero_banners"> | number
    is_active?: IntFilter<"hero_banners"> | number
    created_at?: DateTimeFilter<"hero_banners"> | Date | string
  }, "id">

  export type hero_bannersOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    subtitle_en?: SortOrderInput | SortOrder
    subtitle_th?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_th?: SortOrderInput | SortOrder
    media_type?: SortOrder
    media_url?: SortOrderInput | SortOrder
    button_text_en?: SortOrderInput | SortOrder
    button_text_th?: SortOrderInput | SortOrder
    button_link?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: hero_bannersCountOrderByAggregateInput
    _avg?: hero_bannersAvgOrderByAggregateInput
    _max?: hero_bannersMaxOrderByAggregateInput
    _min?: hero_bannersMinOrderByAggregateInput
    _sum?: hero_bannersSumOrderByAggregateInput
  }

  export type hero_bannersScalarWhereWithAggregatesInput = {
    AND?: hero_bannersScalarWhereWithAggregatesInput | hero_bannersScalarWhereWithAggregatesInput[]
    OR?: hero_bannersScalarWhereWithAggregatesInput[]
    NOT?: hero_bannersScalarWhereWithAggregatesInput | hero_bannersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hero_banners"> | number
    title_en?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    subtitle_en?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    subtitle_th?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    description_th?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    media_type?: StringWithAggregatesFilter<"hero_banners"> | string
    media_url?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    button_text_en?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    button_text_th?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    button_link?: StringNullableWithAggregatesFilter<"hero_banners"> | string | null
    sort_order?: IntWithAggregatesFilter<"hero_banners"> | number
    is_active?: IntWithAggregatesFilter<"hero_banners"> | number
    created_at?: DateTimeWithAggregatesFilter<"hero_banners"> | Date | string
  }

  export type changelogWhereInput = {
    AND?: changelogWhereInput | changelogWhereInput[]
    OR?: changelogWhereInput[]
    NOT?: changelogWhereInput | changelogWhereInput[]
    id?: IntFilter<"changelog"> | number
    version?: StringNullableFilter<"changelog"> | string | null
    title_en?: StringNullableFilter<"changelog"> | string | null
    title_th?: StringNullableFilter<"changelog"> | string | null
    content_en?: StringNullableFilter<"changelog"> | string | null
    content_th?: StringNullableFilter<"changelog"> | string | null
    type?: StringFilter<"changelog"> | string
    is_published?: IntFilter<"changelog"> | number
    published_at?: DateTimeFilter<"changelog"> | Date | string
    created_at?: DateTimeFilter<"changelog"> | Date | string
  }

  export type changelogOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    type?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type changelogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: changelogWhereInput | changelogWhereInput[]
    OR?: changelogWhereInput[]
    NOT?: changelogWhereInput | changelogWhereInput[]
    version?: StringNullableFilter<"changelog"> | string | null
    title_en?: StringNullableFilter<"changelog"> | string | null
    title_th?: StringNullableFilter<"changelog"> | string | null
    content_en?: StringNullableFilter<"changelog"> | string | null
    content_th?: StringNullableFilter<"changelog"> | string | null
    type?: StringFilter<"changelog"> | string
    is_published?: IntFilter<"changelog"> | number
    published_at?: DateTimeFilter<"changelog"> | Date | string
    created_at?: DateTimeFilter<"changelog"> | Date | string
  }, "id">

  export type changelogOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    content_th?: SortOrderInput | SortOrder
    type?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    _count?: changelogCountOrderByAggregateInput
    _avg?: changelogAvgOrderByAggregateInput
    _max?: changelogMaxOrderByAggregateInput
    _min?: changelogMinOrderByAggregateInput
    _sum?: changelogSumOrderByAggregateInput
  }

  export type changelogScalarWhereWithAggregatesInput = {
    AND?: changelogScalarWhereWithAggregatesInput | changelogScalarWhereWithAggregatesInput[]
    OR?: changelogScalarWhereWithAggregatesInput[]
    NOT?: changelogScalarWhereWithAggregatesInput | changelogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"changelog"> | number
    version?: StringNullableWithAggregatesFilter<"changelog"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"changelog"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"changelog"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"changelog"> | string | null
    content_th?: StringNullableWithAggregatesFilter<"changelog"> | string | null
    type?: StringWithAggregatesFilter<"changelog"> | string
    is_published?: IntWithAggregatesFilter<"changelog"> | number
    published_at?: DateTimeWithAggregatesFilter<"changelog"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"changelog"> | Date | string
  }

  export type userCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: string | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string | null
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: string | null
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type homepage_sectionsCreateInput = {
    section_key: string
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    is_visible?: number
    sort_order?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsUncheckedCreateInput = {
    id?: number
    section_key: string
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    is_visible?: number
    sort_order?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsUpdateInput = {
    section_key?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    section_key?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsCreateManyInput = {
    id?: number
    section_key: string
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    is_visible?: number
    sort_order?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsUpdateManyMutationInput = {
    section_key?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type homepage_sectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    section_key?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type solutionsCreateInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    category?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type solutionsUncheckedCreateInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    category?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type solutionsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solutionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solutionsCreateManyInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    category?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type solutionsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type solutionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type portfolioCreateInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    client_name_en?: string | null
    client_name_th?: string | null
    industry?: string | null
    challenge_en?: string | null
    challenge_th?: string | null
    solution_en?: string | null
    solution_th?: string | null
    result_en?: string | null
    result_th?: string | null
    cover_image?: string | null
    completion_date?: Date | string | null
    website_url?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type portfolioUncheckedCreateInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    client_name_en?: string | null
    client_name_th?: string | null
    industry?: string | null
    challenge_en?: string | null
    challenge_th?: string | null
    solution_en?: string | null
    solution_th?: string | null
    result_en?: string | null
    result_th?: string | null
    cover_image?: string | null
    completion_date?: Date | string | null
    website_url?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type portfolioUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_th?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_en?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_th?: NullableStringFieldUpdateOperationsInput | string | null
    solution_en?: NullableStringFieldUpdateOperationsInput | string | null
    solution_th?: NullableStringFieldUpdateOperationsInput | string | null
    result_en?: NullableStringFieldUpdateOperationsInput | string | null
    result_th?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type portfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_th?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_en?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_th?: NullableStringFieldUpdateOperationsInput | string | null
    solution_en?: NullableStringFieldUpdateOperationsInput | string | null
    solution_th?: NullableStringFieldUpdateOperationsInput | string | null
    result_en?: NullableStringFieldUpdateOperationsInput | string | null
    result_th?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type portfolioCreateManyInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    client_name_en?: string | null
    client_name_th?: string | null
    industry?: string | null
    challenge_en?: string | null
    challenge_th?: string | null
    solution_en?: string | null
    solution_th?: string | null
    result_en?: string | null
    result_th?: string | null
    cover_image?: string | null
    completion_date?: Date | string | null
    website_url?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type portfolioUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_th?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_en?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_th?: NullableStringFieldUpdateOperationsInput | string | null
    solution_en?: NullableStringFieldUpdateOperationsInput | string | null
    solution_th?: NullableStringFieldUpdateOperationsInput | string | null
    result_en?: NullableStringFieldUpdateOperationsInput | string | null
    result_th?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type portfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    client_name_th?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_en?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_th?: NullableStringFieldUpdateOperationsInput | string | null
    solution_en?: NullableStringFieldUpdateOperationsInput | string | null
    solution_th?: NullableStringFieldUpdateOperationsInput | string | null
    result_en?: NullableStringFieldUpdateOperationsInput | string | null
    result_th?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    tech_stack?: NullableJsonNullValueInput | InputJsonValue
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsCreateInput = {
    name?: string | null
    logo_url?: string | null
    category?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type clientsUncheckedCreateInput = {
    id?: number
    name?: string | null
    logo_url?: string | null
    category?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type clientsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsCreateManyInput = {
    id?: number
    name?: string | null
    logo_url?: string | null
    category?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type clientsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesCreateInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type servicesUncheckedCreateInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type servicesUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesCreateManyInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    description_en?: string | null
    description_th?: string | null
    content_en?: string | null
    content_th?: string | null
    icon?: string | null
    image_url?: string | null
    is_published?: number
    is_featured?: number
    sort_order?: number | null
    created_at?: Date | string
  }

  export type servicesUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    is_featured?: IntFieldUpdateOperationsInput | number
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pressCreateInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    category?: string | null
    image_url?: string | null
    author?: string | null
    excerpt_en?: string | null
    excerpt_th?: string | null
    content_en?: string | null
    content_th?: string | null
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type pressUncheckedCreateInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    category?: string | null
    image_url?: string | null
    author?: string | null
    excerpt_en?: string | null
    excerpt_th?: string | null
    content_en?: string | null
    content_th?: string | null
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type pressUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_en?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_en?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pressCreateManyInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    category?: string | null
    image_url?: string | null
    author?: string | null
    excerpt_en?: string | null
    excerpt_th?: string | null
    content_en?: string | null
    content_th?: string | null
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type pressUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_en?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_en?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type careersCreateInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    department?: string | null
    location?: string | null
    employment_type?: string | null
    description_en?: string | null
    description_th?: string | null
    requirements_en?: string | null
    requirements_th?: string | null
    responsibilities_en?: string | null
    responsibilities_th?: string | null
    status?: string
    created_at?: Date | string
    applicants?: applicantsCreateNestedManyWithoutCareersInput
  }

  export type careersUncheckedCreateInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    department?: string | null
    location?: string | null
    employment_type?: string | null
    description_en?: string | null
    description_th?: string | null
    requirements_en?: string | null
    requirements_th?: string | null
    responsibilities_en?: string | null
    responsibilities_th?: string | null
    status?: string
    created_at?: Date | string
    applicants?: applicantsUncheckedCreateNestedManyWithoutCareersInput
  }

  export type careersUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applicants?: applicantsUpdateManyWithoutCareersNestedInput
  }

  export type careersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applicants?: applicantsUncheckedUpdateManyWithoutCareersNestedInput
  }

  export type careersCreateManyInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    department?: string | null
    location?: string | null
    employment_type?: string | null
    description_en?: string | null
    description_th?: string | null
    requirements_en?: string | null
    requirements_th?: string | null
    responsibilities_en?: string | null
    responsibilities_th?: string | null
    status?: string
    created_at?: Date | string
  }

  export type careersUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type careersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
    careers?: careersCreateNestedOneWithoutApplicantsInput
  }

  export type applicantsUncheckedCreateInput = {
    id?: number
    career_id?: number | null
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
  }

  export type applicantsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: careersUpdateOneWithoutApplicantsNestedInput
  }

  export type applicantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    career_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateManyInput = {
    id?: number
    career_id?: number | null
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
  }

  export type applicantsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    career_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateInput = {
    name?: string | null
    email?: string | null
    company?: string | null
    phone?: string | null
    message?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
  }

  export type leadsUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    company?: string | null
    phone?: string | null
    message?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
  }

  export type leadsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    company?: string | null
    phone?: string | null
    message?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
  }

  export type leadsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaCreateInput = {
    filename?: string | null
    url?: string | null
    alt_text?: string | null
    folder?: string
    created_at?: Date | string
  }

  export type mediaUncheckedCreateInput = {
    id?: number
    filename?: string | null
    url?: string | null
    alt_text?: string | null
    folder?: string
    created_at?: Date | string
  }

  export type mediaUpdateInput = {
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaCreateManyInput = {
    id?: number
    filename?: string | null
    url?: string | null
    alt_text?: string | null
    folder?: string
    created_at?: Date | string
  }

  export type mediaUpdateManyMutationInput = {
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    folder?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateInput = {
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsUncheckedCreateInput = {
    id?: number
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsCreateManyInput = {
    id?: number
    key: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ai_knowledgeCreateInput = {
    title?: string | null
    content?: string | null
    category?: string | null
    is_active?: number
    created_at?: Date | string
  }

  export type ai_knowledgeUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    category?: string | null
    is_active?: number
    created_at?: Date | string
  }

  export type ai_knowledgeUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_knowledgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_knowledgeCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    category?: string | null
    is_active?: number
    created_at?: Date | string
  }

  export type ai_knowledgeUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_knowledgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_logsCreateInput = {
    session_id?: string | null
    user_message?: string | null
    ai_response?: string | null
    sentiment?: string | null
    is_lead_captured?: number
    created_at?: Date | string
  }

  export type ai_logsUncheckedCreateInput = {
    id?: number
    session_id?: string | null
    user_message?: string | null
    ai_response?: string | null
    sentiment?: string | null
    is_lead_captured?: number
    created_at?: Date | string
  }

  export type ai_logsUpdateInput = {
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    ai_response?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    is_lead_captured?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    ai_response?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    is_lead_captured?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_logsCreateManyInput = {
    id?: number
    session_id?: string | null
    user_message?: string | null
    ai_response?: string | null
    sentiment?: string | null
    is_lead_captured?: number
    created_at?: Date | string
  }

  export type ai_logsUpdateManyMutationInput = {
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    ai_response?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    is_lead_captured?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    ai_response?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    is_lead_captured?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_image_historyCreateInput = {
    prompt?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type ai_image_historyUncheckedCreateInput = {
    id?: number
    prompt?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type ai_image_historyUpdateInput = {
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_image_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_image_historyCreateManyInput = {
    id?: number
    prompt?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type ai_image_historyUpdateManyMutationInput = {
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_image_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hero_bannersCreateInput = {
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    media_type?: string
    media_url?: string | null
    button_text_en?: string | null
    button_text_th?: string | null
    button_link?: string | null
    sort_order?: number
    is_active?: number
    created_at?: Date | string
  }

  export type hero_bannersUncheckedCreateInput = {
    id?: number
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    media_type?: string
    media_url?: string | null
    button_text_en?: string | null
    button_text_th?: string | null
    button_link?: string | null
    sort_order?: number
    is_active?: number
    created_at?: Date | string
  }

  export type hero_bannersUpdateInput = {
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    media_type?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_en?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_th?: NullableStringFieldUpdateOperationsInput | string | null
    button_link?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hero_bannersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    media_type?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_en?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_th?: NullableStringFieldUpdateOperationsInput | string | null
    button_link?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hero_bannersCreateManyInput = {
    id?: number
    title_en?: string | null
    title_th?: string | null
    subtitle_en?: string | null
    subtitle_th?: string | null
    description_en?: string | null
    description_th?: string | null
    media_type?: string
    media_url?: string | null
    button_text_en?: string | null
    button_text_th?: string | null
    button_link?: string | null
    sort_order?: number
    is_active?: number
    created_at?: Date | string
  }

  export type hero_bannersUpdateManyMutationInput = {
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    media_type?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_en?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_th?: NullableStringFieldUpdateOperationsInput | string | null
    button_link?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hero_bannersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle_th?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    media_type?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_en?: NullableStringFieldUpdateOperationsInput | string | null
    button_text_th?: NullableStringFieldUpdateOperationsInput | string | null
    button_link?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type changelogCreateInput = {
    version?: string | null
    title_en?: string | null
    title_th?: string | null
    content_en?: string | null
    content_th?: string | null
    type?: string
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type changelogUncheckedCreateInput = {
    id?: number
    version?: string | null
    title_en?: string | null
    title_th?: string | null
    content_en?: string | null
    content_th?: string | null
    type?: string
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type changelogUpdateInput = {
    version?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type changelogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type changelogCreateManyInput = {
    id?: number
    version?: string | null
    title_en?: string | null
    title_th?: string | null
    content_en?: string | null
    content_th?: string | null
    type?: string
    is_published?: number
    published_at?: Date | string
    created_at?: Date | string
  }

  export type changelogUpdateManyMutationInput = {
    version?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type changelogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    content_th?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    is_published?: IntFieldUpdateOperationsInput | number
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type homepage_sectionsCountOrderByAggregateInput = {
    id?: SortOrder
    section_key?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrder
    data?: SortOrder
  }

  export type homepage_sectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrder
  }

  export type homepage_sectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    section_key?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrder
  }

  export type homepage_sectionsMinOrderByAggregateInput = {
    id?: SortOrder
    section_key?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrder
  }

  export type homepage_sectionsSumOrderByAggregateInput = {
    id?: SortOrder
    is_visible?: SortOrder
    sort_order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type solutionsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type solutionsAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type solutionsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type solutionsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type solutionsSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type portfolioCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    client_name_en?: SortOrder
    client_name_th?: SortOrder
    industry?: SortOrder
    challenge_en?: SortOrder
    challenge_th?: SortOrder
    solution_en?: SortOrder
    solution_th?: SortOrder
    result_en?: SortOrder
    result_th?: SortOrder
    cover_image?: SortOrder
    completion_date?: SortOrder
    website_url?: SortOrder
    gallery?: SortOrder
    tags?: SortOrder
    tech_stack?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type portfolioAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type portfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    client_name_en?: SortOrder
    client_name_th?: SortOrder
    industry?: SortOrder
    challenge_en?: SortOrder
    challenge_th?: SortOrder
    solution_en?: SortOrder
    solution_th?: SortOrder
    result_en?: SortOrder
    result_th?: SortOrder
    cover_image?: SortOrder
    completion_date?: SortOrder
    website_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type portfolioMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    client_name_en?: SortOrder
    client_name_th?: SortOrder
    industry?: SortOrder
    challenge_en?: SortOrder
    challenge_th?: SortOrder
    solution_en?: SortOrder
    solution_th?: SortOrder
    result_en?: SortOrder
    result_th?: SortOrder
    cover_image?: SortOrder
    completion_date?: SortOrder
    website_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type portfolioSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_url?: SortOrder
    category?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_url?: SortOrder
    category?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_url?: SortOrder
    category?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type servicesCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    icon?: SortOrder
    image_url?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
    is_featured?: SortOrder
    sort_order?: SortOrder
  }

  export type pressCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    excerpt_en?: SortOrder
    excerpt_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type pressAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
  }

  export type pressMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    excerpt_en?: SortOrder
    excerpt_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type pressMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    category?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    excerpt_en?: SortOrder
    excerpt_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type pressSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
  }

  export type ApplicantsListRelationFilter = {
    every?: applicantsWhereInput
    some?: applicantsWhereInput
    none?: applicantsWhereInput
  }

  export type applicantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type careersCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employment_type?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    requirements_en?: SortOrder
    requirements_th?: SortOrder
    responsibilities_en?: SortOrder
    responsibilities_th?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type careersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type careersMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employment_type?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    requirements_en?: SortOrder
    requirements_th?: SortOrder
    responsibilities_en?: SortOrder
    responsibilities_th?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type careersMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    department?: SortOrder
    location?: SortOrder
    employment_type?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    requirements_en?: SortOrder
    requirements_th?: SortOrder
    responsibilities_en?: SortOrder
    responsibilities_th?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type careersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CareersNullableScalarRelationFilter = {
    is?: careersWhereInput | null
    isNot?: careersWhereInput | null
  }

  export type applicantsCountOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cv_url?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicantsAvgOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
  }

  export type applicantsMaxOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cv_url?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicantsMinOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cv_url?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type applicantsSumOrderByAggregateInput = {
    id?: SortOrder
    career_id?: SortOrder
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mediaCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    folder?: SortOrder
    created_at?: SortOrder
  }

  export type mediaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    folder?: SortOrder
    created_at?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    folder?: SortOrder
    created_at?: SortOrder
  }

  export type mediaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ai_knowledgeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ai_knowledgeAvgOrderByAggregateInput = {
    id?: SortOrder
    is_active?: SortOrder
  }

  export type ai_knowledgeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ai_knowledgeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type ai_knowledgeSumOrderByAggregateInput = {
    id?: SortOrder
    is_active?: SortOrder
  }

  export type ai_logsCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_message?: SortOrder
    ai_response?: SortOrder
    sentiment?: SortOrder
    is_lead_captured?: SortOrder
    created_at?: SortOrder
  }

  export type ai_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    is_lead_captured?: SortOrder
  }

  export type ai_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_message?: SortOrder
    ai_response?: SortOrder
    sentiment?: SortOrder
    is_lead_captured?: SortOrder
    created_at?: SortOrder
  }

  export type ai_logsMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_message?: SortOrder
    ai_response?: SortOrder
    sentiment?: SortOrder
    is_lead_captured?: SortOrder
    created_at?: SortOrder
  }

  export type ai_logsSumOrderByAggregateInput = {
    id?: SortOrder
    is_lead_captured?: SortOrder
  }

  export type ai_image_historyCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type ai_image_historyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ai_image_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type ai_image_historyMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type ai_image_historySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hero_bannersCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    media_type?: SortOrder
    media_url?: SortOrder
    button_text_en?: SortOrder
    button_text_th?: SortOrder
    button_link?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type hero_bannersAvgOrderByAggregateInput = {
    id?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
  }

  export type hero_bannersMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    media_type?: SortOrder
    media_url?: SortOrder
    button_text_en?: SortOrder
    button_text_th?: SortOrder
    button_link?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type hero_bannersMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    subtitle_en?: SortOrder
    subtitle_th?: SortOrder
    description_en?: SortOrder
    description_th?: SortOrder
    media_type?: SortOrder
    media_url?: SortOrder
    button_text_en?: SortOrder
    button_text_th?: SortOrder
    button_link?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type hero_bannersSumOrderByAggregateInput = {
    id?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
  }

  export type changelogCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    type?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type changelogAvgOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
  }

  export type changelogMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    type?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type changelogMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    title_en?: SortOrder
    title_th?: SortOrder
    content_en?: SortOrder
    content_th?: SortOrder
    type?: SortOrder
    is_published?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
  }

  export type changelogSumOrderByAggregateInput = {
    id?: SortOrder
    is_published?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type applicantsCreateNestedManyWithoutCareersInput = {
    create?: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput> | applicantsCreateWithoutCareersInput[] | applicantsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutCareersInput | applicantsCreateOrConnectWithoutCareersInput[]
    createMany?: applicantsCreateManyCareersInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type applicantsUncheckedCreateNestedManyWithoutCareersInput = {
    create?: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput> | applicantsCreateWithoutCareersInput[] | applicantsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutCareersInput | applicantsCreateOrConnectWithoutCareersInput[]
    createMany?: applicantsCreateManyCareersInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type applicantsUpdateManyWithoutCareersNestedInput = {
    create?: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput> | applicantsCreateWithoutCareersInput[] | applicantsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutCareersInput | applicantsCreateOrConnectWithoutCareersInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutCareersInput | applicantsUpsertWithWhereUniqueWithoutCareersInput[]
    createMany?: applicantsCreateManyCareersInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutCareersInput | applicantsUpdateWithWhereUniqueWithoutCareersInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutCareersInput | applicantsUpdateManyWithWhereWithoutCareersInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type applicantsUncheckedUpdateManyWithoutCareersNestedInput = {
    create?: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput> | applicantsCreateWithoutCareersInput[] | applicantsUncheckedCreateWithoutCareersInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutCareersInput | applicantsCreateOrConnectWithoutCareersInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutCareersInput | applicantsUpsertWithWhereUniqueWithoutCareersInput[]
    createMany?: applicantsCreateManyCareersInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutCareersInput | applicantsUpdateWithWhereUniqueWithoutCareersInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutCareersInput | applicantsUpdateManyWithWhereWithoutCareersInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type careersCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<careersCreateWithoutApplicantsInput, careersUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: careersCreateOrConnectWithoutApplicantsInput
    connect?: careersWhereUniqueInput
  }

  export type careersUpdateOneWithoutApplicantsNestedInput = {
    create?: XOR<careersCreateWithoutApplicantsInput, careersUncheckedCreateWithoutApplicantsInput>
    connectOrCreate?: careersCreateOrConnectWithoutApplicantsInput
    upsert?: careersUpsertWithoutApplicantsInput
    disconnect?: careersWhereInput | boolean
    delete?: careersWhereInput | boolean
    connect?: careersWhereUniqueInput
    update?: XOR<XOR<careersUpdateToOneWithWhereWithoutApplicantsInput, careersUpdateWithoutApplicantsInput>, careersUncheckedUpdateWithoutApplicantsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type applicantsCreateWithoutCareersInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
  }

  export type applicantsUncheckedCreateWithoutCareersInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
  }

  export type applicantsCreateOrConnectWithoutCareersInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput>
  }

  export type applicantsCreateManyCareersInputEnvelope = {
    data: applicantsCreateManyCareersInput | applicantsCreateManyCareersInput[]
    skipDuplicates?: boolean
  }

  export type applicantsUpsertWithWhereUniqueWithoutCareersInput = {
    where: applicantsWhereUniqueInput
    update: XOR<applicantsUpdateWithoutCareersInput, applicantsUncheckedUpdateWithoutCareersInput>
    create: XOR<applicantsCreateWithoutCareersInput, applicantsUncheckedCreateWithoutCareersInput>
  }

  export type applicantsUpdateWithWhereUniqueWithoutCareersInput = {
    where: applicantsWhereUniqueInput
    data: XOR<applicantsUpdateWithoutCareersInput, applicantsUncheckedUpdateWithoutCareersInput>
  }

  export type applicantsUpdateManyWithWhereWithoutCareersInput = {
    where: applicantsScalarWhereInput
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyWithoutCareersInput>
  }

  export type applicantsScalarWhereInput = {
    AND?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    OR?: applicantsScalarWhereInput[]
    NOT?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    id?: IntFilter<"applicants"> | number
    career_id?: IntNullableFilter<"applicants"> | number | null
    name?: StringNullableFilter<"applicants"> | string | null
    email?: StringNullableFilter<"applicants"> | string | null
    phone?: StringNullableFilter<"applicants"> | string | null
    cv_url?: StringNullableFilter<"applicants"> | string | null
    notes?: StringNullableFilter<"applicants"> | string | null
    status?: StringFilter<"applicants"> | string
    created_at?: DateTimeFilter<"applicants"> | Date | string
  }

  export type careersCreateWithoutApplicantsInput = {
    slug: string
    title_en?: string | null
    title_th?: string | null
    department?: string | null
    location?: string | null
    employment_type?: string | null
    description_en?: string | null
    description_th?: string | null
    requirements_en?: string | null
    requirements_th?: string | null
    responsibilities_en?: string | null
    responsibilities_th?: string | null
    status?: string
    created_at?: Date | string
  }

  export type careersUncheckedCreateWithoutApplicantsInput = {
    id?: number
    slug: string
    title_en?: string | null
    title_th?: string | null
    department?: string | null
    location?: string | null
    employment_type?: string | null
    description_en?: string | null
    description_th?: string | null
    requirements_en?: string | null
    requirements_th?: string | null
    responsibilities_en?: string | null
    responsibilities_th?: string | null
    status?: string
    created_at?: Date | string
  }

  export type careersCreateOrConnectWithoutApplicantsInput = {
    where: careersWhereUniqueInput
    create: XOR<careersCreateWithoutApplicantsInput, careersUncheckedCreateWithoutApplicantsInput>
  }

  export type careersUpsertWithoutApplicantsInput = {
    update: XOR<careersUpdateWithoutApplicantsInput, careersUncheckedUpdateWithoutApplicantsInput>
    create: XOR<careersCreateWithoutApplicantsInput, careersUncheckedCreateWithoutApplicantsInput>
    where?: careersWhereInput
  }

  export type careersUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: careersWhereInput
    data: XOR<careersUpdateWithoutApplicantsInput, careersUncheckedUpdateWithoutApplicantsInput>
  }

  export type careersUpdateWithoutApplicantsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type careersUncheckedUpdateWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_th?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_en?: NullableStringFieldUpdateOperationsInput | string | null
    requirements_th?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_en?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities_th?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateManyCareersInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    cv_url?: string | null
    notes?: string | null
    status?: string
    created_at?: Date | string
  }

  export type applicantsUpdateWithoutCareersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateManyWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}