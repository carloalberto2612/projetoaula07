import { z } from 'zod';
export declare const colaboradorSchema: z.ZodObject<{
    nome: z.ZodString;
    email: z.ZodEmail;
    idade: z.ZodNumber;
    departamento: z.ZodEnum<{
        TI: "TI";
        RH: "RH";
        Vendas: "Vendas";
    }>;
}, z.core.$strip>;
export type CreateColaboradorDto = z.infer<typeof colaboradorSchema>;
