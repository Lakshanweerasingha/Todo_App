# Todo_App

This is a full-stack task management application built with Vite, React, Tailwind CSS for the frontend, and Laravel for the backend. The application uses Docker for containerization and Cypress for end-to-end testing.

# Laravel & React Application - Docker Setup

## Prerequisites
Ensure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation and Setup

### 1. Clone the Repository
```sh
git clone <repository_url>
cd <repository_name>
```

### 2. Build and Start Docker Containers
```sh
docker-compose up -d --build
```
This will build and start the containers for Laravel (backend), MySQL (database), and React (frontend).

### 3. Install Backend Dependencies
```sh
docker exec -it backend-container-name composer install
```

### 4. Install Frontend Dependencies
```sh
docker exec -it frontend-container-name npm install
```

### 5. Set Up Laravel Environment
```sh
docker exec -it backend-container-name cp .env.example .env
```
Then update the `.env` file to match your database settings inside the container:
```
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=your_password
```
Run the following commands inside the container:
```sh
docker exec -it backend-container-name php artisan key:generate
docker exec -it backend-container-name php artisan migrate --seed
```

### 6. Access the Application
- **Laravel API:** `http://localhost:8000`
- **React Frontend:** `http://localhost:3000`

---

## Running Tests

### 1. Run Laravel Tests
```sh
docker exec -it backend-container-name php artisan test
```

### 2. Run React Tests
```sh
docker exec -it frontend-container-name npm test
```

### 3. Run Cypress Tests (E2E)
```sh
docker exec -it frontend-container-name npx cypress open
```

---

## Stopping and Removing Containers
```sh
docker-compose down
```

## Restarting Containers
```sh
docker-compose up -d
```



The frontend will be available at http://localhost:3000
The backend API will be available at http://localhost:8000
