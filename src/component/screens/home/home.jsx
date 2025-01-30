import styles from "./home.module.css";
import {cars} from "./cars.data.js";

function Home() {
    return (
      <div>
          <h1>Cars catalog</h1>
            {cars.length ? cars.map(car=>(
                <div key={car.id} className={styles.item}>
            <div
            className={styles.image}
            style={{
                backgroundImage:`url(${car.image})`,
            }}
            />
            <div className={styles.info}>
                    <h2>{car.name}</h2>
                    <p>
                        {new Intl.NumberFormat('ru-RU',{
                        style: 'currency',
                        currency: 'RUB',
                    }).format(car.price)}
                </p>
                <button>Read more</button>
            </div>
          </div>
            ))
            :<p>Машин нет</p>
        }
      </div>
    )
  }
  
  export default Home
  