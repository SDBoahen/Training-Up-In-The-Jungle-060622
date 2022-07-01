


    // < ComponentForDataFlow      nameOfStudent="Zev"        juiceJug="Wiskey" />

function ComponentForDataFlow( props ){

    console.log( "------------------------" )  //
    console.log( props )  //
    console.log( props.nameOfStudent )  //
    console.log( props.juiceJug )  //
    console.log( props.functionProp )  //
    console.log( "------------------------" )  //

        if( props.functionProp ){

            props.functionProp()

        }else{

            console.log(" This Component Doesn't Have a Function Buddy :/ ")
        }
        



    return(<div>
        <h1>{ props.nameOfStudent }</h1>
        <h3>{ props.juiceJug }</h3>
    </div>)
}
export default ComponentForDataFlow