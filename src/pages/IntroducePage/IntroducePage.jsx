import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'

function IntroducePage() {
    useScrollToTop()
    return (
        <div className='lg:max-w-[1150px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] mb-[50px]'>
            <h2 className='font-semibold text-[24px] mb-[10px]'>GIỚI THIỆU</h2>
            <p>Được thành lập vào năm 2002 bởi một bộ đôi tín đồ thời trang, Evo Milana đã nhanh chóng trở thành một trong những công ty phân phối thời trang lớn nhất trong việc giới thiệu các thương hiệu thời trang cao cấp và sang trọng tại Việt Nam. Sau thành công ngoài mong đợi của cửa hàng đầu tiên, hiện Evo Milana đang là ngôi nhà chung của hơn 21 thương hiệu đình đám thế giới, thổi vào thị trường Việt Nam những giấc mơ thời trang bất tận.</p>
        </div>
    )
}

export default IntroducePage