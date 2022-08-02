import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import './PostItem.scss'

function PostItemTitle(props) {
    const { item } = props
    return (
        <div className='col-md-6 col-lg-12'>
            <div className='wrapper-itempost item-title'>
                <Link to="/detail"><span className='title'>{item && item.name}</span></Link>
                <div className='row'>
                    <div className='col-5'>
                        <Link to="/detail"> <img src={item && item.image} /></Link>
                    </div>
                    <div className='col-7 ps-0'>
                        <p className='mt-0'>{item && item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemTitle
