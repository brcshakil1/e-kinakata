"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = __importDefault(require("./order.model"));
// post order into database
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.create(orderData);
    return result;
});
// get all order from database
const getAllOderFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (email) {
        query.email = email;
    }
    const result = yield order_model_1.default.find(query);
    return result;
});
exports.OrderServices = {
    createOrderIntoDB,
    getAllOderFromDB,
};
