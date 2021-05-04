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



            var colorScaleMed = d3.scaleOrdinal()
                .range([0,8])
                //.domain([ward8.properties.med,ward7.properties.med,ward5.properties.med,ward4.properties.med,ward1.properties.med,ward2.properties.med,ward6.properties.med,ward3.properties.med])
                .range(colArray);

            // let incOrder = [ward8,ward7,ward5,ward4,ward1,ward2,ward6,ward3];
            // let fills = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#0570b0","#034e7b"].reverse();

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
             //   .attr("height", h)
                .attr("fill", function(d) {
                    //var f = colorScaleC(d);
                    return "rgb(" + 0 + "," + 255 + "," + 0 + ")";
                })
                .attr("x", function(d,i){
                    return w/ data.length * i - 400;
                })
                .transition()
                .duration(2000)
                .attr("height", function(d){
                    return yScaleC(d);
                })
                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })
                // .attr("fill", function(d) {
                //     //var f = colorScaleC(d);
                //     return "rgb(" + 0 + "," + 255 + "," + 0 + ")";
                // })
                .delay(function(d,i){console.log(i) ; return(i*100)})

            hosp.selectAll("rect")
                .data(hCounts)
                .enter()
                .append("rect")

                .attr("width", w / data.length - cellpadding)
              //  .attr("height", h)

                .attr("x", function(d,i){
                    return w/ data.length * i - 300;
                })
                .attr("fill", function(d) {
                    var f = colorScaleC(d);
                    return "rgb(" + 255 + "," + 0 + "," + 0 + ")";
                })
                .transition()
                .duration(2000)
                .attr("height", function(d){
                    return yScaleC(d);
                })

                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })

                // .attr("fill", function(d) {
                //     var f = colorScaleC(d);
                //     return "rgb(" + 255 + "," + 0 + "," + 0 + ")";
                // })
                .delay(function(d,i){console.log(i) ; return(i*100)})

            // hosp.selectAll("rect")
            //     .transition()
            //     .duration(800)
            //     //.attr("y", function(d) { return y(d.Value); })
            //   //  .attr("height", function(d) { return height - y(d.Value); })
            //     .delay(function(d,i){console.log(i) ; return(i*100)})


               // .delay(function(d,i){console.log(i) ; return(i*100)})

            sch.selectAll("rect")
                .data(sCounts)
                .enter()
                .append("rect")
                .attr("width", w / data.length - cellpadding)
                .attr("x", function(d,i){
                    return w/ data.length * i - 200;
                })
                .attr("fill", function(d) {
                    var f = colorScaleC(d);
                    return "#984ea3"
                    //return "rgb(" + 255 + "," + 255 + "," + 0 + ")";
                })

                .transition()
                .duration(2000)


                // .attr("x", function(d,i){
                //     return w/ data.length * i - 200;
                // })

                .attr("y", function(d){
                    return h/1.5 - yScaleC(d);
                })
                .attr("height", function(d){
                    return yScaleC(d);
                })
                // .attr("fill", function(d) {
                //     var f = colorScaleC(d);
                //     return "rgb(" + 255 + "," + 255 + "," + 0 + ")";
                // })
                .delay(function(d,i){console.log(i) ; return(i*100)});


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
                });




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
                });


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
                });

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
                });
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
