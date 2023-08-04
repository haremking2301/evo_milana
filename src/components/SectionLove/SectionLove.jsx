/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { BsExplicit } from 'react-icons/bs'
import '../../components/SectionLove/style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getDressItemsThunk } from '../../redux/reducers/loveSlice'
import { Link, generatePath } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SectionLove() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
            },
        ]
    };
    const dispatch = useDispatch()
    const [ productType, setProductType ] = useState('dresses')
    const handleChange = (e) => {
        setProductType(e.target.value)
    }

    const loveProducts = useSelector((state) => state.loveProducts.loveProducts)
    useEffect(() => {
        dispatch(getDressItemsThunk(productType))
    }, [productType])

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.checked = true
    },[])
    return (
        <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] text-center'>
            <div>
                <p className='text-[23px] font-semibold'>ĐƯỢC YÊU THÍCH NHẤT</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px]'>Danh sách sản phẩm thời trang bán chạy, sản phẩm thời trang hot trong bộ sưu tập thời trang Evo Milana.</p>
            </div>
            <form className='mt-[10px] flex flex-wrap justify-evenly'>
                <div className='relative mt-[20px]'>
                    <input ref={inputRef} onChange={handleChange} value={'dresses'} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[10px] py-[5px] font-semibold'>TRANG PHỤC</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={'shoes'} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[20px] py-[5px] font-semibold'>GIÀY DÉP</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={'bags'} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[35px] py-[5px] font-semibold'>TÚI VÍ</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={'sales'} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[20px] py-[5px] font-semibold'>SIÊU SALE</label>
                </div>
            </form>
            <div>
                <Slider {...settings}>
                    {loveProducts.map(function(product, index) {
                        return (
                            <div key={product.id} className='w-[90%] h-[450px] mt-[30px] relative lg:basis-1/5 md:basis-1/3 sm:basis-1/3 basis-1/2'>
                                {product.salePrice ? <div className='absolute right-[10px] w-[34px] h-[34px] bg-[#f20808] text-[15px] text-white text-center'>
                                <p className='my-[5px] sale-product'>{product.salePrice}%</p>
                                </div> : ''}
                                <Link to={generatePath(APP_ROUTES.PRODUCT_DETAILS_PAGE, {id: product.id})}>
                                    <img id={index} className='cursor-pointer w-full mx-auto object-cover' src={product.img1}></img>
                                </Link>
                                <span className='float-left text-[15px] text-[#f20808] mt-[10px] font-medium'>{(product.price > 999)? `${product.price}`.slice(0,1) + '.' + `${product.price}`.slice(1,4) : `${product.price}`}.000đ</span>
                                {product.defaultPrice ? <span className='float-left text-[15px] text-[#7a7a7a] mt-[10px] font-light ml-[15px] line-through'>{product.defaultPrice}đ</span> : ''}
                                <br></br>
                                <p className='text-left float-left mt-[2px] w-full cursor-pointer text-[14px]'>{product.title}</p>
                                <div className='relative'>
                                    {product.color1 ? <div className={`w-[24px] h-[24px] absolute bottom-[-80px] border-[1px] border-[#7a7a7a] rounded-[5px]`} style={{ backgroundColor: `${product.color1}`}}></div> : ''}
                                    {product.color2 ? <div className={`w-[24px] h-[24px] absolute bottom-[-80px] left-8 border-[1px] border-[#7a7a7a] rounded-[5px] ml-[8px]`} style={{ backgroundColor: `${product.color2}`}}></div> : ''}
                                    {product.color3 ? <div className={`w-[24px] h-[24px] absolute bottom-[-80px] left-16 border-[1px] border-[#7a7a7a] rounded-[5px] ml-[8px]`} style={{ backgroundColor: `${product.color3}`}}></div> : ''}
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default SectionLove