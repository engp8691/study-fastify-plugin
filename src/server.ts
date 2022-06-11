import Fastify from 'fastify'
import fp from 'fastify-plugin'
import { myPluginCallback, myPluginPromise, withoutFpPlugin, checkDecoratorsPlugin, myPluginCallbackOptions }from './plugins'

const fastify = Fastify({
  logger: true
})

fastify.register(
  // withoutFpPlugin,
  fp(withoutFpPlugin),
  {
    name: 'Yonglin',
    role: 'Developer',
    salary: 1234,
  }
)
fastify.register(fp(myPluginPromise))
fastify.register(fp(myPluginCallback))
fastify.register(
  myPluginCallbackOptions,
  // fp(myPluginCallbackOptions),
  {
    myPluginOption: 'hello'
  }
)
fastify.register(checkDecoratorsPlugin)


fastify.get('/', async (request, reply) => {
  console.log(333331, request)
  console.log(333332, request.decoratedUser)
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
