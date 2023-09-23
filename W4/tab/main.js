let link = document.getElementById('myframe');
console.log(link.src);
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('click', () => {
            switch (item.textContent) {
                case 'Dantri':
                    link.src = "https://dantri.com.vn/"
                    break;
            
                default:
                    break;
            }
            items.forEach((item) => {
                item.classList.remove('blue')
            })
            item.classList.add('blue')
        })
    })
})

// document.querySelector('.vnexpress').onclick = function() {
//     document.getElementsByTagName('iframe').style.src = "https://dantri.com.vn/"
// }