function Home() {
    
    return(
        <Card
            bgcolor="secondary"
            txtcolor="white"
            header="Bad Bank"
            title="Welcome!"
            text="Create an Account or Login to an Existing Account"
            
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />    
    );
}