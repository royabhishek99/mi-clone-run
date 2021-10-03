import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Slider from './components/Slider.js';
import data from './data/data.json'
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';

function App() {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fal={data.fitnessAndLifeStyle}
        home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}/>

      <Heading text='STAR PRODUCTS'/>
      <StarProducts starProducts={data.starProduct}/>

      <Heading text='HOT ACCESSSORIES'/>
      <HotAccessoriesMenu/>

      <Route exact path='/music'>
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
      </Route>
      <Route exact path='/smartdevices'>
        <HotAccessories smartDevices={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
      </Route>
      <Route exact path='/home'>
        <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
      </Route>
      <Route exact path='/lifestyle'>
        <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>
      </Route>
      <Route exact path='/ma'>
        <HotAccessories ma={data.hotAccessories.mobileAccessories} maCover={data.hotAccessoriesCover.mobileAccessories}/>
      </Route>

      <Heading text='PRODUCT REVIEWS'/>
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text='VIDEOS'/>
      <Videos videos={data.videos}/>

      <Heading text='IN THE PRESS'/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
