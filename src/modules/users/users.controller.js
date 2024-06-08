class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    registerRoutes(app) {
        app.get('/users', (req, res) => {
            res.send(this.usersService.getUsers());
        });

        app.get('/users/:id', (req, res) => {
            res.send(this.usersService.getUserById(req.params.id));
        });

        app.post('/user', (req, res) => {
            res.send(this.usersService.createUser(req.body));
        });
    }
}

export { UsersController };
