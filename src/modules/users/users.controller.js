class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    registerRoutes(app) {
        app.get('/users', async (req, res) => {
            try {
                const result = await this.usersService.getUsers();
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.get('/users/:id', async(req, res) => {
            try {
                const result = await this.usersService.getUserById(req.params.id);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
          
        });

        app.post('/register', async (req, res) => {
            try {
                const result = await this.usersService.registerUser(req.body);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.post('/login', async (req, res) => {
            try {
                const result = await this.usersService.loginUser(req.body);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });
    }
}

export { UsersController };