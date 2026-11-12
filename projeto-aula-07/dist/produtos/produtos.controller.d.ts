import { ProdutosService } from './produtos.service.js';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    buscarPorId(id: string): import("./interfaces/produto.interface.js").Produto;
}
