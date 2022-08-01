import React, { useState } from 'react'
import './Layout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import images from '../assets/images'
import { faClockFour, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';
import Login from '../components/Login'

function Header() {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className='wrapper-header'>
            <div className='logo'>
                <img src={images.logo} />
            </div>
            <div className='date'>
                <span>Chủ nhật, 31/7/2022</span>
            </div>
            <div className='wrap-btn'>
                <a href='#'>
                    <FontAwesomeIcon className='icon' icon={faClockFour} />
                    Mới nhất
                </a>
                <a href='#'>
                    <img src={images.icon_logo} />
                    International
                </a>
            </div>
            <div className='search'>
                <div>
                    <input placeholder='Tìm kiếm' type='text' />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>
            <div className='btnLogin ' onClick={toggle}>
                <FontAwesomeIcon className='icon' icon={faUser} />
                <span>Đăng nhập</span>
            </div>
            <Modal centered={true} toggle={toggle} isOpen={open}>
                <ModalBody>
                    <Login />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Header
