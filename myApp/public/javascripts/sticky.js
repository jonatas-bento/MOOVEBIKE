// When the user scrolls the page, execute myFunction
// Qnd o usuário usar o scroll na pagina, execute myFuncion 
window.onscroll = function () { myFunction() };

// Get the header
// Pegar o header 
var header = document.getElementById("headerTopo");

// Get the offset position of the navbar
// Pegar a posição de deslocamento da header
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// Add a class sticky ao header quando usar o scroll. Remove quando o scroll estiver no topo.
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}