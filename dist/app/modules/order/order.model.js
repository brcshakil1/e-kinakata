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
const mongoose_1 = require("mongoose");
const product_model_1 = __importDefault(require("../product/product.model"));
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
// update product inventory
orderSchema.post("save", function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const order = doc;
        const product = yield product_model_1.default.findOne({ _id: order.productId });
        if (!product) {
            throw new Error("Product not found");
        }
        const updateQuantity = ((_a = product === null || product === void 0 ? void 0 : product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) - (order === null || order === void 0 ? void 0 : order.quantity);
        const data = yield product_model_1.default.findByIdAndUpdate(order.productId, { $set: { "inventory.quantity": updateQuantity } }, { new: true });
        if (((_b = data === null || data === void 0 ? void 0 : data.inventory) === null || _b === void 0 ? void 0 : _b.quantity) === 0) {
            yield product_model_1.default.findByIdAndUpdate(order.productId, { $set: { "inventory.inStock": false } }, { new: true });
            next();
        }
        next();
    });
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
