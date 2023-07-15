/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';

const placehoders = ['Bạn cần hỗ trợ', 'Liên hệ chúng tôi', 'Nhập Email của bạn', 'Nhận thông tin mới nhất']

function Footer() {
    const [placehoderIndex, setPlacehoderIndex] = useState(0)
    useEffect(() => {
        const place = setInterval(() => {
            setPlacehoderIndex(Math.floor(Math.random() * placehoders.length))
        }, 2000)
        return () => {
            clearInterval(place)
        }
    }, [])
    const handleSubmit = (e) => {
        console.log('ok');
    }
    return (
        <footer>
            <div className='bg-[#231f20] flex lg:flex-row flex-col items-center'>
                <p className='lg:basis-6/12 flex justify-center text-[16px] text-white lg:py-4 py-2'>Nhận thông tin khuyến mãi mới nhất từ Evo Milana</p>
                <form onSubmit={handleSubmit} className='lg:basis-6/12 flex justify-center lg:py-4 py-2'>
                    <input type='email' className='focus:outline-none border-none h-[30px] w-[300px] rounded-l-[7px] pl-3 text-[14px] email-sub' placeholder={placehoders[placehoderIndex]}></input>
                    <button type='submit' className='h-[30px] px-[10px] bg-[#d2d2d2] rounded-r-[7px] text-[14px] hover:bg-color-header hover:text-white transition-all ease-in-out duration-500'>Đăng ký</button>
                </form>
            </div>
            <div className='flex flex-wrap flex-row lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto'>
                <div className='footer-section'>
                    <img className='mx-auto mb-[30px]' width={200} height={53} src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/logo.png?1685438253758'></img>
                    <p className='text-center text-[14px] mb-[30px]'>Evo Milana là một trong những công ty phân phối thời trang lớn nhất trong việc giới thiệu các thương hiệu thời trang cao cấp và sang trọng tại Việt Nam.</p>
                    <div className='flex flex-row justify-evenly'>
                        <TfiFacebook className='text-[33px] border-[1px] border-black rounded p-[5px] hover:text-sky-700 cursor-pointer'></TfiFacebook>
                        <TfiTwitterAlt className='text-[33px] border-[1px] border-black rounded p-[5px] hover:text-sky-500 cursor-pointer'></TfiTwitterAlt>
                        <FaYoutube className='text-[33px] border-[1px] border-black rounded p-[5px] hover:text-red-700 cursor-pointer'></FaYoutube>
                        <FaSquareInstagram className='text-[33px] border-[1px] border-black rounded p-[5px] hover:text-red-500 cursor-pointer'></FaSquareInstagram>
                    </div>
                </div>
                <div className='footer-section text-center'>
                    <p className='tetx-[16px] font-medium'>Về Evo Milana</p>
                    <ul className='text-[14px]'>
                        <li className='list-footer-item'><Link to={APP_ROUTES.HOME_PAGE}>Trang chủ</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.INTRODUCES_PAGE}>Giới thiệu</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Sản phẩm</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.NEWS_PAGE}>Tin tức</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Bộ sưu tập</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Thương hiệu nổi bật</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.CONTACT_PAGE}>Liên hệ</Link></li>
                    </ul>
                </div>
                <div className='footer-section text-center'>
                <p className='tetx-[16px] font-medium'>Hỗ trợ khách hàng</p>
                    <ul className='text-[14px]'>
                        <li className='list-footer-item'><Link to={APP_ROUTES.HOME_PAGE}>Trang chủ</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.INTRODUCES_PAGE}>Giới thiệu</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Sản phẩm</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.NEWS_PAGE}>Tin tức</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Bộ sưu tập</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.PRODUCT_PAGE}>Thương hiệu nổi bật</Link></li>
                        <li className='list-footer-item'><Link to={APP_ROUTES.CONTACT_PAGE}>Liên hệ</Link></li>
                    </ul>
                </div>
                <div className='footer-section text-center'>
                <p className='tetx-[16px] font-medium'>Liên hệ với chúng tôi</p>
                    <ul className='text-[14px]'>
                        <li className='list-footer-item'><b>Địa chỉ:</b>70 Lu Gia, Ward 15, District 11, Ho Chi Minh City</li>
                        <li className='list-footer-item'><b>Email:</b>support@sapo.vn</li>
                        <li className='list-footer-item'><b>Điện thoại:</b>1900 6750</li>
                        <li className='list-footer-item'><b>Zalo:</b>1900 6750</li>
                    </ul>
                    <button className='my-[12px] bg-black py-2 text-white hover:bg-color-header'>
                        Hệ thống 10 showroom
                    </button>
                </div>
            </div>
            <div className='mt-[30px] py-[10px]'>
                <p className='text-[13px] text-center'>Công ty cổ phần Evo Milana - MST: 0000000000 do sở Kế Hoạch và Đầu Tư Đà Nẵng cấp ngày 00/00/0000</p>
                <p className='text-[13px] text-center mt-[10px]'>Địa chỉ: 30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng</p>
            </div>
            <div className='mt-[30px] py-[10px] bg-[#f7f5f5] flex justify-center'>
                <span className='opacity-60 text-[12px]'>© Bản quyền thuộc về Evo Themes | Cung cấp bởi Sapo</span>
            </div>
        </footer>  
    )
}

export default Footer