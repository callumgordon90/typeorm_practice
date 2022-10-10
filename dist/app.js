"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//'dev' is a property of the module morgan
app.use((0, morgan_1.default)('dev'));
// el cors modulo lo puedo usar si quiero comunicar con otros servidores
app.use((0, cors_1.default)());
exports.default = app;
