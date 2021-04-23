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
            'circle-opacity': .5
        }
    };


    const hospitalPointsLayer = {
        'id': 'Hospitals',
        'type': 'circle',
        'source': 'Hospitals',
        'paint': {
            "circle-color" : "rgb(255,0,0)",
            'circle-opacity': .5
        },

    };

    const schoolPointsLayer = {
        'id': 'Schools',
        'type': 'circle',
        'source': 'Schools',
        'paint': {
            "circle-color" : "rgb(255,255,0)",
            'circle-opacity': .5
        },

    };

    const medIncFillLayer = {
        'id': 'medInc-fill',
        'type': 'fill',
        'source': 'wardData',
        'paint': {
            "fill-color": {
                "property": "med",
                "stops": [
                    [medIncExtent[0], "#FFFFFF"],
                    [medIncExtent[1]/2, "#9ecae1"],
                    [medIncExtent[1], "#004094"]

                ]
            },
            'fill-opacity': .8
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

