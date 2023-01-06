import './App.scss'
import Header from './components/Hero/Header';
import Offers from './components/Offers/Offers';
import Propertyform from './components/Propertyform/Propertyform';
import Propertylist from './components/Propertylist/Propertylist';
import Whyus from './components/Whyus/Whyus';





function App() {

  return (   
    <div>
      <Header />
      <Whyus />
      <Propertylist/>
      <Offers />
      <Propertyform/>
    </div>
  );
}

export default App;
