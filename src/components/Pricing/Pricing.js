import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div>
            <div className="row plans">
                <div className="col-md-6  border p-5">
                    <p className='standrad-p'>Standrad</p>
                    <div className='standrad'>
                        <h1>599tk</h1><small>/month</small>
                    </div>
                    <div className='options '>
                        <p> <i className="far fa-times-circle"></i> Unlimited Cources A Month</p>
                        <p> <i className="far fa-times-circle"></i> Unlimited Notes Per Month</p>
                        <p> <i className="far fa-times-circle"></i> 100 Forum a month</p>
                        <p> <i className="far fa-check-circle"></i > Best Teachers Takes Class</p>
                        <p> <i className="far fa-times-circle"></i> 24/7 Live Support</p>
                        <button className='btn btn-color'>Purchase</button>
                    </div>
                    
                </div>
                <div className="col-md-6 border p-5 ">
                    <p className='standrad-p'>Premium</p>
                    <div className='standrad'>
                        <h1>1999tk</h1><small>/month</small>

                    </div>
                    <div className='options'>
                        <p> <i className="far fa-check-circle"></i> Unlimited Cources A Month</p>
                        <p> <i className="far fa-check-circle"></i> Unlimited Notes Per Month</p>
                        <p> <i className="far fa-check-circle"></i> 100 Forum a month</p>
                        <p> <i className="far fa-check-circle"></i > Best Teachers Takes Class</p>
                        <p> <i className="far fa-check-circle"></i> 24/7 Live Support</p>
                        <button className='btn btn-color'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;