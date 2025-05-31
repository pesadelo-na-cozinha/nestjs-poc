"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesasService = void 0;
const common_1 = require("@nestjs/common");
let MesasService = class MesasService {
    mesas = [
        { id: 1, nome: "Mesa 1" },
        { id: 2, nome: "Mesa 2" },
    ];
    findAll() {
        return this.mesas;
    }
};
exports.MesasService = MesasService;
exports.MesasService = MesasService = __decorate([
    (0, common_1.Injectable)()
], MesasService);
//# sourceMappingURL=mesas.service.js.map