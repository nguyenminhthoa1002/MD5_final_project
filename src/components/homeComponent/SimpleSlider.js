import React from 'react'
import Slider from "react-slick";
export const SimpleSlider = () => {
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section  >
            <div className='testSlick'>
                <Slider {...settings}>
                    <div>
                        <img src="img/banner/70__xmas_205007123d02459ab5ab3ee8a25d7e8e.webp" alt="" srcset="" style={{ with: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src="img/banner/ms_banner_img2.webp" alt="" srcset="" style={{ with: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src="img/banner/tet_banner_img1.webp" alt="" srcset="" style={{ with: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src="img/banner/tet_banner_img2.webp" alt="" srcset="" style={{ with: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <img src="img/banner/142_banner_img2.webp" alt="" srcset="" style={{ with: "100%", height: "100%" }} />
                    </div>
                </Slider>
            </div>
        </section>
    )
}
