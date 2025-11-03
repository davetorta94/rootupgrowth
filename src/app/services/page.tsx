import { services } from "@/data/data"



export default function ServiceHomePage() {
  return (
    <>

     <div className="flex flex-col justify-center w-full h-auto mt-5">
     
        {services.map(({ id, name, description }) => (

        
            <div className="w-[100%] h-auto flex justify-center my-5 border-b-4 border-gray" key={id}>

                <div className="flex flex-col md:text-start text-center">
                  <div className="text-4xl pb-10">
                    <span>{name}</span>
                  </div>
                  <div className="font-medium text-center">
                    <span>{description}</span>
                  </div>
                </div>

            </div>
        ))}

     </div>
    </>
  )
}

