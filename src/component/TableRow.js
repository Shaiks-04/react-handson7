import React from "react";
import { Link } from "react-router-dom";

const TableRow=({student,student:{id,Name,Age,Course,Batch}})=>{
    return (
        <>
        <td>{Name}</td>
        <td>{Age}</td>
        <td>{Course}</td>
        <td>{Batch}</td>
        <td>
            <Link to='/EditDetails' state={{id}}>Edit</Link>
        </td>
        </>
    )
}

export default TableRow;