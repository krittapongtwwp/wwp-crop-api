# Stage 1: Build frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY ../frontend/package*.json ./
RUN npm ci
COPY ../frontend ./
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Stage 2: Backend production
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npx prisma generate

# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npx", "tsx", "server.ts"]
