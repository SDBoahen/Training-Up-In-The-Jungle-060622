import logo from './logo.svg';
import './App.css';

import WheelSpinning from './WheelSpining.js';
import ComponentForDataFlow from "./CompnentForDataFlow"

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
  
      const someFunctionArrow =( eachNum )=>{

        console.log( "eachNum: " , eachNum ) 
  
        return( eachNum )
  
      }

    let someArray = [ 1, 2, 3, "a", "b", "c", <h1>:)</h1>, <h2>:))</h2>, <h3>:)))</h3> ]
    
      let theResultOfForEach = someArray.forEach( someFunctionArrow )
      console.log( ".forEach ----------------^" , theResultOfForEach )  //
      console.log( ".forEach ----------------^" )  //
      
    let theResultOfDotMap = someArray.map( someFunctionArrow )
    console.log( ".map ----------------^", theResultOfDotMap )  //
    console.log( ".map ----------------^" )  //
      
        
    function someFunctionKeyWord( eachNum ){ 

        console.log( "eachNum: " , eachNum ) 

        return( eachNum )

    } 
    
    



    let someArrayOfStrings = [ ":)", ":))", ":)))" ]



  //////// pure-vanila-js-zone


  return (
    //////// The JSX Return 

    <div className="App"><header className="App-header">

      {/* < App /> - Parent */}

      {/* < ComponentForDataFlow whatYouWantToCallThisInTheNextComponent = whatItIsHere /> */}
        < ComponentForDataFlow     
          nameOfStudent="Zev"        
          juiceJug="Wiskey"
          functionProp={ someFunctionKeyWord } 
        />
        < ComponentForDataFlow     
          nameOfStudent="Isa"        
          juiceJug="Watermelon" 
          functionProp={ someFunctionArrow }
        />
        < ComponentForDataFlow     
          nameOfStudent="Christian"  
          juiceJug="Lemon Water" 
        />
        < ComponentForDataFlow     
          nameOfStudent="Kurt"       
          juiceJug="Water" 
        />
        < ComponentForDataFlow     
          nameOfStudent="Hiba"       
          juiceJug="Tequila Lemonade" 
        />



      {

        someArrayOfStrings.map( 

          // [ ":)" , ":))" , ":)))" ]
          ( eachSmile , index )=>{ 
            //////// pure js

              console.log("hi", eachSmile , " at index " , index )  //

              // n - 1

              // if( index === 0 ){ return( <h1>{ eachSmile }</h1> ) }
              // if( index === 1 ){ return( <h2>{ eachSmile }</h2> ) }

            //////// pure js
            return( 
              <div>

                <h1>{ eachSmile }</h1> 
                <p>{ eachSmile }</p> 

              </div>
            
            ) // HTML - HyperTEXT Markup Language

          } 

        )

      }


      <h2>theResultOfForEach</h2>
      { theResultOfForEach }

      <h2>theResultOfDotMap</h2>
      { theResultOfDotMap }


      




        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>





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
