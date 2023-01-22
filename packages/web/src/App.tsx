import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import Test from './screens/Test';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/Test" element={<Test />} />

       </Routes>
    </>
 );
}

export default App
