# Step 1: Grab Node.js from the cloud
FROM node:20-alpine

# Step 2: Create a folder inside the container for our code
WORKDIR /app

# Step 3: Copy our package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your React/Vite frontend app files 
COPY . .

# Step 5: Tell the container to open port 5173 (Standard Vite Port)
EXPOSE 5173

# Step 6: The command to start your development server
CMD ["npm", "run", "dev", "--", "--host"]