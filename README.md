# couch-routes
## What is this?

couch-routes is a simple and light-weight package to simplify routing and dependency injection in class based express typescript.

## Installation

`npm i couchRoutes --save`

## tsconfig.json
"compilerOptions": {
    ...
    "experimentalDecorators": true,                   
    "emitDecoratorMetadata": true,
}


## Usage

app.ts
```
import * as router from "couch-routes";
import controllers from "./controllers" //Array of controller classes

const app = express();

router.initialize(app, controllers);
```

Controllers
```
import * as express from "express";
import { MyService } from "../services/myService"'
import {Controller, Get, Put, Post, Delete } from "couch-routes/decorators";

@Controller("/user")
export default class UserController {

    constructor(private readonly myService: MyService) {}

    @Get("/:id")
    public async getUserById(req: express.Request, res: express.Response) {
        const id = req.query.id;
        res.send(await this.myService.getUserById(id));
    }

    @Get()
    public async getAll(req: express.Request, res: express.Response) {
        res.send(await this.myService.getAll());
    }

    @Delete("/:id")
    public async deleteUser(req: express.Request, res: express.Response) {
        res.send(await this.myService.delete(req.query.id))
    }

    @Post()
    public async CreateUser(req: express.Request, res: express.Response) {
        res.send(await this.myService.add(req.body.user));
    }

    @Put("/:id")
    public async deleteUser(req: express.Request, res: express.Response) {
        res.send(await this.myService.update(req.query.id, req.body.user))
    }

}
```

Dependency injection for non controllers
```
import { Service } from "couch-routes/decorators"
import { UserData } from "../data/userData";

@Service()
export default class MyService {

    constructor(private readonly userData: UserData) {

    }

    public async getUserById(id: number) {
        return await this.userData.getUser(id);
    }
}
```

## Options

Controller(routePrefix: string)
Get(route: string)
Put(route: string)
Post(route: string)
Delete(route: string)

*all of the above default with "/" if nothing is passed*