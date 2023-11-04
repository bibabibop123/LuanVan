// // const cartData = require('../../app/controllers/PaymentController');

// paypal.Buttons({
//     createOrder: function(data, actions) {
//         return actions.order.create({
//             purchase_units: [{
//                 amount: {
//                     value: "" // Số tiền thanh toán
//                 }
//             }]
//         });
//     },
//     onApprove: function(data, actions) {
//         return actions.order.capture().then(function(details) {
//             // Xử lý khi thanh toán được phê duyệt
//             console.log(details);
//             console.log('Items in the cart:', cartData.items);
//         });
//     }
// }).render('#paypal-button-container');