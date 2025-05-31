import { Injectable } from "@nestjs/common";

export interface Mesa {
  id: number;
  nome: string;
}

@Injectable()
export class MesasService {
  private mesas: Mesa[] = [
    { id: 1, nome: "Mesa 1" },
    { id: 2, nome: "Mesa 2" },
  ];

  findAll(): Mesa[] {
    return this.mesas;
  }
}
