const listAddress = require('./../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json');
const PaymentStatus = {
    "da_dat_hang":"da_dat_hang",
    "xac_nhan":"xac_nhan",
    "doi_thanh_toan":"doi_thanh_toan",
    "thanh_toan_paypal":"thanh_toan_paypal",
    "thanh_toan_qr":"thanh_toan_qr",
    "thanh_toan_thanh_cong":"thanh_toan_thanh_cong",
    "doi_van_chuyen":"doi_van_chuyen",
    "huy_van_chuyen":"huy_van_chuyen",
    "dang_van_chuyen":"dang_van_chuyen",
    "hoan_thanh":"hoan_thanh",
    "da_huy":"da_huy"
}
const PaymentMethod = {
    code:"cod",
    atm:"atm",
    paypal:"paypal",
}
const paymentStatusConverString = (status)=>{
    switch (status) {
        case PaymentStatus.da_dat_hang:
            return 'Nhận hàng thanh toán'
        case PaymentStatus.xac_nhan:
            return 'Đã Xác Nhận.'
        case PaymentStatus.dang_van_chuyen:
            return 'Đang Vận Chuyển.'
        case PaymentStatus.doi_van_chuyen:
            return 'Đợi vận chuyển.'
        case PaymentStatus.huy_van_chuyen:
            return 'Hủy vận chuyển.'
        case PaymentStatus.doi_thanh_toan:
            return 'Đợi Thanh Toán.'
        case PaymentStatus.hoan_thanh:
            return 'Hoàn Thành.'
        case PaymentStatus.thanh_toan_thanh_cong:
            return 'Thanh Toán Thành Công.'
        case PaymentStatus.thanh_toan_paypal:
            return 'Thanh Toán bằng Paypal'
        case PaymentStatus.thanh_toan_qr:
            return 'Thanh Toán bằng QR'
        case PaymentStatus.da_huy:
            return 'Đã Huỷ.'
        default:
            return 'Đã Đặt Hàng.'
    }
}
const listCityData = ()=>{
    const listCity = [];
    listAddress.forEach((address)=>{
        listCity.push(address);
    })
    return listCity;
}
const listDistrictData = ()=>{
    const listDistrict = [];
    listAddress.forEach((address)=>{
        address.Districts.forEach((ad)=>{
            listDistrict.push(ad);
            
        })
    })
    return listDistrict;
}

const listWardsData = ()=>{
    const listWards = [];
    listAddress.forEach((address)=>{
        address.Districts.forEach((ad)=>{
            ad.Wards.forEach((ward)=>{
                listWards.push(ward);
            })
            
        })
    })
    return listWards;
}
module.exports ={
    PaymentStatus,
    PaymentMethod,
    paymentStatusConverString,
    listCityData,
    listDistrictData,
    listWardsData,
}