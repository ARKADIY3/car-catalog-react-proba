import {useState} from "react";
import CarItem from "./car-item/CarItem.jsx";
import {cars as carsData} from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

function Home() {
    const [cars,setCars] = useState(carsData)

    return (
      <div>
          <h1>Cars catalog</h1>
          <CreateCarForm setCars={setCars}/>
            {cars.length ? cars.map(car=>(
               <CarItem key={car.id} car={car}/> 
            ))
            :<p>Машин нет</p>
        }
      </div>
    )
  }
  
  export default Home
  