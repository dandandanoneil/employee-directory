import React, { Component } from "react";
import API from "../utils/API";
import Employee from "./Employee";
import Search from "./Search";

class EmployeeChart extends Component {
    state = { 
        employeeList: [], // This is the full list of 200 employees pulled from randomuser.me
        displayList: [], // This is the list of employees to display (if the user has narrowed the list using the search function)
        search: ""
    };
    
    componentDidMount() {
        // If the employeeList has not yet been populated, do so with an API call
        if (this.state.employeeList.length === 0) {
            console.log("EmployeeChart, line 16");
            API.getEmployees()
            .then(res => {
                console.log("EmployeeChart, line 19", res);
                this.setState({ employeeList: res.results })
            })
            .catch(err => console.log(err));
        }

        // If the displayList remains empty, display all employees
        if (this.state.displayList.length === 0) {
            console.log("EmployeeChart, line 24");
            this.setState({ displayList: this.state.employeeList });
        }

        console.log("full (" + this.state.employeeList.length + "):");
        console.log(this.state.employeeList);
        console.log("display (" + this.state.displayList.length + "): ");
        console.log(this.state.displayList);
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
                            <Employee employee={employee} />
                        ))}
                    </tbody>
                </table>

                <Employee />
            </div>
        )
    }
}

export default EmployeeChart;