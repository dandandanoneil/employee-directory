import React from "react";

function Employee({ employee }) {
    return (
        <>
            <tr>
                <th scope="row"> <img className="img-fluid" src={employee.picture.large} alt={employee.name.first + " " + employee.name.last + " Photo"} /> </th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob.age}</td>
            </tr>
        </>
    );
}

export default Employee;