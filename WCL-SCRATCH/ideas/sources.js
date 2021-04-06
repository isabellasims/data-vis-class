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


    console.log(PCBextent);
    console.log("type",PCBextent[0]);

    map.addLayer(wardLayer);
    map.addLayer(PCBfillLayer);


}
