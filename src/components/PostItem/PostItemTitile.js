import React from 'react'
import images from '../../assets/images'
import './PostItem.scss'

function PostItemTitle() {
    return (
        <div className='wrapper-itempost item-title'>
            <span className='title'>Nga tố Ukraine tấn công Hạm đội Biển Đen, Kiev bác bỏ</span>
            <div className='row'>
                <div className='col-5'>
                    <img src={images.image_1} />
                </div>
                <div className='col-7 ps-0'>
                    <p className='mt-0'>Ông Đặng Hải Đăng, Giám đốc CDC tỉnh Cà Mau, cùng cấp dưới và một trưởng p dưới và một trưởng</p>
                </div>
            </div>
        </div>
    )
}

export default PostItemTitle
