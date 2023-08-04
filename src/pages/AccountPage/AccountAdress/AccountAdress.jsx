/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDistricts, addWards, getAllAddress, getAllPlaceThunk, selectCity, selectDistrict, selectWard } from '../../../redux/reducers/addressSlice'
import evoMilanaApi from '../../../api/evoMilanaApi';
import { ToastContainer, toast } from 'react-toastify';

function AccountAdress() {
    const idUser = useSelector((state) => (state.allProducts.idUser))
    // Xử lý chọn địa chỉ 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPlaceThunk())
    }, [])
    const allPlace = useSelector((state) => state.allPlace.allLocal)
    const districts = useSelector((state) => state.allPlace.districts)
    const wards = useSelector((state) => state.allPlace.wards)

    const citySelect = useSelector((state) => state.allPlace.citySelect)
    const districtSelect = useSelector((state) => state.allPlace.districtSelect)
    const wardSelect = useSelector((state) => state.allPlace.wardSelect)
    
    const handleSelectCity = function(e) {
        if ( e.target.value === 'Chọn tỉnh thành') {
            dispatch(addDistricts('Chọn tỉnh thành'))
            dispatch(selectCity('Chọn tỉnh thành'))
        } else {
            const dataDistricts = allPlace.filter( place => place.Name === e.target.value);
            dispatch(addDistricts(dataDistricts))
            dispatch(selectCity(e.target.value))
        }
    }
    const handleSelectDistrict = function(e) {
        if ( e.target.value === 'Chọn quận huyện') {
            dispatch(addWards('Chọn quận huyện'))
            dispatch(selectDistrict('Chọn quận huyện'))
        } else {
            const dataWards = districts.filter( place => place.Name === e.target.value);
            dispatch(addWards(dataWards))
            dispatch(selectDistrict(e.target.value))
        }
    }
    const handleSelectWard = function(e) {
        if ( e.target.value === "Chọn phường xã") {
            dispatch(selectWard("Chọn phường xã"))
        } else {
            dispatch(selectWard(e.target.value))
        }
    }
    const [address, setAdress] = useState('')
    const handleChangeAddress = function(e) {
        setAdress(e.target.value)
    }
    const handleSubmit = async function(e) {
        e.preventDefault()
        if (address === '' || citySelect === '' || districtSelect === '' || wardSelect === '') {
            toast.warn("Vui lòng nhập đầy đủ thông tin địa chỉ", {
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
            await evoMilanaApi.postDataAddress({
                idUser: idUser,
                city: citySelect,
                district: districtSelect,
                ward: wardSelect,
                address: address,
            })
            toast.success("Thêm địa chỉ thành công", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setAdress('')
            dispatch(getAllAddress({
                idUser: idUser,
            }))
        }
    }
    // Xử lý render địa chỉ
    const allAddress = useSelector((state) => state.allPlace.allAddress)
    console.log(allAddress);
    useEffect(() => {
        dispatch(getAllAddress({
            idUser: idUser,
        }))
    }, [])
    return (
        <div className='text-left'>
            <div className="lg:ml-[60px]">
                <p className="text-[20px] font-medium text-left mb-[30px]">ĐỊA CHỈ NHẬN HÀNG CỦA BẠN</p>
            </div>
            <div className="lg:ml-[60px]">
                <form onSubmit={handleSubmit}>
                    <p className="text-[18px] font-medium text-left">THÊM ĐỊA CHỈ MỚI</p>
                    <div className='my-[20px] flex flex-col'>
                        <select className='py-[7px] outline-none border-[1px] border-[#e6a7af] rounded-md' name="city" onChange={handleSelectCity}>
                            <option value='Chọn tỉnh thành'>Chọn tỉnh thành</option>
                            {allPlace.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>
                                
                        <select className='py-[7px] outline-none border-[1px] border-[#e6a7af] rounded-md mt-[15px]' name="district" onChange={handleSelectDistrict}>
                            <option value="Chọn quận huyện">Chọn quận huyện</option>
                            {districts.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>

                        <select className='py-[7px] outline-none border-[1px] border-[#e6a7af] rounded-md mt-[15px]' name="ward" onChange={handleSelectWard}>
                            <option value="Chọn phường xã">Chọn phường xã</option>
                            {wards.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>

                        <input className='py-[5px] px-[5px] outline-none border-[1px] border-[#e6a7af] rounded-md mt-[15px]' name="address" type="text" value={address} onChange={handleChangeAddress} placeholder='Nhập địa chỉ cụ thể. VD: 67 Nguyễn Đình Chiểu'></input>
                    </div>    
                    <button type='submit' className='text-center px-[20px] py-[7px] bg-[#f67e8f] cursor-pointer text-white rounded hover:opacity-80'>
                        Thêm địa chỉ
                    </button>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    )
}

export default AccountAdress