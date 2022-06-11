import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    name: string
    address: string
    age: number
  }

  export interface FastifyRequest {
    decoratedUser: unknown
  }
}
