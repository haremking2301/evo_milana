/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { RiDonutChartLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { RxBorderWidth, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';

function Header() {
    const [isNavbar, setIsNavbar] = useState(false);
    const handleChangeNav = function() {
        setIsNavbar(!isNavbar);
    }
    return (
        <nav className='h-[80px] bg-[#e8e7e8] opacity-70 items-center flex flex-row justify-between px-6 fixed top-0 left-0 right-0 z-10'>
            <div className='lg:basis-5/24'>
                <img className='w-[200px] h-[52px] block cursor-pointer' 
                    src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/logo.png?1685438253758'>
                </img>
            </div>
            <div className='lg:basis-14/24 text-[18px] relative'>
                <ul className={'flex transition-all ease-in-out duration-700 lg:flex-row gap-6 lg:justify-center flex-col lg:relative lg:bg-transparent bg-[#1e1e1e] fixed z-20 top-0 lg:right-0 h-full w-[340px] lg:w-full first:pt-2 lg:first:pt-0 ' + `${isNavbar? 'right-[0]': 'right-[-100%]'}`}>
                    <li onClick={handleChangeNav} className='flex justify-end cursor-pointer text-[22px] text-white px-1 lg:hidden'><RxCross1></RxCross1></li>
                    <li className='font-semibold list-nav'><Link to={APP_ROUTES.HOME_PAGE}>TRANG CHỦ</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.PRODUCT_PAGE}>SẢN PHẨM</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.INTRODUCES_PAGE}>GIỚI THIỆU</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.NEWS_PAGE}>TIN TỨC</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.PRODUCT_PAGE}>LIÊN HỆ</Link></li>
                </ul>
            </div>
            <div className='lg:basis-5/24 text-[17px]'>
                <ul className='flex flex-row gap-2 justify-end'>
                    <li className='text-[24px] list-nav-2'><RiSearchLine></RiSearchLine></li>
                    <li className='list-nav-2'>ĐĂNG NHẬP</li>
                    <li className='list-nav-2 relative'>
                        <RiDonutChartLine className='absolute top-[-15px] left-3 text-[24px]'></RiDonutChartLine>
                        <span className='absolute top-[-14px] left-[18.5px] text-color-header text-[15px]'>5</span>
                        <RiShoppingCartLine className='text-[24px]'></RiShoppingCartLine>
                    </li>
                    <li onClick={handleChangeNav} className='flex justify-end cursor-pointer text-[22px] text-black ml-6 px-1 lg:hidden'><RxBorderWidth></RxBorderWidth></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header