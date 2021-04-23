console.log("Test");

var w = 4000;
var h = 1000;
var cellpadding = 400;




function doChart()
{

    var svg = d3.select("#Chart").append("svg")
        .attr("width", w)
        .attr("height", h)

    var gCounts = []
    var hCounts = []
    var sCounts = []
    var total = []

    bins = turf.collect(wards, groceryStorePoints, 'OBJECTID', 'ID');
    counts = bins.features.forEach(d => {
        d.properties.count = d.properties.ID.length; // adds count to properties
        gCounts[d.properties.WARD] = d.properties.count
    });

    bins = turf.collect(wards, hospitalPoints, 'OBJECTID', 'ID');
    counts = bins.features.forEach(d => {
        d.properties.count = d.properties.ID.length; // adds count to properties
        hCounts[d.properties.WARD] = d.properties.count
    });

    bins = turf.collect(wards, schoolPoints, 'OBJECTID', 'ID');
    counts = bins.features.forEach(d => {
        d.properties.count = d.properties.ID.length; // adds count to properties
        sCounts[d.properties.WARD] = d.properties.count
    });

    console.log(counts);
    console.log(gCounts);
    console.log(hCounts);
    console.log(sCounts);
    console.log(bins.features);

    total = gCounts.concat(hCounts.concat(sCounts));

    console.log(total);
    console.log(d3.max(total, function(d){
        return +d;
    }));

    //var groc = svg.append("g").attr("class","Groceries")


    d3.csv('income.csv')
        .then(function(data){
            console.log(data);

            var yScaleMed = d3.scaleLinear()
                .domain([0, d3.max(data, function(d){
                    return +(d.Median);
                })+18000])
                .range([0,h/1.5]);

            var yScaleC = d3.scaleLinear()
                .domain([0, d3.max(total, function(d){
                    return +d;
                })+3])
                .range([0,h/1.5]);

            var colorScaleC = d3.scaleLinear()
                .domain([0, d3.max(total, function(d){
                    return +d;
                })])
                .range([0,255]);

            var medMax = d3.max(data, function(d){
                return +(d.Median);
            });

            var colorScaleMed = d3.scaleLinear()
                .domain([0, medMax/2, medMax])
                .range(['#FFFFFF',"#9ecae1","#004094"]);

            var med = svg.append("g").attr("class", "Median");
            var groc = svg.append("g").attr("class","Groceries")
            var hosp = svg.append("g").attr("class","Hospital")
            var sch = svg.append("g").attr("class","School")

            med.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("width", w / (data.length) - cellpadding)
                .attr("height", h)
                .attr("x", function(d,i){
                    return w/ data.length * i;
                })
                .attr("height", function(d){
                    return yScaleMed(d.Median);
                })
                .attr("y", function(d){
                    return h/1.5 - yScaleMed(d.Median);
                })
                .attr("fill", function(d) {
                    var f = colorScaleMed(d.Median);
                    return f;
                })

            groc.selectAll("rect")
                .data(gCounts)
                .enter()
                .append("rect")
                .attr("width", w / data.length - cellpadding)
                .attr("height", h)
                .attr("x", function(d,i){
                    return w/ data.length * i - 400;
                })
                .attr("height", function(d){
                    return yScaleC(d);
                })
                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })
                .attr("fill", function(d) {
                    //var f = colorScaleC(d);
                    return "rgb(" + 0 + "," + 255 + "," + 0 + ")";
                })

            hosp.selectAll("rect")
                .data(hCounts)
                .enter()
                .append("rect")
                .attr("width", w / data.length - cellpadding)
                .attr("height", h)
                .attr("x", function(d,i){
                    return w/ data.length * i - 300;
                })
                .attr("height", function(d){
                    return yScaleC(d);
                })
                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })
                .attr("fill", function(d) {
                    var f = colorScaleC(d);
                    return "rgb(" + 255 + "," + 0 + "," + 0 + ")";
                })

            sch.selectAll("rect")
                .data(sCounts)
                .enter()
                .append("rect")
                .attr("width", w / data.length - cellpadding)
                .attr("height", h)
                .attr("x", function(d,i){
                    return w/ data.length * i - 200;
                })
                .attr("height", function(d){
                    return yScaleC(d);
                })
                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })
                .attr("fill", function(d) {
                    var f = colorScaleC(d);
                    return "rgb(" + 255 + "," + 255 + "," + 0 + ")";
                })

            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function(d){
                    return d.Ward;
                })
                .attr("transform", function(d, i){
                    return "translate(" + (w / data.length * i + 100) +
                        ","+h/1.35+")"+"scale(4 4)"
                })

            med.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function(d){
                    return "$"+d.Median/1000;
                })
                .attr("transform", function(d, i){
                    return "translate(" + (w / data.length * i) +
                        ","+(h/1.6-yScaleMed(d.Median))+")"+"scale(2 2)"
                })


            groc.selectAll("text")
                .data(gCounts)
                .enter()
                .append("text")
                .text(function(d){
                    return d;
                })
                .attr("transform", function(d, i){
                    return "translate(" + (w / data.length * i -370) +
                        ","+(h/1.6-yScaleC(d))+")"+"scale(2 2)"
                })

            hosp.selectAll("text")
                .data(hCounts)
                .enter()
                .append("text")
                .text(function(d){
                    return d;
                })
                .attr("transform", function(d, i){
                    return "translate(" + (w / data.length * i - 270) +
                        ","+(h/1.6-yScaleC(d))+")"+"scale(2 2)"
                })
            sch.selectAll("text")
                .data(sCounts)
                .enter()
                .append("text")
                .text(function(d){
                    return d;
                })
                .attr("transform", function(d, i){
                    return "translate(" + (w / data.length * i -170) +
                        ","+(h/1.6-yScaleC(d))+")"+"scale(2 2)"
                })
        });
}




/*

 */
