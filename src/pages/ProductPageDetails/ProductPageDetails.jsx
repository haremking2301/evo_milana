/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getItemsDetailsThunk,} from "../../redux/reducers/getAllProducts";
import { InputNumber, Skeleton } from "antd";
import useScrollToTop from "../../hooks/useScrollToTop";
import "../ProductPageDetails/style.scss";
import { BsExplicit } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { addProductReducer } from "../../redux/reducers/cartSlice";

function ProductPageDetails() {
    useScrollToTop();
  // Xử lý thêm vào giỏ hàng

    const handleAddCart = () => {
    if (color !== "" && size !== "") {
		dispatch(
			addProductReducer({
				id: `${id}${size}${color}`,
				img: `${dataDetails.img1}`,
				title: `${dataDetails.title}`,
				color: color,
				size: size,
				quantity: quantity,
				price: `${dataDetails.price}`,
			})
		);
        toast.success("Đã cập nhật giỏ hàng", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
    toast.warn("Vui lòng chọn màu sắc và size", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }
};
  // Xử lý chọn màu và size và số lượng sp
    const [color, setColor] = useState("");
	const handleChangeColor = function (e) {
    setColor(e.target.value);
	};
	const [size, setSize] = useState("");
	const handleChangeSize = function (e) {
    setSize(e.target.value);
};
	const [quantity, setQuantity] = useState(1);
	const handleChangeCount = function (value) {
    setQuantity(value);
};
  // Xử lý dữ liệu detail
	const dispatch = useDispatch();
	const { id } = useParams();
	const dataDetails = useSelector((state) => state.allProducts.dataDetails);
	const isLoadingDetails = useSelector(
    (state) => state.allProducts.isLoadingDetails
);
useEffect(() => {
    dispatch(getItemsDetailsThunk(id.slice(3)));
}, []);

	return (
    <div>
    <div className="lg:max-w-[1100px] md:max-w-[700px] sm:max-w-[520px] mx-auto mt-[30px] text-center">
        <p className="text-[23px] font-semibold">CHI TIẾT MUA HÀNG</p>
        <div className="relative">
        <BsExplicit className="mx-auto my-[10px] text-[24px]"></BsExplicit>
        <span className="absolute top-3 left-[52%] border-solid border-[1px] w-[70px] border-slate-300"></span>
        <span className="absolute top-3 right-[52%] border-solid border-[1px] w-[70px] border-slate-300"></span>
        </div>
        <p className="text-[14px]">
        Lời đầu tiên, EvoMilana xin gửi lời cám ơn chân thành và sâu sắc nhất
        đến Quý khách hàng đã tin tưởng lựa chọn và sử dụng dịch vụ của chúng
        tôi trong thời gian vừa qua. Đây là một món quà vô giá đối với chúng
        tôi. Nhờ sự tin tưởng của Quý khách hàng mà chúng tôi có được sự thành
        công như ngày hôm nay.
        </p>
    </div>
    <div>
        {isLoadingDetails ? <Skeleton active className="my-[100px]" /> : <></>}
        {!isLoadingDetails && (
        <div className="flex justify-around flex-wrap lg:max-w-[1120px] md:max-w-[720px] sm:max-w-[540px] mx-auto text-center relative my-[50px]">
            <div className="lg:basis-1/2 md:basis-1/2 sm:basis-full basis-full">
            <img
                className="max-w-[100%] mx-auto"
                src={dataDetails.img1}
            ></img>
            </div>
            <div className="lg:basis-1/2 md:basis-1/2 sm:basis-full basis-full mt-[30px] lg:mt-0 md:mt-0">
            <div className="ml-[20px]">
                <p className="text-left mt-[2px] w-full cursor-pointer text-[20px]">
                {dataDetails.title}
                </p>
                {dataDetails.salePrice ? (
                <div className="absolute right-[200px] lg:right-[300px] md:right-[150px]  w-[34px] h-[34px] bg-[#f20808] text-[15px] text-white text-center">
                    <p className="my-[5px] sale-product">
                    {dataDetails.salePrice}%
                    </p>
                </div>
                ) : (
                ""
                )}
                <span className="float-left text-[15px] text-[#f20808] mt-[10px] font-medium">
                {dataDetails.price > 999
                    ? `${dataDetails.price}`.slice(0, 1) +
                    "." +
                    `${dataDetails.price}`.slice(1, 4)
                    : `${dataDetails.price}`}
                .000đ
                </span>
                {dataDetails.defaultPrice ? (
                <span className="float-left text-[15px] text-[#7a7a7a] mt-[10px] font-light ml-[15px] line-through">
                    {dataDetails.defaultPrice}đ
                </span>
                ) : (
                ""
                )}
            </div>
            <div className="mt-[50px] text-left ml-[20px]">
                <p>Màu sắc</p>
                <div className="mt-[20px]">
                <form className="mt-[10px] flex flex-wrap">
                    {dataDetails.color1 && (
                    <div className="w-[30px] h-[30px] relative">
                        <input
                        onChange={handleChangeColor}
                        value={dataDetails.color1}
                        className="input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                        ></input>
                        <div
                        className="w-[30px] h-[30px] border-[2px] border-solid rounded-[5px]"
                        style={{ backgroundColor: `${dataDetails.color1}` }}
                        ></div>
                    </div>
                    )}
                    {dataDetails.color2 && (
                    <div className="w-[30px] h-[30px] relative ml-[10px]">
                        <input
                        onChange={handleChangeColor}
                        value={dataDetails.color2}
                        className="input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                        ></input>
                        <div
                        className="w-[30px] h-[30px] border-[2px] border-solid rounded-[5px]"
                        style={{ backgroundColor: `${dataDetails.color2}` }}
                        ></div>
                    </div>
                    )}
                    {dataDetails.color3 && (
                    <div className="w-[30px] h-[30px] relative ml-[10px]">
                        <input
                        onChange={handleChangeColor}
                        value={dataDetails.color3}
                        className="input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                        ></input>
                        <div
                        className="w-[30px] h-[30px] border-[2px] border-solid rounded-[5px]"
                        style={{ backgroundColor: `${dataDetails.color3}` }}
                        ></div>
                    </div>
                    )}
                </form>
                </div>
                <p className="mt-[20px]">Size</p>
                <div className="mt-[20px]">
                <form className="mt-[10px] flex flex-wrap">
                    <div className="w-[30px] h-[30px] relative">
                    <input
                        onChange={handleChangeSize}
                        value="S"
                        className="inputSize input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                    ></input>
                    <div className="w-[30px] h-[30px] border-[1px] border-solid rounded-[5px] text-center text-[13px] flex items-center justify-center">
                        S
                    </div>
                    </div>
                    <div className="w-[30px] h-[30px] relative ml-[10px]">
                    <input
                        onChange={handleChangeSize}
                        value="M"
                        className="inputSize input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                    ></input>
                    <div className="w-[30px] h-[30px] border-[1px] border-solid rounded-[5px] text-center text-[13px] flex items-center justify-center">
                        M
                    </div>
                    </div>
                    <div className="w-[30px] h-[30px] relative ml-[10px]">
                    <input
                        onChange={handleChangeSize}
                        value="L"
                        className="inputSize input-check absolute h-full w-full cursor-pointer z-10 opacity-0"
                        type="radio"
                        name="type"
                    ></input>
                    <div className="w-[30px] h-[30px] border-[1px] border-solid rounded-[5px] text-center text-[13px] flex items-center justify-center">
                        L
                    </div>
                    </div>
                </form>
                </div>
                <p className="mt-[20px]">Số lượng</p>
                <InputNumber
                className="mt-[20px]"
                min={1}
                max={99}
                defaultValue={1}
                onChange={handleChangeCount}
                />
                <br></br>
                <button
                onClick={handleAddCart}
                className="mt-[20px] bg-black text-[16px] text-center text-white hover:bg-[#f67e8f] px-[30px] py-[5px] transition-all ease-in-out duration-200"
                >
                Thêm vào giỏ
                </button>
                <ToastContainer></ToastContainer>
            </div>
            </div>
        </div>
        )}
    </div>
    </div>
);
}

export default ProductPageDetails;
