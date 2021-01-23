import React, { Component } from "react";
import API from "../utils/API";
import Employee from "./Employee";
import Search from "./Search";

class EmployeeData extends Component {
    state = { 
        employeeList: [], // This is the full list of 100 employees pulled from randomuser.me
        displayList: [], // This is the list of employees to display (narrowed using the search function, sorted using a column header, etc)
        search: "",
        nameSortDirection: "",
        ageSortDirection: ""
    };
    
    componentDidMount() {
        // If the employeeList has not yet been populated, do so with an API call
        if (this.state.employeeList.length === 0) {
            API.getEmployees()
            .then(res => {
                this.setState({
                    employeeList: res.data.results,
                    displayList: res.data.results
                });
            })
            .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        // Every time the value of the input box changes, save the new value to state under "search"
        this.setState({ search: event.target.value });
        // this.filertResults(this.state.search);
    };

    filertResults = (query) => {
        const search = query.toLowerCase().split(" ").join("");
        const filteredList = this.state.employeeList.filter( 
            (emp) => {
                if (emp.name.first.toLowerCase().includes(search)) {
                    return true;
                } else if (emp.name.last.toLowerCase().includes(search)) {
                    return true;
                }
                return false;
            });

        this.setState({ displayList: filteredList }); 
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // When the search form is submitted, 
        const search = this.state.search.toLowerCase().split(" ").join("");
        const filteredList = this.state.employeeList.filter( 
            (emp) => {
                if (emp.name.first.toLowerCase().includes(search)) {
                    return true;
                } else if (emp.name.last.toLowerCase().includes(search)) {
                    return true;
                }
                return false;
            });

        this.setState({ displayList: filteredList }); 
    };

    sortByName =  event => {
        console.log("sortByName()");
        this.setState({ ageSortDirection: "" });
        let sortedList = this.state.displayList;

        if (this.state.nameSortDirection !== "↑") {
            this.setState({ nameSortDirection: "↑" });
            sortedList.sort((a, b) => {
                var textA = a.name.last.toUpperCase();
                var textB = b.name.last.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        } else {
            sortedList.sort((a, b) => {
                this.setState({ nameSortDirection: "↓" });
                var textA = a.name.last.toUpperCase();
                var textB = b.name.last.toUpperCase();
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            });    
        }
        this.setState({ displayList: sortedList });
    };
    
    sortByAge =  event => {
        this.setState({ nameSortDirection: "" });
        let sortedList = this.state.displayList;

        if (this.state.ageSortDirection !== "↑") {
            this.setState({ ageSortDirection: "↑" });
            sortedList.sort((a, b) => {
                return (a.dob.age < b.dob.age) ? -1 : (a.dob.age > b.dob.age) ? 1 : 0;
            });
        } else {
            this.setState({ ageSortDirection: "↓" });
            sortedList.sort((a, b) => {
                return (a.dob.age > b.dob.age) ? -1 : (a.dob.age < b.dob.age) ? 1 : 0;
            });
        }
        this.setState({ displayList: sortedList });
    };

    render() {
        if (this.state.displayList.length === 0) {
            return (
                <div>
                    <Search change={this.handleInputChange} value={this.state.search} />
                    
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Age</th>
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
                    <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} value={this.state.search} />
                    
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col" 
                                    column="name" 
                                    onClick={this.sortByName}>
                                        {this.state.nameSortDirection}
                                        Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col" 
                                    column="age" 
                                    onClick={this.sortByAge}>
                                        {this.state.ageSortDirection}
                                        Age</th>
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

export default EmployeeData;