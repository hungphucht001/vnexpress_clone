import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { PostItem, PostItemImage } from '../PostItem'
import './BoxItem.scss'

function BoxItem() {
    return (
        <div className='wapper-box'>
            <div className='header-box'>
                <h5><a href='#'>Kinh doanh</a></h5>
                <a href='#' className='item'>Kinh doanh</a>
                <a href='#' className='item'>Kinh doanh</a>
                <a href='#' className='item'>Kinh doanh</a>
                <a href='#' className='item'>Kinh doanh</a>
            </div>
            <div className='row mt-3'>
                <div className='col-md-8 br-1'>
                    <PostItemImage />
                </div>
                <div className='col-md-4'>
                    <PostItem />
                </div>
            </div>
            <hr className='mb-2' />
            <div className='row footer'>
                <div className='col-md-4 pe-4'>
                    <a href='#'>
                        Ông Trần Đình Thiên: ‘Đừng sợ lạm phát thái quá'
                        <span className='dqwdqw'> <FontAwesomeIcon className='icon' icon={faMessage} /> <span>21</span></span>
                    </a>

                </div>
                <div className='col-md-4 pe-4'>
                    <a href='#'>
                        Ông Trần Đình Thiên: ‘Đừng sợ lạm phát thái quá'
                        <span className='dqwdqw'> <FontAwesomeIcon className='icon' icon={faMessage} /> <span>21</span></span>
                    </a>

                </div>
                <div className='col-md-4 pe-4'>
                    <a href='#'>
                        Ông Trần Đình Thiên: ‘Đừng sợ lạm phát thái quá'
                        <span className='dqwdqw'> <FontAwesomeIcon className='icon' icon={faMessage} /> <span>21</span></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BoxItem
