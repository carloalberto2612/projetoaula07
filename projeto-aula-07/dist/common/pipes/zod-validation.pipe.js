import { BadRequestException, } from '@nestjs/common';
export class ZodValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        const resultado = this.schema.safeParse(value);
        if (!resultado.success) {
            const erros = resultado.error.issues.map((issue) => ({
                campo: issue.path.join('.'),
                mensagem: issue.message,
            }));
            throw new BadRequestException(erros);
        }
        return resultado.data;
    }
}
//# sourceMappingURL=zod-validation.pipe.js.map