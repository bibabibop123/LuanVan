const PaymentStatus = {
    "da_dat_hang":"da_dat_hang",
    "xac_nhan":"xac_nhan",
    "doi_thanh_toan":"doi_thanh_toan",
    "thanh_toan_thanh_cong":"thanh_toan_thanh_cong",
    "dang_van_chuyen":"dang_van_chuyen",
    "hoan_thanh":"hoan_thanh",
    "da_huy":"da_huy"
}
const PaymentMethod = {
    code:"cod",
    atm:"atm"
}
const paymentStatusConverString = (status)=>{
    switch (status) {
        case PaymentStatus.da_dat_hang:
            return 'Đã Đặt Hàng.'
        case PaymentStatus.xac_nhan:
            return 'Đã Xác Nhận.'
        case PaymentStatus.dang_van_chuyen:
            return 'Đang Vận Chuyển.'
        case PaymentStatus.doi_thanh_toan:
            return 'Đợi Thanh Toán.'
        case PaymentStatus.hoan_thanh:
            return 'Hoàn Thành.'
        case PaymentStatus.thanh_toan_thanh_cong:
            return 'Thanh Toán Thành Công.'
        case PaymentStatus.da_huy:
            return 'Đã Huỷ.'
        default:
            return 'Đã Đặt Hàng.'
    }
}
module.exports ={
    PaymentStatus,
    PaymentMethod,
    paymentStatusConverString
}