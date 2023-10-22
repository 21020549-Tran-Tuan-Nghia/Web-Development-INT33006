// sort theo ma san pham
let isDescId = false
function sortById() {
    if (isDescId == true) {
        table = document.getElementById('my-table')
        rows = table.rows
        for (let i = 1; i < rows.length - 1; i++) {
            for (let j = i + 1; j < rows.length; j++) {
                x = rows[i].getElementsByTagName('td')[1].innerHTML
                y = rows[j].getElementsByTagName('td')[1].innerHTML
                if (x.toLowerCase() < y.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
        // console.log(document.getElementsByClassName('sortcol')[0].classList.item(1));
        document.getElementsByClassName('sortcol')[0].classList.remove(document.getElementsByClassName('sortcol')[0].classList.item(1))
        document.getElementsByClassName('sortcol')[0].classList.add('desc')
        document.getElementsByClassName('sortcol')[1].classList.remove(document.getElementsByClassName('sortcol')[1].classList.item(1))
        document.getElementsByClassName('sortcol')[1].classList.add('normal')
        isDescId = false
    }
    else {
        table = document.getElementById('my-table')
        rows = table.rows
        for (let i = 1; i < rows.length - 1; i++) {
            for (let j = i + 1; j < rows.length; j++) {
                x = rows[i].getElementsByTagName('td')[1].innerHTML
                y = rows[j].getElementsByTagName('td')[1].innerHTML
                if (x.toLowerCase() > y.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
        // console.log(document.getElementsByClassName('sortcol')[0].classList.item(1));
        document.getElementsByClassName('sortcol')[0].classList.remove(document.getElementsByClassName('sortcol')[0].classList.item(1))
        document.getElementsByClassName('sortcol')[0].classList.add('asc')
        document.getElementsByClassName('sortcol')[1].classList.remove(document.getElementsByClassName('sortcol')[1].classList.item(1))
        document.getElementsByClassName('sortcol')[1].classList.add('normal')
        isDescId = true
    }
}
table = document.getElementById('my-table')
table.rows[0].cells[1].onclick = function() {
    sortById()
}

//sort theo ten san pham
let isDesName = false
function sortByName() {
    if (isDesName == true) {
        table = document.getElementById('my-table')
        rows = table.rows
        for (let i = 1; i < rows.length - 1; i++) {
            for (let j = i + 1; j < rows.length; j++) {
                x = rows[i].getElementsByTagName('td')[2].innerHTML
                y = rows[j].getElementsByTagName('td')[2].innerHTML
                if (x[0].toLowerCase() < y[0].toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
        document.getElementsByClassName('sortcol')[1].classList.remove(document.getElementsByClassName('sortcol')[1].classList.item(1))
        document.getElementsByClassName('sortcol')[1].classList.add('desc')
        document.getElementsByClassName('sortcol')[0].classList.remove(document.getElementsByClassName('sortcol')[0].classList.item(1))
        document.getElementsByClassName('sortcol')[0].classList.add('normal')
        isDesName = false
    }
    else {
        table = document.getElementById('my-table')
        rows = table.rows
        for (let i = 1; i < rows.length - 1; i++) {
            for (let j = i + 1; j < rows.length; j++) {
                x = rows[i].getElementsByTagName('td')[2].innerHTML
                y = rows[j].getElementsByTagName('td')[2].innerHTML
                if (x[0].toLowerCase() > y[0].toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
        document.getElementsByClassName('sortcol')[1].classList.remove(document.getElementsByClassName('sortcol')[1].classList.item(1))
        document.getElementsByClassName('sortcol')[1].classList.add('asc')
        document.getElementsByClassName('sortcol')[0].classList.remove(document.getElementsByClassName('sortcol')[0].classList.item(1))
        document.getElementsByClassName('sortcol')[0].classList.add('normal')
        isDesName = true
    }
}
table.rows[0].cells[2].onclick = function() {
    sortByName()
}
