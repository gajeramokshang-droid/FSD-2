function Comp5(){
    const Students = [
        { name: "Mokshang", id: 1, standard: 5 },
        { name: "Ahmad", id: 2, standard: 3 },
        { name: "Parth", id: -1, standard: -3 }
    ];
    return(
        <>
        {
            Students.filter((student)=>student.id>0 && student.standard>0).map((student)=>{
                return <div key={student.id}>
                    Student Name={student.name}
                    Student standard={student.standard}
                </div>
            })
        }
        </>
    )
}


export default Comp5;