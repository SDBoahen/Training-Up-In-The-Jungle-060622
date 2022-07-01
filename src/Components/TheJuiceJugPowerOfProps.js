import ComponentForDataFlow from "./CompnentForDataFlow"


function TheJuiceJugPowerOfProps( props ){  
    //// js


    console.log(" TheJuiceJugPowerOfProps: " , props )  //


        function someFunctionKeyWord( eachNum ){ 

            console.log( "eachNum: " , eachNum ) 

            return( eachNum )

        } 


    //// js
    return( <div>


        {/* < App /> - Parent */}

        {/*  < ComponentForDataFlow whatYouWantToCallThisInTheNextComponent = whatItIsHere />  */}
        
        <h1>The Juice Jug Power Of Props</h1>
        < ComponentForDataFlow     
          nameOfStudent="Zev"        
          juiceJug="Wiskey"
          functionProp={ someFunctionKeyWord } 
        />
        < ComponentForDataFlow     
          nameOfStudent="Isa"        
          juiceJug="Watermelon" 
          functionProp={ props.aFunctionPropFromAppjs }
            // functionProp={ someFunctionArrow }
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

    </div> )
}
export default TheJuiceJugPowerOfProps
