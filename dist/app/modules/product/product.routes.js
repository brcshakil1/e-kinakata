"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router.post("/", product_controllers_1.ProductControllers.createProduct);
router.get("/", product_controllers_1.ProductControllers.getProducts);
router.get("/:productId", product_controllers_1.ProductControllers.getSingleProduct);
router.put("/:productId", product_controllers_1.ProductControllers.updateProduct);
router.delete("/:productId", product_controllers_1.ProductControllers.deleteTheProduct);
exports.ProductRouter = router;
