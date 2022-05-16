//import logo from './logo.svg';
//import ReactDOM  from 'react-dom';
import * as React from "react";
import Button from '@mui/material/Button'
import './App.css';
//import './random.js';
//import * as fs from 'fs'

let final_ans = "ஈகூஙெ"
let ans = "";

/*function stringAppend(letter) {
  ans = ans.concat(letter);
  console.log(ans);
}*/

function App() {
  return (
    <div>
        <div className='App'>
          <Button variant = "contained" onClick={() => { console.log(ans);console.log(final_ans); if(ans===final_ans) console.log("correct"); else console.log("incorrect. try again"); ans = "";}}>‎</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("அ");}}>அ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஆ");}}>ஆ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("இ");}}>இ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஈ");}}>ஈ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("உ");}}>உ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஊ");}}>ஊ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("எ");}}>எ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஏ");}}>ஏ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஐ");}}>ஐ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஒ");}}>ஒ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஓ");}}>ஓ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஔ");}}>ஔ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("க்");}}>க்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("க");}}>க</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கா");}}>கா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கி");}}>கி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கீ");}}>கீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கு");}}>கு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கூ");}}>கூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கெ");}}>கெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கே");}}>கே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கை");}}>கை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கொ");}}>கொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கோ");}}>கோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கௌ");}}>கௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ங்");}}>ங்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ங");}}>ங</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙா");}}>ஙா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙி");}}>ஙி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙீ");}}>ஙீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙு");}}>ஙு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙூ");}}>ஙூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙெ");}}>ஙெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙே");}}>ஙே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙை");}}>ஙை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙொ");}}>ஙொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙோ");}}>ஙோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙௌ");}}>ஙௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ச்");}}>ச்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ச");}}>ச</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சா");}}>சா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சி");}}>சி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சீ");}}>சீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சு");}}>சு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சூ");}}>சூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("செ");}}>செ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சே");}}>சே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சை");}}>சை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சொ");}}>சொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சோ");}}>சோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சௌ");}}>சௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞ்");}}>ஞ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞ");}}>ஞ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞா");}}>ஞா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞி");}}>ஞி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞீ");}}>ஞீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞு");}}>ஞு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞூ");}}>ஞூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞெ");}}>ஞெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞே");}}>ஞே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞை");}}>ஞை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞொ");}}>ஞொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞோ");}}>ஞோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞௌ");}}>ஞௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ட்");}}>ட்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ட");}}>ட</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டா");}}>டா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டி");}}>டி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டீ");}}>டீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டு");}}>டு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டூ");}}>டூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டெ");}}>டெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டே");}}>டே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டை");}}>டை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டொ");}}>டொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டோ");}}>டோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டௌ");}}>டௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ண்");}}>ண்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ண");}}>ண</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணா");}}>ணா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணி");}}>ணி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணீ");}}>ணீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணு");}}>ணு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணூ");}}>ணூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணெ");}}>ணெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணே");}}>ணே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணை");}}>ணை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணொ");}}>ணொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணோ");}}>ணோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணௌ");}}>ணௌ</Button>
        </div>
        
        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("த்");}}>த்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("த");}}>த</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தா");}}>தா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தி");}}>தி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தீ");}}>தீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("து");}}>து</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தூ");}}>தூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தெ");}}>தெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தே");}}>தே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தை");}}>தை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தொ");}}>தொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தோ");}}>தோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தௌ");}}>தௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ந்");}}>ந்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ந");}}>ந</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நா");}}>நா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நி");}}>நி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நீ");}}>நீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நு");}}>நு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நூ");}}>நூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நெ");}}>நெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நே");}}>நே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நை");}}>நை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நொ");}}>நொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நோ");}}>நோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நௌ");}}>நௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ப்");}}>ப்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ப");}}>ப</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பா");}}>பா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பி");}}>பி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பீ");}}>பீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பு");}}>பு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பூ");}}>பூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பெ");}}>பெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பே");}}>பே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பை");}}>பை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பொ");}}>பொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("போ");}}>போ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பௌ");}}>பௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ம்");}}>ம்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ம");}}>ம</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மா");}}>மா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மி");}}>மி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மீ");}}>மீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மு");}}>மு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மூ");}}>மூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மெ");}}>மெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மே");}}>மே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மை");}}>மை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மொ");}}>மொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மோ");}}>மோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மௌ");}}>மௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ய்");}}>ய்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ய");}}>ய</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யா");}}>யா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யி");}}>யி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யீ");}}>யீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யு");}}>யு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யூ");}}>யூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யெ");}}>யெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யே");}}>யே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யை");}}>யை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யொ");}}>யொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யோ");}}>யோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யௌ");}}>யௌ</Button>
        </div>


        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ர்");}}>ர்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ர");}}>ர</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரா");}}>ரா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரி");}}>ரி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரீ");}}>ரீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரு");}}>ரு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரூ");}}>ரூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரெ");}}>ரெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரே");}}>ரே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரை");}}>ரை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரொ");}}>ரொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரோ");}}>ரோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரௌ");}}>ரௌ</Button>
        </div>
 
        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ல்");}}>ல்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ல");}}>ல</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லா");}}>லா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லி");}}>லி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லீ");}}>லீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லு");}}>லு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லூ");}}>லூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லெ");}}>லெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லே");}}>லே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லை");}}>லை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லொ");}}>லொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லோ");}}>லோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லௌ");}}>லௌ</Button>
        </div> 

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வ்");}}>வ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வ");}}>வ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வா");}}>வா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வி");}}>வி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வீ");}}>வீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வு");}}>வு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வூ");}}>வூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வெ");}}>வெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வே");}}>வே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வை");}}>வை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வொ");}}>வொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வோ");}}>வோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வௌ");}}>வௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழ்");}}>ழ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழ");}}>ழ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழா");}}>ழா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழி");}}>ழி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழீ");}}>ழீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழு");}}>ழு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழூ");}}>ழூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழெ");}}>ழெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழே");}}>ழே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழை");}}>ழை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழொ");}}>ழொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழோ");}}>ழோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழௌ");}}>ழௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ள்");}}>ள்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ள");}}>ள</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளா");}}>ளா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளி");}}>ளி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளீ");}}>ளீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளு");}}>ளு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளூ");}}>ளூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளெ");}}>ளெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளே");}}>ளே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளை");}}>ளை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளொ");}}>ளொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளோ");}}>ளோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளௌ");}}>ளௌ</Button>
        </div>

        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ற்");}}>ற்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ற");}}>ற</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றா");}}>றா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றி");}}>றி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றீ");}}>றீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("று");}}>று</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றூ");}}>றூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றெ");}}>றெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றே");}}>றே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றை");}}>றை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றொ");}}>றொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றோ");}}>றோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றௌ");}}>றௌ</Button>
        </div>
        
        <div className='App'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ன்");}}>ன்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ன");}}>ன</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னா");}}>னா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னி");}}>னி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னீ");}}>னீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னு");}}>னு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னூ");}}>னூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னெ");}}>னெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னே");}}>னே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னை");}}>னை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னொ");}}>னொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னோ");}}>னோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னௌ");}}>னௌ</Button>
        </div>
    </div>
  );
}

export default App;