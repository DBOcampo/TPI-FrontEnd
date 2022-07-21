
var gul;
var gct;


function enableEdit(id) {

    let abtme = document.getElementById("abtme")
    let age = document.getElementById("age")
    let btnedit = document.getElementById(id)
    let ubi = document.getElementById("ubi")
    let infoContent = [abtme, age, ubi];

    if (btnedit.innerHTML === "Save") {
        btnedit.innerHTML = "Edit";

        for (i = 0; i < infoContent.length; i++) {
            infoContent[i].setAttribute("contenteditable", false);
            infoContent[i].style.removeProperty("border");
            infoContent[i].style.removeProperty("borderRadius");
            infoContent[i].style.removeProperty("display");
        }

        btnedit.classList.replace("btn-success", "btn-primary");
    }
    else {
        btnedit.innerHTML = "Save";

        for (i = 0; i < infoContent.length; i++) {
            infoContent[i].setAttribute("contenteditable", true);
            infoContent[i].style.border = "1px solid";
            infoContent[i].style.borderRadius = "6px";
            infoContent[i].style.display = "inline-block";
        }

        btnedit.classList.replace("btn-primary", "btn-success");
    }
}

function enableEditName() {
    let names = document.querySelectorAll(".name")

    if (names[0].contentEditable === "true") {
        for (i = 0; i < names.length; i++) {
            if (names[i].innerText.length > 50) {
                names[i].innerText = names[i].innerText.substring(0, 51)
            }
            names[i].setAttribute("contenteditable", false);
            names[i].style.removeProperty("border");
            names[i].style.removeProperty("borderRadius");
            names[i].style.removeProperty("display");
        }
        document.getElementById("namedt").style.fill = "gray";
    }
    else {
        document.getElementById("namedt").style.fill = "red";
        for (i = 0; i < names.length; i++) {
            names[i].setAttribute("contenteditable", true);
            names[i].style.border = "1px solid";
            names[i].style.borderRadius = "6px";
            names[i].style.display = "inline-block";
        }
    }
}

function clearIpts(id) {
    let btn = document.getElementById(id)
    let mdlbdy = btn.parentElement.previousElementSibling.querySelectorAll("input")
    for (i = 0; i < mdlbdy.length; i++) {
        mdlbdy[i].value = "";
    }

}

function eInfo(idz) {
    let btn = document.getElementById(idz);
    let sc = btn.closest(".container")
    let ul = sc.previousElementSibling.querySelector("ul")
    gul = ul
    gct = sc

    console.log(gul)
}

function delEdu(id) {
    let eId = document.getElementById(id);
    eId.closest("li").remove();
}

function editEdu(id) {
    let btn = document.getElementById(id)
    let li = btn.closest("li")
    let liCon = li.querySelectorAll("span")
    if (liCon[0].contentEditable === "true") {
        for (i = 0; i < liCon.length; i++) {
            if (liCon[i].innerText.length > 100) {
                liCon[i].innerText = liCon[i].innerText.substring(0, 101)
            }
            liCon[i].setAttribute("contenteditable", false);
            liCon[i].style.removeProperty("border");
            liCon[i].style.removeProperty("borderRadius");
            liCon[i].style.removeProperty("display");
        }
        document.getElementById(id).setAttribute("fill", "gray")
    }
    else {
        document.getElementById(id).setAttribute("fill", "red")
        for (i = 0; i < liCon.length; i++) {
            liCon[i].setAttribute("contenteditable", true);
            liCon[i].style.border = "1px solid";
            liCon[i].style.borderRadius = "6px";
            liCon[i].style.display = "inline-block";
        }
    }
}

function enableEditEdu(id) {
    let edubtnEdit = document.getElementById(id)
    let educardBody = document.getElementById("edcardbody")
    let btns = educardBody.querySelectorAll(".eduedtbtn")
    let liCon = educardBody.querySelectorAll("span")
    let pen = educardBody.querySelectorAll("svg.bi-pencil-fill")
    console.log(pen)
    if (edubtnEdit.innerHTML === "Save") {
        edubtnEdit.textContent = "Edit";
        edubtnEdit.classList.replace("btn-success", "btn-primary");
        pen.forEach(e => {
            e.setAttribute("fill", "gray")
        });
        btns.forEach(e => {
            e.style.display = "none"
        })
        for (i = 0; i < liCon.length; i++) {
            if (liCon[i].innerText.length > 100) {
                liCon[i].innerText = liCon[i].innerText.substring(0, 101)
            }
            liCon[i].setAttribute("contenteditable", false);
            liCon[i].style.removeProperty("border");
            liCon[i].style.removeProperty("borderRadius");
            liCon[i].style.removeProperty("display");
        }
    }
    else {
        edubtnEdit.textContent = "Save";
        edubtnEdit.classList.replace("btn-primary", "btn-success");
        for (i = 0; i < btns.length; i++) {
            btns[i].style.display = "initial"
        }
    }


}

function changePfp(id) {
    let pfp = document.getElementById("christian")
    let input = document.getElementById(id).querySelector("input")
    let reader = new FileReader();
    reader.onload = function () {
        var result = reader.result;
        pfp.setAttribute("src", result)
        console.log(result)
    }
    reader.readAsDataURL(input.files[0])

}

