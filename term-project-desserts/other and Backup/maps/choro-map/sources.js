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



    // ['#fff7fb','#ece7f2','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#045a8d','#023858']
    // ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594']
    const medIncFillLayer = {
        'id': 'medInc-fill',
        'type': 'fill',
        'source': 'wardData',
        'paint': {
            "fill-color": {
                "property": "med",
                "stops": [
                    // [medIncExtent[0], "#f7fbff"],
                    // [medIncExtent[1], "#034e7b"]

                    // [medIncExtent[0], "#FFFFFF"],
                    // [medIncExtent[1], "#6e016b"]

                        [medIncExtent[0], "#FFFFFF"],
                    [medIncExtent[1]/2, "#9ecae1"],
                    [medIncExtent[1], "#004094"]






                ]
            },
            'fill-opacity': .8
        }
    };

    map.addLayer(wardLayer);
    map.addLayer(medIncFillLayer);

}

