var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, } from '@nestjs/common';
import { ConvidadosService } from './convidados.service.js';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';
let ConvidadosController = class ConvidadosController {
    convidadosService;
    constructor(convidadosService) {
        this.convidadosService = convidadosService;
    }
    listarTodos() {
        return this.convidadosService.findAll();
    }
    criar(createConvidadoDto) {
        console.log('Convidado recebido:', createConvidadoDto.nome);
        const convidado = this.convidadosService.create(createConvidadoDto);
        return {
            mensagem: `Convidado ${convidado.nome} confirmado com sucesso!`,
            dados: convidado,
        };
    }
    atualizarIdade(id, updateConvidadoDto) {
        console.log(`Atualizando idade do convidado com ID: ${id}`);
        return this.convidadosService.updateIdade(+id, updateConvidadoDto);
    }
    remover(id) {
        console.log(`Removendo convidado com ID: ${id}`);
        this.convidadosService.remove(+id);
    }
    substituir(id, createConvidadoDto) {
        console.log(`Substituindo convidado com ID: ${id}`);
        return this.convidadosService.replace(+id, createConvidadoDto);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "listarTodos", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateConvidadoDto]),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "criar", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateConvidadoDto]),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "atualizarIdade", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "remover", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateConvidadoDto]),
    __metadata("design:returntype", void 0)
], ConvidadosController.prototype, "substituir", null);
ConvidadosController = __decorate([
    Controller('convidados'),
    __metadata("design:paramtypes", [ConvidadosService])
], ConvidadosController);
export { ConvidadosController };
//# sourceMappingURL=convidados.controller.js.map