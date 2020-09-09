 
import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component{
    render(){
        return(
         <div style={{width:'100%',margin:'auto'}}>
             <Grid className='landing-grid'>
                 <Cell col={12}>
                 <img
                 src={require('../components/image/logo7.png')}
                 alt='avatar'
                 className='avatar-img'
                 />
                 <div className="banner-text">
                     <h1>Full Stack Developer</h1>
                     <hr/>
                     <p>HTML/CSS | JavaScript | React | NodeJS | MySQL | C++ | Java</p>
                     <div className='social-links'>
                         <a href=" " target="_blank">
                             <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                         </a>
                         <a href=" " target="_blank">
                             <i className="fa fa-facebook-square" aria-hidden="true"></i>
                         </a>
                         <a  href="mailto: milksolee@msn.com " target="_blank">
                             <i className="fa fa-envelope-square" aria-hidden="true"></i>
                         </a>
                         <a href=" " target="_blank">
                             <i className="fa fa-youtube-square" aria-hidden="true"></i>
                         </a>

                     </div>

                 </div>
                 </Cell>
             </Grid>
            
         </div>
        );
    }
}
export default Landingpage;