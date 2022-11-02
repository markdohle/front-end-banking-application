//Share the user object with specified components via UserContext.Provider
//make use of the router components imported from the react router library in context.js
//define the path for routing
function Spa() {
    return(
        <>
        <HashRouter>
            <h1></h1>
            <NavBar/>
                <UserContext.Provider value={
                    {
                        users:[
                        {
                            id: 1,
                            name:'abel',
                            email:'abel@mit.edu',
                            password:'secret',
                            balance:100
                        }
                        ],
                        currentUserIndex: 0
                    }
                }>
                    <Route path="/" exact           component={Home}            /> 
                    <Route path="/alldata/"         component={AllData}         />
                    <Route path="/createaccount-no-form-component/"   component={CreateAccount}   />
                    <Route path="/deposite/"        component={Deposite}        />
                    <Route path="/login/"           component={Login}           />
                    <Route path="/withdrawl/"       component={Withdrawl}       />
                </UserContext.Provider>
                
        </HashRouter>
        </>
    );
}



ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
 )