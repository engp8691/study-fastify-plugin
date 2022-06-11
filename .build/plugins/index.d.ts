import { FastifyPluginCallback, FastifyPluginAsync, FastifyInstance } from 'fastify';
export declare const myPluginPromise: FastifyPluginAsync;
export declare const myPluginCallback: FastifyPluginCallback;
export interface UserOptions {
    name: string;
    role: string;
    salary: number;
}
export declare const withoutFpPlugin: (fastify: FastifyInstance, options: UserOptions) => Promise<void>;
export declare const checkDecoratorsPlugin: (fastify: FastifyInstance) => Promise<void>;
export interface MyPluginOptions {
    myPluginOption: string;
}
export declare const myPluginCallbackOptions: FastifyPluginCallback<MyPluginOptions>;
