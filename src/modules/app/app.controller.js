class AppController {
    constructor(appService) {
        this.appService = appService;
    }

    registerRoutes(app) {
        app.get('/', (req, res) => {
            this.appService.getHomePage(req, res);
        });
    }
}

export { AppController };
