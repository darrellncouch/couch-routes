define("core/IRouteDefinition", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("index", ["require", "exports", "reflect-metadata"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initialize = void 0;
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
});
define("core/GenericClassDecorator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/Type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("decorators/controller", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Controller = void 0;
    const Controller = (prefix = '') => {
        return (target) => {
            Reflect.defineMetadata('prefix', prefix, target);
            if (!Reflect.hasMetadata('routes', target)) {
                Reflect.defineMetadata('routes', [], target);
            }
        };
    };
    exports.Controller = Controller;
});
define("decorators/delete", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Delete = void 0;
    const Delete = (path = "/") => {
        // `target` equals our class, `propertyKey` equals our decorated method name
        return (target, propertyKey) => {
            // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
            // To prevent any further validation simply set it to an empty array here.
            if (!Reflect.hasMetadata('routes', target.constructor)) {
                Reflect.defineMetadata('routes', [], target.constructor);
            }
            // Get the routes stored so far, extend it by the new route and re-set the metadata.
            const routes = Reflect.getMetadata('routes', target.constructor);
            routes.push({
                requestMethod: 'delete',
                path,
                methodName: propertyKey
            });
            Reflect.defineMetadata('routes', routes, target.constructor);
        };
    };
    exports.Delete = Delete;
});
define("decorators/get", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = void 0;
    const Get = (path = "/") => {
        // `target` equals our class, `propertyKey` equals our decorated method name
        return (target, propertyKey) => {
            // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
            // To prevent any further validation simply set it to an empty array here.
            if (!Reflect.hasMetadata('routes', target.constructor)) {
                Reflect.defineMetadata('routes', [], target.constructor);
            }
            // Get the routes stored so far, extend it by the new route and re-set the metadata.
            const routes = Reflect.getMetadata('routes', target.constructor);
            routes.push({
                requestMethod: 'get',
                path,
                methodName: propertyKey
            });
            Reflect.defineMetadata('routes', routes, target.constructor);
        };
    };
    exports.Get = Get;
});
define("decorators/post", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Post = void 0;
    const Post = (path = "/") => {
        // `target` equals our class, `propertyKey` equals our decorated method name
        return (target, propertyKey) => {
            // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
            // To prevent any further validation simply set it to an empty array here.
            if (!Reflect.hasMetadata('routes', target.constructor)) {
                Reflect.defineMetadata('routes', [], target.constructor);
            }
            // Get the routes stored so far, extend it by the new route and re-set the metadata.
            const routes = Reflect.getMetadata('routes', target.constructor);
            routes.push({
                requestMethod: 'post',
                path,
                methodName: propertyKey
            });
            Reflect.defineMetadata('routes', routes, target.constructor);
        };
    };
    exports.Post = Post;
});
define("decorators/put", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Put = void 0;
    const Put = (path = "/") => {
        // `target` equals our class, `propertyKey` equals our decorated method name
        return (target, propertyKey) => {
            // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
            // To prevent any further validation simply set it to an empty array here.
            if (!Reflect.hasMetadata('routes', target.constructor)) {
                Reflect.defineMetadata('routes', [], target.constructor);
            }
            // Get the routes stored so far, extend it by the new route and re-set the metadata.
            const routes = Reflect.getMetadata('routes', target.constructor);
            routes.push({
                requestMethod: 'put',
                path,
                methodName: propertyKey
            });
            Reflect.defineMetadata('routes', routes, target.constructor);
        };
    };
    exports.Put = Put;
});
define("decorators/index", ["require", "exports", "decorators/controller", "decorators/delete", "decorators/get", "decorators/post", "decorators/put"], function (require, exports, controller_1, delete_1, get_1, post_1, put_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Put = exports.Post = exports.Get = exports.Delete = exports.Controller = void 0;
    Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return controller_1.Controller; } });
    Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return delete_1.Delete; } });
    Object.defineProperty(exports, "Get", { enumerable: true, get: function () { return get_1.Get; } });
    Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return post_1.Post; } });
    Object.defineProperty(exports, "Put", { enumerable: true, get: function () { return put_1.Put; } });
});
define("decorators/service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Service = void 0;
    const Service = () => {
        return (target) => { };
    };
    exports.Service = Service;
});
