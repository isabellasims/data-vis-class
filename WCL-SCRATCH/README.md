# WCL

site I got ward data from: http://open.dc.gov/opendatadc-starterkit/dcopendata_ward_leaflet.html

wards by race: https://dcdataviz.dc.gov/node/1371176
# Things I added to the ward data as properties:

this data is from 2014 - 2018: might be good to find a more current stat

from wards by race URL :
(note: data is % black OR African American which
we should specify with the vis.
property name is PB when accessing)

ward 8: 90

ward 7: 93.1

ward 6: 31.1

ward 5: 65

ward 4: 51.4

ward 3: 7.1

ward 2: 9.2

ward 1: 28.5

overall in dc is 46.9

# data we could use
police sector shapes: https://opendata.dc.gov/datasets/police-sectors


What's done:

[ X ] Base map of DC with district outlines

[ X ] Collected & inspected all data needed

[ X ] Developed Grocery store dot map



Challenges so far:

 - had to switch from WCL (late start)
 - Converting some data for the dot maps into GEOJSON
 - had a short window to choose a new project

 What we're using:
 - mapBox gljs
 - turf.js
 - d3.js

 Updates

 - Gianna: In terms of updates, I worked on adding dot maps of all the grocery stores in D.C. This will later help in collecting all the grocery stores within each ward. Which will be vixulized soon by a barchart histrogram comparison. Problems did occur however when trying to acess the dat due to it being in a CSV format. So to combat that problem I converted it into a GEOjson file to better vizulaize and develop the map easier.

