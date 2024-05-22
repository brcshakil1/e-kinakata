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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const product_model_1 = __importDefault(require("../product/product.model"));
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const orderData = req.body;
        const zodDataValidation = order_validation_1.orderValidationSchema.parse(orderData);
        // getting all product to match with order
        const product = yield product_model_1.default.findById(orderData === null || orderData === void 0 ? void 0 : orderData.productId);
        // if product does not exist than showing an error
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        // if ordered quantity is more than product quantity
        else if (product && ((_a = product === null || product === void 0 ? void 0 : product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) < (orderData === null || orderData === void 0 ? void 0 : orderData.quantity)) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        // if everything is okay
        else {
            const result = yield order_service_1.OrderServices.createOrderIntoDB(zodDataValidation);
            res.status(200).json({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        console.log(email);
        const result = yield order_service_1.OrderServices.getAllOderFromDB(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Something went wrong. Please try again later.",
            error: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrder,
};
