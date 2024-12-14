import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="text-center">
      <Link href={`articles`}>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-80 rounded-full my-8">
          Article
        </Button>
      </Link>
      <br />
      <Link href={`entres`}>
        <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-80 rounded-full my-8">
          entres
        </Button>
      </Link>
      <br />
      <Link href={`credits`}>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold w-80 rounded-full my-8">
          Credit
        </Button>
      </Link>
    </div>
  );
}
