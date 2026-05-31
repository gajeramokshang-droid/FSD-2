// Write react js script to perform the task as below using function component:• Create array of objects which have id, name & city of person.•
//  Display id & name of persons having city name “Ahmedabad” . Use props.No need to write App.js file.

export default function Pb320(){
    const jesus=[{
        id:1,
        name:"Bruce",
        city:"Bathelehm"
    }]

    return(
        <>
        {jesus.map((mok,index)=>(
            <div key={index}>
                <p>Mok:{mok.id},{mok.name},{mok.city}</p>
            </div>
        ))}
        </>
    )
}