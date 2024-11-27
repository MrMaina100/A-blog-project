import {ImageResponse} from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'blogs homepage'
export const size = {
   width: 1200,
   height: 630
}

export const contentType = 'image/png'

export default async function Image(){
   // Font

   return new ImageResponse(
      <div tw='text-md font-bold bg-white text-black w-full h-full flex items-center justify-center'>
         <h4>
            Blogs Examples Test
         </h4>

      </div>
   ),
   {
      ...size,

   }


}