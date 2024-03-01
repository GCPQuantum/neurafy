import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
    <video  className="absolute top-100 w-full " autoPlay loop  muted playsInline>>
       <source src="https://assets-global.website-files.com/65560fe120333714fc15b546/655b77c0e04a3a504aae722e_temaplte-neurafy-video-03-transcode.mp4" />
     </video>
      <Hero />
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
