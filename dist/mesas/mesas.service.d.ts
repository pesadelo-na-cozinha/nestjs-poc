export interface Mesa {
    id: number;
    nome: string;
}
export declare class MesasService {
    private mesas;
    findAll(): Mesa[];
}
