var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosController } from './convidados/convidados.controller.js';
import { ConvidadosService } from './convidados/convidados.service.js';
import { LivrosController } from './livros/livros.controller.js';
import { LivrosService } from './livros/livros.service.js';
import { MediaController } from './media/media.controller.js';
import { SegurancaController } from './seguranca/seguranca.controller.js';
import { AdminController } from './admin/admin.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';
import { ProdutosController } from './produtos/produtos.controller.js';
import { ProdutosService } from './produtos/produtos.service.js';
import { ColaboradoresController } from './colaboradores/colaboradores.controller.js';
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    Module({
        imports: [],
        controllers: [
            AppController,
            ConvidadosController,
            LivrosController,
            MediaController,
            SegurancaController,
            AdminController,
            ProdutosController,
            ColaboradoresController,
        ],
        providers: [AppService, ConvidadosService, LivrosService, ProdutosService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map