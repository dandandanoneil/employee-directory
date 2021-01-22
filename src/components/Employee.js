import React from "react";

function Employee({ employee }) {
    return (
        <div>
            <tr>
                {/* Commented out so it won't break the app while I debug */}
                {/* <th scope="row"> <img src={""} alt={employee.name.first + " " + employee.name.last + " Photo"} /> </th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob}</td> */}
            </tr>
        </div>
    );
}

export default Employee;