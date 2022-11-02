/*

Three sections of code are needed to create an accout.

State: You’ll need to manage the state of the user’s status, name, email, password, and their overall UserContext.

Fields: Styling of the form fields, what is inside of them as values, and onChange events

Events: You’ll need to have events such as handleCreate (new user), validate, and clearForm.

*/


function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  
  

  //triggered by handleCreate() to validate the input fields. For Create Account, validate name password and email. In this, just check for an empty field.
  function validate(field, label, password){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (password.length < 8) {
        setStatus('Error: password requires at least 8 characters');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
//pass arguments to the validate function
  function handleCreate(){
   

    if (!validate(name,     'name', password))     return;
    if (!validate(email,    'email', password))    return;
    
    let id = ctx.users.length + 1
    ctx.users.push({id,name,email,password,balance:100});
    setShow(false);
    console.log(id,name,email,password);
  }    
//clear all the values when "add another account is clicked"
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      
      bgcolor="secondary"
      header="Create Account"
      status={status}
      
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
              <button id="button" type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              
              </>
            ):(
              <>
              <h5>{name}, welcome to Bad Bank. You are account number {ctx.users.length} and we gave $100 to start with!</h5>
              {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}