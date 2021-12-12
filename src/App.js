import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOG from 'vanta/dist/vanta.fog.min'
import React, {useEffect, useState, useRef} from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactReader, ReactReaderStyle } from 'react-reader';

var mode = 'light';
// eslint-disable-next-line
var state = false;

const ownStyles = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: '#282828'
  },
   body: {
     ...ReactReaderStyle.body,
                  "background": "#282828 !important" 
                },
                p: {
                  ...ReactReaderStyle.p, 
                  color: 'white !important', 
                },
                span: {
                  ...ReactReaderStyle.span,
                  color: 'white !important', 
                },  
}
function App() {
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
    }
  }, [size]) 
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
          epubOptions={{
            flow: "scrolled",
            manager: "continuous" 
          }}
          showToc={false}
          styles={ownStyles}
          getRendition={(rendition) => { 
              rendition.themes.default({
                "div": {
                  backgroundColor: "black !important"
                },
                container: {
                  backgroundColor: "black !important"
                }, 
                readerArea: {
                  "background-color": "#000", 
                  backgroundColor: "#000"
                }, 
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
              renditionRef.current = rendition 
              console.log(rendition.themes)
          }}
        />
    </div>
    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'left', zIndex: 1}}>
        <Button variant={"outline-"+mode} onClick={() => changeSize(Math.max(80, size - 10))}>-</Button> 
        <Button variant={"outline-"+mode} onClick={() => changeSize(Math.min(130, size + 10))}>+</Button>
        <Button variant={"outline-"+mode}>{mode}</Button>
    </div>
    </div>
  );
}

export default App;