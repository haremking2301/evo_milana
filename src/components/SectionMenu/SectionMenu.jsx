import React from 'react'
import { BsExplicit } from "react-icons/bs";

function SectionMenu() {
    return (
        <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] text-center'>
            <div>
                <p className='text-[23px] font-semibold'>DANH MỤC SẢN PHẨM</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px]'>Evo Milana cung cấp những mẫu thiết kế thanh lịch, hiện đại được cập nhật liên tục hàng tuần.</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default SectionMenu