/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import evoMilanaApi from '../../../api/evoMilanaApi'

function AccountPassword() {
    const schema = yup.object().shape({
        oldPassword: yup.string().min(4, 'Mật khẩu phải lớn hơn 4 ký tự'),
        newPassword: yup.string().min(4, 'Mật khẩu phải lớn hơn 4 ký tự'),
        confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Mật khẩu không trùng khớp").required("Mật khẩu không trùng khớp")
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const detailsAccount = useSelector((state) => state.allProducts.detailsAccount)

    const handleChangePassword = async function(data) {
        if (data.oldPassword === detailsAccount[0].password) {
            await evoMilanaApi.changePasswordRegister(data.newPassword, detailsAccount[0].id)
            toast.success("Đổi mật khẩu thành công", {
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
            toast.warn("Mật khẩu không chính xác", {
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
    }
    return (
        <div className="lg:ml-[60px]">
            <p className="text-[20px] font-medium text-left mb-[30px]">ĐỔI MẬT KHẨU</p>
            <p className='text-left mb-[15px]'>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự</p>
            <form onSubmit={handleSubmit(handleChangePassword)} className='max-w-[90%] text-left'>
                    <p className='mt-[10px]'>Mật khẩu cũ<span className='text-red-700 text-[22px]'>*</span><span className='text-[14px] text-red-700 ml-3'>{errors.oldPassword?.message}</span></p>
                    <input {...register('oldPassword')} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='password' placeholder='Nhập mật khẩu cũ'></input>
                    <p className='mt-[10px]'>Mật khẩu mới<span className='text-red-700 text-[22px]'>*</span><span className='text-[14px] text-red-700 ml-3'>{errors.newPassword?.message}</span></p>
                    <input {...register('newPassword')} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='password' placeholder='Nhập mật khẩu mới'></input>
                    <p className='mt-[10px]'>Xác nhận lại mật khẩu<span className='text-red-700 text-[22px]'>*</span><span className='text-[14px] text-red-700 ml-3'>{errors.confirmPassword?.message}</span></p>
                    <input {...register('confirmPassword')} className='mt-[10px] h-[40px] px-[15px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] outline-none w-full' type='password' placeholder='Xác nhận lại mật khẩu'></input>
                    <button type='submit' className='float-left px-[20px] py-[7px] bg-[#f67e8f] cursor-pointer text-white rounded hover:opacity-80 mt-[20px]'>
                        Đặt lại mật khẩu
                    </button>
                    {/* <ToastContainer></ToastContainer> */}
            </form>
        </div>
    )
}

export default AccountPassword