var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
let ProdutosService = class ProdutosService {
    produtos = [
        { id: 1, nome: 'Notebook', preco: 3500 },
        { id: 2, nome: 'Mouse', preco: 80 },
        { id: 3, nome: 'Teclado', preco: 150 },
    ];
    findOne(idParam) {
        if (!/^\d+$/.test(idParam)) {
            throw new BadRequestException('O ID fornecido deve ser do tipo inteiro');
        }
        const id = Number(idParam);
        const produto = this.produtos.find((p) => p.id === id);
        if (!produto) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return produto;
    }
};
ProdutosService = __decorate([
    Injectable()
], ProdutosService);
export { ProdutosService };
//# sourceMappingURL=produtos.service.js.map