// Router
import {Routes, Route} from "react-router-dom"

// Component
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import NotFound from "../../pages/NotFound";

// Styles
import './App.css';


function App() {
   
    return (
        <div className="App">
    
            <Routes>
            
                <Route path="/" element={<Home/>} />
                <Route
                    path="/user/:userId" 
                    element = { <Dashboard  /> } />      
                <Route path="*" element={<NotFound />}/> 
                

      
            </Routes>
     
        </div>
  );
}

export default App;
