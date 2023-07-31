/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import { BsExplicit } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'
import useScrollToTop from '../../hooks/useScrollToTop'
import { getItemsProductsSearchThunk, pageNumberSearchReducer } from '../../redux/reducers/getAllProducts'

function SearchProduct() {
    useScrollToTop()
    // Lấy danh sách và render
    const dispatch = useDispatch()
    const allProductsSearch = useSelector((state) => state.allProducts.dataItemsSearch)

    // Xử lý hover

    // Xử lý page
    const pageNumber = useSelector((state) => state.allProducts.pageNumberSearch)
    const totalPages = useSelector((state) => state.allProducts.totalPagesSearch)
    const [page, setPage] = useState({
        currentPage: pageNumber,
        limitPage: 15,
    })

    const handleChangePage = (number) => {
        dispatch(pageNumberSearchReducer(number))
        setPage({
            ...page,
            currentPage: number
        })
    }

    const search = useSelector((state) => state.allProducts.search)
    useEffect(() => {
        dispatch(getItemsProductsSearchThunk({
            _page: page.currentPage,
            _limit: page.limitPage,
            q: search
        }))
        window.scrollTo({
            top: 680,
            behavior: `smooth`
        })
    }, [page.currentPage])

    useEffect(() => {
        dispatch(getItemsProductsSearchThunk({
            _page: page.currentPage,
            _limit: page.limitPage,
            q: search
        }))
        window.scrollTo({
            top: 680,
            behavior: `smooth`
        })
    }, [search])
    return (
        <div>
            <img src={ require('../../source/img/bannerProduct.png') }></img>
            <div className='lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[50px] text-center'>
                <div>
                    <p className='text-[23px] font-semibold'>KẾT QUẢ TÌM KIẾM PHÙ HỢP</p>
                    <div className='relative'>
                        <BsExplicit className='mx-auto my-[10px] text-[24px]'></BsExplicit>
                        <span className='absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                        <span className='absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300'></span>
                    </div>
                    <p className='text-[14px]'>Cập nhật những xu hướng quốc tế nhanh nhất cho phái đẹp, thay đổi diện mạo của bạn một cách toàn diện. Một tủ quần áo từ Ted Baker, Oasis, Warehouse, Puma, Prada... mà các cô nàng ao ước sẽ khiến bạn trở nên hoàn hảo.</p>
                </div>
            </div>
            <div className='flex flex-wrap lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto text-center relative mb-[30px]'>
            {allProductsSearch.map(function(product, index) {
                return (
                    <div key={product.id} className='px-[10px] w-[208px] h-[400px] mt-[30px] relative lg:basis-1/5 md:basis-1/3 sm:basis-1/3 basis-1/2'>
                        {product.salePrice ? <div className='absolute right-[10px] w-[34px] h-[34px] bg-[#f20808] text-[15px] text-white text-center'>
                        <p className='my-[5px] sale-product'>{product.salePrice}%</p>
                        </div> : ''}
                        <Link to={`${APP_ROUTES.PRODUCT_DETAILS_PAGE}${product.id}`}>
                            <img id={index} className='cursor-pointer transition-all ease-in-out duration-500 h-[70%] w-full object-cover' src={product.img1}></img>
                        </Link>
                        <span className='float-left text-[15px] text-[#f20808] mt-[10px] font-medium'>{product.price}đ</span>
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

export default SearchProduct