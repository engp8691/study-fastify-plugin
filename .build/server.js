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
const fastify_1 = __importDefault(require("fastify"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const plugins_1 = require("./plugins");
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.register(
// withoutFpPlugin,
(0, fastify_plugin_1.default)(plugins_1.withoutFpPlugin), {
    name: 'Yonglin',
    role: 'Developer',
    salary: 1234,
});
fastify.register((0, fastify_plugin_1.default)(plugins_1.myPluginPromise));
fastify.register((0, fastify_plugin_1.default)(plugins_1.myPluginCallback));
fastify.register(plugins_1.myPluginCallbackOptions, 
// fp(myPluginCallbackOptions),
{
    myPluginOption: 'hello'
});
fastify.register(plugins_1.checkDecoratorsPlugin);
fastify.get('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(333331, request);
    console.log(333332, request.decoratedUser);
    return { hello: 'world' };
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
start();
