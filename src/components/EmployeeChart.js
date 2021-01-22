import React, { Component } from "react";
import API from "../utils/API";
import Employee from "./Employee";
import Search from "./Search";

class EmployeeChart extends Component {
    state = { 
        employeeList: [], // This is the full list of 100 employees pulled from randomuser.me
        displayList: [], // This is the list of employees to display (narrowed using the search function, sorted using a column header, etc)
        search: ""
    };
    
    componentDidMount() {
        // If the employeeList has not yet been populated, do so with an API call
        if (this.state.employeeList.length === 0) {
            API.getEmployees()
            .then(res => {
                console.log(res.data.results);

                this.setState({ employeeList: res.data.results });
                console.log("employeeList is a", typeof(this.state.employeeList));
                
                // If the displayList remains empty, display all employees
                if (this.state.displayList.length === 0) {
                    this.setState({ displayList: this.state.employeeList });
                }

                console.log("full (" + this.state.employeeList.length + "):");
                console.log(this.state.employeeList);
                console.log("display (" + this.state.displayList.length + "): ");
                console.log(this.state.displayList);
            })
            .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        // Every time the value of the input box changes, save the new value to state under "search"
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // When the search form is submitted, 
        const search = this.state.search;
        const filteredList = this.state.employeeList.filter( emp => (emp.name.first.includes(search) || emp.name.last.includes(search)));
        this.setState({ displayList: filteredList });
    };
    
    render() {
        if (this.state.displayList.length === 0) {
            return (
                <div>
                    <Search submit={this.handleFormSubmit} change={this.handleInputChange} value={this.state.search} />
                    
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3><i>Loading employee data...</i></h3>
                </div>
            )
        } else {
            return (
                <div>
                    <Search submit={this.handleFormSubmit} change={this.handleInputChange} value={this.state.search} />
                    
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* For each employee in the displayList array, add a row to the table */}
                            {this.state.displayList.map(employee => (
                                <Employee 
                                employee={employee} 
                                key={employee.id.value}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default EmployeeChart;