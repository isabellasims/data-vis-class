function addLegend() {
//-------------------------------------
//Legend for the Map

//Spacing the box, ward squares, and text of legend here
    var legendspacing = 25;
    var mappingX = 50;
    var mappingY = 10;

//Black thing box around the text
    var svg = d3.select("#maplegend")
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
