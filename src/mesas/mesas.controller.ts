import { Controller, Get } from "@nestjs/common";
import { Mesa, MesasService } from "./mesas.service";

@Controller("mesas")
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Get()
  listarMesas(): Mesa[] {
    return this.mesasService.findAll();
  }
}
