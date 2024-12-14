
import prisma from "@/lib/db"

const Home = async () => {
//   const posts = await prisma.post.findMany();
  const Data = await prisma.articles.findMany();

  return (
    console.log(Data)
    // <div className="p-4 flex flex-col gap-y-4">
    //   <h2>Home</h2>

    //   <ul className="flex flex-col gap-y-2">
    //     {Data.map((data) => (
    //       <li key={data.id}>{data.article}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Home;