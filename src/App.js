import './App.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Hero/Header';
import Offers from './components/Offers/Offers';
import Propertyform from './components/Propertyform/Propertyform';
import Propertylist from './components/Propertylist/Propertylist';
import Testimonial from './components/Testimonial/Testimonial';
import Whyus from './components/Whyus/Whyus';





function App() {

  return ( 
    <div>
      <Header />
      <Whyus />
      <Propertylist/>
      <Offers />
      <Propertyform/>
      <Testimonial />
      <Footer/>
    </div>
  );
}

export default App;
