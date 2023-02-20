import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (
            <section  >
                <div className='blogSlick'>
                    <div>
                        <h3 className="text-center mt-5">NEM’S BLOG</h3>
                        <h6 className="text-center">ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</h6>
                        <Slider {...settings}>
                            <div className="itemLimit">
                                <img src="img/banner/blog1.webp" alt="" srcset="" />
                                <p className="blog-title">SUIT - XU HƯỚNG THỜI TRANG CHO QUÝ CÔ QUYỀN LỰC</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog2.webp" alt="" srcset="" />
                                <p className="blog-title">KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog3.jpg" alt="" srcset="" />
                                <p className="blog-title">RẠNG RỠ ĐÓN HÈ CÙNG VÁY HOA</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog4.webp" alt="" srcset="" />
                                <p className="blog-title">3 MẪU TRANG PHỤC CỔ VEST THANH LỊCH VÀ SANG TRỌNG CHO CÔ NÀNG CÔNG SỞ</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog5.webp" alt="" srcset="" />
                                <p className="blog-title">SUMMER FESTIVAL - ÁO PHÔNG CHỈ TỪ 299K</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog6.webp" alt="" srcset="" />
                                <p className="blog-title">ẤN TƯỢNG CÙNG ĐẦM THẮT NƠ</p>
                            </div>
                            <div className="itemLimit">
                                <img src="img/banner/blog7.webp" alt="" srcset="" />
                                <p className="blog-title">GỢI Ý MIX & MATCH TRANG PHỤC CÔNG SỞ CHO QUÝ CÔ THANH LỊCH</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}