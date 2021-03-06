import React, { Component } from "react"; 

class Jumbotron extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <img src={ this.props.logo } alt="logo" height="150px"/>
                        <br />
                        <h1 className="text-white text-title">JUDO KOTA BATAM</h1>
                        <span className="text-muted">Villa Hanglekir, Mega Legenda, Batam</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Jumbotron;