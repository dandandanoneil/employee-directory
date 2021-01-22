import React from "react";


function Search(props) {
    return (
        <form className="w-50 m-3 mx-auto">
            <div className="input-group">
                <input
                    onChange={props.change}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by name..."
                    id="search"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-success ml-3">
                    Search
                </button>
            </div>
        </form>
        );
}

export default Search;