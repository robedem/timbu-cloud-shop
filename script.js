// document.addEventListener('DOMContentLoaded', () => {
//     const updateSubtotal = (row) => {
//         const quantityInput = row.querySelector('.quantity input');
//         const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
//         const subtotal = row.querySelector('.subtotal');
//         subtotal.textContent = `$${(price * quantityInput.value).toFixed(2)}`;
//     };

//     const updateTotal = () => {
//         let total = 0;
//         document.querySelectorAll('.subtotal').forEach(subtotal => {
//             total += parseFloat(subtotal.textContent.replace('$', ''));
//         });
//         document.querySelector('.total').textContent = `$${total.toFixed(2)}`;
//     };

//     document.querySelectorAll('.quantity-btn').forEach(button => {
//         button.addEventListener('click', (event) => {
//             const isIncrement = event.target.textContent === '+';
//             const quantityInput = event.target.parentNode.querySelector('input');
//             if (isIncrement) {
//                 quantityInput.value = parseInt(quantityInput.value) + 1;
//             } else {
//                 quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
//             }
//             updateSubtotal(event.target.closest('tr'));
//             updateTotal();
//         });
//     });

//     document.querySelectorAll('.quantity input').forEach(input => {
//         input.addEventListener('change', (event) => {
//             event.target.value = Math.max(1, event.target.value);
//             updateSubtotal(event.target.closest('tr'));
//             updateTotal();
//         });
//     });

//     document.querySelectorAll('.remove-product').forEach(button => {
//         button.addEventListener('click', (event) => {
//             event.target.closest('tr').remove();
//             updateTotal();
//         });
//     });

//     updateTotal();
// });
