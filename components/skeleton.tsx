const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';



  export function ImageSkeleton (){
   return (

      <div className={`${shimmer} bg-gray-100 shadow-sm relative h-[200px]  md:h-[360px]`}>

      </div>
   )
  }