# couch-routes

## What is this?

couch-routes is a simple and light-weight package built to simplify routing and dependencies </br> through a typescript class based approch to express.

## Why use couch-routes

The intention of couch-routes is to clean up the common file structure of an express application while </br> making it more intuitive and familliar to the common structure and feel of web frameworks throughout </br> different languages. This packages takes consideration from Dot Net as well as Angular, giving a familliar </br> routing and dependency injection experience.

## Installation

`npm i couch-routes --save`

## tsconfig.json
"compilerOptions": { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"experimentalDecorators": true,</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"emitDecoratorMetadata": true,</br>
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

Controller(routePrefix: string)</br>
Get(route: string)</br>
Put(route: string)</br>
Post(route: string)</br>
Delete(route: string)</br>

*all of the above default with "/" if nothing is passed*
