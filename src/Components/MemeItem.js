import React,{Component} from "react";
import { connect } from "react-redux";
import { createMeme } from "../actions";


class MemeItem extends Component{
    constructor(){
        super()

        this.state={
            Hovered:false
        }
    }
    postMeme(){
        console.log('prosspsasa ;', this.props)
        const {text0,text1}=this.props;

        const memeObj ={
            template_id:this.props.meme.id,
            text0,
            text1,
        }
        this.props.createMeme(memeObj)
    }
    render(){
        return(
            <>
                <div className="meme-item" 
                onMouseEnter={()=>{this.setState({Hovered:true})}}
                onMouseLeave={()=>{this.setState({Hovered:false})}}
                onClick={()=>this.postMeme()}
                > 
                    <img className={this.state.Hovered?"meme-img darken-img":"meme-img"} src={this.props.meme.url} alt={this.props.meme.name} />
                    <p className={this.state.Hovered?"meme-txt":"no-text"}>{this.props.meme.name}</p>
                </div>
                
            </>
        )
    }

}

export default connect(null,{createMeme})(MemeItem);