import React from 'react';

const AllCources = (props) => {
    const {name,img,price,students}=props.product
    return (
        <div className='text-center'>
            
                         <img height='300px' className='img-fluid img-border' width='300px' src={img} alt="" />
                         <p className='fw-bold pt-2'> {name} <br /> <small>Price: {price}tk</small></p>
                         <p className='students'>Students: {students} <br />Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                         <button className='btn btn-warning'>Join Now</button>
                     </div>

    );
};

export default AllCources;