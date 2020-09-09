 
import React , {Component} from 'react';
import{Grid,Cell} from 'react-mdl';
import{Button} from '@material-ui/core';
import{Link} from 'react-router-dom';

class Aboutme extends Component{
    render(){
        return(
         <div className='aboutme-body'>
             <Grid className='aboutme-grid'>
                 <Cell col={6}>
                     <br></br>
                     <h1>Meet Katie Lee</h1>
                     <p>I am a motivated, teamwork-oriented, 
                         and responsible person. 
                         The previous IT work has given me 
                         the experience of handing 
                         technical troubleshooting within 
                         an enterprise environment, 
                         including system crashes,slow downs 
                         and data records as well 
                         as provide the good customer service 
                         to the clients of how to 
                         solve the issues</p>
                        
                         <Button variant="outlined" color="secondary"><Link to="/contact" >Contact Me</Link></Button>
                 </Cell>
                 <Cell col={6}>
                 <img
                 src={require('../components/image/logo8.png')}
                 alt='aboutmeme'
                 className='aboutmeme-img'
                 />
                 <br></br>
                 <br></br>
                 </Cell>

             </Grid>
         </div>
        );
    }
}
export default Aboutme;