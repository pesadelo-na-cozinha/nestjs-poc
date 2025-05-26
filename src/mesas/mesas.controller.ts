import { Controller, Get } from '@nestjs/common';
import { MesasService } from './mesas.service';

@Controller('mesas')
export class MesasController {
    constructor(private readonly MesasService: MesasService) { }

    @Get()
    findAll() {
        return this.MesasService.findAll();
    }
}
