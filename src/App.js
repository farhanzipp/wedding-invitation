import './style/App.css';
import Navbar from './components/Navbar';
import Opening from './components/Opening';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import Footer from './components/Footer';
import PageFive from './components/PageFive';

function App() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto text-center">
        <Opening />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </main>
      <Footer />
    </div>
  );
}

export default App;
