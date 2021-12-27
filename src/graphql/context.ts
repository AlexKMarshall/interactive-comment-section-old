import { PrismaClient } from '@prisma/client'
import prisma from 'src/prisma'

export type Context = {
  prisma: PrismaClient
}

export async function createContext(): Promise<Context> {
  return {
    prisma,
  }
}
