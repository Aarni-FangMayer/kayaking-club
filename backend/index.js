const express = require("express");
const app = express();

/* middleware json parser */
app.use(express.json())

/* middleware cors*/
const cors = require("cors");
app.use(cors());

let tours = [
  {
    id: "1",
    name: "Lake Louise Paddle",
    subtitle:
      "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
    description:
      "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
    difficulty: "easy",
    dateOfTrip: "28 august",
    included: "guide, photography",
    forBeginners: "yes",
    duration: "1 day",
    price: "1050",
    image:
      "https://www.banffadventures.com/site/assets/files/7997/moraine_lake_summer.2000x1198.jpg",
    accountId: [],
  },
  {
    id: "2",
    name: "Bow River Serenity",
    subtitle:
      "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
    description:
      "Experience the calm beauty of the Bow River as it winds gently through the stunning landscapes of Banff National Park. This route is perfect for beginners or anyone seeking a peaceful escape. Along the way, enjoy panoramic views of the Rockies, glimpses of local wildlife, and the refreshing feel of alpine air. It's a stress-free adventure that’s ideal for families, couples, or solo paddlers looking to reconnect with nature in just a few hours.",
    difficulty: "easy",
    dateOfTrip: "1 august",
    included: "guide",
    forBeginners: "yes",
    duration: "1 day",
    price: "750",
    image:
      "https://prodigits.co.uk/thumbs/wallpapers/p2ls/nature/43/af880c3112554858.jpg",
    accountId: [],
  },
  {
    id: "3",
    name: "Ottawa River Rush",
    subtitle:
      "For those craving adrenaline, this rapid-filled stretch delivers thrills with full instructor support.",
    description:
      "Get ready for an exhilarating ride on one of Canada’s most famous whitewater routes! The Ottawa River is perfect for thrill-seekers and those ready to challenge themselves — with expert instructors at your side every stroke of the way. Expect waves, rapids, and lots of fun, but rest assured: safety is our top priority, and our gear and guidance make this route accessible even for first-time adventurers.",
    difficulty: "middle",
    dateOfTrip: "20 july",
    included: "instructor, photo",
    forBeginners: "no",
    duration: "1 day",
    price: "970",
    image:
      "https://cdn.britannica.com/65/126065-050-B73FC50D/hotel-Ottawa-River-Fairmont-Chateau-Laurier-Parliament.jpg",
    accountId: [],
  },
  {
    id: "4",
    name: "Algonquin Explorer",
    subtitle:
      "A quiet escape into forested shorelines and wildlife-rich waters, perfect for nature lovers.",
    description:
      "Dive into the quiet side of Ontario’s beloved Algonquin Park. This route offers tranquil paddling through forest-lined lakes and winding waterways rich with wildlife. Watch for loons, moose, and beavers as you glide through the calm. It’s a perfect day trip for nature lovers, birdwatchers, and photographers seeking stillness and serenity.",
    difficulty: "middle",
    dateOfTrip: "19 july",
    included: "instructor, photo, lunch",
    forBeginners: "yes",
    duration: "1 day",
    price: "1025",
    image:
      "https://paddlingmagazine-images.s3.amazonaws.com/2023/01/Algonquin-Park-Is-Ontarios-Best-Canoe-Camping-Wilderness.jpg",
    accountId: [],
  },
  {
    id: "5",
    name: "Capilano River Glide",
    subtitle:
      "A gentle, picturesque paddle through forested canyons, just outside of Vancouver.",
    description:
      "Just minutes from downtown Vancouver, this hidden gem offers a lush green canyon paddle that feels like you’re miles from civilization. Perfect for a quick reset or a relaxing day outdoors, the Capilano River route offers calm waters, dense forest surroundings, and cool Pacific air — the ideal escape without the long drive.",
    difficulty: "easy",
    dateOfTrip: "1 september",
    included: "instructor, photo, transfer",
    forBeginners: "yes",
    duration: "1 day",
    price: "1200",
    image:
      "https://lh3.googleusercontent.com/proxy/3lD2XAivJFTIMbd25tRTjg2c2DWK-Q44WDuJV4gPZSSkwrGtKFotrpxT41JFemF5UvwIaxWZVXLsxaJ0VSTwQu5SZdYTdQ",
    accountId: [],
  },
  {
    id: "6",
    name: "Yukon Wilderness Escape",
    subtitle:
      "Journey through untouched northern rivers, camping beneath the stars in total solitude.",
    description:
      "Step into a true northern adventure. This route takes you deep into Yukon’s vast wilderness, where the river carves through wild valleys and untouched forests. You’ll camp on remote riverbanks, fall asleep to the sound of flowing water, and wake to misty mountain views. It’s an unforgettable three-day journey into silence, solitude, and soul-refreshing beauty.",
    difficulty: "middle",
    dateOfTrip: "5 august",
    included: "tent, food, instructor, photo, transfer",
    forBeginners: "no",
    duration: "3 day",
    price: "1265",
    image:
      "https://www.muchbetteradventures.com/magazine/content/images/2023/01/My_project__12_--1-.jpg",
    accountId: [],
  },
  {
    id: "7",
    name: "Kootenay Lake Loop",
    subtitle:
      "A beautiful circuit featuring clear waters, cozy coves, and nights around the fire with mountain backdrops.",
    description:
      "This three-day loop around Kootenay Lake offers a stunning mix of open water and sheltered coves, framed by alpine peaks and dense forest. Perfect for intermediate paddlers, the route includes cozy campsites, swimming spots, and time to unwind around the fire each night. A well-rounded escape that balances challenge and comfort.",
    difficulty: "hard",
    dateOfTrip: "17 august",
    included: "tent, food, instructor",
    forBeginners: "no",
    duration: "3 day",
    price: "970",
    image:
      "https://kootenaylakeview.com/wp-content/uploads/2012/03/Lakeviewfront_header1.jpg",
    accountId: [],
  },
  {
    id: "8",
    name: "Saguenay Fjord Adventure",
    subtitle:
      "Explore dramatic fjords where cliffs meet water and whales sometimes join the ride.",
    description:
      "Paddle through the dramatic cliffs and deep blue waters of the Saguenay Fjord — one of Canada’s most striking natural formations. With its unique marine wildlife (including belugas in season) and spectacular landscapes, this journey offers both adventure and peaceful wonder. Evenings are spent camped beneath towering rock walls, surrounded by silence.",
    difficulty: "middle",
    dateOfTrip: "1 june",
    included: "tent, food, instructor, photo",
    forBeginners: "yes",
    duration: "3 day",
    price: "1175",
    image: "https://landsby.ca/wp-content/uploads/2022/11/IMG_9938.jpg",
    accountId: [],
  },
  {
    id: "9",
    name: "Gros Morne Explorer",
    subtitle:
      "Paddle through UNESCO-protected landscapes with rich biodiversity and breathtaking views.",
    description:
      "Explore the UNESCO-listed landscapes of Gros Morne, where fjords, forests, and rugged coastlines meet in stunning harmony. This route mixes calm inland waters with more challenging sections, perfect for those seeking variety. With chances to spot seabirds, seals, and dramatic geology, it’s a feast for the adventurous eye.",
    difficulty: "hard",
    dateOfTrip: "28 august",
    included: "tent, food, instructor, photo",
    forBeginners: "no",
    duration: "3 day",
    price: "985",
    image:
      "https://s1.it.atcdn.net/wp-content/uploads/2023/12/HEROGros-Morne-1.jpg",
    accountId: [],
  },
  {
    id: "10",
    name: "La Vérendrye Park Expedition",
    subtitle:
      "An ideal trip for intermediate paddlers — island hopping, wild camping, and starry skies.",
    description:
      "A hidden gem in Quebec’s wilderness, this island-hopping route through La Vérendrye Park offers crystal-clear lakes, pine-covered islands, and quiet solitude. Ideal for intermediate paddlers, the route is both accessible and immersive, giving you space to explore, relax, and rediscover the simple rhythm of life on the water.",
    difficulty: "middle",
    dateOfTrip: "24 september",
    included: "tent, food, instructor",
    forBeginners: "yes",
    duration: "3 day",
    price: "1024",
    image:
      "https://cdn.authentik.com/canada/images/facebook/og-canada-default_52877.png",
    accountId: [],
  },
  {
    id: "11",
    name: "La Vérendrye Park Expedition",
    subtitle:
      "An ideal trip for intermediate paddlers — island hopping, wild camping, and starry skies.",
    description:
      "A hidden gem in Quebec’s wilderness, this island-hopping route through La Vérendrye Park offers crystal-clear lakes, pine-covered islands, and quiet solitude. Ideal for intermediate paddlers, the route is both accessible and immersive, giving you space to explore, relax, and rediscover the simple rhythm of life on the water.",
    difficulty: "middle",
    dateOfTrip: "24 september",
    included: "tent, food, instructor",
    forBeginners: "yes",
    duration: "3 day",
    price: "1024",
    image:
      "https://cdn.authentik.com/canada/images/facebook/og-canada-default_52877.png",
    accountId: [],
  },
];

/* middleware requestLogger */
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)


app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

/* Fetching all tours in list */
app.get("/api/tours", (request, response) => {
  response.json(tours);
});

/* Fetching a single tour */
app.get("/api/tours/:id", (request, response) => {
  const id = request.params.id;
  const tour = tours.find((tour) => tour.id === id);
  if (tour) {
    response.json(tour);
  } else {
    response.status(404).end();
  }
});

/* Deleting a single tour */
app.delete("/api/tours/:id", (request, response) => {
  const id = request.params.id;
  tours = tours.filter(tour => tour.id !== id);

  response.status(204).end()
})

/* Adding a new tour */
app.post("/api/tours", (request, response) => {
  const maxId = tours.length > 0
  ? Math.max(...tours.map(n => Number(n.id)))
  : 0

  const newTour = request.body;
  newTour.id = String(maxId + 1);
  tours = tours.concat(newTour);
  
  response.json(newTour);
})

/* middleware unknownEndpoint */
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
