import React, { useEffect, useState } from 'react';
import './Home.css'
import img1 from '../images/photo-editing.jpg'
import { Col, Row } from 'react-bootstrap';

import Popular from '../PopularCources/Popular';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Row>
                <Col md={6} xs={12}
                >
                    <h1 className='title'>Get best Website development and Course
                        <br/> service provider from Illusion Web Studio</h1>
                    <p>We are the best website development companies in Bangladesh since 2020</p>
                    <p><strong>Giving best support is our main concern.</strong></p>
                    <button className='btn btn-warning mt-5'>Get Demo Now</button>
                </Col>
                <Col md={6} xs={12}
                > <br /><br /><br /> <img src={img1} alt="" className='pt-5' /></Col>
            </Row>
            <div className='mt-5 mb-5 text-center'>
                <small className='popular '>Popular Courses</small>
                <h3 className='popular fw-bold text-dark '>Get Yours Now</h3>
                
            </div>

            <div className="row">
                {
                    products.slice(0, 6).map(product => <div className='col-md-4 mb-5'> <Popular
               
                    key={product.id}
                        product={product}
                    ></Popular> </div>)
                }
            </div>

        </div>
    );
};
export default Home;