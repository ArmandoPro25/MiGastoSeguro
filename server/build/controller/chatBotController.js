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
exports.chatBotController = void 0;
const openai_1 = __importDefault(require("openai"));
// Inicializa OpenAI con tu clave API directamente en el código
const openai = new openai_1.default({
    apiKey: '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',
});
class ChatbotController {
    handleMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const { message } = req.body;
                // Solicita una completación de chat usando el SDK de OpenAI
                const completion = yield openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: message }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                });
                // Extrae el texto de la respuesta
                const botReply = ((_c = (_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim()) || 'No reply from bot';
                res.json({ reply: botReply });
            }
            catch (error) {
                console.error("Error handling message:", error);
                res.status(500).json({ error: "Error processing your message." });
            }
        });
    }
}
exports.chatBotController = new ChatbotController();
