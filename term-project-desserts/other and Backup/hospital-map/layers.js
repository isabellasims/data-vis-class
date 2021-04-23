function addSrc() {
    map.addSource('Groceries', {
        'type': 'geojson',
        'data': hospitals
    });

    const callPoints = map.addLayer({
        'id': 'Groceries',
        'type': 'circle',
        'source': 'Groceries',
        'paint': {
            'circle-opacity': .5
        },
        filter: ['==', '$id', 3]
    });
}
