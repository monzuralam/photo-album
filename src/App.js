import Header from './components/Header';
import LatestPhotos from './components/LatestPhotos';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LatestPhotos />
      <Footer />
    </div>
  );
}

export default App;
