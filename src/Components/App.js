import logo from './logo.svg';
import './App.css';

import WheelSpinning from './WheelSpining.js';

function App() {
  //////// pure-vanila-js-zone




    // Assigning Variables to use in JSX Return

      let anotherLogo = <img src={logo} className="App-logo" alt="logo" />
      const anotherLogoDotDotDotAgainLol = <img src={logo} className="App-logo" alt="logo" />

    // Assigning Variables to use in JSX Return




    // Declaring Functions to use in JSX Return

      function renderWithFunctionKeyWord( ){


        // return("plain text")
        return( <img src={logo} className="App-logo" alt="logo" /> )

        // let x = 1

      }


    // Declaring Functions to use in JSX Return


    < WheelSpinning />
    //// !! Won't Actually DO Any Render To the DOM Out Here :[
  
  //////// pure-vanila-js-zone


  return (
    //////// The JSX Return 
    <div className="App"><header className="App-header">



          <h2>Render with HTML Elements</h2>
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
          />


        <h2>Render with Variables </h2>

          { anotherLogo }
          { anotherLogoDotDotDotAgainLol }


        <h2>Render with Functions </h2>
        { renderWithFunctionKeyWord() }
        {/* { console.log("result/return of renderWithFunctionKeyWord()", renderWithFunctionKeyWord()) } */}


        <h2>Render with Components </h2>
        {/* 
        
        < WheelSpinning whatYouWantToReferToThisAsInTheNextComponent={ whatYouArePassingAsAProp } /> 
        
        */}
        < WheelSpinning tryingToPassAProp={ logo } />


        
        
    </header></div>
    //////// The JSX Return 
  );
}
export default App;
