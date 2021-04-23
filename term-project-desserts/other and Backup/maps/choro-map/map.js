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


mapboxgl.accessToken = 'pk.eyJ1IjoiamFnb2R3aW4iLCJhIjoiY2lnOGQxaDhiMDZzMXZkbHYzZmN4ZzdsYiJ9.Uwh_L37P-qUoeC-MBSDteA';

const map = new mapboxgl.Map({
    container: 'map',
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
map.on('load', function(){
    console.log('about to load data');

    Promise.all([
        d3.json(wardGeoJsonUrl),
    ]).then(ready);
});

/**
 * this is where you add your sources & layers to the map
 * Everything that needs to happen after the map loads goes here
 */
function ready(data){
    wards = data;
    wards = wards[0]; // just removing un needed attrs

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

    console.log(data);

    addSources();
    addLayers();
    addLegend();

}

function addLegend() {
//-------------------------------------
//Legend for the Map

//Spacing the box, ward squares, and text of legend here
    var legendspacing = 25;
    var mappingX = 50;
    var mappingY = 10;

//Black thing box around the text
    var svg = d3.select("body")
        .append("svg").attr("width", 800).attr("height", 200)
        .attr("style", "outline: thin solid black;")   

//variables for the maps, and colors +median income 
var maps = ["Ward 1 - Median Income: $110,339" ,"Ward 2 - Median Income: $112,244","Ward 3 - Median Income: $143,339", "Ward 4  - Median Income: $94,163", "Ward 5 - Median Income: $91,189", "Ward 6 - Median Income: $113,922", "Ward 7 - Median Income: $42,201", "Ward 8  - Median Income: $39,473"]; // Add in names for Keys

//each box color
var linear = d3.scaleOrdinal()
    .domain(maps)
    .range(["rgb(51,101,169)", "rgb(46, 73, 123)", "rgb(51,101,169)", "rgb(134,174,207)", "rgb(107,151,195)", "rgb(141,181,213)", "rgb(255,255,255)", "rgb(255,255,255)"]);

var linear2 = d3.scaleOrdinal()
    .domain(maps)
    .range(["rgb(51,101,169)"]); //for the text only of legend 


//svg for the squares
svg.selectAll("series") // Make the squares appear
    .data(maps)
    .enter()
    .append("rect")
    .attr("x", mappingX)   // start x here
    .attr("y", function(d,i){ return mappingY + i*legendspacing}) //squares are underneath each other
    .attr("width", 20) // square width
    .attr("height", 20) // square height
    .attr('stroke', 'black')
    .style("fill", function(d) { return linear(d)}) //returns a color for each box 


//labels for the legend
svg.selectAll("mylabels")
    .data(maps)
    .enter()
    .append("text")
    .attr("x", mappingX+30)
    .attr("y", function(d,i){ return (mappingY+10) + i*legendspacing})
    .style("fill", function(d) { return linear2(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "right")
    .style("alignment-baseline", "middle") //alignment to the box, text to box
    .style("font-size", '25px') // text Size

}
