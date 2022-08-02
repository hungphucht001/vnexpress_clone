import React, { useEffect, useState } from 'react'
import './Menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faHome, faList } from '@fortawesome/free-solid-svg-icons'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

import data from './data'

function Menu() {

    const [isScroll, setIsScroll] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);

    useEffect(() => {
        setIsScroll(window.scrollY >= 330)
        const handleScroll = () => {
            setIsScroll(window.scrollY >= 330)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleShowAll = () => {
        console.log('a')
        setIsShowMenu(!isShowMenu)
    }

    return (
        <div className={`wrapper-menu ${isScroll ? "scroll" : ""}`}>
            <div className='container-fluid'>
                {
                    isScroll ?
                        <div className='logo'>
                            <Link className='link-image' to='/'>
                                <img src={images.icon_logo} />
                            </Link>

                            <Link className='link-text br-1' to='/tin-tuc-24h'>
                                Mới nhất
                            </Link>
                        </div>
                        :
                        <div className='icon'>
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                }

                <div className='menu'>
                    <ul>
                        {data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href='#'>{item.name}</a>
                                    {
                                        item.child &&
                                        <ul>
                                            {item.child.map((item2, index2) =>

                                                <li key={index2}>
                                                    <a href='#'>{item2.name}</a>
                                                </li>
                                            )}
                                        </ul>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='all'>
                    <div onClick={handleShowAll} className='btn-all'>
                        <span >Tất cả</span>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {
                        isShowMenu &&
                        <div className='all-menu'>
                            <div className='wrap-menu'>
                                <div className='header'>
                                    <h5>Tất cả chuyên mục</h5>
                                    <span onClick={() => setIsShowMenu(false)}>Đóng <FontAwesomeIcon icon={faClose} /></span>
                                </div>
                                <hr className='mt-2' />
                                <div className='content row'>
                                    {
                                        data.map((item, index) =>
                                            <div className='col-lg-2 col-md-3 col-sm-4 col-6  mb-4' key={index}>
                                                <span className='title mb-2 d-inline-block'>
                                                    <a href='#'>{item.name}</a>
                                                </span>
                                                <ul className='ps-0'>

                                                    {
                                                        item.child.map((item2, index2) =>
                                                            <li key={index2}>
                                                                <a href='#' >{item2.name}</a>
                                                            </li>)
                                                    }

                                                </ul>
                                                <a className='see' href='#' >Xem thêm</a>
                                            </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Menu
