import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthai:false
        }}
    xong=()=>{
        if (this.state.trangthai===true)
       return <button type="button" className="btn btn-danger" onClick={()=>this.thaidoi()}>Xong </button>
        else
        return <button type="button" className="btn btn-warning" onClick={()=>this.thaidoi()}>Them</button>
    }
    thaidoi=()=>{
    this.setState({
        trangthai: !this.state.trangthai
    })
    }
    dangnhap=()=>{
        if(this.state.trangthai===true){
        return <div>
            <form>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
        }
    }
    render() {
        return (
            <div>
                {this.xong()}
                {this.dangnhap()} 
            </div>
        );
    }
}

export default Button;
