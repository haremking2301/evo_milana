/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { RiDonutChartLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";

function Header() {
    return (
        <nav className='h-[80px] bg-[#e8e7e8] opacity-70 items-center flex flex-row justify-between px-6 fixed top-0 left-0 right-0 z-10'>
            <div className='basis-2/12'>
                <img className='w-[200px] h-[52px] block cursor-pointer' 
                    src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/logo.png?1685438253758'>
                </img>
            </div>
            <div className='basis-8/12 text-[18px]'>
                <ul className='flex flex-row gap-6 justify-center'>
                    <li className='font-semibold list-nav'>TRANG CHỦ</li>
                    <li className='list-nav'>SẢN PHẨM</li>
                    <li className='list-nav'>BỘ SƯU TẬP</li>
                    <li className='list-nav'>THƯƠNG HIỆU</li>
                    <li className='list-nav'>LIÊN HỆ</li>
                </ul>
            </div>
            <div className='basis-2/12 text-[17px]'>
                <ul className='flex flex-row gap-2 justify-end'>
                    <li className='text-[24px] list-nav'><RiSearchLine></RiSearchLine></li>
                    <li className='list-nav'>ĐĂNG NHẬP</li>
                    <li className='list-nav relative'>
                        <RiDonutChartLine className='absolute top-[-15px] left-3 text-[24px]'></RiDonutChartLine>
                        <span className='absolute top-[-14px] left-[18.5px] text-color-header text-[15px]'>5</span>
                        <RiShoppingCartLine className='text-[24px]'></RiShoppingCartLine>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header