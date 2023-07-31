/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsNewsThunk } from '../../redux/reducers/getAllProducts'
import '../News/style.scss'
import { BsExplicit } from 'react-icons/bs'

function News() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItemsNewsThunk())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    const news = useSelector((state) => state.allProducts.dataNews)
    return (
        <div className='flex flex-wrap lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto relative mb-[50px]'>
            <div className='w-full text-center my-[50px]'>
                <p className='text-[23px] font-semibold'>TIN TỨC THỜI TRANG</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px] w-[70%] mx-auto'>Cập nhật xu hướng làm đẹp và thời trang nóng hổi nhất, đọc vị style của người nổi tiếng, tất cả những gì "hot hit" nhất về làm đẹp và thời trang mà bạn cần biết.</p>
            </div>
            {news.map((item) => (
            <div key={item.id} className='mb-[30px] basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 flex flex-col px-[10px] max-w-[33%]'>
                <img src={item.img} className='w-full'></img>
                <p className='truncate font-semibold cursor-pointer'>{item.title}</p>
                <p className='text-[14px] text-zinc-500 my-[5px]'>{item.time}</p>
                <p className='text-sub-over h-[70px]'>{item.description}</p>
            </div>))}
        </div>
    )
}

export default News