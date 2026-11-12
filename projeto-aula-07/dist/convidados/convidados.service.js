var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let ConvidadosService = class ConvidadosService {
    convidados = [
        { id: 1, nome: 'Ana', idade: 28 },
        { id: 2, nome: 'Bruno', idade: 34 },
        { id: 3, nome: 'Carlos', idade: 22 },
    ];
    proximoId = 4;
    findAll() {
        return this.convidados;
    }
    create(createConvidadoDto) {
        const novoConvidado = {
            id: this.proximoId++,
            ...createConvidadoDto,
        };
        this.convidados.push(novoConvidado);
        return novoConvidado;
    }
    findOne(id) {
        const convidado = this.convidados.find((c) => c.id === id);
        if (!convidado) {
            throw new NotFoundException(`Convidado com ID ${id} não encontrado`);
        }
        return convidado;
    }
    updateIdade(id, updateConvidadoDto) {
        const convidado = this.findOne(id);
        Object.assign(convidado, updateConvidadoDto);
        return convidado;
    }
    remove(id) {
        const convidado = this.findOne(id);
        this.convidados = this.convidados.filter((c) => c.id !== convidado.id);
    }
    replace(id, dto) {
        const convidado = this.findOne(id);
        const substituido = { id: convidado.id, ...dto };
        this.convidados = this.convidados.map((c) => c.id === id ? substituido : c);
        return substituido;
    }
};
ConvidadosService = __decorate([
    Injectable()
], ConvidadosService);
export { ConvidadosService };
//# sourceMappingURL=convidados.service.js.map