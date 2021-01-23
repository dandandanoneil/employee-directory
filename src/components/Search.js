import React from "react";


function Search(props) {
    return (
        <form className="w-50 m-3 mx-auto">
            <div className="input-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="input"
                    type="text"
                    className="form-control"
                    placeholder="Narrow results by name..."
                    id="input"
                />
                <br />
                <button 
                onClick={props.handleFormSubmit} 
                className="btn btn-success ml-3"
                >Search
                </button>
            </div>
        </form>
        );
}

export default Search;