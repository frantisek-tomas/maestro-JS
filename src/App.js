import { Routes, Route } from 'react-router';
import Introduction from './pages/introduction';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='maestro-js/'element={<Introduction />}></Route>
    </Routes>
  );
}

export default App;