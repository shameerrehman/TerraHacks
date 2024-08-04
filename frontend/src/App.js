import './App.css';
import Navbar from './components/Navbar/Navbar';
import Items from './components/Items/Items';
import Signin from './pages/Signin/Signin';
import Profile from './pages/Profile/Profile';
import Messenger from './pages/Messenger/Messenger';
import Match from './pages/Match/Match';
import Inbox from './pages/Inbox/Inbox';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/messenger" element={<Messenger />}></Route>
        <Route path="/match" element={<Match />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);