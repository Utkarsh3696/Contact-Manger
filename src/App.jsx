import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import CreateContact from "./Components/CreateConatct";
import EditContact from "./Components/EditContact";
import ViewContact from "./ViewContact";


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
         <Route path='/' element={<Homepage/>}/>
        <Route path='/create' element={<CreateContact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>
        <Route path='/view/:id' element={<ViewContact/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
