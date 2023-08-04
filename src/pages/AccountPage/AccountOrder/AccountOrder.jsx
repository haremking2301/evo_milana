import React from 'react'

function AccountOder() {
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
                <div className='w-full min-h-[50px]'>
                    
                </div>
            </div>
        </div>
    )
}

export default AccountOder