import { authMiddleware } from "../../middlewares/auth.middleware.js";

class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    registerRoutes(app) {
        app.get('/users', authMiddleware, (req, res) => {
            res.send(this.usersService.getUsers());
        });

        app.get('/users/:id', authMiddleware, (req, res) => {
            res.send(this.usersService.getUserById(req.params.id));
        });

        app.post('/register', (req, res) => {
            res.send(this.usersService.registerUser(req.body));
        });

        app.post('/login', (req, res) => {
            res.send(this.usersService.loginUser(req.body));
        });
    }
}

export { UsersController };