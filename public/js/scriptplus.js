const searchInput = document.querySelector("#search");
const rows = document.querySelectorAll("tbody tr");


searchInput.addEventListener("keyup", function (event) {
   
    const found = event.target.value.toLowerCase();
    rows.forEach((row) => {
        row.style.display = 'none';
        if ((row.querySelector("td:nth-child(3)").innerText.toLowerCase().includes(found)) || 
        (row.querySelector("td:nth-child(2)").innerText.toLowerCase().includes(found))) 
        row.style.display = ''
    })
})

