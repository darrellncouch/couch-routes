import { GenericClassDecorator } from "../core/GenericClassDecorator";
import { Type } from "../core/Type";

export const Service = () : GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {};
}