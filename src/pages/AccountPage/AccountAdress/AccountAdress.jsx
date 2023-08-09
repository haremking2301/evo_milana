/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDistricts, addWards, getAllAddress, getAllPlaceThunk, selectCity, selectDistrict, selectWard } from '../../../redux/reducers/addressSlice'
import evoMilanaApi from '../../../api/evoMilanaApi';
import { toast } from 'react-toastify';

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
    useEffect(() => {
        dispatch(getAllAddress({
            idUser: idUser,
        }))
    }, [])
    const [numberAddress, setNumberAddress] = useState(0)
    const changeAddress = function (e) {
        setNumberAddress(Number(e.target.value))
    }
    return (
        <div className='text-left'>
            <div className="lg:ml-[60px] mb-[20px]">
                <p className="text-[20px] font-medium text-left mb-[20px]">ĐỊA CHỈ NHẬN HÀNG CỦA BẠN</p>
                <div>
                    <select onChange={changeAddress} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="selectAddress">
                        {(allAddress.length !== 0)? allAddress.map((place, index) => (
                            <option key={place.id} id={place.id} value={index}>{`Địa chỉ ${index + 1}`}</option> 
                        )): <option>Chưa có địa chỉ nhận hàng</option>}
                    </select>
                </div>
                <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                    <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Tỉnh thành</div>
                    <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].city : '__'}</div>
                </div>
                <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                    <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Quận huyện</div>
                    <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].district : '__'}</div>
                </div>
                <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                    <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Phường xã</div>
                    <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].ward : '__'}</div>
                </div>
                <div className='relative mt-[15px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full'>
                    <div className='absolute top-[-11px] bg-white text-[14px] text-[#f2475f]'>Số nhà, tên đường</div>
                    <div className='h-[100%] flex items-center'>{(allAddress.length !== 0)? allAddress[numberAddress].address : '__'}</div>
                </div>
            </div>
            <div className="lg:ml-[60px]">
                <form onSubmit={handleSubmit}>
                    <p className="text-[18px] font-medium text-left">THÊM ĐỊA CHỈ MỚI</p>
                    <div className='my-[20px] flex flex-col'>
                        <select className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="city" onChange={handleSelectCity}>
                            <option value='Chọn tỉnh thành'>Chọn tỉnh thành</option>
                            {allPlace.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>
                                
                        <select className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="district" onChange={handleSelectDistrict}>
                            <option value="Chọn quận huyện">Chọn quận huyện</option>
                            {districts.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>

                        <select className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="ward" onChange={handleSelectWard}>
                            <option value="Chọn phường xã">Chọn phường xã</option>
                            {wards.map((place) => (
                                <option key={place.Id} id={place.Id} value={place.Name}>{place.Name}</option> 
                            ))}
                        </select>

                        <input className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' name="address" type="text" value={address} onChange={handleChangeAddress} placeholder='Nhập địa chỉ cụ thể. VD: 67 Nguyễn Đình Chiểu'></input>
                    </div>    
                    <button type='submit' className='text-center px-[20px] py-[7px] bg-[#f67e8f] cursor-pointer text-white rounded hover:opacity-80'>
                        Thêm địa chỉ
                    </button>
                    {/* <ToastContainer></ToastContainer> */}
                </form>
            </div>
        </div>
    )
}

export default AccountAdress