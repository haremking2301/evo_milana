/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'
import AllProducts from '../../components/AllProducts/AllProducts'

function ProductsPage() {
    useScrollToTop()
    return (
        <div>
            <img src={ require('../../source/img/bannerProduct.jpg') }></img>
            <AllProducts></AllProducts>
        </div>
    )
}

export default ProductsPage