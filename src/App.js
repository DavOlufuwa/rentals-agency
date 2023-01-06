import './App.scss'
import Header from './components/Hero/Header';
import Offers from './components/Offers/Offers';
import Propertylist from './components/Propertylist/Propertylist';
import Whyus from './components/Whyus/Whyus';





function App() {

  return (   
    <div>
      <Header />
      <Whyus />
      <Propertylist/>
      <Offers />
    </div>
  );
}

export default App;
