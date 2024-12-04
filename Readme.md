Express Boilerplate with Nest.js-Like Folder Structure
This repository provides a boilerplate for building Express.js applications with a modular structure inspired by Nest.js. It encourages maintainability, scalability, and readability by organizing the code into distinct modules, each containing controllers, services, and modules.

📂 Project Structure
Below is the detailed folder structure of the project:

```plaintext
express-structure

├── public
│   ├── images                     # Static assets folder (e.g., images, stylesheets)
│
├── src                            # Application source code
│   ├── modules                    # Feature-based modules
│   │   ├── app                    # Root application module
│   │   │   ├── app.controller.js  # Handles incoming requests and responses
│   │   │   ├── app.module.js      # Initializes the app's dependencies
│   │   │   └── app.service.js     # Core business logic of the app
│   │   │
│   │   ├── users                  # Example feature module: Users
│   │       ├── users.controller.js # Handles user-specific HTTP requests
│   │       ├── users.module.js    # Declares and initializes dependencies for the Users module
│   │       └── users.service.js   # Business logic related to Users
│   │
│   ├── middlewares                # Custom middleware
│   │   └── auth.middleware.js     # Example: Authentication middleware
│   │
│   ├── utils                      # Helper utilities
│   │   └── logger.js              # Example: Logger utility
│   │
│   ├── config                     # Configuration files
│   │   └── database.js            # Database configuration and initialization
│   │
│   ├── main.js                    # Application entry point
│
├── public                         # Static files served by Express
│   ├── index.html                 # Example: Static HTML file
│
├── .env                           # Environment variables for production
├── .env.example                   # Example environment variables template
├── .gitignore                     # Git ignored files
├── package.json                   # Node.js dependencies and scripts
└── README.md                      # Project documentation


✨ Features
Nest.js-inspired structure: Modular design for easy scaling and maintainability.
Organized modules: Each feature (e.g., users) is self-contained, making development and testing simpler.
Middleware support: Add global or module-specific middlewares.
Utilities: Centralized helper functions for reusable logic.
Configuration management: Separate configuration files for easy environment-specific settings.

🔧 Setup
Prerequisites
Node.js (v14.x or later)
npm or yarn
Installation
1. Clone the repository:
git clone https://github.com/your-username/express-structure.git
cd express-structure
2. Install dependencies
 npm install
3. Create an .env file by copying .env.example:
cp .env.example .env
4. Update environment variables in .env as needed.

Running the Application
1. Start the server:
npm start
2. Access the application at http://localhost:3000.

🛠️ Usage
Main Files
main.js: Entry point of the application where the Express server is initialized and middlewares are applied.
Modules: Each module is a feature-specific folder under src/modules. A module consists of:
controller: Handles HTTP routes and responses.
service: Contains business logic.
module: Registers the module's dependencies.
Example Module: Users

// users.controller.js
const express = require('express');
const router = express.Router();
const UsersService = require('./users.service');

router.get('/', async (req, res) => {
    const users = await UsersService.getAllUsers();
    res.json(users);
});

module.exports = router;

// users.service.js
const UsersService = {
    getAllUsers: async () => {
        return [{ id: 1, name: 'John Doe' }];
    },
};

module.exports = UsersService;

// users.module.js
const usersController = require('./users.controller');

const UsersModule = (app) => {
    app.use('/users', usersController);
};

module.exports = UsersModule;


Middlewares
Add custom middleware to src/middlewares:// auth.middleware.js
const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
};

module.exports = authMiddleware;


📦 Scripts
1. Start: Start the server
 npm start  
2. Dev: Start the server in development mode with hot-reloading
npm run dev

🌱 Extending the Boilerplate
Add a New Module:

Create a folder under src/modules.
Add module, controller, and service files.
Register the module in main.js.
Add Middleware:

Create the middleware in src/middlewares.
Apply it in main.js or a specific module.
Static Files:

Place static assets in the public folder.
Access them via / in the browser (e.g., http://localhost:3000/images/logo.png).

🤝 Contributing
Contributions are welcome! Feel free to submit issues or pull requests for improvements.

📜 License
This project is licensed under the MIT License.

Happy Coding! 🚀
