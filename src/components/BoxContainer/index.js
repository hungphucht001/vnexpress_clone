import React from 'react'
import images from '../../assets/images'

function BoxContainer() {
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
                <div className='col-md-6 br-1'>
                    <img src={images.image_1} />
                    <h3 className="mt-2">Nỗi ám ảnh mang tên Apple và TikTok</h3>
                    <p>Khi lý giải tình hình kinh doanh đi xuống trong quý II/2022, hàng loạt ông lớn công nghệ như Google, Meta, Snap... nhắc đến hai cái tên Apple và TikTok. </p>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-6 br-1'>
                            <div>
                                <img src={images.image_1} />
                                <h6 className="mt-2 title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                            </div>
                            <hr />
                            <div>
                                <img src={images.image_1} />
                                <h6 className="mt-2 title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex'>
                                <h6 className="title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                                <img src={images.image_1} />
                            </div>
                            <hr />
                            <div className='d-flex'>
                                <h6 className="title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                                <img src={images.image_1} />
                            </div>
                            <hr />
                            <div className='d-flex'>
                                <h6 className="title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                                <img src={images.image_1} />
                            </div>
                            <hr />
                            <div className='d-flex'>
                                <h6 className="title">Nỗi ám ảnh mang tên Apple và TikTok</h6>
                                <img src={images.image_1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxContainer
