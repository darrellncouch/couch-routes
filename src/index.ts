import "reflect-metadata";import { IRouteDefinition } from "./core/IRouteDefinition";
import {Express, Request, Response} from "express";

const Injector = new class {
    resolve<T>(target: any): T {
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [],
        injections = tokens.map(token => Injector.resolve<any>(token));

        return new target(...injections);
    }
}

export const initialize = (app: Express, controllers: Array<any>) => {
    controllers.forEach(controller => {
        
        const instance = Injector.resolve<typeof controller>(controller);
        const prefix = Reflect.getMetadata('prefix', controller);
        const routes: Array<IRouteDefinition> = Reflect.getMetadata('routes', controller);


        routes.forEach(route => {
            app[route.requestMethod](prefix + route.path, (req: Request, res: Response) => instance[route.methodName](req, res));
        })
    })
}
