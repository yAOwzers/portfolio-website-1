import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import './Features.css'

function Features() {
    return (
            <div className='feat-container'>
                <li className='feat-items'>
                    <Link to='/projects' className='feat-link'>
                        Projects
                    </Link>
                </li>
                <li className='feat-items'>
                    <Link to='/workexp' className='feat-link'>
                        Work Experiences
                    </Link>
                </li>
                <li className='feat-items'>
                    <Link to='/skills' className='feat-link'>
                        Skills
                    </Link>
                </li>
                <li className='feat-items'>
                    <Link to='/testimonials' className='feat-link'>
                        Testimonials
                    </Link>
                </li>
                <li className='feat-items'>
                    <Link to='/awards' className='feat-link'>
                        Awards
                    </Link>
                </li>
                <li className='feat-items'>
                    <Link to='/blog' className='feat-link'>
                        Blog
                    </Link>
                </li>
            </div>
    );
}

export default Features;
