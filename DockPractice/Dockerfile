FROM node:latest

# Set environment variables
ENV MONGO_DB_USERNAME=leader \
    MONGO_DB_PASSWORD=example

# Create the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Install dependencies (if package.json exists)
RUN if [ -f package.json ]; then npm install; fi

# Command to run the application
CMD ["node", "server.js"]
