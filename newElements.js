
function newEdu(id) {
  let smtbt = document.getElementById(id);
  let father = smtbt.closest(".modal");
  let eduCount;
  if (gul.lastElementChild == null) {
    eduCount = 0;
  }
  else {
    eduCount = gul.lastElementChild.getAttribute("counter")
  }
  eduCount++;
  let li = document.createElement("li");
  smtbt.setAttribute("data-dismiss", "");
  console.log()

  if (father.id === "eduModal") {
    if (document.getElementById("ip0").value !== "") {
      smtbt.setAttribute("data-dismiss", "modal");
      li.className = "media mb-2";
      li.setAttribute("id", "ed" + (eduCount));
      li.setAttribute("counter", `${eduCount}`)
      li.innerHTML =
        `<img src="https://cdn-icons-png.flaticon.com/512/7170/7170501.png" class="mr-3 mt-2 main-icon"
                alt="...">
              <div class="media-body">
                <h5 class="mt-0 mb-0" style="user-select: none;">
                <span style="user-select: text;">${document.getElementById("ip0").value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-pencil-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
                onclick="editEdu(this.id)" id="edtbtn${eduCount}">
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-trash-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
                onclick="delEdu(this.id)" id="dltbtn${eduCount}">
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
              </h5>
              <p class="text-muted mb-1"><span>${document.getElementById("ip1").value}</span></p>
              <p class="text-muted mb-1"><span>${document.getElementById("ip2").value}</span></p>
            </div>`;
      eduList.append(li);
      clearIpts(id);
    }
  }
  else {
    if (document.getElementById("eip0").value !== "") {
      smtbt.setAttribute("data-dismiss", "modal");
      li.className = "media mb-2";
      li.setAttribute("id", "ex" + (eduCount));
      li.setAttribute("counter", `${eduCount}`)
      li.innerHTML =
        `<img src="https://cdn-icons-png.flaticon.com/512/7170/7170426.png" class="mr-3 mt-2 main-icon"
                alt="...">
              <div class="media-body">
                <h5 class="mt-0 mb-0" style="user-select: none;">
                <span style="mt-1 user-select: text;">${document.getElementById("eip0").value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-pencil-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
                onclick="editEdu(this.id)" id="exedtbtn${eduCount}">
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                class="bi bi-trash-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
                onclick="delEdu(this.id)" id="exdltbtn${eduCount}">
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
              </h5>
              <p class="text-muted mb-1"><span>${document.getElementById("eip1").value}</span></p>
              <p class="text-muted mb-1"><span>${document.getElementById("eip2").value}</span></p>
            </div>`;
      expList.append(li);
      clearIpts(id);
    }
  }
}

function newPr(id) {
  let btn = document.getElementById(id)
  let prCount;
  if (gct.previousElementSibling.lastElementChild == null) {
    prCount = 0;
  }
  else {
    prCount = gct.previousElementSibling.lastElementChild.getAttribute("counter")
  }
  let div = document.createElement("div")
  let skill = btn.parentElement.previousElementSibling.querySelector("input")
  let input = skill.parentElement.nextElementSibling.querySelectorAll("input")
  prCount++
  btn.setAttribute("data-dismiss", "");
  console.log(input)

  if (skill.value !== "") {
    btn.setAttribute("data-dismiss", "modal");
    div.setAttribute("counter", `${prCount}`)
    div.innerHTML =
      `<p class="text-center mb-2 mt-2 noselect">
        <span>${skill.value}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
          class="bi bi-pencil-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
          onclick="editPr(this.id)" id="iedtbtn${prCount}">
          <path
            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
          class="bi bi-trash-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer; display: initial;" viewBox="0 0 16 16"
          onclick="delPr(this.id)" id="idltbtnn${prCount}">
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </p>
      <div class="text-center mb-2">
        <input type="range" class="custom-range inputcr" id="ivaluePr${prCount}" step="5" value="${input[0].value}"
          onchange="updatePrValue(this.id)" style="width: 50%;">
        <input type="color" class="form-control-color ml-2 inputcr" id="icolorPr${prCount}" value="#ff0000"
          title="Choose your color" style="width: 35px; min-width: 35px; position: absolute;"
          onchange="updatePrColor(this.id)">
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${input[0].value}%; background-color: ${input[1].value};"
          aria-valuenow="${input[0].value}" aria-valuemin="0" aria-valuemax="100">${input[0].value}%</div>
      </div>`
    gct.parentElement.querySelector(".lictn").append(div);
    prCount++;
    skill.value = "";
  }
}

function newPy(id) {
  let btn = document.getElementById(id)
  let prCount;
  if (gct.previousElementSibling.lastElementChild == null) {
    prCount = 0;
  }
  else {
    prCount = gct.previousElementSibling.lastElementChild.getAttribute("counter")
  }

  let input = btn.closest("form").querySelectorAll("input")
  let reader = new FileReader();
  let newImg = input[0].files[0]
  let div = document.createElement("div")
  prCount++
  console.log(prCount)

  reader.onload = function () {
    var result = reader.result;
    document.getElementById(`pyimg${prCount}`).setAttribute("src", result)
  }
  reader.readAsDataURL(newImg)


  if (input[1].value !== "") {
    btn.setAttribute("data-dismiss", "modal");
    div.classList.add("col", "mb-4");
    div.setAttribute("counter", `${prCount}`)
    div.innerHTML = `<div class="card">
      <label class="mb-0" id="pyimgedtbtn${prCount}" onchange="changeImg(this.id)"
        style="width: 0px; height: 0px;">
        <input type="file" accept="image/png, image/jpeg" hidden>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
          class="bi bi-pencil-fill mb-2 mr-4 mt-4 eduedtbtn"
          style="cursor: pointer; position: absolute; right: 1px;" viewBox="0 0 16 16">
          <path
            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </label>
      <img src="" class="card-img-top" data-toggle="modal" data-target="#xx"
        style="cursor: pointer;" onclick="expandImg(this.src , this.id)" alt="..." id="pyimg${prCount}">
      <div class="card-body">
        <h5 style="user-select: none;" class="card-title">
          <span style="word-break: break-word;">${input[1].value}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
            class="bi bi-pencil-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer;" viewBox="0 0 16 16"
            onclick="editPy(this.id)" id="pedtbtn${prCount}">
            <path
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
            class="bi bi-trash-fill mb-2 ml-3 eduedtbtn" style="cursor: pointer;" viewBox="0 0 16 16"
            onclick="delPy(this.id)" id="pdltbtn${prCount}">
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </h5>
        <p class="card-text">
          <span style="word-break: break-word;">${input[2].value}</span>
        </p>
        <a class="btn btn-primary pybtn" href="#">Visit</a>
      </div>
    </div>`
    gct.previousElementSibling.append(div)
    clearIpts(id)
  }

}
// TODO when activating edit button update colors instead of when clicking pencil