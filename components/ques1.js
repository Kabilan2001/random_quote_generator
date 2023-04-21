import React from "react";
import '../App.css';
import Header from "./header";
import {AiFillTwitterCircle} from "react-icons/ai";
import Footer from "./footer";

const message=[
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "-Thomas Edison"
  },
  {
    "text": "You can observe a lot just by watching.",
    "author": "-Yogi Berra"
  },
  {
    "text": "A house divided against itself cannot stand.",
    "author": "-Abraham Lincoln"
  },
  {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "-Johann Wolfgang von Goethe"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "-Byron Pulsifer"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "-Lao Tzu"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "-Carl Sandburg"
  },
  {
    "text": "Well begun is half done.",
    "author": "-Aristotle"
  },
  {
    "text": "Life is a learning experience, only if you learn.",
    "author": "-Yogi Berra"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "-Margaret Sangster"
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "-Buddha"
  },
  {
    "text": "What you give is what you get.",
    "author": "-Byron Pulsifer"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "-Iris Murdoch"
  },{
    "text": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    "author": "-Michael Jordan"
  },
  {
    "text": "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    "author": "-Oliver Holmes"
  },
  {
    "text": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    "author": "-Confucius"
  },
  {
    "text": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    "author": "-Epictetus"
  },
  {
    "text": "I am always doing that which I cannot do, in order that I may learn how to do it.",
    "author": "-Pablo Picasso"
  },
  {
    "text": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    "author": "-Barack Obama"
  },
  {
    "text": "The world is round and the place which may seem like the end may also be the beginning.",
    "author": "-Ivy Baker Priest"
  },
  {
    "text": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
    "author": "-Kabilan"
  }];
  function QuoteBox({quote,handleQuote}){
    return(
      <div>
      <Header/>
    <div id='quote-box' className='main'>
    <h1 id="head">QUOTE OF THE DAY</h1>
    <p id="quoteLine">{quote.text}</p>
    <h3 id="author">{quote.author}</h3>
    <div>
    <button id='new-quote' onClick={handleQuote}>NEW-QUOTE</button>
    <br></br><br></br>
   <div id="tweetbox" className="tool"><div id="tweetbox">
   <a target="_blank" rel="noopener noreferrer" 
    href= { "https://twitter.com/intent/tweet?hashtags=RandomQuotesProjectbyKABILAN&hashtags=quotes&text="+
     encodeURI(quote.text + quote.author)
    }>
    <span id="logo"><AiFillTwitterCircle id="tweet1"/></span></a>
    </div>
    </div>
    </div>
    </div>
    <div><Footer/></div>
    </div>
    )
  }
  
   function handleRandomIndex(){
    return(Math.round(Math.random()*(message.length-1)))
  }
  
  function Apps(){
   const [quote,setText]=React.useState(message[handleRandomIndex()])
   const getQuotes=()=>{
    setText(message[handleRandomIndex()]);
   }
    return(
      <div>
     <QuoteBox quote={quote} handleQuote={getQuotes} ></QuoteBox>
      </div>
    )
  }
  export default Apps;