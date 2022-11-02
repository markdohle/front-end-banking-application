
function Deposite(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposite, setDeposite] = React.useState(0);
   

  //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (isNaN(field) === true) {
        setStatus('Error: enter a number value');
        setTimeout(() => setStatus(''),3000);
        return false;
      };
      if (field < 0) {
        setStatus('Error: deposite amount must be a positive value');
        setTimeout(() => setStatus(''),3000);
        return false;
      };
    return true;
  }
//pass arguments to the validate function
  function handleDepsoite(){
    console.log(deposite);
    console.log(ctx.users[ctx.currentUserIndex].balance)
    let currentBalance = ctx.users[ctx.currentUserIndex].balance
    if (!validate(deposite,     'deposite'))     return;
    //ctx.users.push({name,email,password,balance:100});
    let newBalance = Number(currentBalance) + Number(deposite)
    ctx.users[ctx.currentUserIndex].balance = newBalance
    console.log(`${ctx.users[ctx.currentUserIndex].name}, your new balance is: ${ctx.users[ctx.currentUserIndex].balance = newBalance}`)
    setShow(false);
  }    
//clear all the values when "add another account is clicked"
  function clearForm(){
    setDeposite(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Make Deposite"
      status={status}
      body={show ? (  
              <>
              <div text="card-body">Curent Balance:
              ${ctx.users[ctx.currentUserIndex].balance}<br/>
              </div>
              <div text="card-body text">
              {ctx.users[ctx.currentUserIndex].name}, earn 5% interest on deposites<br/>
              </div>
              <div text="card-body text"></div>
              Deposite Amount<br/>
              <input type="input" className="form-control" id="deposite" placeholder="Enter Deposite Amount" value={deposite} onChange={e => setDeposite(e.currentTarget.value)} /><br/>
              {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
              <button type="submit" className="btn btn-light" onClick={handleDepsoite}>Deposite</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Depostie</button>
              </>
            )}
    />
  )
}