"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
//Datasource is a class inherant to typeorm
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "typeorm_tutorial",
    password: "callumpassword",
    database: "typeormdb",
    synchronize: true,
    logging: true,
    entities: [],
});
