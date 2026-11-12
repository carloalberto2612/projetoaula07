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
import { Controller, Get, Headers, Res } from '@nestjs/common';
const CHAVE_API_ESPERADA = 'SENAI-2026';
let SegurancaController = class SegurancaController {
    acessarSecreto(apiKey, res) {
        if (apiKey !== CHAVE_API_ESPERADA) {
            res.status(403).json({
                mensagem: 'Acesso negado: chave de API inválida ou ausente.',
            });
            return;
        }
        res.setHeader('x-auth-status', 'verificado');
        res.status(200).json({ mensagem: 'Conteúdo Secreto' });
    }
};
__decorate([
    Get('secreto'),
    __param(0, Headers('x-api-key')),
    __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SegurancaController.prototype, "acessarSecreto", null);
SegurancaController = __decorate([
    Controller()
], SegurancaController);
export { SegurancaController };
//# sourceMappingURL=seguranca.controller.js.map