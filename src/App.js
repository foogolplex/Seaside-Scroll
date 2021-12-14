import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOG from 'vanta/dist/vanta.fog.min'
import React, {useEffect, useState, useRef} from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactReader, ReactReaderStyle } from 'react-reader';

let ownStyles = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: 'white'
  },
  
}

function App() {
  const [mode, setMode] = useState('dark')
  const [buttonMode, setButtonMode] = useState('dark') 
  var changeMode = () => {
    console.log(mode);
    if(mode === 'light' && renditionRef.current){
      ownStyles.readerArea.backgroundColor = 'white'
      renditionRef.current.themes.default({
          body: {
            "background": "white !important"
          },
          p: { 
            color: 'black !important', 
          },
          span: {
            color: 'black !important', 
          },
      })
      setButtonMode('dark')
      setMode('dark'); 
    }
    else if(mode === 'dark' && renditionRef.current){
      ownStyles.readerArea.backgroundColor = '#282828'
      renditionRef.current.themes.default({
          body: {
            "background": "#282828 !important"
          },
          p: { 
            color: 'white !important', 
          },
          span: {
            color: 'white !important', 
          },
      })
      setButtonMode('light'); 
      setMode('light');
    }
    console.log(mode);
  } 
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
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
  const [size, setSize] = useState(100)
  const renditionRef = useRef(null)
  const changeSize = (newSize) => {
    setSize(newSize)
  } 
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.default({ 
        "img": { "font-size": `${size}% !important`},
        "span" : { "font-size": `${size}% !important`}
      })
      
  }},[size]) 
  return (
    <div className="App" ref={myRef}>
      <header className="App-header">
        <h1 className="display-1">Seaside Scroll</h1>
        <h3 className="display-5">By Alex Kirzhnev</h3>
        
        <Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={0}
          duration={10}
        >
        <Button size="lg" style={{marginTop: "20px"}} variant="outline-light">Begin</Button> 
        </Link>
      </header>
      <div style={{ height: "100vh", backgroundColor: "black", background: "black"}} className="start">
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="/SeasideScroll.epub" 
          showToc={false}
          styles={ownStyles}
          getRendition={(rendition) => {  
              renditionRef.current = rendition  
          }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'left', zIndex: 1}}>
          <Button variant={"outline-"+buttonMode} onClick={() => changeSize(Math.max(90, size - 10))}>-</Button> 
          <Button variant={"outline-"+buttonMode} onClick={() => changeSize(Math.min(130, size + 10))}>+</Button>
           
      </div>
      <div style={{ position: 'absolute', top: '101vh', right: '1rem', left: '1rem', textAlign: 'right', zIndex: 1}}>
          <Button variant={"outline-"+buttonMode} onClick={() => changeMode()}>{mode === 'dark' ? 'light' : 'dark'}</Button>
      </div>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        {/*eslint-disable-next-line*/}
        <Button variant="outline-light" class="rounded-circle"><img width="90" height="90" src="/plsdonate.png"></img>
        <p style={{color: 'white', padding: '0', margin: '0'}}>support my work~</p>
        </Button>
      </div>
    </div>
  );
}

export default App;