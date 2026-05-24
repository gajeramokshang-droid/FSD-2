/* Create react component that contain an array of student objects with ID,NAME AND STANDARD PERFORM thr following task using filter and map
   1.  display only students whose standard is 5 
   2.   increase their standard by 1.
   3.   display student nameand updated standard  */

   function Comp4() {
    const Students = [
        { name: "Mokshang", id: 1, standard: 5 },
        { name: "Ahmad", id: 2, standard: 3 },
        { name: "Parth", id: -1, standard: -3 }
    ];

    return (
        <>
            {Students
                .filter((student) => student.standard === 5)
                .map((student) => (
                    <div key={student.id}>
                        <h2>Student Name: {student.name.toUpperCase()}</h2>
                        <h2>Updated Standard: {student.standard + 1}</h2>
                    </div>
                ))}
        </>
    );
}

export default Comp4;

