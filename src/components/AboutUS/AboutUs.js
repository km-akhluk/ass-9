import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h2 className='mb-5 text-success'>About <span className='iws'>IWS</span></h2>
                <p className=' aboutus'>We can help to maintain and modernize your <br /> IT infrastructure and solve various infrastructure-specific issues a business may face.</p>
                <p>We are one of the most effective Web Design Companies <br />
We build custom website, software, graphics that allows businesses to meet their needs and constraints.</p>
            </div>
            <hr className='mt-3' />
<div className="row mt-5">
    <div className="col-md-6">
        <div className="hr-link">
            <h3 className='text-center m-3 '>Our Location</h3>
            <p className='aboutus text-center'>Dhaka, Bangladesh</p>
        </div>
    </div>
    <div className="col-md-6">
        <div className="hr-link">

        <h3 className='text-center m-3 '>Our Contacts</h3>
            <p className=' text-center'>Phone: 01536987415, E-mail: adg@ghgj.com</p>
            

        </div>
    </div>
</div>

        </div>
    );
};

export default AboutUs;