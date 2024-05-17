# Farmer Ordering System

The Farmer Ordering System is a web application that allows farmers to place orders for fertilizers and seeds based on their land size. The system calculates the required quantities of fertilizers and seeds automatically and provides an interface for agro-input stores to manage and approve orders.

## Features

- Farmers can place orders for fertilizers and seeds based on their land size.
- Automatic calculation of fertilizer and seed quantities based on land size.
- Agro-input stores can view, approve, or reject orders.
- Pagination and sorting of order listings.
- Integration with PostgreSQL database for data persistence.

## Technologies Used

- Backend:
  - Node.js
  - TypeScript
  - Express.js
  - Sequelize ORM
  - PostgreSQL
- Frontend:
  - React.js
  - Next.js (or Angular)
- Deployment:
  - Docker
  - Docker Compose

## Getting Started

### Prerequisites

- Node.js (version 21)
- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Jaman-dedy/farmers-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd farmers-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Provide the necessary environment variables in the `.env` file (env.sample).

5. Start the application using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for the application and the database.

6. Access the application in your web browser at `http://localhost:3000`.

### Running Tests

To run the tests for the Farmer Ordering System, use the following command:

```bash
npm test
```

This command will execute the test suites using Jest and generate test reports.

### API Documentation

The API documentation for the Farmer Ordering System is available using Swagger. To access the Swagger UI, start the application and navigate to `http://localhost:3000/api-docs` in your web browser.

## Deployment

The Farmer Ordering System can be deployed using Docker and Docker Compose. Make sure to set up the necessary environment variables and database credentials in the production environment.
