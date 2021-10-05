import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import img2 from '../images/image2vector-2 (1).svg'
const Header = () => {
    return (
        <div className='bg rounded-3'> <br />
<h2 className='text-center name'><img className='text-center' src= {img2} alt="" /> <br /> Illusion Web Studio</h2>
<p className='text-center text-warning'><small>app development, Course, web development</small></p>
<div className="d-flex justify-content-center bg-info border">
          <Link className='link-item text-center' to='/home'>Home </Link> 
          <Link className='link-item text-center ' to='/cources'>Courses </Link>
          <Link className='link-item text-center' to='/plans'>Get it</Link>
          <Link className='link-item text-center' to='/about'>About Us</Link>
          
      

</div>

</div>


    );
};

export default Header;