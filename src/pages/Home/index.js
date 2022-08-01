import React from 'react'
import './Home.scss'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faMessage } from '@fortawesome/free-solid-svg-icons'
import { PostItem, PostItemTitile, PostItemImage } from '../../components/PostItem'
import BoxItem from '../../components/BoxItem'
import BoxContainer from '../../components/BoxContainer'

function Home() {
    return (
        <div className='wrapper-home'>

            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-8 pe-0'>
                            <img src={images.image_1} />
                        </div>
                        <div className='col-md-4 content'>
                            <a href='#'>
                                <h4>Cướp vàng ném ra đường</h4>
                            </a>
                            <span>Thừa Thiên - Huế</span>
                            <p>Tên cướp mang súng AK xông vào hai tiệm vàng ở chợ Đông Ba, lấy vàng vứt ra ngoài đường rồi chạy trốn, trưa 31/7.</p>
                            <div className='footer'>
                                <a href='#'>Pháp luật</a>
                                <a href='#'> <FontAwesomeIcon icon={faMessage} /> 123</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <PostItem />
                            </div>
                            <div className='col-md-4 br-3 '>
                                <PostItem />
                            </div>
                            <div className='col-md-4'>
                                <PostItem />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <iframe className='w-100 h-100' src="https://static.eclick.vn/html5/vs_001/ads/m/masteri/2022/07/21/106565/300x500/dfp/pc/std/fixed/index.html?link=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjsulkZ2zsaUQ9JrpkiZul5MMIaS06_HsEgHdJqlLuKfDa3dzrbjDQf5I8BvORaxNTER4--H4MiNcKBIQpCm6M8g6uawdErsJUd18Ai5_gaLQMzOnMWLSbXHgud_SbDbq5x5YN9-CXaIxuRdY2YHJ4qJTDXR5MkmGJFPK8fXOJqFr4JDxreaXEYNj76lY3hpr6N4G7PJ4Aagg9Vj2Qv66-4YKj5scDR2sA91Mf5PQi6Vi6CTNyfYzofVLvzZZLY-BA_jQAWlXsEH-wI29dtL8MuSVhM7OvTUinSwT_5NfqjCzp-7J_fcoO819x1HcDsUajfRaibDE0Tq3fTXc%26sai%3DAMfl-YRJ9-j6ywUEpR55Xp7Yb-t5POPxO2ntabBJXCZO6j7MVigY5bygq9SucFCfKxCKurwaAPwOlqaotjA5D9PYEgc4KTXM2794bW3inG0D%26sig%3DCg0ArKJSzDtHGSCwG5aCEAE%26fbs_aeid%3D%5Bgw_fbsaeid%5D%26urlfix%3D1%26adurl%3Dhttps%253A%252F%252Fmasterisehomes.com%252Fthe-rivus%252F%253Futm_source%253Dvnexpress%2526utm_medium%253Dweek%2526utm_campaign%253Drivus-vnexpress-week-phase2-na-cpd-9BD69A56-syncbackground&otherlink=&campaign_name=Masterise%20Homes&index_brand=LB1001.792_Masterise%20Homes&index_industrial=L1001_B%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n"></iframe>
                </div>

            </div>
            <hr />
            <div className='row'>
                <div className='col-md-4 pe-0 br-1'>
                    <PostItemTitile />
                    <PostItemTitile />
                    <PostItemTitile />
                    <PostItemTitile />
                    <PostItemTitile />
                </div>
                <div className='col-md-8 ps-3'>
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                </div>
            </div>
            <hr />
            <div className='topic'>
                <ul className='d-flex'>
                    <li>
                        <a> <FontAwesomeIcon icon={faChartLine} /> Chủ đề </a>
                    </li>
                    <li>
                        <a className='link' href='#'> Thi tốt nghiệp THPT 2022 </a>
                    </li>
                    <li>
                        <a className='link' href='#'> Giá sách giáo khoa mới </a>
                    </li>
                    <li>
                        <a className='link' href='#'> Đề án đưa 5 huyện ở TP HCM lên quận </a>
                    </li>
                </ul>
            </div>
            <hr />
            <BoxContainer />
            <BoxContainer />
            <BoxContainer />
        </div>
    )
}

export default Home
