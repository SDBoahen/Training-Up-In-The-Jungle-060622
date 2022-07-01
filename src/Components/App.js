import logo from './logo.svg';
import './App.css';

import { useState , useEffect } from 'react'


import TheJuiceJugPowerOfProps from "./TheJuiceJugPowerOfProps"

import Number from './Number';

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

        // console.log( "eachNum: " , eachNum ) 

        // console.log( "You Are Using an Function in App.js: " )  //
  
        return( eachNum )
  
      }

    let someArray = [ 1, 2, 3, "a", "b", "c", <h1>:)</h1>, <h2>:))</h2>, <h3>:)))</h3> ]
    
      let theResultOfForEach = someArray.forEach( someFunctionArrow )
      // console.log( ".forEach ----------------^" , theResultOfForEach )  //
      // console.log( ".forEach ----------------^" )  //
      
    let theResultOfDotMap = someArray.map( someFunctionArrow )
    // console.log( ".map ----------------^", theResultOfDotMap )  //
    // console.log( ".map ----------------^" )  //
      
        
    // function someFunctionKeyWord( eachNum ){ 

    //     console.log( "eachNum: " , eachNum ) 

    //     return( eachNum )

    // } 
    
    



    let someArrayOfStrings = [ ":)", ":))", ":)))" ]
    

    function incrementNumber( someNumber ){

      console.log("BEFORE + : " , someNumber )

      someNumber++
      setNumberToRender( someNumber )

      console.log("AFTER + : " , someNumber )


    }
    function decrementNumber( someNumber ){

      console.log("BEFORE - : " , someNumber )

      someNumber--
      setNumberToRender( someNumber )

      console.log("AFTER - : " , someNumber )



    }

    // let numberToRender = 100 

    // const [ v , f ]                           = useState( defaultOrInitialState )
    const [ numberToRender , setNumberToRender ] = useState( 100 )
      console.log( "State of numberToRender: " , numberToRender )  //

      // const [ exampleVariable , setExampleVariable ] = useEffect( "Kurt" )
        // const exampleVariable = "Kurt"
        // const setExampleVariable =()=>{ withSpecialSetterPowers  }
    // const theResultOfUseState = useState( "Kurt" )
    // console.log( "theResultOfUseState: " , theResultOfUseState )  //
    // console.log( "theResultOfUseState[0]: " , theResultOfUseState[0] )  //
    // console.log( "theResultOfUseState[1]: " , theResultOfUseState[1] )  //


    // setNumberToRender



    const [ whatWeAreTyping , setWhatWeAreTyping ] = useState( "able to vary ~ vari able"  )
      console.log( "The State of whatWeAreTyping: " , whatWeAreTyping )  //


    // const whatWeAreTyping = "able to vary ~ vari able"

    const [ arrayOfSmiliesToRender , setArray ] = useState( [ ":)" , ":]" , ":}" ] )


  //////// pure-vanila-js-zone


  return (
    //////// The JSX Return 

    <div className="App"><header className="App-header">


      {/* <h1>{ whatWeAreTyping }</h1> */}
      {
        arrayOfSmiliesToRender.map( ( eachSmilie )=>{

          return( <h2> { eachSmilie } </h2> )


        } )
      }


      {/* formElement.addEventListener( "submit" , ()=>{} ) */}
      <form 
        onSubmit={ 
         
          ( sythEventObject )=>{ 

            sythEventObject.preventDefault() 
        
            console.log( "eventObject: " , sythEventObject.target.inputFieldWeAreTypingIn.value )

            // setWhatWeAreTyping( sythEventObject.target.inputFieldWeAreTypingIn.value )

              let newSmilieForArray = sythEventObject.target.inputFieldWeAreTypingIn.value

            setArray(  [ ...arrayOfSmiliesToRender , newSmilieForArray ]  )
            // do somthing

          } 
      
        }
      >

        <input 
          onChange={ 
            
            ( eventObject )=>{ 
            
              console.log( "eventObject: " , eventObject ) 
              // console.log( "eventObject: " , eventObject.target.value ) 

              // setWhatWeAreTyping( eventObject.target.value )
            
            }

          } 
          // value={ whatWeAreTyping } 
          name="inputFieldWeAreTypingIn"
        />

        <input type="submit" />
        {/* <button type="submit"> CAT </button> */}

      </form>



      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>


        <h1>{ numberToRender }</h1>

        <Number

          numberToRenderFromAppjs={ numberToRender }
          incrementFunction={ incrementNumber }
          decrementFunction={ decrementNumber }

        />

        <Number

        numberToRenderFromAppjs={ numberToRender }
        incrementFunction={ incrementNumber }
        // decrementFunction={ decrementNumber }

        />



      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>

\

      {/* <TheJuiceJugPowerOfProps aFunctionPropFromAppjs={ someFunctionArrow } /> */}


      





      {

        someArrayOfStrings.map( 

          // [ ":)" , ":))" , ":)))" ]
          ( eachSmile , index )=>{ 
            //////// pure js

              // console.log("hi", eachSmile , " at index " , index )  //

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


      {/* <h2>theResultOfForEach</h2>
      { theResultOfForEach }

      <h2>theResultOfDotMap</h2>
      { theResultOfDotMap } */}


      




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
