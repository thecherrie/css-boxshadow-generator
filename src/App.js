import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Navigation, { MobileMenu } from './components/Navigation';
import MainSlider from './components/MainSlider';
import { Button, Input } from 'rsuite';
import { useState } from 'react';
import CheckIcon from '@rsuite/icons/Check';
import CopyIcon from '@rsuite/icons/Copy';
import CopyToClipboard from 'react-copy-to-clipboard';
import useWindowDimensions from './hooks/useWindowDimensions';
import { SketchPicker } from 'react-color';
import ColourPicker from './components/ColourPicker';

function App() {

  const [shiftRight, setShiftRight] = useState(0);
  const [shiftDown, setShiftDown] = useState(0);
  const [spread, setSpread] = useState(25);
  const [blur, setBlur] = useState(25);
  const [shadowColour, setShadowColour] = useState("0,0,0")
  const [boxColour, setBoxColour] = useState("0,0,0")
  const [opacity, setOpacity] = useState(50);
  var rawCss = `box-shadow: ${shiftRight}px ${shiftDown}px ${spread}px ${blur}px rgba(${shadowColour}, ${opacity / 100});`
  const [copied, setCopied] = useState(false)

  const { height, width } = useWindowDimensions();

  return (
    <>
      {width > 768 ? <Navigation /> : <MobileMenu />}
      <div className="mainWrapper">
        <div className="previewObjectWrapper">
          <div className="previewObject"

            style={{
              "box-shadow": `${shiftRight}px ${shiftDown}px ${spread}px ${blur}px rgba(${shadowColour}, ${opacity / 100})`
            }}

          >
            pretty preview... 💅
          </div>
        </div>


        <div className="sliderContent">
          <div className="sliderWrapper">
            <p>Shift Right</p>
            <MainSlider changeValue={val => setShiftRight(val)} />
          </div>
          <div className="sliderWrapper">
            <p>Shift Down</p>
            <MainSlider changeValue={val => setShiftDown(val)} />
          </div>
          <div className="sliderWrapper">
            <p>Spread</p>
            <MainSlider minVal={0} defaultVal={spread} changeValue={val => setSpread(val)} />
          </div>
          <div className="sliderWrapper">
            <p>Blur</p>
            <MainSlider defaultVal={blur} minVal={0} changeValue={val => setBlur(val)} />
          </div>
          <div className="sliderWrapper">
            <p>Opacity</p>
            <MainSlider defaultVal={opacity} minVal={0} maxVal={100} changeValue={val => setOpacity(val)} />
          </div>
          <div className="sliderWrapper">
            <p style={{ marginBottom: "20px" }}>Shadow Colour</p>
            <ColourPicker setColour={colour => setShadowColour(`${colour.rgb.r},${colour.rgb.g},${colour.rgb.b}`)} />
          </div>
          <div className="sliderWrapper">
            <p>CSS</p>
            <Input id="mainCssCode" style={{ margin: "10px 0" }} as="textarea" rows={3} placeholder="css"
              value={rawCss}
            />
            <CopyToClipboard text={rawCss}>
              <Button onClick={() => setCopied(true)}>Copy {copied ? <CheckIcon /> : <CopyIcon />}</Button>
            </CopyToClipboard>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
