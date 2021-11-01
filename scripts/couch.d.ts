declare module "core/IRouteDefinition" {
    export interface IRouteDefinition {
        path: string;
        requestMethod: 'get' | 'post' | 'put' | 'delete' | 'options';
        methodName: string;
    }
}
declare module "index" {
    import "reflect-metadata";
    import { Express } from "express";
    export const initialize: (app: Express, controllers: Array<any>) => void;
}
declare module "core/GenericClassDecorator" {
    export type GenericClassDecorator<T> = (target: T) => void;
}
declare module "core/Type" {
    export interface Type<T> {
        new (...args: any[]): T;
    }
}
declare module "decorators/controller" {
    import { GenericClassDecorator } from "core/GenericClassDecorator";
    import { Type } from "core/Type";
    export const Controller: (prefix?: string) => GenericClassDecorator<Type<object>>;
}
declare module "decorators/delete" {
    export const Delete: (path?: string) => MethodDecorator;
}
declare module "decorators/get" {
    export const Get: (path?: string) => MethodDecorator;
}
declare module "decorators/post" {
    export const Post: (path?: string) => MethodDecorator;
}
declare module "decorators/put" {
    export const Put: (path?: string) => MethodDecorator;
}
declare module "decorators/index" {
    export { Controller } from "decorators/controller";
    export { Delete } from "decorators/delete";
    export { Get } from "decorators/get";
    export { Post } from "decorators/post";
    export { Put } from "decorators/put";
}
declare module "decorators/service" {
    import { GenericClassDecorator } from "core/GenericClassDecorator";
    import { Type } from "core/Type";
    export const Service: () => GenericClassDecorator<Type<object>>;
}
