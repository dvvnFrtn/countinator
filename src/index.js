let btnInc = document.getElementById("btn-inc");
let btnDec = document.getElementById("btn-dec");
let numCount = document.getElementById("counter");

const colors = {
    net: "text-gray-300",
    pos: "text-emerald-500",
    neg: "text-rose-500",
}

// State
let counter = 0;
let color = Array.from(numCount.classList)[3];
let toastShown = false;

function setCounter() {
    numCount.innerHTML = counter;
    numCount.classList.replace(color, nextColor());
    color = nextColor();
}

window.addEventListener("load", () => {
    setCounter();

    btnInc.addEventListener("click", () => {
        counter++;
        setCounter();
        showToast();
    });

    btnDec.addEventListener("click", () => {
        counter--;
        setCounter();
        showToast();
    });
});

function nextColor() {
    let nextColor = counter > 0 ? colors.pos : (counter < 0 ? colors.neg : colors.net);
    return nextColor;
}

// Toast

function showToast() {
    let toast = document.querySelector("#toast");
    let toastMsg = document.querySelector("#toast-message");

    if (!toastShown) {
        if (counter < 0) {
            toast.classList.remove("toast-succes");
            toast.classList.add("toast-warning");
            toastMsg.textContent = " 😅 Whoops, subtracting! Are you sure? ";
        }
        if (counter > 0) {
            toast.classList.remove("toast-warning");
            toast.classList.add("toast-success");
            toastMsg.textContent = " 🔥 Keep counting, you're on fire! ";
        }

        toast.classList.add("toast-active");
        setTimeout(() => {
            toast.classList.remove("toast-active");
        }, 3000);
    }

    toastShown = counter == 0 ? false : true;
}
