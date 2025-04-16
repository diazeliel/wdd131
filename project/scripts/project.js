document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const lastModified = document.getElementById("lastModified");
    const currentYear = document.getElementById("currentyear");

    // Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
    });


    // Update footer with last modified date
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    // Update footer with current year
    currentYear.textContent = new Date().getFullYear();

    // Handle zoom responsivity (resize event listener)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navLinks.classList.remove('show');
            hamburger.textContent = '☰';
        }
    });
});
const dessert = [
    {
      dessertName: "Brownie",
      dessertprice: "Lps. 50.00",
      imageUrl:
      "https://raw.githubusercontent.com/diazeliel/wdd131/refs/heads/main/project/images/Brownies.jpeg"      
      
    },
    {
      dessertName: "Cinnabon",
      dessertprice: 50,
      imageUrl:
      "https://raw.githubusercontent.com/diazeliel/wdd131/refs/heads/main/project/images/cinnabon.jpg"
    },
    {
      dessertName: "Tres leches",
      dessertprice: 85,
      imageUrl:
      "https://raw.githubusercontent.com/diazeliel/wdd131/refs/heads/main/project/images/tres%20leches.webp"
    },
    {
      dessertName: "Macarons",
      dessertprice: 30,
      imageUrl:
      "https://github.com/diazeliel/wdd131/blob/main/project/images/macarons.jpg?raw=true"
    },
    {
      dessertName: "Churros",
      dessertprice: 15,
      imageUrl:
      "https://github.com/diazeliel/wdd131/blob/main/project/images/churros.jpg?raw=true"
    },
        
    // Add more dessert objects here...
  ];
  
  function createdessertCard(dessertArray) {
    const gallery = document.querySelector(".res-grid");
    gallery.innerHTML = ""; 
  
    dessertArray.forEach(dessert => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let dessertprice = document.createElement("p");
      let img = document.createElement("img");
  
      name.textContent = dessert.Name;
      dessertprice.innerHTML = `<span class="label">Size:</span> ${dessert.dessertprice} unit`;
      img.setAttribute("src", dessert.imageUrl);
      img.setAttribute("alt", `${dessert.Name} dessert`);
      img.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(dessertprice);
      card.appendChild(img);
  
      gallery.appendChild(card);
    });
  }
  
    
  // search 
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filtereddessert = dessert.filter(dessert =>
      dessert.dessertName.toLowerCase().includes(searchTerm)     );
    createdessertCard(filtereddessert); // results
  });
  
 

createdessert(dessert);

// this code is  refering to a actual info when user click  the link
     


//this code  will display info about dessert 
  function createdessert(ftemble) {
	document.querySelector(".res-grid").innerHTML ="";
	ftemble.forEach(dessert =>{
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let dessertprice = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = dessert.dessertName

				
		dessertprice.innerHTML = `<span class="label">dessertprice:</span> ${dessert.dessertprice} unit`;
		image.setAttribute("src" ,dessert.imageUrl);
		image.setAttribute("alt" ,`${dessert.dessertName} dessert`);
		image.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(dessertprice);
		card.appendChild(image);

		document.querySelector(".res-grid").appendChild(card);

		
	})
	
  }