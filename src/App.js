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
  /*...ReactReaderStyle,
  tocBackground: {
    ...ReactReaderStyle.tocBackground,
    background: 'white'
  }*/
}

//replace option x with corresponding link
//when clicking the link switch the epub with corresponding epub
//when clicking return go back to the old epub

//add an empty page to the epub file
//when I get to that empty page detect it
//draw buttons corresponding to the options
//when clicking the buttons render a new epub
//corresponding to the new updated story 

// cases: main story, option 1, option 2, option 3, return to options
// find option 1, 2, text and replace with link tag
// if you click the link then change state to corresponding case
// depending on the case render a new react reader which is a modified epub of the altered story
// if "return to story" is found replace it with link and if clicked then
// go back to the main story


function App() {
  const [page, setPage] = useState('') 
  const [mode, setMode] = useState('Dark')
  const [buttonMode, setButtonMode] = useState('dark') 
  var changeMode = () => {
    console.log(mode);
    if(mode === 'Light' && renditionRef.current){
      ownStyles.readerArea.backgroundColor = 'white'
      //ownStyles.tocBackground.background = 'white'
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
      setMode('Dark'); 
    }
    else if(mode === 'Dark' && renditionRef.current){
      ownStyles.readerArea.backgroundColor = '#282828'
      //ownStyles.tocBackground.background = '#282828'
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
      setMode('Light');
    }
    console.log(mode);
  }
  
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
    // eslint-disable-next-line
    const { displayed, href } = renditionRef.current.location.start
    
    setPage(`${displayed.page} of ${displayed.total}`)
    
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
        <h3 className="display-5">By Alexandra Kirzhnev</h3>
        
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
          showToc={true}
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
      <div style={{ position: 'absolute', top: '104vh', right: '1rem', left: '1rem', textAlign: 'right', zIndex: 2}}>
          <Button variant={"outline-"+buttonMode} onClick={() => changeMode()}>{mode === 'Dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
            </svg>}
          </Button>
      </div>
      <div style={{ position: 'absolute', top: '104vh', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
          <span style={mode === 'Dark' ? {color: 'black'} : {color: 'white'}}>{page}</span> 
      </div>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
          {/*eslint-disable-next-line*/}
          <Button variant="outline-light" class="rounded-circle"><img width="120" height="120" src="/plsdonate.png"></img>
            <p style={{color: 'white', padding: '0', margin: '0'}}>support my work~</p>
          </Button>
      </div>
    </div>
  );
}

export default App;