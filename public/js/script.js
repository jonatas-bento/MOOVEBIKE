// When the user scrolls the page, execute myFunction
// Qnd o usuário usar o scroll na pagina, execute myFuncion 
window.onscroll = function () { myFunction() };

// Get the header
// Pegar o header 
const header = document.getElementById("headerTopo");

// Get the offset position of the navbar
// Pegar a posição de deslocamento da header
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// Add a class sticky ao header quando usar o scroll. Remove quando o scroll estiver no topo.
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/************ScrollToTop ************/

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});

// function Enviar() {
//   let nome = document.getElementById("nome");
//   if (nome.value != "") {
//     alert('Obrigado sr(a) ' + nome.value + ' a sua mensagem foi registrada');
//   }
// }

/*********Configuring Locations *******************/

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -23.5558894, lng: -46.6566727 },
  });

  const iconBase = '/img/';

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: -23.5481768, lng: -46.666611 }, "Universidade Mackenzie"],
    [{ lat: -23.5493958, lng: -46.6622115 }, "Higienópolis Pet"],
    [{ lat: -23.5493958, lng: -46.6622115 }, "Chapel of the Holy Cross"],
    [{ lat: -23.5559607, lng: -46.6563214 }, "Buffet Frei Caneca"],
    [{ lat: -23.55585, lng: -46.6559727 }, "Agata Almeida"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      icon: iconBase + 'iconStation.png',
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
//Executing the function in case of reloading


/********* Menu *******************/

const divDrop = document.querySelector('#dropdown-menu');

function addActive() {
  divDrop.classList.add("active");
}

function moveBackToTheOldStage() {
  divDrop.classList.remove("active")
}

/*********NEWSLETTER *******************/

function clickEmail() {
  alert("Email cadastrado com sucesso!")
}

function clearFields() {
  document.getElementById("email").value = "";
}

function newsletter() {
  clickEmail();
  clearFields();
}

initMap();