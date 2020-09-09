 
import React , {Component} from 'react';
import {Grid,Cell,Textfield} from 'react-mdl';
import{Button} from '@material-ui/core'

class Contact extends Component{
    render(){
        return(
         <div className='contact-body'>
             <Grid className='contact-grid'>
                 <Cell col={6}>
                     <h2>Katie Lee</h2>
                     <img
                     src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"
                     alt="avatar"
                     style={{height:'250px'}}
                     />
                     <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>nice to meet you</p>
                 </Cell>
                 <Cell col={6}>
                 <h2>contact me</h2>
                 <hr></hr>
                 

{/* Numeric textfield */}
<Textfield
    onChange={() => {}}
    
    
    label="Name..."
    style={{width: '200px'}}
/>
<br></br>
<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
/>
<br></br>
<Textfield
    onChange={() => {}}
    label="text......"
    style={{width: '200px',border:'2px'}}

/>
<br></br>
<br></br>
<Button variant="outlined">Submit</Button>
                 </Cell>


             </Grid>
            
         </div>
        );
    }
}
export default Contact;