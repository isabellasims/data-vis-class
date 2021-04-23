# Readme.md: Status Update

## What's Done: 

[ X ] Base map of DC with district outlines

[ X ] Collected & inspected all data needed

[ X ] Developed Grocery store dot map

[ X ] choro map of median income done

[ X ] bar chart of median income done


## What's Left:
[  ] Finish remaining 2 dot maps

[  ] Finish bar chart (add amt grocery stores, schools & hospitals) - dot maps will need to be finished for this step, then we can go foward w/ turf.collect()

[  ] Combine dot maps & choro map

[  ] Put it all together (toggling, filter, & details on demand)

[  ] Host it somewhere (probably going to use github pages for this)


## Progress of current interfaces:

![First Draft of Map](https://github.com/au-cs-infovis-spring21/term-project-desserts/blob/master/images/map_firstdraft.png)

![Second Draft of Map](https://github.com/au-cs-infovis-spring21/term-project-desserts/blob/master/images/map_seconddraft.png)

![Second Draft of Map](https://github.com/au-cs-infovis-spring21/term-project-desserts/blob/master/images/DotMapOfGroceries.png)

![First Draft of Bar Chart](https://github.com/au-cs-infovis-spring21/term-project-desserts/blob/bar-chart/SummaryBarChart.PNG)



Updates for dot map (Gianna): worked on adding dot maps of all the grocery stores in D.C. This will later help in collecting all the grocery stores within each ward. Which will be vixulized soon by a barchart histrogram comparison. Problems did occur however when trying to acess the dat due to it being in a CSV format. So to combat that problem I converted it into a GEOjson file to better vizulaize and develop the map easier.

Bella updates:

basemap: a basemap of DC was created - the basemap is a map of DC with ward shape files

choro map: a choro map has been completed which shades based on median income. The color scaling is done using d3.extent and an ordinal filling methodology for stops. In the future, I'd like to find a better algorithm so every ward can be a different color (atleast slightly) depending on what our dot maps look like on top of the choro map. I found a method using leaflet that let's me add more stops and better customize the scale, but I don't want to impliment this without figuring out how to uniformly distribute the steps in a way that shows more color first.

documentation: the choro folder has an MD file that documents all of the functions. We will use the choro map as the base to add dot maps onto in the future.

file optomization: in the choro folder I structured each file so that it will be easy to add future maps and make neccessary adjustments rather than having all the js code in very long html file. Hopefully this will make our lives a lot easier moving forward

Rempee and Nils update:

Bar Chart: We have created a bar chart where we visualize the median and averages of Household Income by Race/Ethnicity in 2021. We chose to combine both sets to have a stacked bar chart, as well as a seperate visual. Either way, the final will reflect a combination of the two. In addition, we are working on adding text features to navigate the charts clearly, and possibly adding more elements for other details including number of facilities per ward.

 ## What we're using so far:
 ### - mapBox gljs
 ### - d3.js

We decided to focus on average and median household incomes for each ward. The libraries that are used are mapboxgl, turf.js, and d3. The implementation approach has changed due to the data that was altered. We are working to expand this option a bit more. 

Some challenges we have had were with the data and collecting it. We have used two typed of datasets. The manually entered data comes from [DC Health Matters] where it was inserted into a small excel sheet for the bar chart. The first being grocery store locations, and public school data. The third data set we are using is DC Health Matters which has 2021 Demographics. 


## Challenges so far:
 
 - had to switch from WCL (late start)
 - had a short window to choose a new project
 - Converting some data for the dot maps into GEOJSON
 - git collaboration - members had to learn how to branch which we decided was needed to avoid chaos of only using a master branch
 - income data had to be manually inputted because we couldn't find a file with current income levels (we had 2 members check the accuracy of manual input and all  members will check it before final deliverable)


