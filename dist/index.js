"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
require("reflect-metadata");
const Injector = new class {
    resolve(target) {
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [], injections = tokens.map(token => Injector.resolve(token));
        return new target(...injections);
    }
};
const initialize = (app, controllers) => {
    controllers.forEach(controller => {
        const instance = Injector.resolve(controller);
        const prefix = Reflect.getMetadata('prefix', controller);
        const routes = Reflect.getMetadata('routes', controller);
        routes.forEach(route => {
            app[route.requestMethod](prefix + route.path, (req, res) => instance[route.methodName](req, res));
        });
    });
};
exports.initialize = initialize;
