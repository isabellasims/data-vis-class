function addSources() {
    // add ward line sources to maps
    groceryMap.addSource('wardData', {
        'type': 'geojson',
        'data': wards
    });

    hospitalMap.addSource('wardData', {
        'type': 'geojson',
        'data': wards
    });

    schoolMap.addSource('wardData', {
        'type': 'geojson',
        'data': wards
    });



    // add point sources to maps
    groceryMap.addSource('Groceries', {
        'type':'geojson',
        'data': groceryStorePoints
    });

    hospitalMap.addSource('Hospitals', {
        'type': 'geojson',
        'data': hospitalPoints
    });

    schoolMap.addSource('Schools', {
        'type': 'geojson',
        'data': schoolPoints
    });


}

function addLayers(){
    const wardLayer = {
        'id': 'wardLayer',
        'type': 'line',
        'source': 'wardData',
        'paint': {
            'line-color': 'rgb(0,0,0)'
        }
    };

    const groceryPointsLayer ={
        'id' : 'Groceries',
        'type': 'circle',
        'source': 'Groceries',
        'paint': {
            "circle-color" : "rgb(0,255,0)",
            'circle-opacity': 1
        }
    };


    const hospitalPointsLayer = {
        'id': 'Hospitals',
        'type': 'circle',
        'source': 'Hospitals',
        'paint': {
            "circle-color" : "rgb(255,0,0)",
            'circle-opacity': 1
        },

    };

    const schoolPointsLayer = {
        'id': 'Schools',
        'type': 'circle',
        'source': 'Schools',
        'paint': {
            "circle-color" : "#984ea3",
            'circle-opacity': 1
        },

    };

    let incOrder = [ward8,ward7,ward5,ward4,ward1,ward2,ward6,ward3];
    let fills = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"];
    const medIncFillLayer = {
        'id': 'medInc-fill',
        'type': 'fill',
        'source': 'wardData',
        'paint': {
            "fill-color": {
                "property": "med",
                "stops": [
                     [incOrder[0].properties.med, fills[0]],
                    [incOrder[1].properties.med, fills[1]],
                    [incOrder[2].properties.med, fills[2]],
                    [incOrder[3].properties.med, fills[3]],
                    [incOrder[4].properties.med, fills[4]],
                    [incOrder[5].properties.med, fills[5]],
                    [incOrder[6].properties.med, fills[6]],
                    [incOrder[7].properties.med, fills[7]]

                    // [ward1.properties.med, "#004094"],

               //     8,7,5,4,2,1,6,6

                //    [ward8.properties.med, fills[0]],
                    // [ward1.properties.med, "#004094"],
                    // [medIncExtent[0], "#FFFFFF"],
                    // [medIncExtent[1]/2, "#9ecae1"],
                    // [medIncExtent[1], "#004094"]
                    // ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#0570b0","#034e7b"]

                ]
            },
            'fill-opacity': 1
        }
    };

    // add layers to grocery map
    groceryMap.addLayer(wardLayer);
    groceryMap.addLayer(medIncFillLayer);
    groceryMap.addLayer(groceryPointsLayer);


    // add layers to hospital map
    hospitalMap.addLayer(wardLayer);
    hospitalMap.addLayer(medIncFillLayer);
    hospitalMap.addLayer(hospitalPointsLayer);

    // add layers to school map
    schoolMap.addLayer(wardLayer);
    schoolMap.addLayer(medIncFillLayer);
    schoolMap.addLayer(schoolPointsLayer);


}

