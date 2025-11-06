const showRegisterProposalFormBtn = document.querySelector("#showRegisterProposalFormBtn");
const cancelRegisterProposalBtn = document.querySelector("#cancelRegisterProposalBtn");
const formWrapper = document.querySelector(".formWrapper");

showRegisterProposalFormBtn !== null ? showRegisterProposalFormBtn.addEventListener("click", () => showModal(formWrapper)) : null;
cancelRegisterProposalBtn !== null ? cancelRegisterProposalBtn.addEventListener("click", () => hideModal(formWrapper)) : null;
cancelRegisterProposalBtn !== null ? cancelRegisterProposalBtn.addEventListener("click", () => hideModal(formWrapper)) : null;

function showModal(modal)
{
	modal.style.display = "flex";
}

function hideModal(modal)
{
	modal.style.display = "none";
}

// Table navigator
const table = document.querySelector(".tableResponsive");
const tableHeight = table?.scrollHeight ?? null;
const tableWidth = table?.scrollWidth ?? null;
const topBtn = document.querySelector("#top");
const bottomBtn = document.querySelector("#bottom");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const scrollSpeed = 200;
const scrollInterval = 100;
let mouseOverInterval;

topBtn !== null ? topBtn.addEventListener("mouseenter", () => scrollToTop()) : null;
topBtn !== null ? topBtn.addEventListener("mouseleave", () => stopScroll()) : null;

bottomBtn !== null ? bottomBtn.addEventListener("mouseenter", () => scrollToBottom()) : null;
bottomBtn !== null ? bottomBtn.addEventListener("mouseleave", () => stopScroll()) : null;

leftBtn !== null ? leftBtn.addEventListener("mouseenter", () => scrollToLeft()) : null;
leftBtn !== null ? leftBtn.addEventListener("mouseleave", () => stopScroll()) : null;

rightBtn !== null ? rightBtn.addEventListener("mouseenter", () => scrollToRight()) : null;
rightBtn !== null ? rightBtn.addEventListener("mouseleave", () => stopScroll()) : null;

function scrollToTop()
{
    mouseOverInterval = setInterval(() => {
        table.scrollTo(table.scrollLeft, table.scrollTop - scrollSpeed);
    }, scrollInterval);
}

function scrollToBottom()
{
    mouseOverInterval = setInterval(() => {
        table.scrollTo(table.scrollLeft, table.scrollTop + scrollSpeed);
    }, scrollInterval);
}

function scrollToLeft()
{
    mouseOverInterval = setInterval(() => {
        table.scrollTo(table.scrollLeft - scrollSpeed, table.scrollTop);
    }, scrollInterval);
}

function scrollToRight()
{
    mouseOverInterval = setInterval(() => {
        table.scrollTo(table.scrollLeft + scrollSpeed, table.scrollTop);
    }, scrollInterval);
}

function stopScroll()
{
    clearInterval(mouseOverInterval);
}
