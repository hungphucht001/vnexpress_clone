import React from 'react'
import { Link } from 'react-router-dom'
import './PostItem.scss'

function PostItem(props) {
    const { item } = props
    return (
        <div className='wrapper-itempost'>
            <Link to="detail"><span className='title'>{item && item.name}</span></Link>
            <p>{item && item.description}</p>
        </div>
    )
}

export default PostItem
