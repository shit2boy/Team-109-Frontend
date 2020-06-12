import React, { Component } from 'react';
import {Data} from "../utils/Data";
import DonateNow from './DonateNow';

export class Youthproject extends Component {
    constructor(props){
        super(props);
        this.state ={
                search : "",
                amount : 0.00,
        }
        this.onSearchField = this.onSearchField.bind(this)
    }
    onSearchField(e){
       this.setState({[e.target.name]:e.target.value})
    }

    render(    ) {
        
        return (
            <div className="container center mb3">
                <div className="row mt5">
                   <div className="col-sm">
                       <img src={process.env.PUBLIC_URL + '/images/alc_acad.jpg'} alt="alc_acad" />
                        <div className="mt4" ><h5 className="tc">Youth Training Project</h5></div>
                        <div  className="offset-4 mt4">
                            <span  className="border pa2 bg-light-gray ">#</span> 
                           <input className="pa1 w-20 " type="number" name ="amount" onChange={this.onSearchField} placeholder="1.00" />
                        </div>
                        <div className="mt4 w-20">
                            <span className="bg-warning pa2">{this.state.amount}</span>
                            <span className="ma1 pa2 bg-warning">Amount</span>
                        </div>
                        <div  className="offset-4 mt4">
                           {/* <input className="bg-warning pa2" type="submit" value="Donate Now" /> */}
                           <p className="bg-warning w-30 tc pa1 pointer"><DonateNow /></p>
                        </div>
                        <hr/>
                        <em className="ma3">comments </em>
                   </div>
                   <div className="col-sm">
                      
                       <div className="pa3 w-70 bg-gray">
                           <input className="bg-warning pa2 w-70" type="text" name ="search" onChange={this.onSearchField} placeholder="Search here" />
                       </div>
                       <div>
                          <div>
                            <h5>Categories</h5><hr className="bg-warning"/>
                            <p className="text-muted pa2">No Categories</p>
                          </div>
                           <h5>Upcoming Event</h5><hr className="mb5 bg-warning"/>
                           <div>
                               <h5>Latest Donations</h5><hr className="bg-warning"/>
                               {
                               Data.map(item =>
                                        <div className="row"  key={item.id}>
                                            <img className="col-sm-3 mb3" src={item.imageSrc} alt="cardImage" width='100px' />
                                            <div>
                                                <h6 className="pointer">{item.category}</h6>
                                                <p>₦ {this.state.amount} Raised / Goal: <span className="text-warning">unlimited</span></p>
                                            </div>
                                        </div>
                                    )}
                           </div>

                           <strong className="">Recent Post</strong><hr className="bg-warning mb4"/>
                       </div>
                   </div>

                </div>
                
            </div>
        )
    }
}

export default Youthproject;