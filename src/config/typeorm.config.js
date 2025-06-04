"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
var user_schema_1 = require("../modules/users/infrastructure/database/schemas/user.schema");
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
exports.typeOrmConfig = {
    type: 'mongodb',
    url: "mongodb+srv://".concat(process.env.DATABASE_USER, ":").concat(process.env.DATABASE_PASSWORD, "@").concat(process.env.DATABASE_HOST, "/").concat(process.env.DATABASE_NAME, "?retryWrites=true&w=majority"),
    entities: [user_schema_1.UserSchema],
    synchronize: true, // cuidado en producción
};
