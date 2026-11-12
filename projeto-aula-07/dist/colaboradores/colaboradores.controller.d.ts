import type { CreateColaboradorDto } from './schemas/colaborador.schema.js';
export declare class ColaboradoresController {
    create(colaborador: CreateColaboradorDto): {
        mensagem: string;
        dados: {
            nome: string;
            email: string;
            idade: number;
            departamento: "TI" | "RH" | "Vendas";
        };
    };
}
