import React from 'react'
import { Link } from 'react-router-dom'

import './BoxContainer.scss'
function BoxContainer(props) {

    const { item } = props

    return (
        <div className='wapper-box'>
            <div className='header-box'>
                <h5><a href='#'>{item.menu.one}</a></h5>
                {item.menu.list.map((item, index) => <a href='#' key={index} className='item'>{item}</a>)}
            </div>
            <div className='row mt-3'>
                <div className='col-md-6 br-1'>
                    <Link to="/detail"><img src={item.pra.image} /></Link>
                    <Link to="/detail"><h3 className="mt-2">{item.pra.name}</h3></Link>
                    <p>{item.pra.description}</p>
                </div>
                <div className='col-md-3 px-2 br-1'>
                    <div >
                        <Link to='/detail'><img src={item.center[0].image} /></Link>
                        <Link to='/detail'><h6 className="mt-2 title">{item.center[0].name}</h6></Link>
                    </div>
                    <hr />
                    <div>
                        <Link to='/detail'><img src={item.center[1].image} /></Link>
                        <Link to='/detail'><h6 className="mt-2 title">{item.center[1].name}</h6></Link>
                    </div>
                </div>
                <div className='col-md-3 Hiodwhihu'>
                    {item.right.map((item, index) =>
                        <div key={index}> <div className='d-flex row '>
                            <div className='col-md-12 mt-md-2 col-lg-6 pe-1 order-sm-1 order-lg-0'>
                                <Link to="/detail" >
                                    <h6 className="title">{item.name}</h6>
                                </Link>
                            </div>
                            <div className='col-md-12 col-lg-6 ps-0 ps-md-2 order-sm-0 order-lg-1'>
                                <Link to="/detail"><img src={item.image} /></Link>
                            </div>
                        </div>
                            <hr />
                        </div>

                    )}
                </div>
            </div>
        </div >
    )
}

export default BoxContainer
