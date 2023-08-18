import React, {useState} from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import Opening from './components/Opening';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import Footer from './components/Footer';
import PageFive from './components/PageFive';
import WelcomePage from './components/WelcomePage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const hideWelcome = () => {
    setShowWelcome(false);
  };
  return (
    <div>
      <WelcomePage showWelcome={showWelcome} onHideWelcome={hideWelcome} />
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
