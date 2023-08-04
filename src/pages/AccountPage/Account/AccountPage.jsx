/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetailsThunk } from "../../../redux/reducers/getAllProducts"

function AccountPage() {
    const dispatch = useDispatch()
    const account = sessionStorage.getItem('isAccountActive')
    const detailsAccount = useSelector((state) => state.allProducts.detailsAccount)
    useEffect(() => {
        dispatch(getUserDetailsThunk({
            q: account
        }))
    }, [])
    return (
        <div className="lg:ml-[60px]">
            <p className="text-[20px] font-medium text-left mb-[30px]">THÔNG TIN TÀI KHOẢN</p>
            <div className="flex">
                <p className="font-semibold">Họ tên:</p>
                <p className="ml-[10px]">{(detailsAccount.length === 0)? '' : detailsAccount[0].fullName}</p>
            </div>
            <div className="flex">
                <p className="font-semibold">Email:</p>
                <p className="ml-[10px]">{(detailsAccount.length === 0)? '' : detailsAccount[0].email}</p>
            </div>
        </div>
    )
}

export default AccountPage