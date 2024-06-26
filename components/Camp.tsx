import { PEOPLE_URL } from "@/constant"
import Image from "next/image"

interface CompositeProp{
 backgroundImage: string,
 title: string,
 subtitle: string,
 peopleJoined:String
}
const CompSite =({backgroundImage, title, subtitle, peopleJoined}:CompositeProp)=>{
  return(
    <div className={`w-full h-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">


        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
             <Image
               src="/folded-map.svg"
               alt="folder"
               width={28}
               height={28} 
             />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="text-white regular-14">{subtitle}</p>
          </div>
        </div>


        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
             {PEOPLE_URL.map((url)=>(
              <Image 
                 className="inline-block h-10 w-10 rounded-full"
                 src={url}
                 key={url}
                 alt="person"
                 width={40}
                 height={40}
              />
             ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>


      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb:10 lg:py-20 xl:mb-20'>
       <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px]">
           <CompSite
             backgroundImage="bg-bg-img-1"
             title="Putuk Truno Camp"
             subtitle="Prigen, Pasurum"
             peopleJoined="50+ Joined"
           />
           <CompSite
             backgroundImage="bg-bg-img-2"
             title="Mountin View Camp"
             subtitle="Samewhere in the Wilderness"
             peopleJoined="50+ Joined"
           />
       </div>

       <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-60">
          <div className="bg-green-50 p-8 lg:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
             <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white"><strong>Feeling Lost</strong> And Not knowing the way?</h2>
             <p className="regular-14 xl:regular-16 mt-5 text-white">
             Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
             </p>
             <Image
               src="/quote.svg"
               alt="camp-2"
               width={186}
               height={219}
               className="camp-quote"
             />
          </div>
       </div>
    </section>
  )
}

export default Camp