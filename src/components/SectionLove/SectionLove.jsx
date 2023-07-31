import React, { useEffect, useRef, useState } from 'react'
import { BsExplicit } from 'react-icons/bs'
import '../../components/SectionLove/style.scss'

function SectionLove() {
    const [ productType, setProductType ] = useState('dresses')
    const handleChange = (e) => {
        setProductType(e.target.value)
    }

    useEffect(() => {

    }, [productType])

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.checked = true
    },[])
    return (
        <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] mb-[50px] text-center'>
            <div>
                <p className='text-[23px] font-semibold'>ĐƯỢC YÊU THÍCH NHẤT</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px]'>Danh sách sản phẩm thời trang bán chạy, sản phẩm thời trang hot trong bộ sưu tập thời trang Evo Milana.</p>
            </div>
            <form className='mt-[10px] flex flex-wrap justify-evenly'>
                <div className='relative mt-[20px]'>
                    <input ref={inputRef} onChange={handleChange} value={'dresses'} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[10px] py-[5px] font-semibold'>TRANG PHỤC</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={2} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[20px] py-[5px] font-semibold'>GIÀY DÉP</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={3} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[35px] py-[5px] font-semibold'>TÚI VÍ</label>
                </div>
                <div className='relative mt-[20px]'>
                    <input onChange={handleChange} value={4} className='input-check absolute h-full w-full cursor-pointer z-10 opacity-0' type='radio' name='type'></input>
                    <label className='transition-all ease-in-out duration-300 box-shadow-z rounded-sm border-solid border-[2px] border-[#7c87a0] px-[20px] py-[5px] font-semibold'>MẮT KÍNH</label>
                </div>
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default SectionLove