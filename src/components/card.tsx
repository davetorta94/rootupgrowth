import { services } from "@/data/data";





export const Card = () => {
  return (
    <>
    {services.map(({ id, name }) => (
       <div className="service-card"
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