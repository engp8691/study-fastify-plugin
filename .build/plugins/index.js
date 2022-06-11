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
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPluginCallbackOptions = exports.checkDecoratorsPlugin = exports.withoutFpPlugin = exports.myPluginCallback = exports.myPluginPromise = void 0;
// define plugin using promise
const myPluginPromise = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.decorate('name', 'Yonglin Li');
    console.log(6661, fastify.name);
    console.log(6662, fastify.age);
    console.log(6663, fastify.address);
});
exports.myPluginPromise = myPluginPromise;
// define plugin using callbacks
const myPluginCallback = (fastify, _options, done) => {
    fastify.decorate('age', '21');
    console.log(77771, fastify.name);
    console.log(77772, fastify.age);
    console.log(77773, fastify.address);
    done();
};
exports.myPluginCallback = myPluginCallback;
// define a third plugin using promise
const withoutFpPlugin = (fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(55555, options);
    fastify.decorateRequest('decoratedUser', options);
    fastify.decorate('address', 'Boston, MA, USA');
    console.log(8881, fastify.name);
    console.log(8882, fastify.age);
    console.log(8883, fastify.address);
});
exports.withoutFpPlugin = withoutFpPlugin;
// define a third plugin using promise
const checkDecoratorsPlugin = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(9991, fastify.name);
    console.log(9992, fastify.age);
    console.log(9993, fastify.address);
});
exports.checkDecoratorsPlugin = checkDecoratorsPlugin;
// define plugin using callbacks
const myPluginCallbackOptions = (fastify, options, done) => {
    console.log(9999444, options);
    fastify.decorateRequest('myPluginProp', 'super_secret_value');
    fastify.decorateReply('myPluginProp', options.myPluginOption);
    done();
};
exports.myPluginCallbackOptions = myPluginCallbackOptions;
