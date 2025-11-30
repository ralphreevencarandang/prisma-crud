import { prisma } from './prisma'



async function main() {
  const user = await prisma.users.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      password: 'alice@prisma.io',
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })