import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import './Detail.scss'

function Detail() {
    return (
        <div className='wrapper-detail'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>
                        <div className='header'>
                            <span>
                                <a className='parent' href='#'>Thể thao </a> <FontAwesomeIcon className='icon' icon={faChevronRight} /> <a href='#'>V-League </a> <FontAwesomeIcon className='icon' icon={faChevronRight} /><a href='#'>Tin tức </a>
                            </span>
                            <span>Thứ hai, 1/8/2022, 16:38 (GMT+7)</span>
                        </div>
                        <div className='content my-3'>
                            <h2>Trọng tài Nguyễn Mạnh Hải: ‘Không nhiều người dám xử lý như tôi’</h2>
                            <p>Thông cảm với SLNA, nhưng trọng tài Nguyễn Mạnh Hải khẳng định ông công tâm khi rút thẻ đỏ và phạt 11m đối với đội bóng xứ Nghệ ở vòng 10 V-League 2022.</p>
                            <img src={images.detail_1} />
                            <p className='image-name mb-3'>Trọng tài Nguyễn Mạnh Hải rút thẻ đỏ trực tiếp đối với Olaha trong trận SLNA thua Hà Nội 1-2 trên sân Hàng Đẫy ngày 31/7. Ảnh: Lâm Thỏa</p>
                            <p>"Tôi hiểu sự bức xúc của SLNA khi dẫn trước rồi thua ngược trước đối thủ cạnh tranh Hà Nội. Nhưng, tôi xử lý đúng luật", trọng tài Nguyễn Mạnh Hải chia sẻ với VnExpress chiều 1/8. "Ở tình huống thẻ đỏ, tôi đứng rất gần và góc quan sát thuận lợi. Olaha đã dùng tay đánh vào cầu thủ Hà Nội trước khi nhảy lên tranh chấp. Đây là lỗi hành vi. Việc phạt thẻ thế nào đã được quy định trong luật. Còn ở tình huống phạt đền, Thái Bá Sang đã mở rộng tay, khiến cơ thể to ra bất thường. Nếu cầu thủ của SLNA chủ động chơi bóng sau đó bóng chạm tay thì không phạt đền. Nhưng thực tế, bóng đã chạm tay rồi mới xuống chân".
                                <br />
                                <br />
                                Phút 49 trận đấu trên sân Hàng Đẫy, khi SLNA đang dẫn 1-0, tiền đạo Michael Olaha vung tay trúng Đậu Văn Toàn trước khi nhảy lên đón bóng. Ông Hải lập tức truất quyền thi đấu ngoại binh của đội khách. Hai phút sau, trọng tài người Hải Phòng lại cắt còi, thổi phạt đền đối với SLNA khi Thái Bá Sang để bóng chạm tay trong lúc chặn đường câu bổng của Đoàn Văn Hậu. Trên chấm 11m, Siladji đánh bại thủ thành Nguyễn Văn Hoàng để gỡ hòa. Đến phút 76, trung vệ Nguyễn Thành Chung dứt điểm thành bàn, ấn định chiến thắng 2-1 cho Hà Nội.</p>

                            <img src={images.detail_1} />
                            <p className='image-name mb-3'>Olaha lĩnh thẻ đỏ</p>
                            <p>Sau trận, HLV Nguyễn Huy Hoàng tuyên bố sẽ khiếu nại về công tác trọng tài. Ông cho rằng Olaha chỉ giơ tay ra chứ không chú ý đánh chỏ và bóng đã qua đầu Thái Bá Sang trước khi chạm tay, nên các quyết định của ông Hải dành cho SLNA là không chính xác.
                                <br />
                                <br />
                                Nhiều CĐV của SLNA cũng cho rằng trọng tài Hải xử ép SLNA, tràn vào tấn công facebook của ông. Tuy nhiên, ông Hải tỏ ra bình thản. "Các quyết định của tôi đã làm thay đổi cục diện trận đấu. Không nhiều người dám xử lý như vậy. Nhưng tôi căn cứ theo luật khi ra các quyết định", ông nói. "Vì thế, tôi cảm thấy không có gì phải lo lắng".</p>
                            <img src={images.detail_1} />
                            <p className='image-name mb-3'>Thái Bá Sang để bóng chạm tay.</p>
                            <p>
                                Trong báo cáo của giám sát trận đấu, trọng tài Nguyễn Mạnh Hải được đánh giá "xử lý có cơ sở" ở hai tình huống tranh cãi kể trên. Trưởng Ban trọng tài Dương Văn Hiền cũng đánh giá ông Hải hoàn thành tốt nhiệm vụ trận này.
                                <br />
                                <br />
                                Hiện, SLNA đứng thứ hai với 16 điểm, kém bốn điểm so với Hà Nội. Vòng tiếp theo ngày 7/8, họ trở về sân nhà tiếp đón Thanh Hoá.
                            </p>
                            <div className='author'>
                                <h6 className='title'>Lâm Thỏa</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block ps-5'>
                        <div>
                            <img className='w-100' src="https://tpc.googlesyndication.com/simgad/8451181966074341423?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qmUto0keOMpXge8aRjNZmBYLcm2zA" />
                        </div>
                        <div className='mt-5'>
                            <h5>Xem nhiều</h5>
                            <div>
                                <img className='w-100' src="https://i1-dulich.vnecdn.net/2022/07/29/oqh-1659095699-1659095707-6636-1659095752.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=hHHsT-jrJ4uAJjMjRrJo8g" />
                                <Link to="/detail"><h6 className='title mt-4'>Đèo nào dài nhất Việt Nam?</h6></Link>
                                <hr />
                                <p>
                                    Năm khu nghỉ cao cấp bên vịnh biển
                                    <hr />
                                    Ninh Bình vào top điểm đến lên phim đẹp nhất châu Á
                                    <hr />
                                    Năm điểm 'sống ảo' khi tới Quy Nhơn </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
