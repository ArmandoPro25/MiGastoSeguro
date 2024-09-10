"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatBotController_1 = require("../controller/chatBotController");
class ChatBotRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', chatBotController_1.chatBotController.handleMessage);
    }
}
const chatBotRoutes = new ChatBotRoutes();
exports.default = chatBotRoutes.router;
