import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { PostItem, PostItemImage } from '../PostItem'
import './BoxItem.scss'

function BoxItem(props) {

    const { item } = props

    return (
        <div className='wapper-box'>
            <div className='header-box'>
                <h5><a href='#'>{item.menu.one}</a></h5>
                {item.menu.list.map((item, index) => <a href='#' key={index} className='item'>{item}</a>)}
            </div>
            <div className='row  mt-3'>
                <div className='col-md-8 br-1'>
                    <PostItemImage item={item.pra} />
                </div>
                <div className='col-md-4'>
                    <PostItem item={item.right} />
                </div>
            </div>
            <hr className='mb-2' />
            <div className='row footer'>
                {item.bottom.map((item, index) =>
                    <div key={index} className='col-md-4 pe-4'>
                        <Link to='/detaildetail/'>
                            {item}
                            <span className='dqwdqw'> <FontAwesomeIcon className='icon' icon={faMessage} /> <span>21</span></span>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export default BoxItem
