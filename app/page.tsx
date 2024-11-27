import Link from "next/link"
import { DarkButton } from "./components/DarkButton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:'Example blog',
  description:'Example blog example for people to see and clients to reach',
  keywords:[
    'example blog',
    'nextjs example blog'
  ],
 
}


export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <button className="p-3 rounded-md bg-black text-white dark:bg-white dark:text-black">
        <Link href='/blogs'>
        View the blogs

        </Link>
      </button>

   
    </div>
  )
}