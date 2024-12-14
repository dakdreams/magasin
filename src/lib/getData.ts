
import prisma from "@/lib/db"

const getData = async () => {
//   const posts = await prisma.post.findMany();
  const Data = await prisma.articles.findMany();

  return Data
};

export default getData;