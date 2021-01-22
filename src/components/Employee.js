import React from "react";

function Employee({ employee, key }) {
    return (
        <>
            <tr key={key}>
                <th scope="row"> <img src={""} alt={employee.name.first + " " + employee.name.last + " Photo"} /> </th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob}</td>
            </tr>
        </>
    );
}

export default Employee;