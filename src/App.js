import './App.scss'
import { subData } from './components/content/subData';



function App() {

  return (   
    <div>
        {
          subData.map((data, index)=>(
            <div key={index}>
              <img src={data.image} alt="" />
            </div>
          ))
        }
    </div>
  );
}

export default App;
