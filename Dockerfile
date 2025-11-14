# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build NestJS app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main.js"]
