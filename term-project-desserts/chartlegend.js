var legend = d3.select("#ChartLegend").append("svg")
    .attr("width", 500)
    .attr("height", 200)

var series = ["Median Income","Number  of Grocery Stores","Number  of Hospitals","Number  of Schools"];

//var color = d3.scaleOrdinal().domain(series).range(["#004094","rgb(246,220,255)","rgb(255,0,0)","rgb(255,255,0)"])
var color = d3.scaleOrdinal().domain(series).range(["#004094","rgb(0,255,0)","rgb(255,0,0)","#984ea3"])
//var color = d3.scaleOrdinal().domain(series).range(["#034e7b","rgb(0,255,0)","rgb(255,0,0)","rgb(255,255,0)"])

legend.selectAll("dots")
    .data(series)
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", function(d,i){ return i*55})
    .attr("width", 50)
    .attr("height", 50)
    .style("fill", function(d){ return color(d)})

legend.selectAll("labels")
    .data(series)
    .enter()
    .append("text")
    .attr("x", 80)
    .attr("y", function(d,i) { return 20+ i*26})
    .text(function(d) { return d})
    .style("fill", "rgb(0,0,0)")
    .attr("text-anchor", "left")
    .style("alighment-baseline", "middle")
    .attr("transform", function(d, i){
        return "scale(2 2)"
        });
