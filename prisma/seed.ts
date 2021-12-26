import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
      title: 'A blog post that people may comment on',
      comments: {
        create: [
          { comment: 'Insightful comment number 1' },
          { comment: 'another comment' },
        ],
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
