document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".function-item");
    const answer = document.querySelector('.response')

    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((item) => {
                item.classList.remove("blue");
            });

            item.classList.add("blue");
            console.log(item.innerHTML);
            answer.textContent = item.textContent
        });
    });
});

