import { ConvidadosService } from './convidados.service.js';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';
export declare class ConvidadosController {
    private readonly convidadosService;
    constructor(convidadosService: ConvidadosService);
    listarTodos(): import("./interfaces/convidado.interface.js").Convidado[];
    criar(createConvidadoDto: CreateConvidadoDto): {
        mensagem: string;
        dados: import("./interfaces/convidado.interface.js").Convidado;
    };
    atualizarIdade(id: string, updateConvidadoDto: UpdateConvidadoDto): import("./interfaces/convidado.interface.js").Convidado;
    remover(id: string): void;
    substituir(id: string, createConvidadoDto: CreateConvidadoDto): import("./interfaces/convidado.interface.js").Convidado;
}
