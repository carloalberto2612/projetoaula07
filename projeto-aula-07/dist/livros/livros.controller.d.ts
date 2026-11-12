import { LivrosService } from './livros.service.js';
export declare class LivrosController {
    private readonly livrosService;
    constructor(livrosService: LivrosService);
    buscarPorId(id: string): import("./interfaces/livro.interface.js").Livro;
}
