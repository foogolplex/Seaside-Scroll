import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOG from 'vanta/dist/vanta.fog.min'
import {useEffect, useState, useRef} from 'react';

function App() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xdcd2bc,
        midtoneColor: 0x8e99e6,
        lowlightColor: 0x573aeb,
        baseColor: 0xe3b9b9,
        blurFactor: 0.24,
        speed: 1.70,
        zoom: 1.20
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]) 
  return (
    <div className="App" ref={myRef}>
      <header className="App-header">
        <h1 className="display-1">Seaside Scroll</h1>
        <h3 className="display-5">By Alex Kirzhnev</h3>
         
        <Button href="story" size="lg" style={{marginTop: "20px"}} variant="outline-light">Begin</Button>  
      </header>
      
    </div>
  );
}

export default App;