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

let ordScale;


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
    medIncExtent = d3.extent(wards.features, d => { // determine lowest & highest income
        return d.properties.med;
    });

    let colscale = d3.scaleLinear()
        .domain(medIncExtent)
        .range([0, 8]);

    ordScale = d3.scaleOrdinal()
        .domain([0, 8])
        .range(["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#0570b0","#034e7b"]);



    wards.features.forEach(d => {
        d.properties['feature-color'] = ordScale;
    });

    moveToMapPosition (groceryMap, [hospitalMap,schoolMap]);
    syncMaps ();


    function moveToMapPosition (master, clones) {
        var center = master.getCenter();
        var zoom = master.getZoom();
        var bearing = master.getBearing();
        var pitch = master.getPitch();

        clones.forEach(function (clone) {
            clone.jumpTo({
                center: center,
                zoom: zoom,
                bearing: bearing,
                pitch: pitch
            });
        });
    }

// Sync movements of two maps.
//
// All interactions that result in movement end up firing
// a "move" event. The trick here, though, is to
// ensure that movements don't cycle from one map
// to the other and back again, because such a cycle
// - could cause an infinite loop
// - prematurely halts prolonged movements like
//   double-click zooming, box-zooming, and flying
   // let arguments;

    function syncMaps () {
        let arguments = [hospitalMap,groceryMap,schoolMap];
        var maps;
        var argLen = arguments.length;
        if (argLen === 1) {
            maps = arguments[0];
        } else {
            maps = [];
            for (var i = 0; i < argLen; i++) {
                maps.push(arguments[i]);
            }
        }

        // Create all the movement functions, because if they're created every time
        // they wouldn't be the same and couldn't be removed.
        var fns = [];
        maps.forEach(function (map, index) {
            fns[index] = sync.bind(null, map, maps.filter(function (o, i) { return i !== index; }));
        });

        function on () {
            maps.forEach(function (map, index) {
                map.on('move', fns[index]);
            });
        }

        function off () {
            maps.forEach(function (map, index) {
                map.off('move', fns[index]);
            });
        }

        // When one map moves, we turn off the movement listeners
        // on all the maps, move it, then turn the listeners on again
        function sync (master, clones) {
            off();
            moveToMapPosition(master, clones);
            on();
        }

        on();
    }



    console.log(data);

    doChart();
    addSources();
    addLayers();
    addLegend();

}

