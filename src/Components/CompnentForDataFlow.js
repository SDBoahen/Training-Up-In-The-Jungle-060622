


    // < ComponentForDataFlow      nameOfStudent="Zev"        juiceJug="Wiskey" />

function ComponentForDataFlow( props ){
    console.log( props )  //
    console.log( props.nameOfStudent )  //
    console.log( props.juiceJug )  //

    return(<div>
        <h1>{ props.nameOfStudent }</h1>
        <h3>{ props.juiceJug }</h3>
    </div>)
}
export default ComponentForDataFlow