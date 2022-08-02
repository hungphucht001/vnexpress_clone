import React from 'react'
import './Layout.scss'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import data from '../components/Menu/data'
import { faE, faMailBulk, faV } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper-footer'>

                <div className='mt-3 row'>
                    <div className='col-md-3 col-sm-4 col-lg-2'>
                        <ul className='one'>
                            <li>
                                <a href="/">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Video
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Podcasts
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Ảnh
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Infographics
                                </a>
                            </li>
                            <hr />
                            <li>
                                <a href="/">
                                    Mới nhất
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Xem nhiều
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Tin nóng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-sm-8 ps-md-0 col-lg-5 br-1'>
                        <div className='menu d-block'>
                            <ul className='tow'>
                                {data.map((item, index) => <li key={index}>
                                    <a href="/">
                                        {item.name}
                                    </a>
                                </li>)}

                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 d-none d-md-block col-lg-2 br-1'>
                        <ul className='thre'>
                            <li>
                                <a href="/">
                                    Roa vặt
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Startup
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Mua ảnh VnExpress
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Vhome
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    eBox
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    eWork
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-12 col-lg-3'>
                        <div className='sdqwdqwd'>
                            <span>
                                Tải ứng dụng
                            </span>
                            <div className='btn-app my-3'>
                                <div className='wrap-btn'>
                                    <a href='#'>
                                        <img src={images.icon_logo} />
                                        VnExpress
                                    </a>
                                    <a href='#'>
                                        <img src={images.icon_logo} />
                                        International
                                    </a>
                                </div>
                            </div>
                            <span>
                                Liên hệ
                            </span>
                            <div className='contact my-3'>
                                <a href='#' className='mb-2'>
                                    <FontAwesomeIcon className='icon' icon={faMailBulk} />
                                    Toàn soạn
                                </a>
                                <a href='#' className='mb-2'>
                                    <FontAwesomeIcon className='icon' icon={faE} />
                                    Quảng cáo
                                </a>
                                <a href='#' className='mb-2'>
                                    <FontAwesomeIcon className='icon' icon={faV} />
                                    Hợp tác bản quyền
                                </a>
                            </div>
                            <hr className='mb-2' />
                            <span>
                                Đường dây nóng
                            </span>
                            <div className='phone my-3'>
                                <div className='mt-2'>
                                    <h6 className='title'>083.888.0123</h6>
                                    <span>(Hà Nội)</span>
                                </div>
                                <div className='mt-2'>
                                    <h6 className='title'>082.233.3555</h6>
                                    <span>(TP. Hồ Chí Minh)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
