import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App