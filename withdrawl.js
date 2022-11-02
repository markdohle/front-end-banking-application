function Withdrawl(){
    const ctx = React.useContext(UserContext); 
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdrawl, setWithdrawl] = React.useState(0);
     
  
    //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
    function validate(field, label, balance){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (balance < 0) {
            setStatus('Sorry...you are broke');
            setTimeout(() => setStatus(''),3000);
            return false;
          }
        return true;
    }
  //pass arguments to the validate function
    function handleWithdrawl(){
      console.log(withdrawl);
      console.log(ctx.users[ctx.currentUserIndex].balance)
      
      let currentBalance = ctx.users[ctx.currentUserIndex].balance
      let newBalance = Number(currentBalance) - Number(withdrawl)
      
      if (!validate(withdrawl,     'withdrawl', newBalance))     return;

      ctx.users[ctx.currentUserIndex].balance = newBalance
      console.log(`${ctx.users[ctx.currentUserIndex].name}, your new balance is: ${ctx.users[ctx.currentUserIndex].balance = newBalance}`)
      setShow(false);
    }    
  //clear all the values when "add another account is clicked"
    function clearForm(){
      setWithdrawl(0);
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="secondary"
        header="Withdrawl Cash"
        status={status}
        body={show ? (  
                <>
                <div text="card-body text">Curent Balance:
                ${ctx.users[ctx.currentUserIndex].balance}<br/>
                </div>
                <div text="card-body text">
                {ctx.users[ctx.currentUserIndex].name}, Need some money?<br/>
                </div>
                <div text="card-body text"></div>
                Withdrawl Amount<br/>
                <input type="input" className="form-control" id="withdrawl" placeholder="Enter Withdrawl Amount" value={withdrawl} onChange={e => setWithdrawl(e.currentTarget.value)} /><br/>
                {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
                <button type="submit" className="btn btn-light" onClick={handleWithdrawl}>Withdrawl</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make a Withdrawl</button>
                </>
              )}
      />
    )
  }