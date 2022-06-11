import { FastifyPluginCallback, FastifyPluginAsync, FastifyInstance } from 'fastify'

// define plugin using promise
export const myPluginPromise: FastifyPluginAsync = async (fastify) => {
  fastify.decorate('name', 'Yonglin Li')
  console.log(6661, fastify.name)
  console.log(6662, fastify.age)
  console.log(6663, fastify.address)
}

// define plugin using callbacks
export const myPluginCallback: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorate('age', '21')
  console.log(77771, fastify.name)
  console.log(77772, fastify.age)
  console.log(77773, fastify.address)

  done()
}

// define user options
export interface UserOptions {
  name: string,
  role: string,
  salary: number,
}
// define a third plugin using promise
export const withoutFpPlugin = async (fastify: FastifyInstance, options: UserOptions) => {
  console.log(55555, options)
  fastify.decorateRequest('decoratedUser', options)
  fastify.decorate('address', 'Boston, MA, USA')
  console.log(8881, fastify.name)
  console.log(8882, fastify.age)
  console.log(8883, fastify.address)
}

// define a third plugin using promise
export const checkDecoratorsPlugin = async (fastify: FastifyInstance) => {
  console.log(9991, fastify.name)
  console.log(9992, fastify.age)
  console.log(9993, fastify.address)
}

// define options
export interface MyPluginOptions {
  myPluginOption: string
}

// define plugin using callbacks
export const myPluginCallbackOptions: FastifyPluginCallback<MyPluginOptions> = (fastify, options, done) => {
  console.log(9999444, options)
  fastify.decorateRequest('myPluginProp', 'super_secret_value')
  fastify.decorateReply('myPluginProp', options.myPluginOption)

  done()
}
