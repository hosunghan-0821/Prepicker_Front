import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './component/admin/Admin';


function App() {
  return (
 <>
 <BrowserRouter>
 
  <Routes>
    <Route path='/admin' element={<Admin/>} />
  </Routes>
 </BrowserRouter>

 </>
  );
}

export default App;
