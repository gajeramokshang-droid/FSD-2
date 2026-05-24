// Create react app and use routing functionality of react to perform the tasks as asked.Create one file named Jesus.js which contains links for
//  home and about page and routing functionality.In Home.js file add one image and heading(h1) "LJ University"In About.js file add branch list (CSE,IT,CE).

export default function Aboutus(){
    const branch_list=['CSE','IT','CE']
    return(
        <>
        <ul>
           {branch_list.map((p,index)=>(
            <li>{p}</li>
           ))}
        </ul>
        </>
    )
}