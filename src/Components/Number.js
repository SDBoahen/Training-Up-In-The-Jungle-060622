


function Number( props ){
    console.log( props )


    // let numberToRender = 10
        // numberToRender++
        // numberToRender--


    return(  <div>

    
        {/* <h1>{ numberToRender }</h1>  */}
        <button onClick={ ()=>{ props.incrementFunction( props.numberToRenderFromAppjs ) } }>+</button>

        {/* 
        { questionOrCondition ?  TRUE : FALSE } 

        { 
            questionOrCondition ?

            TRUE 
            : 
            FALSE 
        } 
        */}

        { props.decrementFunction ? 
            <button onClick={ ()=>{ props.decrementFunction( props.numberToRenderFromAppjs ) } }>-</button> 
            :
            <></>
        }
    
    </div>
    )

}
export default Number