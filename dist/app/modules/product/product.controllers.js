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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodParseProductData = product_validation_1.default.parse(product);
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodParseProductData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
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
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query || "";
        const result = yield product_service_1.ProductServices.getAllProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
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
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
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
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = req.body;
        const { productId } = req.params;
        const zodParseProductData = product_validation_1.default.parse(updatedProduct);
        const result = yield product_service_1.ProductServices.updateProductIntoDB(productId, zodParseProductData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
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
const deleteTheProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteTheProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
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
exports.ProductControllers = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteTheProduct,
};
