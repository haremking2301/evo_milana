/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrderThunk } from '../../../redux/reducers/cartSlice';
import { formatNumber } from '../../../utils/formatNumber';

function AccountOder() {
    const dispatch = useDispatch()
    const idUser = useSelector((state) => (state.allProducts.idUser))
    const allOrder = useSelector((state) => state.cartProducts.cartOrders)
    useEffect(() => {
        dispatch(getAllOrderThunk({
            idUser: idUser,
        }))
    }, [])
    return (
        <div className="lg:ml-[60px]">
            <p className="text-[20px] font-medium text-left mb-[30px]">ĐƠN HÀNG CỦA BẠN</p>
            <div className='w-full border-[2px]'>
                <div className='w-full flex flex-row border-b-[2px]'>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>Đơn hàng</div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>Ngày</div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>Địa chỉ</div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>Giá trị đơn hàng</div>
                    <div className='basis-1/5 text-[14px] py-[5px]'>TT thanh toán</div>
                </div>
                {(allOrder.length > 0)? allOrder.map((order, index) => <div key={index} className='w-full min-h-[50px] flex flex-row border-b-[1px]'>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>
                        {order.order.map((pr, index) => <div key={index}>{`${pr.title}/${pr.size}`}</div>)}
                    </div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>
                        {order.day}
                    </div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>
                        {order.address}
                    </div>
                    <div className='basis-1/5 text-[14px] py-[5px] border-r-[2px]'>
                        {formatNumber(order.totalPrice)}
                    </div>
                    <div className='basis-1/5 text-[14px] py-[5px]'>
                        {formatNumber(order.totalPayment)}
                    </div>
                </div>) : ''}
            </div>
        </div>
    )
}

export default AccountOder