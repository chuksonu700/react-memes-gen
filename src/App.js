import React,{Component} from   "react";
import {connect} from 'react-redux';
import './style.css';
import { Form,FormControl,FormGroup,FormLabel } from "react-bootstrap";
import MemeItem from "./Components/MemeItem";
import Mymemes from "./Components/Mymemes";

class App extends Component{
    constructor(){
        super()
        this.state={
            memesLimit:10,
            text0:'',
            text1:'',
        }
    }
    render(){
        return(
        <>
             <h3><u>Meme Generator</u></h3>
            <h5><i>Write Memes</i></h5>
        <Mymemes />
            <Form className="">
                <div className="form-row">
                <FormGroup className=" form-group col-md-5">
                    <FormLabel>Top</FormLabel> {''}
                    <FormControl type="text" onChange={(e)=> this.setState({text0:e.target.value})}></FormControl>                    
                </FormGroup>
                {''}
                <FormGroup className=" form-group col-md-5">
                    <FormLabel>Bottom</FormLabel> {''}
                    <FormControl type="text" onChange={(e)=> this.setState({text1:e.target.value})} ></FormControl>                    
                </FormGroup>
                </div>
            </Form>
        {
            this.props.memes.slice(0,this.state.memesLimit).map((meme)=>{
                
                return(
                   <>
                <MemeItem key={meme.id} meme= {meme} text0={this.state.text0} text1={this.state.text1}/> 
                   </> 
                )
            })
        }
        <div className="meme-button" onClick={()=>this.setState({memesLimit:this.state.memesLimit+10})}>Load 10 more ..</div>
        </>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps,null)(App);