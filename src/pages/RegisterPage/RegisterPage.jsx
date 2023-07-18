/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react'
import { APP_ROUTES } from '../../constants/routes'
import { Link } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa6'

function RegisterPage() {
    useScrollToTop()
    useEffect(() => {
        registerRef.current.classList.add('font-semibold')
    }, [])

    const loginRef = useRef(null)
    const registerRef = useRef(null)
    return (
        <div className='py-[50px] lg:max-w-[750px] max-w-[520px] flex lg:flex-row flex-col  mx-auto'>
            <img className='lg:w-[370px] w-[370px] mx-auto order-last lg:order-first' src={ require('../../source/img/registerPage.png')}></img>
            <div className='lg:w-[370px] w-[370px] mx-auto shadow-2xl shadow-purple-300'>
                <div className='flex flex-row align-middle'>
                    <button ref={loginRef} className='basis-1/2 text-center'><Link className='flex items-center justify-center border-b-[1px] border-r-[1px] border-slate-200 h-[60px]' to={APP_ROUTES.LOGIN_PAGE}>Đăng nhập</Link></button>
                    <button ref={registerRef} className='basis-1/2 text-center'><Link className='flex items-center justify-center border-b-[1px] border-r-[1px] border-slate-200 h-[60px]' to={APP_ROUTES.REGISTER_PAGE}>Đăng ký</Link></button>
                </div>
                <form className='max-w-[90%] mx-auto'>
                    <p className='mt-[10px]'>Họ và tên<span className='text-red-700 text-[22px]'>*</span></p>
                    <input className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập họ và tên'></input>
                    <p className='mt-[10px]'>Số điện thoại<span className='text-red-700 text-[22px]'>*</span></p>
                    <input className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập số điện thoại'></input>
                    <p className='mt-[10px]'>Email<span className='text-red-700 text-[22px]'>*</span></p>
                    <input className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập địa chỉ Email'></input>
                    <p className='mt-[10px]'>Mật khẩu<span className='text-red-700 text-[22px]'>*</span></p>
                    <input className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập mật khẩu'></input>
                    <button className='mt-[10px] float-right text-[14px] text-[#9039e7]'>Quên mật khẩu ?</button>
                    <button type='submit' className='mt-[20px] w-full bg-[#9f51ed] text-white py-[10px] rounded-[4px]'>Đăng nhập</button>
                </form>
                <div className='max-w-[80%] mx-auto text-center mt-[10px]'>
                    <p className='text-[13px] text-slate-400'>Hoặc đăng nhập qua</p>
                </div>
                <div className='max-w-[80%] mx-auto text-center mt-[20px] mb-[20px] flex flex-row justify-between text-white'>
                    <button className='flex items-center bg-[#3b5998] pr-[20px] text-[13px] py-[5px]'><FaFacebookF className='mx-[15px] text-[21px]'></FaFacebookF>Facebook</button>
                    <button className='flex items-center bg-[#e14b33] pr-[30px] text-[13px] py-[5px]'><FaGooglePlusG className='mx-[15px] text-[21px]'></FaGooglePlusG>Google</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage