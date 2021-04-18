function addSources() {
    map.addSource('wardData', {
        'type': 'geojson',
        'data': wards
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

    const PCBfillLayer = {
        'id': 'PCB-fill',
        'type': 'fill',
        'source': 'wardData',
        'paint': {
            "fill-color": {
                "property": "PCB",
                "stops": [ // ordinal filling methodology
                    [PCBextent[0], "white"],
                    [PCBextent[1], "blue"]
                    // ADDS COL BREWER
                    // [districtExtent[0], '#ffeda0'], // using color brewer
                    // [districtExtent[1]*0.5, '#feb24c'],
                    // [districtExtent[1], '#f03b20']
                ]
            },
            'fill-opacity': 0.4
        }
    };

    const medIncFillLayer = {
        'id': 'medInc-fill',
        'type': 'fill',
        'source': 'wardData',
        'paint': {
            "fill-color": {
                "property": "med",
                "stops": [ // ordinal filling methodology
                    [medIncExtent[0], "white"],
                    [medIncExtent[1], "blue"]
                    // // ADDS COL BREWER
                    // [medIncExtent[0], '#ffeda0'], // using color brewer
                    // [medIncExtent[1]*0.5, '#feb24c'],
                    // [medIncExtent[1], '#f03b20']

                    // [medIncExtent[0] *.05, '#f7fbff'],
                    // [medIncExtent[0], '#d9f1ff'], // using color brewer
                    // //[medIncExtent[0] *.05, '#f7fbff'],
                    // [medIncExtent[1]*0.5, '#9ecae1'],
                    // [medIncExtent[1], '#084594']

                ]
            },
            'fill-opacity': 0.4
        }
    };


    console.log(PCBextent);
    console.log("type",PCBextent[0]);

    map.addLayer(wardLayer);
    map.addLayer(medIncFillLayer);
    //map.addLayer(PCBfillLayer);


}
