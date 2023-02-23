import { useState, useEffect} from 'react'
import homeLayout from "../styles/homeLayout.css"
import main from "../images/main.jpg"
import hero from "../images/hero.jpg"
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GroceriesCarousel from '../components/GroceriesCarousel'
import KitchenCarousel from '../components/KitchenCarousel'
import axios from 'axios'

const Home = () => {

  const [groceriesCarousel, setGroceriesCarousel] = useState([]);
  const [kitchenCarousel, setkitchenCarousel] = useState([]);

  const getGroceries = () => {
    axios
      .get("/groceries")
      .then((res) => setGroceriesCarousel(res.data))
      .catch((err) => console.error(err));
  };

  const getKitchen = () => {
    axios
      .get("/kitchen")
      .then((res) => setkitchenCarousel(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGroceries();
    getKitchen()
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='home-container'>
      <div className='image-wrapper'>
        <img className='main-image' src={main}/>
        <div className='sales-details'>
          <h1>Cozy Savings, Incoming</h1>
          <p>Grab a blanket and save on Animal Welfare Certified ground beef as well as pantry favorites from Rao's. Plus, save an extra 10% on sale items with Sunrise Plus.</p>
          <Link to={"/sales"}>
          <button>See all sales</button>
          </Link>
          <p>Valid 2/22 - 2/28/23. U.S. only. Restrictions apply.</p>
        </div>
      </div>
      <div className='carousel-container'>
        <div className='carousel-header-wrapper'>
          <h3 className='carousel-header'>Discover Our Latest & Greatest</h3>
          <p className='carousel-description'>Check out what's hot right now, including limited-time-only finds and seasonal favorites.</p>
        </div>
        <div className="carousel-wrapper">
          <h3>Groceris</h3>
          <Carousel 
            responsive={responsive}   
            infinite={true} 
          >
            {groceriesCarousel.map((groceries) => {
          return (
            <GroceriesCarousel
              key={groceries._id}
              name={groceries.name}
              description={groceries.description}
              details={groceries.details}
              newPrice={groceries.new_price}
              oldPrice={groceries.old_price}
              type={groceries.type}
              imgUrl={groceries.imgUrl}
              id={groceries._id}
            />
          );
        })}
          </Carousel>
          <h3>Kitchen</h3>
          <Carousel 
            responsive={responsive}   
            infinite={true} 
          >
            {kitchenCarousel.map((kitchen) => {
          return (
            <KitchenCarousel
              key={kitchen._id}
              name={kitchen.name}
              description={kitchen.description}
              details={kitchen.details}
              newPrice={kitchen.new_price}
              oldPrice={kitchen.old_price}
              type={kitchen.type}
              imgUrl={kitchen.imgUrl}
              id={kitchen._id}
            />
          );
        })}
          </Carousel>
        </div>
      </div>
      <div className='image-wrapper'>
        <img className='main-image' src={hero}/>
        <div className='sales-details'>
          <h1>Cold-weather meals with the comfy feels.</h1>
          <p>Brrrrravo to our culinary team for these cozy takes on breakfast, lunch and dinner, including seasonal produce and blanket-worthy recipes. (Snacks and desserts, too.) That's good eating by the fire.</p>
          <Link to={"/recipes"}>
          <button>Get all meals</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home