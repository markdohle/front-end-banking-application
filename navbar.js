/* Simple NavBar to test functionality of routing and components. Replaced by Boostrap NavBar.
            <a href="#">Home</a>,
            <a href="#/createaccount/">Create Account</a>,
            <a href="#/login/">Login</a>,
            <a href="#/deposite/">Deposit</a>,
            <a href="#/withdrawl/">Withdraw</a>,
            <a href="#/balance/">Balance</a>,
            <a href="#/alldata/">All Data</a>
*/

function NavBar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bad Bank</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/createaccount-no-form-component/">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login/">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposite/">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdrawl/">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/">All Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}