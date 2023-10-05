# Use the official Node.js image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY ./frontend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY ./frontend .

# Build the React application
RUN npm run build

# Expose the port the application runs on (assuming it's 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
