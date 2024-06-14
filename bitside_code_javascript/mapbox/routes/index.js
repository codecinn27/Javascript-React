require('dotenv').config()
var express = require('express');
var router = express.Router();
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxTokens = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxTokens});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/geocode', async(req,res,next)=>{
  const geodata = await geocoder.forwardGeocode({
    query: 'Seri Kembangan,Selangor',
    limit: 1
  }).send();
  console.log("Geodata: ", geodata.body.features[0].geometry.coordinates);
  res.send(geodata.body.features[0].geometry.coordinates);
});

module.exports = router;

/*
references: 
1.mapbox services https://docs.mapbox.com/api/search/geocoding/
2.npm i: https://github.com/mapbox/mapbox-sdk-js
3.geocoding docs: https://github.com/mapbox/mapbox-sdk-js/blob/main/docs/services.md#forwardgeocode
4.npm install @mapbox/mapbox-sdk
5.storing the geojson in mongdodb docs: https://www.mongodb.com/docs/manual/geospatial-queries/
6. mongoose geojson: https://mongoosejs.com/docs/geojson.html
7. displaying the map in webapp 
https://docs.mapbox.com/mapbox-gl-js/example/
8. add a default marker in the map
https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/
9. add a popup marker
https://docs.mapbox.com/mapbox-gl-js/example/popup/
https://docs.mapbox.com/mapbox-gl-js/example/set-popup/
10. map styles
https://docs.mapbox.com/api/maps/styles/
*/
