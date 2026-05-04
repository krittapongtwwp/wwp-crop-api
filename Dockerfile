FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate

ENV NODE_ENV=production
EXPOSE 3000

RUN chmod +x start.sh
CMD ["sh", "start.sh"]