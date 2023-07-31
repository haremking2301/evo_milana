/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'
import useScrollToTop from '../../hooks/useScrollToTop'
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa6";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import evoMilanaApi from '../../api/evoMilanaApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { accountReducer } from '../../redux/reducers/getAllProducts';

function LoginPage() {
    useScrollToTop()
    useEffect(() => {
        loginRef.current.classList.add('font-semibold')
    }, [])
    const loginRef = useRef(null)
    const registerRef = useRef(null)

    // Xử lý validation
    const schema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Email không hợp lệ'),
        password: yup.string().min(4, 'Mật khẩu phải lớn hơn 4 ký tự')
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    // Xử lý login
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onLogin = async function(data) {
        const dataUsers = await evoMilanaApi.getDataUsers()
        const dataUsersLogin = dataUsers.filter(user => user.email === data.email)
        if (dataUsersLogin.length === 0) {
            toast.warn('Email chưa đăng ký tài khoản của EvoMilana', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        } else {
            const isPassword = dataUsersLogin[0].password.includes(data.password)
            if (isPassword) {
                dispatch(accountReducer(data.email))
                sessionStorage.setItem('isAccountActive', data.email)
                navigate(APP_ROUTES.ACCOUNT_PAGE)
            } else {
                toast.warn('Mật khẩu không đúng', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
            }
        }
    }

    return (
        <div className='py-[50px] lg:max-w-[750px] max-w-[520px] flex lg:flex-row flex-col  mx-auto'>
            <img className='lg:w-[370px] w-[370px] mx-auto order-last lg:order-first' src={ require('../../source/img/loginPage.png')}></img>
            <div className='lg:w-[370px] w-[370px] mx-auto shadow-2xl shadow-purple-300'>
                <div className='flex flex-row'>
                    <button ref={loginRef} className='basis-1/2 text-center'><Link className='flex items-center justify-center border-b-[1px] border-r-[1px] border-slate-200 h-[60px]' to={APP_ROUTES.LOGIN_PAGE}>Đăng nhập</Link></button>
                    <button ref={registerRef} className='basis-1/2 text-center'><Link className='flex items-center justify-center border-b-[1px] border-r-[1px] border-slate-200 h-[60px]' to={APP_ROUTES.REGISTER_PAGE}>Đăng ký</Link></button>
                </div>
                <form onSubmit={handleSubmit(onLogin)} className='max-w-[90%] mx-auto'>
                    <p className='mt-[10px]'>Email<span className='text-red-700 text-[22px]'>*</span><span className='text-[14px] text-red-700 ml-3'>{errors.email?.message}</span></p>
                    <input {...register('email')} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập địa chỉ Email'></input>
                    <p className='mt-[10px]'>Mật khẩu<span className='text-red-700 text-[22px]'>*</span><span className='text-[14px] text-red-700 ml-3'>{errors.password?.message}</span></p>
                    <input {...register('password')} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='password' placeholder='Nhập mật khẩu'></input>
                    <button className='mt-[10px] float-right text-[14px] text-[#9039e7]'>Quên mật khẩu ?</button>
                    <button type='submit' className='mt-[20px] w-full bg-[#9f51ed] text-white py-[10px] rounded-[4px]'>Đăng nhập</button>
                    <ToastContainer></ToastContainer>
                </form>
                <div className='max-w-[80%] mx-auto text-center mt-[10px]'>
                    <p className='text-[13px] text-slate-400'>Evo Milana cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
                </div>
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

export default LoginPage