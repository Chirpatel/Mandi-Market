import React ,{useState,useEffect} from 'react';
import './App.css';
import Loader from './Component/Pages/Loader/Loader';
import ActivateAPI from './Component/API/ActivateAPI';
import Navbar from './Component/Pages/Navbar/Navbar'
import Body from './Component/Pages/Body/Body';
function App() {
  const [isLoading,setLoading] = useState(true);
  useEffect(()=>{
    const call = async ()=>{
      var data = await ActivateAPI();
      if(data && data.value!==undefined){
        setLoading(false);
      }
    }
    if(isLoading){
      call();
    }
  },[isLoading])
  return (
    <div className="App">
      {isLoading &&
        <Loader/>
      }
      {!isLoading &&
          <>
            <Navbar/>
            <Body/>
          </>
      }
    </div>
  );
}

export default App;