function changeImg(id) {
    let btn = document.getElementById(id)
    let banner = btn.parentElement.parentElement.querySelector("img")
    let input = btn.querySelector("input")
    let reader = new FileReader();
    reader.onload = function () {
        var result = reader.result;
        banner.setAttribute("src", result)
    }
    reader.readAsDataURL(input.files[0])
}

function editbtnPr(id) {
    let btnedit = document.getElementById(id)
    let prbtnlist = btnedit.closest("section").querySelectorAll(".eduedtbtn")
    let prlist = btnedit.closest("section").querySelectorAll(".inputcr")
    let prtext = btnedit.closest("section").querySelectorAll("span")
    let prpens = btnedit.closest("section").querySelectorAll("svg.bi-pencil-fill")
    console.log(prlist)
    console.log(prbtnlist)
    if (btnedit.innerHTML === "Save") {
        btnedit.innerHTML = "Edit";
        btnedit.classList.replace("btn-success", "btn-primary");
        prtext.forEach(e => {
            e.setAttribute("contenteditable", false);
            e.style.removeProperty("border");
            e.style.removeProperty("borderRadius");
        })
        prpens.forEach(e => {
            e.style.fill = "gray";
        })
        prbtnlist.forEach(e => {
            e.style.display = "none"
        })
        prlist.forEach(e => {
            e.style.display = "none"
        })
    }
    else {
        btnedit.innerHTML = "Save";
        btnedit.classList.replace("btn-primary", "btn-success");
        for (i = 0; i < prbtnlist.length; i++) {
            prbtnlist[i].style.display = "revert"

        }
    }
}

function updatePrValue(id) {
    let newValue = document.getElementById(id)
    let prBar = newValue.parentElement.nextElementSibling.firstElementChild
    prBar.innerHTML = `${newValue.value}%`
    prBar.style.width = `${newValue.value}%`


    console.log(prBar.style.width)
}

function updatePrColor(id) {
    let newValue = document.getElementById(id)
    let prBar = newValue.parentElement.nextElementSibling.firstElementChild
    prBar.style.setProperty("background-color", newValue.value.toString(), "important")
    console.log(`${newValue.value}!important`)
}

function editPr(id) {
    let btn = document.getElementById(id)
    let range = btn.parentElement.nextElementSibling.querySelectorAll("input")
    let pr = btn.parentElement.nextElementSibling.nextElementSibling.firstElementChild
    let text = btn.parentElement.querySelector("span")
    let prvalueStr = pr.style.width.toString()
    let prvalue = prvalueStr.substring(0, prvalueStr.length - 1)

    console.log(pr.getAttribute("style").slice(length - 26, length - 1))
    if (range[0].style.display == "none" || range[0].style.display == "") {
        range[0].value = prvalue
        range[0].style.display = "revert"
        range[1].style.display = "revert"
        btn.style.fill = "red";
        text.setAttribute("contenteditable", true);
        text.style.border = "1px solid";
        text.style.borderRadius = "6px";
    }
    else {
        range[0].style.display = "none"
        range[1].style.display = "none"
        btn.style.fill = "gray";
        text.setAttribute("contenteditable", false);
        text.style.removeProperty("border");
        text.style.removeProperty("borderRadius");

    }
}

function delPr(id) {
    let btn = document.getElementById(id)
    btn.parentElement.parentElement.remove();
}

function upPrLabel(id) {
    let range = document.getElementById(id)
    range.previousElementSibling.innerText = `${range.value}%`
}

function expandImg(src, id) {
    let img = document.getElementById(id)
    let mdl = document.getElementById("modalimg")
    mdl.style.maxHeight = "85vh"
    mdl.style.objectFit = "scale-down"
    document.getElementById("xx").style.paddingLeft = "15px"
    mdl.setAttribute("src", src)

    console.log(id)
}

function editPy(id) {
    let btn = document.getElementById(id)
    let text = btn.closest(".card-body").querySelectorAll("span")


    if (text[0].contentEditable === "true") {
        for (i = 0; i < text.length; i++) {
            if (text[i].innerText.length > 300) {
                text[i].innerText = text[i].innerText.substring(0, 301)
            }
            text[i].setAttribute("contenteditable", false);
            text[i].style.removeProperty("border");
            text[i].style.removeProperty("borderRadius");
            text[i].style.removeProperty("display");
            btn.style.fill = "gray";
        }
    }
    else {
        for (i = 0; i < text.length; i++) {
            text[i].setAttribute("contenteditable", true);
            text[i].style.border = "1px solid";
            text[i].style.borderRadius = "6px";
            text[i].style.display = "inline-block";
            btn.style.fill = "red";
        }
    }
    console.log(text)
}

function editbtnPy(id) {
    let btnedit = document.getElementById(id)
    let prbtnlist = btnedit.closest("section").querySelectorAll(".eduedtbtn")

    if (btnedit.innerHTML === "Save") {
        btnedit.innerHTML = "Edit";
        btnedit.classList.replace("btn-success", "btn-primary");
        prbtnlist.forEach(e => {
            e.style.fill = "gray";
        })
        for (i = 0; i < prbtnlist.length; i++) {
            prbtnlist[i].style.display = "none"
        }
    }
    else {
        btnedit.innerHTML = "Save";
        btnedit.classList.replace("btn-primary", "btn-success");
        for (i = 0; i < prbtnlist.length; i++) {
            prbtnlist[i].style.display = "revert"

        }
    }
}

function delPy(id) {
    let btn = document.getElementById(id)
    btn.closest(".col.mb-4").remove();

}