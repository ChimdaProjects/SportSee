// Router
import {Routes, Route} from "react-router-dom"

// Component
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

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
      
            </Routes>
     
        </div>
  );
}

export default App;
