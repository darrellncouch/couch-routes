export interface IRouteDefinition {
    path: string;
    requestMethod: 'get' | 'post' | 'put' | 'delete' | 'options';
    methodName: string;
}
