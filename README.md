# NestJS Microservices CRUD System

A microservices-based CRUD application built with NestJS, demonstrating clean architecture and best practices.

## Architecture

The system consists of three main services:
- **API Gateway**: Routes external requests to appropriate services
- **User Service**: Handles user management operations
- **Product Service**: Manages product inventory

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Testing**: Jest
- **Container**: Docker
- **Message Broker**: Redis (for inter-service communication)

## Project Structure

```
nestjs-crud-microservices/
├── api-gateway/         # Routes requests to microservices
├── user-service/        # User CRUD operations
├── product-service/     # Product management
└── libs/               # Shared interfaces and utilities
```

## Prerequisites

- Node.js (v18 or later)
- Docker and Docker Compose
- PostgreSQL
- Redis

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/deepu024/nestjs-crud-microservices.git
cd nestjs-crud-microservices
```

2. Install dependencies for each service:
```bash
# Install shared library dependencies
cd libs && npm install

# Install API Gateway dependencies
cd ../api-gateway && npm install

# Install User Service dependencies
cd ../user-service && npm install

# Install Product Service dependencies
cd ../product-service && npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in each service directory
   - Update the database and Redis connection details

4. Start the services:

```bash
# Start User Service
cd user-service
npm run start:dev

# Start Product Service (in a new terminal)
cd product-service
npm run start:dev

# Start API Gateway (in a new terminal)
cd api-gateway
npm run start:dev
```

## API Documentation

### User Service Endpoints

- `POST /users` - Create a new user
  ```json
  {
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "password123"
  }
  ```
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Product Service Endpoints

- `POST /products` - Add new product
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "stock": 100
  }
  ```
- `GET /products` - List all products
- `GET /products/:id` - Get product by ID
- `PATCH /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## Testing

Run tests for each service:

```bash
# Run all tests in a service
cd api-gateway && npm test
cd user-service && npm test
cd product-service && npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test user.controller.spec
```

## Development

### Adding New Features

1. Create new interfaces in the `libs` directory
2. Implement the feature in the appropriate service
3. Update the API Gateway to route requests to the new feature
4. Add tests for the new functionality

### Code Style

- Follow NestJS best practices
- Use TypeScript strict mode
- Write unit tests for all new features
- Document all public APIs

## Troubleshooting

Common issues and solutions:

1. **Service Connection Issues**
   - Ensure Redis is running
   - Check service ports are not in use
   - Verify environment variables are set correctly

2. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check database credentials
   - Ensure database exists

3. **Test Failures**
   - Run `npm install` to ensure all dependencies are installed
   - Clear Jest cache: `npm test -- --clearCache`
   - Check for TypeScript compilation errors

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 