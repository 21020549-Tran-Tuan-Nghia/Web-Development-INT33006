var chks = document.getElementsByName("chk");
for (let i = 0; i < chks.length; i++)
    chks[i].onchange = function () {
        if (this.checked) {
            this.parentNode.parentNode.classList.add("selected");
            let c = document.getElementsByName("chk");
            let j = 0;
            for (; j < c.length; j++)
                if (!c[j].checked) break;
            if (j == c.length) document.getElementById("chkall").checked = true;
            else document.getElementById("chkall").checked = false;
            document.getElementById("delete").classList.remove("no-display");
        } else {
            this.parentNode.parentNode.classList.remove("selectedr");
            document.getElementById("chkall").checked = false;
            let c = document.getElementsByName("chk");
            let j = 0;
            for (; j < c.length; j++)
                if (c[j].checked) break;
            if (j == c.length) document.querySelector("delete").classList.add("no-display");
            else document.querySelector("delete").classList.remove("no-display");

        }
    };

document.getElementById('chkall').onchange = function () {
    let c = document.getElementsByName("chk");
    for (let i = 0; i < c.length; i++) {
        c[i].checked = this.checked;
        if (c[i].checked) c[i].parentNode.parentNode.classList.add("selected");
        else c[i].parentNode.parentNode.classList.remove("selected");
    }
    if (this.checked) document.getElementById("delete").classList.remove("no-display");
    else document.getElementById("delete").classList.add("no-display");
}

document.getElementById('remove').onclick = function () {
    let c = document.getElementsByName("chk");
    console.log(c);
    for (let i = c.length - 1; i >= 0; i--)
        if (c[i].checked) {
            c[i].parentNode.parentNode.parentNode.removeChild(c[i].parentNode.parentNode);
        }
}