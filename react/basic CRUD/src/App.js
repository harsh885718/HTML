import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Employe from './Employe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employeview from './Employeview';
import Employeedit from './Employeedit';
import Addemploye from './Addemploye';
// import ImageGallery from './ImageGallery';
// import Createcontext from './Createcontext';
// import WeatherApp from './WeatherApp';

function App() {
  return (
    <div className="App">
      

    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Employe/>}></Route>
      <Route path='/employe/add' element={<Addemploye/>}></Route>
      <Route path='/employe/view/:empid' element={<Employeview/>}></Route>
      <Route path='/employe/edit/:empid' element={<Employeedit/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <ImageGallery/> */}
    {/* <Createcontext/> */}
    {/* <WeatherApp/> */}
    </div>
  );
}

export default App;
