import react from 'react';

export default function P303(props){
    return(
        <>
        {props.store.map((p,index)=>(
            <table>
                <tr>
                    <td>{p.name}</td>
                    <td>{p.t1marks}</td>
                    <td>{p.t2marks}</td>
                    <td>{p.rollnumber}</td>
                </tr>
            </table>
        ))}
        </>
    );
}

