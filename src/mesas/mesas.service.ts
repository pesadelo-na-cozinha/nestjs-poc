import { Injectable } from '@nestjs/common';

@Injectable()
export class MesasService {
    findAll() {
        return 'Lista de mesas.';
    }
}
