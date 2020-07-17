FROM node:12

# Set working directory
WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

# Add source code files to WORKDIR
COPY . .
RUN yarn install

# Application port
EXPOSE 4000

# Container start command (DO NOT CHANGE and see note below)
CMD ["yarn", "run", "start"]
