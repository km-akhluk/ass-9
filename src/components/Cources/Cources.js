import React, { useEffect, useState } from 'react';
import AllCources from './AllCources/AllCources';
import './Cources.css'
const Cources = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
                    <h2 className='fw-bold text-center mt-5 mb-5'>Courses Guided By our Expert Mentors</h2>
          

            <div className="row">
            {
                     products.map(product=> <div className='col-md-4 mb-5 '> <AllCources product={product}
                     key={product.id}
                     ></AllCources> </div>)
                 }
            </div>
       
        </div>
    );
};

export default Cources;