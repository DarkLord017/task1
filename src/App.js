import logo from './blocsoclogo.svg';
import discord from './ACM.svg';
import insta from './STC.svg';
import spread from './download.jpeg';
import i from './insta..svg';
import j from './discord.svg';
import k from './linkedin.svg';
import l from './github.svg';
import name from './namebc.svg';

import React , { useState } from 'react';
import './App.css';

function Header(){

const [selected , setSelected] = useState(null);

const toggle = (i) => {

   if(selected === i){
    return setSelected(null);
   }

   
    setSelected(i);
   
}

const data  = [
  {
    question: 'Team size ?',
    answer : '1 - 4',
  },

  {
    question: 'Registration costs?',
    answer: 'Nada',
  },

  {
    question: 'Who can participate?',
    answer: 'Any student at IIT Roorkee is eligible to take part in this hackathon.',
  },

  {
    question: 'What can we build?',
    answer: 'StackTooDeep is an Ethereum focused hackathon so any project that is built in the Ethereum ecosystem would be eligible for judging. This also includes building on any EVM compatible chains like Arbitrum, Polygon,Optimism, etc.',

  },

  {
    question: 'Can we apply as a team?',
    answer: 'Yes you can apply as a team of a maximum of 4 members. Note: All team members must be students of IIT Roorkee.',
  },

  {
    question: 'What if I dont have a team or an idea?',
    answer: 'If you dont have a team you can either hack solo or ask someone to join your team in the Discord channel. If you are having problems with idea formation, you can ask for help to any BlocSoc member in the channel or in person.',

  
    

  },



]



return(
<>
<div class = "body">
<div class = "headerdiv">
<div class = "logoim">
  <img src={logo} className="App-logo" alt="logo" />
  <div class = "align-name">
  <h1 class = "name">BLOCKCHAIN</h1>
  <h1 class = "name">SOCIETY</h1>
  <h1 class = "name">IITR</h1>
  </div>
  </div>
  <div class = "header_buttons">
  <button class = "Home">HOME</button>
  <button class = "Register">PROJECTS</button>
  </div>
  <div class = "links">
  <img src = {discord} className = "discordlogo" />
  <img src = {insta} className = "instalogo"/>
  </div>

</div>

<div class = "main">
<img src = {spread} className= "spreadsheet" />
<img src = {spread} className= "spreadsheet" />
<div class = "notbg">
<p class = "fire"> Prices worth  99.6K</p>
<h1 class =  "s2d">STACK TOO DEEP</h1>
<div class = "button">
<button class = "button1"><span class = "content-button">REGISTER</span></button>
<button class = "button1"><span class = "content-button">PROJECT IDEAS</span></button>
</div>
<p class = "loner">Looking for teammates <u className = "Joinu">Join Discord ></u></p>
</div>
 
</div>
<div class = "Sponsornfaq">
<div class = "FAQ" >
<h1 className = "title">FAQs</h1>
{data.map((item,i) =>(
       <div class = "item" >
        
        <div class = "q" onClick={() => toggle(i)}>
          <h3 class = "qi">{item.question}</h3>
          <span class = "plus">{selected === i ? '-' : '+'}</span>
          </div>
          <div class = "ans">
            <p class = {selected === i ? "openans" : "closeans"}>{item.answer}</p>
          </div>
        </div>
        
)

)}


</div>
 <div class = "Sponsors">
  <h1 class = "title">SPONSORS</h1>

 </div>

</div>

<div class ="footer">
<div class = "blocsoc">
  <img src = {logo} className = "img1" />
  <img src = {name} className = "img1" />
  </div>
  <div class ="img3">
  <img src = {i} class = "img2" />
 <img src = {j} class = "img2" />
 <img src = {k} class = "img2" />
 <img src = {l} class = "img2" />
 </div>
</div>







</div>


</>
)




}






export default Header;
