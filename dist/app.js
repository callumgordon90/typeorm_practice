"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// server code is contained here in this file and then imported to the index.ts file
//import router:
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
//'dev' is a property of the module morgan
app.use((0, morgan_1.default)('dev'));
// el cors modulo lo puedo usar si quiero comunicar con otros servidores
app.use((0, cors_1.default)());
//this line code permits the application to recognise material sent to us in json format
app.use(express_1.default.json());
app.use(user_routes_1.default);
exports.default = app;
