//import logo from './logo.svg';
//import ReactDOM  from 'react-dom';
import * as React from "react";
import Button from '@mui/material/Button'
import './App.css';
import { randomWords } from "./random";
import { chooseAudio } from "./audio";
import { play } from "./play";
import { stop } from "./stop";
import nav from "./nav"
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import { IconButton } from "@mui/material";

let final_ans = randomWords();
//console.log(final_ans)
let ans = "";

// let source = "http://127.0.0.1:8887/audio/" + final_ans + ".m4a";

/*function stringAppend(letter) {
  ans = ans.concat(letter);
  console.log(ans);
}*/


function AudioPlayer() {
  return (
    <div>
      {/* <audio id="idAudio">  
        <source id="url" src="http://127.0.0.1:8887/audio/கல்.m4a"></source>   
      </audio> */}

{/* console.log(source); document.getElementById("audiosource").setAttribute('src', source); */}

      <Button variant="contained" color="success" onClick={() => {
      console.log(ans); 
      console.log(final_ans); 
      if(ans===final_ans) { 
        console.log("correct"); 
        final_ans = randomWords(); 
        chooseAudio(final_ans); 
        document.getElementById("result").innerHTML = "Correct";
      } 
      else { 
        document.getElementById("result").innerHTML = "Incorrect. Try again";
        console.log("incorrect. try again"); 
      }
        ans = "";
        setTimeout(function(){
          document.getElementById("result").innerHTML = "";
          document.getElementById("printing").innerHTML = "";
        }, 3000);        
      }}>Check</Button>

      <Button variant="outlined" color="secondary" onClick={() => {
        final_ans = randomWords(); 
        chooseAudio(final_ans);
        ans = "";
        document.getElementById("printing").innerHTML = ans;
      }} type="button">New</Button>

      <Button variant="outlined" color="secondary" onClick={() => {play()}} type="button">Play</Button>
      {/* <IconButton aria-label="PlayCircle" size="large" color="secondary"></IconButton> */}
      <Button variant="outlined" color="secondary" onClick={() => {stop()}} type="button">Stop</Button>

      <Button variant="contained" color="error" onClick={() => {
          document.getElementById("final_answer").innerHTML = final_ans;
          setTimeout(function(){
            document.getElementById("final_answer").innerHTML = "";
          }, 3000);
      }} type = "button">Answer</Button>

      {/* <Button variant="contained" color="secondary" onClick={() => {
        ans = ""
        document.getElementById("printing").innerHTML = ans;
        document.getElementById("final_answer").innerHTML = "";
        document.getElementById("result").innerHTML = "";
      }}>Clear</Button> */}
    </div>
  )
}

function Print() {
  return (
    <div id="all">
      <div id="printing"></div>
      <div id="final_answer"></div>
      <div id="result"></div>
    </div>
  )
}


function App() {
  return (
    <div className='all-buttons'>
        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஃ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = ""}}>ஃ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("அ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>அ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஆ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஆ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("இ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>இ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஈ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஈ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("உ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>உ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஊ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஊ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("எ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>எ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஏ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஏ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஐ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஐ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஒ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஒ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஓ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஓ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஔ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஔ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("க்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>க்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("க"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>க</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("கௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>கௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ங்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ங்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ங"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ங</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஙௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஙௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ச்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ச்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ச"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ச</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("செ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>செ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("சௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>சௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞ்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ஞௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ஞௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ட்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ட்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ட"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ட</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("டௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>டௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ண்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ண்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ண"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ண</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ணௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ணௌ</Button>
        </div>
        
        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("த்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>த்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("த"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>த</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("து"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>து</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("தௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>தௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ந்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ந்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ந"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ந</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("நௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>நௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ப்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ப்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ப"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ப</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("போ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>போ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("பௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>பௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ம்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ம்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ம"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ம</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("மௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>மௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ய்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ய்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ய"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ய</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("யௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>யௌ</Button>
        </div>


        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ர்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ர்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ர"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ர</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ரௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ரௌ</Button>
        </div>
 
        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ல்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ல்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ல"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ல</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("லௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>லௌ</Button>
        </div> 

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வ்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("வௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>வௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழ்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழ்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ழௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ழௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ள்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ள்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ள"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ள</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ளௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ளௌ</Button>
        </div>

        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ற்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ற்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ற"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ற</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("று"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>று</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("றௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>றௌ</Button>
        </div>
        
        <div className='row-buttons'>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ன்"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ன்</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("ன"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>ன</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னா"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னா</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னி"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னி</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னீ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னீ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னு"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னு</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னூ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னூ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னெ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னெ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னே"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னே</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னை"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னை</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னொ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னொ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னோ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னோ</Button>
          <Button variant = "contained" onClick={() => { ans = ans.concat("னௌ"); document.getElementById("printing").innerHTML = ans; document.getElementById("result").innerHTML = "";}}>னௌ</Button>
        </div>
    </div>
  );
}

function body() {
  return (
    <div>
      <nav />
      <AudioPlayer />
      <Print />
      <App />
    </div>
  
  )
}

export default body;