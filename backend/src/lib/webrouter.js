"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterGroup = exports.MainRouterGroup = void 0;
const express_1 = require("express");
class MainRouterGroup {
    static addRoute(route) {
        this.routeGroups.push(route);
    }
    static all() {
        const allRouter = (0, express_1.Router)();
        this.routeGroups.forEach((router) => {
            allRouter.use(router);
        });
        return allRouter;
    }
}
exports.MainRouterGroup = MainRouterGroup;
MainRouterGroup.routeGroups = [];
class RouterGroup extends MainRouterGroup {
    static new(prefix, middlewares, groutes) {
        const router = (0, express_1.Router)();
        groutes.forEach((route) => {
            router[route.method](prefix + route.route, ...middlewares.map((m) => new m().handle), new route.handler[0]()[route.handler[1]]);
        });
        super.addRoute(router);
        return router;
    }
}
exports.RouterGroup = RouterGroup;
