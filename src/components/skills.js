 
import React , {Component} from 'react';
import {Grid,Cell,Card,Button,CardTitle,CardText,CardActions,CardMenu,IconButton} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
         <div className='skill-body'>
             <br></br>
             <Grid className='skills-grid'>
                 <Cell col={4}>
                 <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/html-5.png) center / cover'}}></CardTitle>
                <CardText>
       
               </CardText>
    <CardActions border>
        <Button colored>HTML</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                 </Cell>
                 <Cell col={4}>
                 <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/css3.png) center / cover'}}></CardTitle>
    <CardText>
      
    </CardText>
    <CardActions border>
        <Button colored>CSS</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                 </Cell>
                 <Cell col={4}><Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/javascript-logo-1.png) center / cover'}}></CardTitle>
    <CardText>

    </CardText>
    <CardActions border>
        <Button colored>JavaScript</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card></Cell>
             </Grid>
             <Grid className='skills-grid'>
             <Cell col={4}><Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/nodejs.png) center / cover'}}></CardTitle>
    <CardText>
       
    </CardText>
    <CardActions border>
        <Button colored>NodeJS</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card></Cell>
             <Cell col={4}><Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/ios/500/000000/mysql-logo.png) center / cover'}}>Welcome</CardTitle>
    <CardText>
       
    </CardText>
    <CardActions border>
        <Button colored>MySQL</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card></Cell>
             <Cell col={4}><Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/c-plus-plus-logo.png) center / cover'}}>Welcome</CardTitle>
    <CardText>
       
    </CardText>
    <CardActions border>
        <Button colored>C++</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card></Cell>
             </Grid>
             
         </div>
        );
    }

}

export default Skills;