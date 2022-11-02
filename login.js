
function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [currentUserIndex, setCurrentUserIndex] = React.useState('');
  const ctx = React.useContext(UserContext);  

  //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
  function validate(field, label, index){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (index === -1) {
        setStatus('Error: email not registered - create acount');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
//pass arguments to the validate function
  function handleLogin(){
    console.log(email,password);
    console.log(ctx.users)
    
    let index = ctx.users.findIndex(object => {
      return object.email === email;
    })

    if (!validate(email,    'email', index))    return;
    if (!validate(password, 'password', index)) return;
    
    setShow(false);
    setCurrentUserIndex(index);
    console.log(index);
    ctx.currentUserIndex = index
    console.log(ctx.currentUserIndex)
  } 
//clear all the values when "add another account is clicked"
  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Log into account</button>
              </>
            )}
    />
  )
}