import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOG from 'vanta/dist/vanta.fog.min'
import React, {useEffect, useState, useRef} from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactReader, ReactReaderStyle } from 'react-reader';

//import { findDOMNode, unmountComponentAtNode } from 'react-dom';

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

// If page is the last one and the selected file is the 0th then render 3 buttons x
// Each button has an onclick function that changes the selected file state x
// If the file state changes then UseEffect will detect this x
// Editing the currentfile state which should rerender the Reactreader component x
// I also need to report the location of the epubcifi at the last page and save it to a variable
// if the page is the last one and the selected file isn't the 0th then render a button to change back to base state
// if changing back to the base state then somehow rendition.display(old reported location)


const filenames = ['/SeasideScroll.epub', '/SeasideScroll1.epub', '/SeasideScroll2.epub', '/SeasideScroll3.epub', '/SeasideScroll4.epub']

function MainReader(props){
  if(props.selectedfile === 0){
    return (
      <ReactReader
        location={props.old}
        locationChanged={props.locationchanged}
        url={filenames[0]} 
        showToc={false}
        styles={ownStyles}
        getRendition={(rendition) => {  
            props.renditionref.current = rendition
            if(props.mode === 'Light'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "#282828 !important"
                },
                p: { 
                  color: 'white !important', 
                },
                span: {
                  color: 'white !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
            else if(props.mode === 'Dark'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "white !important"
                },
                p: { 
                  color: 'black !important', 
                },
                span: {
                  color: 'black !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
        }}
        ref={props.readerRef}
      ></ReactReader>
    );
  }
  else if(props.selectedfile === 1){
    return (
      null, <ReactReader
        location={props.location}
        locationChanged={props.locationchanged}
        url={filenames[1]} 
        showToc={false}
        styles={ownStyles}
        getRendition={(rendition) => {  
            props.renditionref.current = rendition
            if(props.mode === 'Light'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "#282828 !important"
                },
                p: { 
                  color: 'white !important', 
                },
                span: {
                  color: 'white !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
            else if(props.mode === 'Dark'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "white !important"
                },
                p: { 
                  color: 'black !important', 
                },
                span: {
                  color: 'black !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
        }}
        ref={props.readerRef}
      ></ReactReader>
    );
  }
  else if(props.selectedfile === 2){
    return (
      <ReactReader
        location={props.location}
        locationChanged={props.locationchanged}
        url={filenames[2]} 
        showToc={false}
        styles={ownStyles}
        getRendition={(rendition) => {  
            props.renditionref.current = rendition
            if(props.mode === 'Light'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "#282828 !important"
                },
                p: { 
                  color: 'white !important', 
                },
                span: {
                  color: 'white !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
            else if(props.mode === 'Dark'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "white !important"
                },
                p: { 
                  color: 'black !important', 
                },
                span: {
                  color: 'black !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
        }}
        ref={props.readerRef}
      ></ReactReader>
      
    );
  }
  else if(props.selectedfile === 3){
    return (
      <ReactReader
        location={props.location}
        locationChanged={props.locationchanged}
        url={filenames[3]} 
        showToc={false}
        styles={ownStyles}
        getRendition={(rendition) => {  
            props.renditionref.current = rendition
            if(props.mode === 'Light'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "#282828 !important"
                },
                p: { 
                  color: 'white !important', 
                },
                span: {
                  color: 'white !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
            else if(props.mode === 'Dark'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "white !important"
                },
                p: { 
                  color: 'black !important', 
                },
                span: {
                  color: 'black !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
        }}
        ref={props.readerRef}
      ></ReactReader>
    );
  }
  else if(props.selectedfile === 4){
    return (
      <ReactReader
        location={props.location}
        locationChanged={props.locationchanged}
        url={filenames[4]} 
        showToc={false}
        styles={ownStyles}
        getRendition={(rendition) => {  
            props.renditionref.current = rendition
            if(props.mode === 'Light'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "#282828 !important"
                },
                p: { 
                  color: 'white !important', 
                },
                span: {
                  color: 'white !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
            else if(props.mode === 'Dark'){
              props.renditionref.current.themes.default({
                body: {
                  "background": "white !important"
                },
                p: { 
                  color: 'black !important', 
                },
                span: {
                  color: 'black !important',
                  "font-size": `${props.size}% !important`
                },
                "img": { "font-size": `${props.size}% !important`}, 
              })
            }
        }}
        ref={props.readerRef}
      ></ReactReader>
    );
  }
  
  return (null);
}

function App() {
  const [page, setPage] = useState('') 
  const [mode, setMode] = useState('Dark')
  const [buttonMode, setButtonMode] = useState('dark')
  const [selectedFile, setSelectedFile] = useState(0);
  //eslint-disable-next-line
  const [filename, setFileName] = useState(filenames[selectedFile]);
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [location, setLocation] = useState(null);
  const [size, setSize] = useState(window.innerWidth > 899 ? 130 : 90)
  const renditionRef = useRef(null)
  const [total, setTotal] = useState(null)
  const readerRef = useRef(null)
  const [tempState, setTempState] = useState(0);
  //eslint-disable-next-line
  const [old, setOld] = useState(null);
  

  const getMax = () => {
    if(window.innerWidth < 900){
      return 0; 
    }
    else{
      return 2;
    }
  }
  const changeSize = (newSize) => {
    setSize(newSize)
  } 
  const changeMode = () => {
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
  }
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
    
    
    // eslint-disable-next-line
    const { displayed, href } = renditionRef.current.location.start
    setTotal(displayed.total)
    //const displaytotal = getMax() === 0 || parseInt(displayed.total) === 2 ? displayed.total : (parseInt(displayed.total) - 2).toString()
    setPage(`${displayed.page} of ${displayed.total}`)
    
  }
  
  useEffect(() => {
    //console.log(selectedFile, tempState)
    
    setFileName(filenames[selectedFile])
    if(selectedFile > 3){
      const set = () => { setSelectedFile(tempState) }
      set();
       setFileName(filenames[selectedFile])
      //console.log(selectedFile)
    } 
  }, [selectedFile, tempState])
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
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.default({ 
        "img": { "font-size": `${size}% !important`},
        "span" : { "font-size": `${size}% !important`}
      })
      
      
  }},[size])
  
  return (
    
    <div className="App" ref={myRef}>
      <header className="App-header" style={{paddingBottom: '5vmin'}}>
        
        <h1 id="Header">~Seaside Scroll~</h1>
        
        <h3 id="Author">By Alexandra Kirzhnev</h3>
        <div style={{ position: 'absolute', top: '80vh', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        
          <Link
            activeClass="active"
            to="start"
            spy={true}
            smooth={true}
            offset={0}
            duration={10}
          >
          
          <Button size="lg" style={{marginTop: "20px", fontSize: "calc(10px + 4vmin)"}} variant="outline-light">↓</Button>
          
          </Link>
          
        </div>
        
      </header>
      
      <div id="reader" style={{ height: "100vh", backgroundColor: "black", background: "black"}} className="start">
        
        <MainReader old={old} size={size} mode={mode} selectedfile={selectedFile} location={location} locationchanged={locationChanged} renditionref={renditionRef} readerref={readerRef}/>
         
      </div>
     
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'left', zIndex: 1}}>
          <Button variant={"outline-"+buttonMode} onClick={() => changeSize(Math.max(90, size - 10))}>-</Button> 
          <Button variant={"outline-"+buttonMode} onClick={() => changeSize(Math.min(130, size + 10))}>+</Button>
          
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 2}}>
        {(parseInt(page) === parseInt(total) || Math.abs(parseInt(page) - parseInt(total)) <= getMax()) && selectedFile === 0 ? 
        
    <span style={{fontFamily: 'Times New Roman'}}>
    <Button variant={"outline-"+buttonMode} onClick={() => {setSelectedFile(5); setTempState(1)}}>1</Button>
    <Button variant={"outline-"+buttonMode} onClick={() => {setSelectedFile(5); setTempState(2)}}>2</Button>
    <Button variant={"outline-"+buttonMode} onClick={() => {setSelectedFile(5); setTempState(3)}}>3</Button>
    <Button variant={"outline-"+buttonMode} onClick={() => {setSelectedFile(5); setTempState(4)}}>4</Button>
  </span>
: null} 
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        {(parseInt(page) === parseInt(total) || Math.abs(parseInt(page) - parseInt(total)) <= getMax()) && selectedFile !== 0 ? 
          <span><Button variant={"outline-"+buttonMode} onClick={() => {setSelectedFile(4); setTempState(0); locationChanged(location); console.log(old)}}>Return</Button></span>: null} 
      </div>
      <div style={{ position: 'absolute', top: '101vh', right: '1rem', left: '1rem', textAlign: 'right', zIndex: 2}}>
          <Button variant={"outline-"+buttonMode} onClick={() => changeMode()}>{mode === 'Dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
            </svg>}
          </Button>
      </div>
      <div style={{ position: 'absolute', top: '101vh', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
          <span style={mode === 'Dark' ? {color: 'black', fontFamily: 'Times New Roman'} : {color: 'white', fontFamily: 'Times New Roman'}}>{page}</span> 
      </div>
      
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
          {/*eslint-disable-next-line */} 
          <Button variant="outline-light" class="rounded-circle"><img width="100" height="100" src="/plsdonate.png"></img>
            <p style={{padding: '0', margin: '0'}}>support my work~</p>
          </Button>
          
      </div>
      

    </div>
    
  );
}

export default App;