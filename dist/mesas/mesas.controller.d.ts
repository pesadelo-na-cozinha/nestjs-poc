import { Mesa, MesasService } from "./mesas.service";
export declare class MesasController {
    private readonly mesasService;
    constructor(mesasService: MesasService);
    listarMesas(): Mesa[];
}
