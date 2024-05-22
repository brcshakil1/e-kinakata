"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/product/product.routes");
const order_routes_1 = require("./app/modules/order/order.routes");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application router
app.use("/api/products", product_routes_1.ProductRouter);
app.use("/api/orders", order_routes_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("e-kinakata's server is running!");
});
// global routes handling
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
    else {
        next();
    }
});
exports.default = app;
