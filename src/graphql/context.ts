import { PrismaClient } from '@prisma/client'
import prisma from 'src/prisma'

export type Context = {
  db: PrismaClient
}

export async function createContext(): Promise<Context> {
  return {
    db: prisma
  }
}
