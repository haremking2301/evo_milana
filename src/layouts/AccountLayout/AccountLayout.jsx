/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsThunk } from "../../redux/reducers/getAllProducts";

const AccountLayout = () => {
    useScrollToTop();
    // Xử lý login
    const navigate = useNavigate();
    const isAccountActive = sessionStorage.getItem("isAccountActive");
    useEffect(() => {
        if (isAccountActive !== null) {
        } else {
        navigate(APP_ROUTES.HOME_PAGE);
        }
    }, []);
    const handleLogout = function (e) {
        sessionStorage.removeItem("isAccountActive");
    navigate(APP_ROUTES.HOME_PAGE);
    };

    const dispatch = useDispatch()
    const account = sessionStorage.getItem('isAccountActive')
    const detailsAccount = useSelector((state) => state.allProducts.detailsAccount)
    useEffect(() => {
        dispatch(getUserDetailsThunk({
            q: account
        }))
    }, [])

    return (
    <div>
        <div className="h-[40px] bg-[#f3f5f7]"></div>
        <div className="flex flex-wrap lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto relative mt-[30px] mb-[50px] px-[20px]">
            <div className="flex flex-col lg:basis-1/5 basis-full">
                <p className="text-[20px] font-medium">TRANG TÀI KHOẢN</p>
                <p className="mb-[30px]">Xin chào, {(detailsAccount.length === 0)? '' : detailsAccount[0].fullName}!</p>
                <ul>
                    <li className="mb-[10px] cursor-pointer hover:text-color-header">
                        <Link to={APP_ROUTES.ACCOUNT_PAGE}>
                            Thông tin tài khoản
                        </Link>
                    </li>
                    <li className="mb-[10px] cursor-pointer hover:text-color-header">
                        <Link to={APP_ROUTES.ACCOUNT_ORDER_PAGE}>
                            Đơn hàng của bạn
                        </Link>
                    </li>
                    <li className="mb-[10px] cursor-pointer hover:text-color-header">
                        <Link to={APP_ROUTES.ACCOUNT_ADRESS_PAGE}>
                            Sổ địa chỉ
                        </Link>
                    </li>
                    <li className="mb-[10px] cursor-pointer hover:text-color-header">
                        <Link to={APP_ROUTES.ACCOUNT_PASSWORD_PAGE}>
                            Đổi mật khẩu
                        </Link>
                    </li>
                    <li
                        onClick={handleLogout}
                        className="mb-[10px] cursor-pointer hover:text-color-header"
                    >
                            Đăng xuất
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:basis-4/5 basis-full lg:text-center">
                <Outlet />
            </div>
        </div>
    </div>
);
};

export default AccountLayout;
