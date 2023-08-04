/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductReducer, inCriseProductReducer, miniusProductReducer } from '../../redux/reducers/cartSlice'
import { Empty, Select, Space } from 'antd'

function PaymentPage() {
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
    return (
        <div >
            <div className='h-[40px] bg-[#f3f5f7]'></div>
            <div className='lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto mt-[20px] px-[10px] mb-[50px] flex lg:flex-row flex-col'>
                <div className='basis-full lg:basis-2/3'>
                    <p className="text-[18px] font-medium text-left mb-[30px]">THÔNG TIN NHẬN HÀNG</p>
                </div>
                <div className='basis-full lg:basis-1/3 shadow-2xl shadow-[#dd808a] px-[20px] py-[10px] '>
                    <p className="text-[18px] font-medium text-left mb-[30px]">ĐƠN HÀNG ({cartProducts.length} sản phẩm)</p>
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
                    <div className='border-t-2'>
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
                    </div>
                    <div className='border-t-2'>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Tổng tiền đơn hàng:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{(total > 999)? `${total}`.slice(0,`${total}`.length - 3) + '.' + `${total}`.slice(-3) : `${total}`}.000đ</p>
                        </div>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Phí vận chuyển:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{transportationFee}.000đ</p>
                        </div>
                        <div className='mt-[10px] flex justify-between'>
                            <p className='font-semibold'>Tổng tiền thanh toán:</p>
                            <p className='text-[16px] text-red-600 font-semibold'>{((total + transportationFee) > 999)? `${total + transportationFee}`.slice(0,`${total + transportationFee}`.length - 3) + '.' + `${total + transportationFee}`.slice(-3) : `${total + transportationFee}`}.000đ</p>
                        </div>
                        <button className='w-full bg-[#cd5c6d] text-white font-semibold py-2 mt-4 hover:bg-[#e82442] transition-all ease-in-out'>Đặt hàng</button>
                        <p className='my-[10px] text-[14px] text-center'>Lưu ý: Hàng đã được chúng tôi kiểm tra 100% trước khi giao đến tay khách hàng. Quý khách được kiểm tra hàng trước khi thanh toán.
                            Nếu có vấn đề trong quá trình vận chuyển xin liên hệ lại Evo Milana để được hỗ trợ. Trân trọng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage