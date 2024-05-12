// pages/api/places.js

export default async function handler(req, res) {
    const { query } = req.query;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY; 
  
    try {
      const response = await fetch(
        // `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`

        `https://maps.googleapis.com/maps/api/place/details/json?reference=ChIJIwo48JLvDDkR8i6Vlos8-AA&key=${apiKey}`
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
      res.status(500).json({ error: 'An error occurred while fetching data from Google Places API' });
    }
  }

  
  