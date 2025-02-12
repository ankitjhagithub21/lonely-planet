import { Mail} from "lucide-react"

const Form = () => {
  return (
    <section className="bg-[#EFE9DB] py-10 px-5">
       <div className="max-w-3xl mx-auto w-full">
       <div className="bg-white rounded-full w-fit mx-auto p-3 mb-8">
       <Mail size={40}/>
       </div>
       <h1 className="text-blue-600 lg:text-5xl text-2xl text-center font-semibold">Travel inspiration delivered directly to your inbox</h1>
       <div className="flex md:flex-row flex-col gap-2 px-5 items-center justify-center mt-8 mb-5">
        <input type="text" placeholder="Email address" className="border lg:w-1/2 w-full rounded-full border-gray-400 bg-[#FFFFFF] px-4 py-2 outline-blue-700" />
        <button className="text-white text-sm px-6 py-2 bg-blue-600 rounded-full md:w-fit w-full">Subscribe now</button>
       </div>
       <p className="text-xs text-center">Subscribe to our newsletters and promotions. Read our Privacy Policy.</p>
       </div>
    </section>
  )
}

export default Form