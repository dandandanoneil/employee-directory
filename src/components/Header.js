import React from "react";


function Header() {
    return (
        <header className="jumbotron jumbotron-fluid text-center bg-primary text-light">
            <h1>Employee Directory</h1>
            <p>Click a column heading to sort results by <strong>last name</strong> or <strong>age</strong>, or use the search box to narrow your results by name.</p>
            <p>Refresh the page to reload random employees data set.</p>
        </header>
    );
}

export default Header;