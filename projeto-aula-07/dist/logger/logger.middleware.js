var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
const CARGO_LIBERADO = 'supervisor';
let LoggerMiddleware = class LoggerMiddleware {
    use(req, res, next) {
        console.log(`[${req.method}] ${req.originalUrl}`);
        if (req.originalUrl.startsWith('/admin')) {
            const role = req.headers['x-user-role'];
            if (role !== CARGO_LIBERADO) {
                res.status(403).json({ message: 'Acesso Negado' });
                return;
            }
        }
        next();
    }
};
LoggerMiddleware = __decorate([
    Injectable()
], LoggerMiddleware);
export { LoggerMiddleware };
//# sourceMappingURL=logger.middleware.js.map