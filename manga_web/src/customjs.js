function scrollBack() {
    let element = document.getElementById("horizontal-scroll-wrapper");
    element.scrollLeft -= 50;

    console.log(element.scrollLeft)    
}
function scrollNext() {
    let element = document.getElementById("horizontal-scroll-wrapper");
    element.scrollLeft += 50;

    console.log(element.scrollLeft)    
}