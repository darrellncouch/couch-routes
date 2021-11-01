import { GenericClassDecorator } from "../core/GenericClassDecorator";
import { Type } from "../core/Type";

export const Controller = (prefix: string = ''): GenericClassDecorator<Type<object>> => {
    return (target: any) => {
        Reflect.defineMetadata('prefix', prefix, target);

        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    }
}