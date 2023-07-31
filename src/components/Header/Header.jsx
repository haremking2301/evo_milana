/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react'
import { RiDonutChartLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { RxBorderWidth, RxCross1 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';
import '../Header/style.scss'
import { Empty, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchReducer } from '../../redux/reducers/getAllProducts';
import { deleteProductReducer, inCriseProductReducer, miniusProductReducer } from '../../redux/reducers/cartSlice';

function Header() {
    // Xử lý search
    const [isNavbar, setIsNavbar] = useState(false);
    const handleChangeNav = function() {
        setIsNavbar(!isNavbar);
    }

    const [isSearch, setIsSearch] = useState(false);
    const handleChangeSearch = function() {
        setIsSearch(!isSearch);
    }

    const dispatch = useDispatch()
    const [valueSearch, setValueSearch] = useState('');
    const handleSearch = function(e) {
        setValueSearch(e.target.value);
        dispatch(searchReducer(valueSearch))
    }

    const navigate = useNavigate()
    const handleEnter = function(e) {
        if (e.keyCode === 13) {
            navigate(`${APP_ROUTES.PRODUCT_SEARCH_PAGE}${valueSearch}`)
            setIsSearch(!isSearch)
        }
    }

    // useEffect(() => {
    //     window.onclick = (e) => {
    //         console.log(e.target.matches('#navbar_drop'))
    //     };
    // }, [])

    const location = useLocation()
    const headerRef = useRef(null)

    useEffect(()=> {
        // console.log(headerRef)
        if(location.pathname === '/home') {
            headerRef.current.classList.remove('relative')
            headerRef.current.classList.add('fixed')
        } else {
            headerRef.current.classList.remove('fixed')
            headerRef.current.classList.add('relative')
        }
    }, [location])

    // Xử lý nút tài khoản và đăng nhập
    const isAccountActive = sessionStorage.getItem('isAccountActive')

    // Xử lý nút cart
    const [isCart, setIsCart] = useState(false);
    const handleChangeCart = function() {
        setIsCart(!isCart);
    }

    const cartProducts = useSelector((state) => state.cartProducts.cartProducts)
    const totalPrice = cartProducts.map((product) => product.price * product.quantity)
    const totalFunction = function(arr) {
        let sum = 0;
        totalPrice.map((value) => sum += value)
        return sum
    }
    const total = totalFunction()

    const incriseRef = useRef(null)
    const handleIncriseQuantity = function(e) {
        dispatch(inCriseProductReducer(e.target.value))
    }
    const miniusRef = useRef(null)
    const handleMiniusQuantity = function(e) {
        dispatch(miniusProductReducer(e.target.value))
    }
    // Xử lý số lượng sản phẩm

    const handleDelete = function(e) {
        dispatch(deleteProductReducer(e.target.value));
    }

    return (
    <div className='relative'>
        <div className={'fixed transition-all ease-in-out duration-500 h-full bg-black opacity-30 z-20 ' + `${isSearch? 'w-full' : 'w-0'}`}>

        </div>
        <div className={'w-[350px] min-h-screen z-40 bg-white fixed px-[20px] transition-all ease-in-out duration-500 py-[20px] ' + `${isSearch ? 'right-[0]' : 'right-[-100%]'}`}>
            <div className='flex justify-between mb-[20px] font-medium text-[18px] items-center'>
                <p>Tìm kiếm sản phẩm</p>
                <RxCross1 className='cursor-pointer' onClick={handleChangeSearch}></RxCross1>
            </div>
            <Input onChange={handleSearch} onKeyDown={handleEnter} placeholder="Nhập tên sản phẩm" />
        </div>
        <div className={'fixed transition-all ease-in-out duration-500 h-full bg-black opacity-30 z-20 ' + `${isCart? 'w-full' : 'w-0'}`}>

        </div>
        <div className={'w-[350px] min-h-screen z-40 bg-white fixed transition-all ease-in-out duration-500 py-[20px] ' + `${isCart ? 'right-[0]' : 'right-[-100%]'}`}>
            <div className='flex justify-between mb-[20px] font-medium text-[18px] items-center px-[20px]'>
                <p>Giỏ hàng</p>
                <RxCross1 className='cursor-pointer' onClick={handleChangeCart}></RxCross1>
            </div>
            {/* Xử lý cartProducts */}
            <div className='flex flex-col px-[20px] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#c64d5f] h-[550px] '>
                {(cartProducts.length !== 0)? cartProducts.map((product, index) => 
                (<div key={index} className='basis-full flex max-h-[90px] my-[10px]'>
                    <img className='basis-1/4 max-w-[25%]' src={product? product.img : ''}></img>
                    <div className='basis-3/4 h-[90px] ml-[10px]'>
                        <p className='w-full truncate text-[14px] font-semibold'>{product? product.title : ''}</p>
                        <div className='flex flex-row'>
                            <div className='flex flex-col'>
                                <p className='text-[14px]'>Số lượng:</p>
                                <div className='flex justify-between text-center'>
                                    <button ref={miniusRef} onClick={handleMiniusQuantity} value={index} className='flex items-center cursor-pointer border-2 border-r-0 px-[5px]'>-</button>
                                    <input min={1} max={99} readOnly className='border-2 w-[30px] text-center focus-visible:outline-none' value={product.quantity} ></input>
                                    <button ref={incriseRef} onClick={handleIncriseQuantity} value={index} className='flex items-center cursor-pointer border-2 border-l-0 px-[5px]'>+</button>
                                </div>
                            </div>
                            <div className='ml-[40px]'>
                                <p className='text-[14px] text-red-600 font-semibold'>{(product.price * product.quantity > 999)? `${product.price * product.quantity}`.slice(0,`${product.price * product.quantity}`.length - 3) + '.' + `${product.price * product.quantity}`.slice(1,4) : `${product.price * product.quantity}`}.000đ</p>
                                <button onClick={handleDelete} value={index} className='text-[14px] text-fuchsia-700'>Xóa sản phẩm</button>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='text-[14px]'>Size: {product.size}</p>
                            <p className='text-[14px] ml-[20px] mr-[5px]'>Màu:</p>
                            <p style={{ backgroundColor: `${product.color}`}} className='w-[15px] h-[15px] border-[1px] mt-[3px] rounded-[3px]'></p>
                        </div>
                    </div>
                </div>)): <Empty description='Giỏ hàng trống' />}
            </div>
            <div className='border-t-2 px-[20px]'>
                <div className='mt-[10px] flex justify-between'>
                    <p className='font-semibold'>Tổng tiền:</p>
                    <p className='text-[16px] text-red-600 font-semibold'>{(total > 999)? `${total}`.slice(0,`${total}`.length - 3) + '.' + `${total}`.slice(-3) : `${total}`}.000đ</p>
                </div>
                <button className='w-full bg-[#cd5c6d] text-white font-semibold py-2 mt-4 hover:bg-[#e82442] transition-all ease-in-out'>Thanh toán</button>
            </div>
        </div>
        <nav ref={headerRef} className='h-[80px] bg-[#e8e7e8] opacity-70 items-center flex flex-row justify-between px-6 fixed top-0 left-0 right-0 z-10'>
            <div className='lg:basis-5/24'>
                <Link to={APP_ROUTES.HOME_PAGE}>
                <img className='w-[200px] h-[52px] block cursor-pointer' 
                    src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/logo.png?1685438253758'>
                </img>
                </Link>
            </div>
            <div className='lg:basis-14/24 text-[18px] relative'>
                <ul className={'flex transition-all ease-in-out duration-500 lg:flex-row gap-6 lg:justify-center flex-col lg:relative lg:bg-transparent bg-[#1e1e1e] fixed z-20 top-0 lg:right-0 h-full w-[340px] lg:w-full first:pt-2 lg:first:pt-0 ' + `${isNavbar? 'right-[0]': 'right-[-100%]'}`}>
                    <li onClick={handleChangeNav} className='flex justify-end cursor-pointer text-[22px] text-white px-1 lg:hidden z-10'><RxCross1></RxCross1></li>
                    <li className='font-semibold list-nav'><Link to={APP_ROUTES.HOME_PAGE}>TRANG CHỦ</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.PRODUCT_PAGE}>SẢN PHẨM</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.INTRODUCES_PAGE}>GIỚI THIỆU</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.NEWS_PAGE}>TIN TỨC</Link></li>
                    <li className='list-nav'><Link to={APP_ROUTES.CONTACT_PAGE}>LIÊN HỆ</Link></li>
                </ul>
            </div>
            <div className='lg:basis-5/24 text-[17px]'>
                <ul className='flex flex-row gap-2 justify-end'>
                    <li className='text-[24px] list-nav-2'><RiSearchLine onClick={handleChangeSearch}></RiSearchLine></li>
                    <li className='list-nav-2'>
                        {isAccountActive === null? <Link to={APP_ROUTES.LOGIN_PAGE}>ĐĂNG NHẬP</Link> : <Link to={APP_ROUTES.ACCOUNT_PAGE}>TÀI KHOẢN</Link>}
                    </li>
                    <li className='list-nav-2 relative' onClick={handleChangeCart}>
                        <RiDonutChartLine className='absolute top-[-15px] left-3 text-[24px]'></RiDonutChartLine>
                        <span className='absolute top-[-14px] left-[18.5px] text-color-header text-[15px]'>{cartProducts.length}</span>
                        <RiShoppingCartLine className='text-[24px]'></RiShoppingCartLine>
                    </li>
                    <li onClick={handleChangeNav} className='relative z-50 flex justify-end cursor-pointer text-[22px] text-black ml-6 px-1 lg:hidden'>
                        <div>
                            <RxBorderWidth id='navbar_drop'></RxBorderWidth>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Header