import { Facebook, Instagram, Linkedin, Twitter} from "lucide-react"

const Places = () => {
  const places = [
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1541558618-e8a990c6382c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1490761668535-35497054764d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1610036615605-636de68a306e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1549566000-2479bf520d76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D"
  ]
  return (
    <section className="bg-[#0057D9] text-white py-12">
      <div className="container flex md:flex-row gap-3 flex-col lg:items-center items-start p-5 justify-between mx-auto px-5">
        <h1 className="lg:text-5xl text-2xl font-semibold">#lonelyplanet</h1>
        <div className="flex md:flex-row flex-col gap-2">
          <p className="text-lg font-bold leading-relaxed">FOLLOW LONELY PLANET:</p>
          <div className="flex items-center gap-2">
            <Facebook/>
            <Instagram/>
          
            <Twitter/>
            <Linkedin/>
          </div>
        </div>
        
      </div>
      <div className="flex overflow-x-scroll places mt-10">
          {
              places.map((place,idx)=>{
                return <img src={place} alt="place" key={idx}  className="w-[230px] h-[300px] object-cover object-center cursor-pointer hover:opacity-90" />
              })
          }
        </div>
    </section>
  )
}

export default Places