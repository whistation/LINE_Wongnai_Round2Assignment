import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
       </Routes>
    </>
 );
}

export default App
