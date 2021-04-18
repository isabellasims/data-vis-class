const dc = [-77.0090, 38.8898];
let drawPoints = true;

mapboxgl.accessToken = 'pk.eyJ1IjoiamFnb2R3aW4iLCJhIjoiY2lnOGQxaDhiMDZzMXZkbHYzZmN4ZzdsYiJ9.Uwh_L37P-qUoeC-MBSDteA';


const map = new mapboxgl.Map({
    container: 'map',
    center: dc,
    maxZoom: 13,
    minZoom: 10,
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v10'
});



map.on('load', function(){
    console.log('about to load data');
    d3.json('map/Grocery_Store_Locations.geojson')

        .then(ready);

})


function ready(data){

    console.log("data loading complete");


    map.addSource('Groceries', {
        'type':'geojson',
        'data': data
    })

    const callPoints = map.addLayer({
        'id' : 'Groceries',
        'type': 'circle',
        'source': 'Groceries',
        'paint': {
            'circle-opacity': 0.4
        }
    })


    }
