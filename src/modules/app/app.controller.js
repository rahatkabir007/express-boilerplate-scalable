class AppController {
    constructor(appService) {
        this.appService = appService;
    }

    registerRoutes(app) {
        app.get('/', (req, res) => {
            res.send(this.appService.getHello());
        });
    }
}

export { AppController };
