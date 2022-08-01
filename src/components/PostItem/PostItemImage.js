import React from 'react'
import images from '../../assets/images'
import './PostItem.scss'

function PostItemImage() {
    return (
        <div className='wrapper-itempost row'>
            <div className='col-md-6 pe-0'>
                <img src={images.image_1} />
            </div>
            <div className='col-md-6'>
                <span className='title'>Fan tranh cãi về tân Hoa hậu Hoàn vũ Thái Lan</span>
                <p>Nhiều fan cho rằng Miss Universe Thái Lan 2022 - Anna Sueangam-iam - không xứng đáng nhận vương miện bằng Á hậu 1 - Nicolene Limsnukan. </p>
            </div>
        </div>
    )
}

export default PostItemImage
