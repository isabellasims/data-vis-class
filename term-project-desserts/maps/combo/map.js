// globalize variables so they can be accessed in other JS files
const dc = [-77.0090, 38.8898];
let wards;
let ward1;
let ward2;
let ward3;
let ward4;
let ward5;
let ward6;
let ward7;
let ward8;

let medIncExtent;

let groceryStorePoints;
let hospitalPoints;
let schoolPoints;

let colorScale;


mapboxgl.accessToken = 'pk.eyJ1IjoiamFnb2R3aW4iLCJhIjoiY2lnOGQxaDhiMDZzMXZkbHYzZmN4ZzdsYiJ9.Uwh_L37P-qUoeC-MBSDteA';

const groceryMap = new mapboxgl.Map({
    container: 'Grocery-Map',
    center: dc,
    maxZoom: 13,
    minZoom: 10,
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v10'
});

const hospitalMap = new mapboxgl.Map({
    container: 'Hospital-Map',
    center: dc,
    maxZoom: 13,
    minZoom: 10,
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v10'
});

const schoolMap = new mapboxgl.Map({
    container: 'Public-School-Map',
    center: dc,
    maxZoom: 13,
    minZoom: 10,
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v10'
});

// query site for district bounds, might want to download later if stuff gets slow
const wardGeoJsonUrl = "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson";

/**
 * load data here
 * note: open data dc lets you live query - we should load all the data we can this way so that it can auto update over time
 */
groceryMap.on('load', function(){
    console.log('about to load data');

    Promise.all([
        d3.json(wardGeoJsonUrl),
        d3.json('data/Grocery_Store_Locations.geojson'),
        d3.json('data/Hospitals.geojson'),
        d3.json('data/Public_Schools.geojson')
    ]).then(ready);
});

/**
 * this is where you add your sources & layers to the map
 * Everything that needs to happen after the map loads goes here
 */
function ready(data){

    wards = data[0]; // lines & income
    groceryStorePoints = data[1];
    hospitalPoints = data[2];
    schoolPoints = data[3];

    // wards are in a random order so this is for conven if adding attrs to specific wards
    ward1 = wards.features[4];
    ward2 = wards.features[3];
    ward3 = wards.features[6];
    ward4 = wards.features[7];
    ward5 = wards.features[5];
    ward6 = wards.features[1];
    ward7 = wards.features[2];
    ward8 = wards.features[0];

    // adding median & avg incomes from functions in datawork.js
    addIncome();


    // d3 extent for med income by ward to be used for choro map scaling
    medIncExtent = d3.extent(wards.features, d => { // determine which districts have the least and greatest number of calls
        return d.properties.med; // d3.extent determines min & max values of an array
    });



    // colorScale = d3.scaleLinear()
    //     .domain(medIncExtent)
    //     .range([0, 1]);



    console.log(data);

    addSources();
    addLayers();

}

