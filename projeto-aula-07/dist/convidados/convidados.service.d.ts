import { Convidado } from './interfaces/convidado.interface.js';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';
export declare class ConvidadosService {
    private convidados;
    private proximoId;
    findAll(): Convidado[];
    create(createConvidadoDto: CreateConvidadoDto): Convidado;
    findOne(id: number): Convidado;
    updateIdade(id: number, updateConvidadoDto: UpdateConvidadoDto): Convidado;
    remove(id: number): void;
    replace(id: number, dto: CreateConvidadoDto): Convidado;
}
