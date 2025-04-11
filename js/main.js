const socialMediaBtn = document.getElementById("social-media-btn");
let i = 0;

if (window.matchMedia("(max-width: 430px)").matches) {
    socialMediaBtn.removeAttribute("disabled");
}

socialMediaBtn.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 430px)").matches) {
        if (i === 0) {
            socialMediaPopUp.style.display = "flex"
            i++;
            return;
        }
    
        if (socialMediaPopUp.style.display === "flex") {
            socialMediaPopUp.style.display = "none"
            return;
        }
    }
    socialMediaPopUp.style.display = "flex";
})

const sendBtn = document.getElementById("sendBtn");
const inputsLGPD = document.querySelectorAll(".input-lgpd");
let agreeLGPD = [];

function GetInputPosition(input) {
    for (let i = 0; i > agreeLGPD.length; i++) {
        if (input.textContent == agreeLGPD[i].textContent) {
            return i;
        }
    }
}

inputsLGPD.forEach((input) => {
    input.addEventListener("change", (input) => {
        input = input.target;

        if (input.checked == false) {
            let inputIndex = GetInputPosition(input);
            agreeLGPD.splice(inputIndex, 1);
            sendBtn.setAttribute("disabled", "");
            return;
        }
        agreeLGPD.push(input);

        if (agreeLGPD.length === inputsLGPD.length) {
            sendBtn.removeAttribute("disabled", "");
        }
    })
});

