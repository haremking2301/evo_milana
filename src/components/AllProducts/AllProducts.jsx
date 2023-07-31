/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { BsExplicit } from 'react-icons/bs'
import { Pagination, Select, Space } from 'antd';
import '../../components/AllProducts/style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getItemsProductsThunk, pageNumberReducer } from '../../redux/reducers/getAllProducts';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routes';
import useScrollToTop from '../../hooks/useScrollToTop';


const handleChange = (value) => {
    console.log(`selected ${value}`);
};

function AllProducts() {
    useScrollToTop()
    // Lấy danh sách và render
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allProducts.dataItems)

    // Xử lý hover
    const handleHover = (e) => {
        const img2 = allProducts.map((product) => product.img2);
        e.target.src = img2[e.target.id]
    }
    const handleHoverOut = (e) => {
        const img1 = allProducts.map((product) => product.img1);
        e.target.src = img1[e.target.id]
    }

    // Xử lý page
    const pageNumber = useSelector((state) => state.allProducts.pageNumber)
    const totalPages = useSelector((state) => state.allProducts.totalPages)
    const [page, setPage] = useState({
        currentPage: pageNumber,
        limitPage: 15,
    })

    const handleChangePage = (number) => {
        dispatch(pageNumberReducer(number))
        setPage({
            ...page,
            currentPage: number
        })
    }

    useEffect(() => {
        dispatch(getItemsProductsThunk({
            _page: page.currentPage,
            _limit: page.limitPage
        }))
        window.scrollTo({
            top: 680,
            behavior: `smooth`
        })
    }, [page.currentPage])
    return (
        <div>
        <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] text-center'>
            <div>
                <p className='text-[23px] font-semibold'>TẤT CẢ SẢN PHẨM</p>
                <div className='relative'>
                    <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                    <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                </div>
                <p className='text-[14px]'>Cập nhật những xu hướng quốc tế nhanh nhất cho phái đẹp, thay đổi diện mạo của bạn một cách toàn diện. Một tủ quần áo từ Ted Baker, Oasis, Warehouse, Puma, Prada... mà các cô nàng ao ước sẽ khiến bạn trở nên hoàn hảo.</p>
            </div>
            <div className='flex flex-wrap justify-between mt-[20px] border-[1px] border-color-header py-[5px]'>
                <Space wrap>
                    <Select
                        defaultValue="Sắp xếp theo"
                        style={{
                            width: 160,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Tên A-Z',
                            label: 'Tên A-Z',
                            },
                            {
                            value: 'Tên Z-A',
                            label: 'Tên Z-A',
                            },
                            {
                            value: 'Hàng mới',
                            label: 'Hàng mới',
                            },
                            {
                            value: 'Giá tăng dần',
                            label: 'Giá tăng dần',
                            },
                            {
                            value: 'Giá giảm dần',
                            label: 'Giá giảm dần',
                            },
                        ]}
                    />
                </Space>
                <Space wrap>
                    <Select
                        defaultValue="Thương hiệu"
                        style={{
                            width: 160,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Evo Milana',
                            label: 'Evo Milana',
                            },
                            {
                            value: 'HAVAIANAS',
                            label: 'HAVAIANAS',
                            },
                            {
                            value: 'MLB',
                            label: 'MLB',
                            },
                            {
                            value: 'TED BAKER',
                            label: 'TED BAKER',
                            },
                            {
                            value: 'THE KOOPLES',
                            label: 'THE KOOPLES',
                            },
                            {
                            value: 'TOPSHOP',
                            label: 'TOPSHOP',
                            },
                        ]}
                    />
                </Space>
                <Space wrap>
                    <Select
                        defaultValue="Giá sản phẩm"
                        style={{
                            width: 160,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Giá dưới 300.000',
                            label: 'Giá dưới 300.000',
                            },
                            {
                            value: 'Giá dưới 500.000',
                            label: 'Giá dưới 500.000',
                            },
                            {
                            value: 'Giá dưới 1.000.000',
                            label: 'Giá dưới 1.000.000',
                            },
                            {
                            value: 'Giá trên 1.000.000',
                            label: 'Giá trên 1.000.000',
                            },
                        ]}
                    />
                </Space>
                <Space wrap>
                    <Select
                        defaultValue="Loại sản phẩm"
                        style={{
                            width: 160,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Áo',
                            label: 'Áo',
                            },
                            {
                            value: 'Croptop',
                            label: 'Croptop',
                            },
                            {
                            value: 'Dép',
                            label: 'Dép',
                            },
                            {
                            value: 'Giày Sandal',
                            label: 'Giày Sandal',
                            },
                            {
                            value: 'Guốc',
                            label: 'Guốc',
                            },
                            {
                            value: 'Túi xách',
                            label: 'Túi xách',
                            },
                            {
                            value: 'Ví',
                            label: 'Ví',
                            },
                        ]}
                    />
                </Space>
                <Space wrap>
                    <Select
                        defaultValue="Giới tính"
                        style={{
                            width: 160,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Nam',
                            label: 'Nam',
                            },
                            {
                            value: 'Nữ',
                            label: 'Nữ',
                            },
                        ]}
                    />
                </Space>
            </div>
        </div>
        <div className='flex flex-wrap lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto text-center relative mb-[30px]'>
            {allProducts.map(function(product, index) {
                return (
                    <div key={product.id} className='px-[10px] w-[208px] h-[400px] mt-[30px] relative lg:basis-1/5 md:basis-1/3 sm:basis-1/3 basis-1/2'>
                        {product.salePrice ? <div className='absolute right-[10px] w-[34px] h-[34px] bg-[#f20808] text-[15px] text-white text-center'>
                        <p className='my-[5px] sale-product'>{product.salePrice}%</p>
                        </div> : ''}
                        <Link to={`${APP_ROUTES.PRODUCT_DETAILS_PAGE}${product.id}`}>
                            <img onMouseOver={handleHover} onMouseOut={handleHoverOut} id={index} className='cursor-pointer transition-all ease-in-out duration-500 h-[70%] w-full object-cover' src={product.img1}></img>
                        </Link>
                        <span className='float-left text-[15px] text-[#f20808] mt-[10px] font-medium'>{(product.price > 999)? `${product.price}`.slice(0,1) + '.' + `${product.price}`.slice(1,4) : `${product.price}`}.000đ</span>
                        {product.defaultPrice ? <span className='float-left text-[15px] text-[#7a7a7a] mt-[10px] font-light ml-[15px] line-through'>{product.defaultPrice}đ</span> : ''}
                        <br></br>
                        <p className='text-left float-left mt-[2px] w-full cursor-pointer text-[14px]'>{product.title}</p>
                        {product.color1 ? <div className={`w-[24px] h-[24px] absolute bottom-[15px] border-[1px] border-[#7a7a7a] rounded-[5px]`} style={{ backgroundColor: `${product.color1}`}}></div> : ''}
                        {product.color2 ? <div className={`w-[24px] h-[24px] absolute bottom-[15px] left-8 border-[1px] border-[#7a7a7a] rounded-[5px] ml-[8px]`} style={{ backgroundColor: `${product.color2}`}}></div> : ''}
                        {product.color3 ? <div className={`w-[24px] h-[24px] absolute bottom-[15px] left-16 border-[1px] border-[#7a7a7a] rounded-[5px] ml-[8px]`} style={{ backgroundColor: `${product.color3}`}}></div> : ''}
                    </div>
                )
            })}
            <div className='mx-auto mt-[50px] w-full'>
                <Pagination
                    total={totalPages}
                    defaultCurrent={page.currentPage}
                    current={page.currentPage}
                    defaultPageSize={page.limitPage}
                    pageSize={page.limitPage}
                    onChange={handleChangePage}
                />
            </div>
        </div>
        </div>
    )
}

export default AllProducts