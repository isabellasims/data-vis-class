let colArray;
function addIncome(){

    ward1.properties.avg = 153628;
    ward2.properties.avg = 160653;
    ward3.properties.avg = 210694;
    ward4.properties.avg = 143879;
    ward5.properties.avg = 129203;
    ward6.properties.avg = 152637;
    ward7.properties.avg = 64290;
    ward8.properties.avg = 60864;


    ward1.properties.med = 110339;
    ward2.properties.med = 112244;
    ward3.properties.med = 143339;
    ward4.properties.med = 94163;
    ward5.properties.med = 91189;
    ward6.properties.med = 113922;
    ward7.properties.med = 42201;
    ward8.properties.med = 39473;

    // var incOrder = [ward8,ward7,ward5,ward4,ward1,ward2,ward6,ward3];
    // let fills = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#0570b0","#034e7b"];
    //
    //
    //
    // // ward8.properties.fill = "#fff7fb";
    // // ward7.properties.fill = "#ece7f2";
    // // ward5.properties.fill = "#d0d1e6";
    // // ward6.properties.fill = "#d0d1e6";
    //


    let incOrder = [ward8,ward7,ward5,ward4,ward1,ward2,ward6,ward3];
    let fills = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"];

    for(let i = 0; i < fills.length; i ++){
        incOrder[i].properties.fill = fills[i];
    }

    colArray = [ward1.properties.fill,ward2.properties.fill,ward3.properties.fill,ward4.properties.fill,ward5.properties.fill,ward6.properties.fill,ward7.properties.fill,ward8.properties.fill]
    return colArray;

}
