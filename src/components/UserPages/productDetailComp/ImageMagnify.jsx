import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

export default function ImageMagnify() {
    return (
        <div className='imageMagnify'>
            <ReactImageMagnify {...{
                smallImage: {
                    isFluidWidth: true,
                    src: "img/product/details/productDetail1.webp"
                },
                largeImage: {
                    src: "img/product/details/productDetail1.webp",
                    width: 1365,
                    height: 2048
                },
                enlargedImagePosition: "beside",
                isHintEnabled: true,
                enlargedImageContainerDimensions: { width: '80%', height: '70%' }
            }} />
        </div>

    )
}
