FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate
RUN npm prune --omit=dev

ENV NODE_ENV=production
EXPOSE 3000
RUN chmod +x start.sh
CMD ["sh", "start.sh"]