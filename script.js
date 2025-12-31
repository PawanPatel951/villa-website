



const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
    });
});







document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("myVideo");
    const playBtn = document.getElementById("playBtn");
    const icon = playBtn.querySelector("i");

    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            icon.classList.replace("fa-play", "fa-pause");
        } else {
            video.pause();
            icon.classList.replace("fa-pause", "fa-play");
        }
    });

    video.addEventListener("ended", () => {
        icon.classList.replace("fa-pause", "fa-play");
    });
});


const rooms = [
  {
    image: "images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg",
    type: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
    city: "bilara"
  },
  {
    image: "images/avi-werde-hHz4yrvxwlA-unsplash.jpg",
    type: "Family House",
    price: "$1.450.000",
    address: "25 Ocean Drive Miami, OR 97220",
    bedrooms: 5,
    bathrooms: 4,
    area: "380m2",
    floor: 2,
    parking: "2 spots"
  },
  {
    image: "images/mikail-mcverry-GSL3IuuwJv8-unsplash.jpg",
    type: "Modern Apartment",
    price: "$890.000",
    address: "9 City Center, Miami, OR 97210",
    bedrooms: 3,
    bathrooms: 2,
    area: "210m2",
    floor: 10,
    parking: "1 spot"
  },
  {
   image: "images/john-fornander-y3_AHHrxUBY-unsplash (1).jpg",
    type: "Beach House",
    price: "$1,980,000",
    address: "77 Sunset Beach, Miami, OR 97230",
    bedrooms: 6,
    bathrooms: 5,
    area: "420m²",
    floor: 2,
    parking: "3 spots"
  },
  {
  image: "images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
    type: "Penthouse Suite",
    price: "$3,750,000",
    address: "120 Skyline Tower, Miami, OR 97205",
    bedrooms: 4,
    bathrooms: 4,
    area: "360m²",
    floor: 25,
    parking: "2 spots"
  },
  {
   image: "images/zac-gudakov-ztWpwTEx728-unsplash.jpg",
    type: "Studio Apartment",
    price: "$320,000",
    address: "44 Green Park, Miami, OR 97208",
    bedrooms: 1,
    bathrooms: 1,
    area: "65m²",
    floor: 4,
    parking: "No"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const roomDetails = document.getElementById("room-details");

  rooms.forEach(room => {
    const item = document.createElement("div");
    item.className = "room-items";

    item.innerHTML = `
      <img src="${room.image}" alt="${room.type}">
      <h4>${room.type}</h4>
      <h4>${room.price}</h4>
      <div class="room-text">
          <h1>${room.address}</h1>
          <div class="room-properties">
              <p>Bedrooms: <span>${room.bedrooms}</span></p>
              <p>Bathrooms: <span>${room.bathrooms}</span></p>
              <p>Area: <span>${room.area}</span></p>
              <p>Floor: <span>${room.floor}</span></p>
              <p>Parking: <span>${room.parking}</span></p>
              <p>City: <span>${room.city}</span></p>
          </div>
          <button>Schedule a visit</button>
      </div>
    `;

    roomDetails.appendChild(item);
  });
});


