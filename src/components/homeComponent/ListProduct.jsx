import React from 'react'
import ProductSlider from './ProductSlider'

export default function ListProduct() {
    return (
        <div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>

                    </div>
                    <div >
                        <ProductSlider></ProductSlider>
                    </div>
                </div>
            </section>


           
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>Best seller</h4>
                            </div>
                        </div>

                    </div>
                    <div>
                        <ProductSlider></ProductSlider>
                    </div>
                </div>
           
        </div>
    )
}
