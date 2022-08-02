import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import './PostItem.scss'

function PostItemImage(props) {
    const { item } = props
    return (
        <div className='wrapper-itempost row'>
            <div className='col-md-6 pe-0'>
                <Link to='/detail'><img src={item && item.image} /></Link>
            </div>
            <div className='col-md-6 daosdf'>
                <Link to="/detail"> <span className='title'>{item && item.name}</span></Link>
                <p>{item && item.description}</p>
            </div>
        </div>
    )
}

export default PostItemImage
