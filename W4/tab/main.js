// document.addEventListener("DOMContentLoaded", function() {
//     const items = document.querySelectorAll('.item')
//     items.forEach((item) => {
//         item.addEventListener('click', () => {
//             items.forEach((item) => {
//                 item.classList.remove('blue')
//             })
//             item.classList.add('blue')
//         })
//     })
// })
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const iframe = document.getElementById('myframe');

    const urls = {
        'VnExpress': 'https://vnexpress.net/',
        'Dantri': 'https://dantri.com.vn/',
        'VOANews': 'https://www.voanews.com/',
        'Zing': 'https://zingmp3.vn'
    };

    items.forEach((item) => {
        item.addEventListener('click', () => {
            items.forEach((item) => {
                item.classList.remove('blue');
            });
            item.classList.add('blue');
            const tabText = item.textContent.trim();
            iframe.src = urls[tabText];
        });
    });
});
