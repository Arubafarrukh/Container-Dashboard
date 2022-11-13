import Sidebar from "./screens/Sidebar"
import Topbar from "./screens/Topbar";
import Map from "./screens/Map/Map";
import DriverDetails from "./screens/DriverDetails";
import DriverInfo from "./screens/DriverInfo";
import './App.css';



function App() {
  

  return (
    <>
    

    <div class="grid-container">
      <div class="item1"><Topbar /></div>
      <div class="item2"><Sidebar /> </div>
      <div class="item3"><Map/></div>  
      <div class="item4"><DriverInfo/></div>
      <div class="item5"><DriverDetails/></div>
    </div>
    
    
    
    </>
  
    
     
   

  
   
     
    

     
  );
}

export default App;
