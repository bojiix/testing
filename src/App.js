import logo from './logo.svg';
import './App.css';
import ToPredictSection from './components/ToPredictSection';
import PredictedSection from './components/PredictedSection';
import { useState } from 'react'

function App() {

  const [predictedImage, setPredictedImage] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div>
          <ToPredictSection setPredictedImage={setPredictedImage} />
        </div>
        <div>
          <PredictedSection predictedImage={predictedImage} />
        </div>
      </main>
    </div>
  );
}

export default App;
