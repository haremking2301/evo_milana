/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BsExplicit } from "react-icons/bs";

function SectionMenu() {
    return (
        <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] mb-[50px] text-center'>
            <div>
                <p className='text-[23px] font-semibold'>DANH MỤC SẢN PHẨM</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px]'>Evo Milana cung cấp những mẫu thiết kế thanh lịch, hiện đại được cập nhật liên tục hàng tuần.</p>
            </div>
            <div className='mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div className='lg:max-w-[500px] md:max-w-[300px] sm:max-w-[240px]'>
                    <img className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-500' src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/feature_banner_image_1.jpg?1685438253758'></img>
                </div>
                <div className='grid grid-cols-2 gap-3 lg:max-w-[500px] md:max-w-[300px] sm:max-w-[240px]'>
                    <div className='lg:max-w-[250px] md:max-w-[150px] sm:max-w-[120px]'>
                        <img className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-500' src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/feature_banner_image_2.jpg?1685438253758'></img>
                    </div>
                    <div className='grid grid-rows-2 gap-3 lg:max-w-[250px] md:max-w-[150px] sm:max-w-[120px]'>
                        <div className='lg:max-w-[250px] md:max-w-[150px] sm:max-w-[120px]'>
                            <img className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-500' src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/feature_banner_image_3.jpg?1685438253758'></img>
                        </div>
                        <div className='lg:max-w-[250px] md:max-w-[150px] sm:max-w-[120px]'>
                            <img className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-500' src='https://bizweb.dktcdn.net/100/384/760/themes/761815/assets/feature_banner_image_4.jpg?1685438253758'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionMenu