///testing

function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <Card
          bgcolor="secondary"
          header="All Data"
          body={ 
            <>
            {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            <ul className="list-group">
                {ctx.users.map((user) => (
                    <li key={user.id} className="list-group-item text-secondary">
                        Account ID: {user.id}<br/>
                        Name: {user.name}<br/>
                        Email: {user.email}<br/>
                        Password: {user.password}<br/>
                        Balance: ${user.balance}
                    </li>
        
                    
                    ))}
            </ul>
            </>
          }
        />
    );
};