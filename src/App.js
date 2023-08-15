import './style/App.css';
import Navbar from './components/Navbar';
import Opening from './components/Opening';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

function App() {
  return (
    <div>
      <Navbar />
      <main className="container text-center">
        <Opening />
        <PageTwo />
        <PageThree />
        <PageFour />
      </main>
      
    </div>
  );
}

export default App;
