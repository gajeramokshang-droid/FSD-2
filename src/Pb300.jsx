// Write react js script to display values in console while changing it in text box.


export default function Pb300(){

    function jesus(e){
        console.log(e.target.value)
    }
    return(
        <>
        <input type="text" placeholder="Enter your's" onChange={jesus}/>
        </>
    )
}