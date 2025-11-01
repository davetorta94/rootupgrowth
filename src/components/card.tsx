import { services } from "@/data/data";





export const Card = () => {
  return (
    <>
    {services.map(({ id, name }) => (
       <div className="mb-3.5"
            key={id}>
          <div className="service-content">
            {name}
            <br />
          </div>
        </div>
    ))}
       

    </>
  )
}