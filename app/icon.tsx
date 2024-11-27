import {ImageResponse} from 'next/og'

// Image metadata

export const size = {
   width: 32,
   height: 32,
}

export const contentType = 'image/png'


export default function Icon(){
   return new ImageResponse(
      <div tw='text-sm bg-black w-full h-full flex items-center justify-center text-white'>
         BE

      </div>
   ),
   {
      ...size
   }
}