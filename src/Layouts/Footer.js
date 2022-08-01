import React from 'react'
import './Layout.scss'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper-footer'>
                <hr className='mb-2' />
                <div className='top'>
                    <a className=''>
                        Báo điện tử
                        <img className='ms-3' src={images.logo} />
                    </a>
                    <div className='right'>
                        <span className='br-1 pe-2'>
                            RSS
                        </span>
                        <span className='ps-2'>
                            Theo dõi VnExpress trên
                        </span>
                        <div className='wrap-icon'>
                            <div className='icon'>
                                <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                            </div>
                            <div className='icon'>
                                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                            <div className='icon'>
                                <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-2' />
                <div className='bottom'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h6 className='title'>Báo tiếng Việt nhiều người xem nhất</h6>
                            <p>Thuộc Bộ Khoa học Công nghệ</p>
                            <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
                        </div>
                        <div className='col-md-5'>
                            <p>Tổng biên tập: Phạm Hiếu</p>
                            <p>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</p>
                            <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
                        </div>
                        <div className='col-md-3'>
                            <p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
