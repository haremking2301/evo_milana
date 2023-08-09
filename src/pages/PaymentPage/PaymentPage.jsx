/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductReducer, inCriseProductReducer, miniusProductReducer, updateProductReducer } from '../../redux/reducers/cartSlice'
import { Empty, Select, Space } from 'antd'
import { getAllAddress } from '../../redux/reducers/addressSlice'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'
import { getUserDetailsThunk } from '../../redux/reducers/getAllProducts'
import evoMilanaApi from '../../api/evoMilanaApi'
import { toast } from 'react-toastify'
import { formatNumber } from '../../utils/formatNumber'
const days = new Date()

function PaymentPage() {
    const navigate = useNavigate()
    // Xử lý giỏ hàng
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts)
    const totalPrice = cartProducts.map((product) => product.price * product.quantity)
    const totalFunction = function(arr) {
        let sum = 0;
        totalPrice.map((value) => sum += value)
        return sum
    }
    const total = totalFunction()
    const dispatch = useDispatch()
    const incriseRef = useRef(null)
    const handleIncriseQuantity = function(e) {
        dispatch(inCriseProductReducer(e.target.value))
    }
    const miniusRef = useRef(null)
    const handleMiniusQuantity = function(e) {
        dispatch(miniusProductReducer(e.target.value))
    }
    const handleDelete = function(e) {
        dispatch(deleteProductReducer(e.target.value));
    }
    const [transportationFee, setTransportationFee] = useState(15)
    const handleChangeTransport = function(value) {
        switch (value) {
            case 'Tiêu chuẩn':
                setTransportationFee(15)
                break;
            case 'Nhanh':
                setTransportationFee(25)
                break;
        }
    }
    // Xử lý địa chỉ
    const idUser = useSelector((state) => (state.allProducts.idUser))
    const allAddress = useSelector((state) => state.allPlace.allAddress)
    useEffect(() => {
        dispatch(getAllAddress({
            idUser: idUser,
        }))
    }, [])
    const [numberAddress, setNumberAddress] = useState(0)
    const changeAddress = function (e) {
        setNumberAddress(Number(e.target.value))
    }
    // Xử lý thông tin tài khoản
    const account = sessionStorage.getItem('isAccountActive')
    const detailsAccount = useSelector((state) => state.allProducts.detailsAccount)
    useEffect(() => {
        dispatch(getUserDetailsThunk({
            q: account
        }))
    }, [])
    // order
    const onOrder = async function (e) {
        await evoMilanaApi.postDataOrders({
            day: `${days.getHours()}:${days.getMinutes()} ${days.getDate()}/${days.getMonth() + 1}/${days.getFullYear()}`,
            idUser: idUser,
            address: `${allAddress[numberAddress].city}, ${allAddress[numberAddress].district}, ${allAddress[numberAddress].ward}, ${allAddress[numberAddress].address}`,
            totalPrice: total,
            totalPayment: total + transportationFee,
            order: cartProducts
        })
        toast.success("Đặt hàng thành công", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch(updateProductReducer())
    }
    return (
        <div >
            <div className='h-[40px] bg-[#f3f5f7]'></div>
            <div className='lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto mt-[20px] px-[10px] mb-[50px] flex lg:flex-row flex-col'>
                <div className='basis-full lg:basis-2/3'>
                    <div className="mb-[20px] pr-[50px]">
                        <p className="text-[18px] font-medium text-left mb-[30px]">THÔNG TIN NHẬN HÀNG</p>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Email</div>
                            <div className='h-[100%] flex items-center'>{(detailsAccount.length !== 0)? detailsAccount[0].email : '__'}</div>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Họ và tên</div>
                            <div className='h-[100%] flex items-center'>{(detailsAccount.length !== 0)? detailsAccount[0].fullName : '__'}</div>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Số điện thoại</div>
                            <div className='h-[100%] flex items-center'>{(detailsAccount.length !== 0)? detailsAccount[0].phoneNumber : '__'}</div>
                        </div>
                    </div>
                    <div className="mb-[20px] pr-[50px]">
                        <p className="text-[18px] font-medium text-left mb-[20px]">ĐỊA CHỈ NHẬN HÀNG CỦA BẠN</p>
                        <div>
                            <select onChange={changeAddress} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="selectAddress">
                                {(allAddress.length !== 0)? allAddress.map((place, index) => (
                                    <option key={place.id} id={place.id} value={index}>{`Địa chỉ ${index + 1}`}</option> 
                                )): <option>Chưa có địa chỉ nhận hàng</option>}
                            </select>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Tỉnh thành</div>
                            <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].city : '__'}</div>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Quận huyện</div>
                            <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].district : '__'}</div>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Phường xã</div>
                            <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].ward : '__'}</div>
                        </div>
                        <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                            <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Số nhà, tên đường</div>
                            <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].address : '__'}</div>
                        </div>
                        <button onClick={() => {navigate(APP_ROUTES.ACCOUNT_ADRESS_PAGE)}} className='text-center mt-[15px] px-[20px] py-[7px] bg-[#f67e8f] cursor-pointer text-white rounded hover:opacity-80'>
                            Thêm địa chỉ
                        </button>
                    </div> 
                </div>
                <div className='basis-full lg:basis-1/3 shadow-2xl shadow-[#dd808a] px-[20px] py-[10px] '>
                    <p className="text-[18px] font-medium text-left mb-[30px]">ĐƠN HÀNG CỦA BẠN</p>
                    {(cartProducts.length !== 0)? cartProducts.map((product, index) => 
                    (<div key={index} className='basis-full flex max-h-[90px] my-[10px]'>
                        <img className='basis-1/4 max-w-[75px]' src={product? product.img : ''}></img>
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
                    {(cartProducts.length > 0) ? <div className='border-t-2'>
                        <div className='my-[10px] flex justify-between'>
                            <p className='font-semibold self-center'>Phương thức vận chuyển:</p>
                            <Space wrap>
                                <Select
                                defaultValue="Tiêu chuẩn"
                                style={{ width: 120 }}
                                onSelect={handleChangeTransport}
                                options={[
                                    { value: 'Tiêu chuẩn', label: 'Tiêu chuẩn' },
                                    { value: 'Nhanh', label: 'Nhanh' },
                                ]}
                                />
                            </Space>
                        </div>
                    </div> : ''}
                    {(cartProducts.length > 0)? <div className='border-t-2'>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Tổng tiền đơn hàng:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{formatNumber(total)}</p>
                        </div>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Phí vận chuyển:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{transportationFee}.000đ</p>
                        </div>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Tổng tiền thanh toán:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{formatNumber(total + transportationFee)}</p>
                        </div>
                        <button onClick={onOrder} className='w-full bg-[#cd5c6d] text-white font-semibold py-2 mt-4 hover:bg-[#e82442] transition-all ease-in-out'>Đặt hàng</button>
                        <p className='my-[10px] text-[14px] text-center'>Lưu ý: Hàng đã được chúng tôi kiểm tra 100% trước khi giao đến tay khách hàng. Quý khách được kiểm tra hàng trước khi thanh toán.
                            Nếu có vấn đề trong quá trình vận chuyển xin liên hệ lại Evo Milana để được hỗ trợ. Trân trọng.
                        </p>
                    </div>: ''}
                    {/* <ToastContainer></ToastContainer> */}
                </div>
            </div>
        </div>
    )
}

export default PaymentPage