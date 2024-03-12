const earthRadiusKm = 6371;
const toRadians = (degrees) => degrees * Math.PI / 180;
const toDegrees = (radians) => radians * 180 / Math.PI;
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
};

const plants = [
  {
    name: "Sree Amman Bio Fuels ( Wood Chips Suppliers in TamilNadu )",
    latitude: 11.59435,
    longitude: 78.61286,
    rating: 4.6,
  },

  {
    name:  "Sakthy Muruga Bio Materials - Biomass Briquettes, Wood Chips, Biomass Pellets supplier in Tamil Nadu, India",
    latitude: 11.6332,
    longitude: 78.12752,
    rating: 4.5,
  },

  {
    name: "Sree Bannari Amman Bio Fuels",
    latitude: 11.08991,
    longitude: 77.37712,
    rating: 4.6,
  },

  {
    name: "Thugalagam Biofuels (Briquettes)",
    latitude: 8.54165,
    longitude: 78.07609,
    rating: 4.2,
  },

  {
    name: "Kaviya bio fuel",
    latitude: 12.71248,
    longitude: 79.53142,
    rating: 5,
  },

  {
    name: "Nav indus food machines",
    latitude: 13.04216,
    longitude: 80.18555,
    rating: 4.7,
  },

  {
    name: "Sara bio resources(India) ltd",
    latitude: 13.045784,
    longitude: 80.186071,
    rating: 5,
  },

  {
    name: "Canopus Biofuels",
    latitude: 11.31369,
    longitude: 77.68807,
    rating: 4.3,
  },

  {
    name: "Sakthi Veera Green Energy Pvt ltd",
    latitude: 12.9405,
    longitude: 80.17555,
    rating: 4.4,
  },

  {
    name: "Saravana Agro Fuels",
    latitude: 10.56512,
    longitude: 77.34845,
    rating: 4,
  },

  {
    name: "Jeyamaruthi bio energy system",
    latitude: 10.76131,
    longitude: 78.83783,
    rating: 3.9,
  },


  {
    name: "Eco Sudar Bio Pellets",
    latitude: 9.925199,
    longitude: 78.15794,
    rating: 4.9
  },
  
  {
    name: "Kothari Bio Fuels",
    latitude: 13.15482,
    longitude:80.2044,
    rating: 4.2,
  },

  {
    name: "Sri Meena Agro Products",
    latitude: 11.62291,
    longitude: 78.14697,
    rating: 5,
  },
  
  {
    name: "M.A.V. Bio-Fuels",
    latitude: 13.04724,
    longitude: 80.22552,
    rating: 1,
  },

  {
    name: "JLS AGRO ENERGY",
    latitude: 11.237417,
    longitude: 76.968849,
    rating: 4.3,
  },

  {
    name: "Sun Company",
    latitude: 11.23295,
    longitude: 77.1049,
    rating: 4.6,
  },

  {
    name: "NISHE AGRO FUELS",
    latitude: 12.83314,
    longitude: 79.30027,
    rating: 4
  },
  
];

const pincodeMap = [
  [636108, [11.59435, 78.61286]],

  [637301, [11.6332, 78.12752]],
        
  [628217, [8.54165, 78.07609]],
        
  [604407, [12.71248, 79.53142]],
        
  [600087, [13.04216, 80.18555]],
        
  [600086, [13.045784, 80.186071]],
        
  [638107, [11.31369, 77.68807]],
        
  [600117, [12.9405, 80.17555]],
        
  [642113, [10.56512, 77.34845]],
        
  [620015, [10.76131, 78.83783]],
        
  [631502, [9.925199, 78.15794]],
        
  [600066, [13.15482, 80.2044]],
        
  [621201, [11.62291, 78.14697]],
        
  [600024, [13.04724, 80.22552]],
        
  [630606, [11.237417, 76.968849]],
        
  [641653, [11.23295, 77.1049]],
        
  [623706, [12.83314, 79.30027]],


];

const findNearestPlant = (plants, latitude, longitude) => {
  let nearestPlant;
  let minDistance = Infinity;

  plants.forEach((plant) => {
    const distance = haversineDistance(
      latitude,
      longitude,
      plant.latitude,
      plant.longitude
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestPlant = plant;
    }
  });

  return nearestPlant;
};

const userInput = {
    pincode: 636108, // Replace with the actual user input
  };

const userCoordinates = pincodeMap.find(
    ([pin, coords]) => Math.abs(pin - userInput.pincode) <= 50
  )?.[1];
  

if (userCoordinates) {
  const nearestPlant = findNearestPlant(plants, userCoordinates[0], userCoordinates[1]);
  console.log(`Nearest Bio-Pellet Plant for pincode ${userInput.pincode}:`);
  console.log(nearestPlant);
} else {
  console.log(`No bio-pellet plants found within the range ${userInput.pincode}.`);
}


