This repository contains Dockerized setup to run **6valley** application locally using Docker and Docker Compose.

## Prerequisites

Before you begin, ensure that the following installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To run the **6valley** application in your local environment, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/moinulhossainmahim/6valley.git
cd 6valley
```

### 2. Build the Docker Image

Build the Docker image using Docker Compose:

```bash
docker-compose build
```

### 3. Start the Docker Containers

Start the Docker containers:

```
docker-compose up
```

### 4. Access the 6valley Application

Once the containers are running, you can access the 6valley application at http://localhost:3000.

### 5. Stopping the Containers

To stop the running Docker containers, press `Ctrl + C` in your terminal and run the following command to remove the containers:

```bash
docker-compose down
```
