import Link from "next/link"

export default function page() {
  return (
    <div className="">
      <button className="p-4 rounded-md bg-purple-400">
        <Link href='/blogs'>
        View the blogs

        </Link>
      </button>
    </div>
  )
}