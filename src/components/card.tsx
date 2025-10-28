
import { services } from "@/data/data";





export const Card = () => {
  return (
    <>
    {services.map(({ id, name, description }) => (
       <div className="service-card"
            key={id}>
          <div className="service-head">{name}</div>
          <div className="service-content">
            {description}
            <br />
            <button className="service-button">+Info</button>
          </div>
        </div>
    ))}
       

    </>
  )
}