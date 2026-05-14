#!/bin/sh
echo "Running migrations..."
npx prisma migrate deploy

# echo "Running seed..."
# npx tsx prisma/seed/seed.ts

echo "Starting server..."
npx tsx ./src/server.ts