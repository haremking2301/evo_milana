import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'
import { FaLocationDot, FaMessage, FaPhoneVolume } from "react-icons/fa6";

function ContactPage() {
    useScrollToTop()
    return (
        <div>
            <div className='h-[40px] bg-[#f3f5f7]'></div>
            <div className='lg:max-w-[1150px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] px-[30px]'>
                <h2 className='font-semibold text-[24px] mb-[10px]'>GIỚI THIỆU</h2>
                <p>Được thành lập vào năm 2002 bởi một bộ đôi tín đồ thời trang, Evo Milana đã nhanh chóng trở thành một trong những công ty phân phối thời trang lớn nhất trong việc giới thiệu các thương hiệu thời trang cao cấp và sang trọng tại Việt Nam. Sau thành công ngoài mong đợi của cửa hàng đầu tiên, hiện Evo Milana đang là ngôi nhà chung của hơn 21 thương hiệu đình đám thế giới, thổi vào thị trường Việt Nam những giấc mơ thời trang bất tận.</p>
                <p className='mt-[20px] flex items-center'><FaLocationDot className='text-[20px] mr-4'></FaLocationDot>70 Lu Gia, Ward 15, District 11, Ho Chi Minh City</p>
                <p className='mt-[20px] flex items-center'><FaPhoneVolume className='text-[20px] mr-4'></FaPhoneVolume>0329003502</p>
                <p className='mt-[20px] flex items-center'><FaMessage className='text-[20px] mr-4'></FaMessage>devfullstack2301@gmail.com</p>
            </div>
            <div className='lg:max-w-[1150px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[20px] px-[30px] mb-[50px]'>
                <p className='text-[20px] font-semibold'>Để lại tin nhắn</p>
                <form className='max-w-[80%]'>
                    <p className='mt-[10px]'>Họ và tên<span className='text-red-700 text-[22px]'>*</span></p>
                    <input  className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập họ và tên'></input>
                    <p className='mt-[10px]'>Email<span className='text-red-700 text-[22px]'>*</span></p>
                    <input  className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập địa chỉ Email'></input>
                    <p className='mt-[10px]'>Số điện thoại<span className='text-red-700 text-[22px]'>*</span></p>
                    <input  className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập số điện thoại'></input>
                    <p className='mt-[10px]'>Nội dung<span className='text-red-700 text-[22px]'>*</span></p>
                    <input  className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='text' placeholder='Nhập nội dung liên hệ'></input>
                    <button type='submit' className='mt-[20px] w-full bg-[#f67e8f] transition-all ease-in-out hover:bg-[#f55469] text-white py-[10px] rounded-[4px]'>GỬI TIN NHẮN</button>
                </form>
            </div>

        </div>
    )
}

export default ContactPage