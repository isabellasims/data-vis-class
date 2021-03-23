
**Common Reasons DV can fail**
![](pitfalls.png)

**What Why How**

What? do we consider

Why? Do we consider it

How? Do we realize it?
![](WWW.png)

# Intro to D3.JS (part 1)
**Cli side code** = mostly javascript
- code that is running in a browser
- kind of like its own mini op system
- all code runs in browser never on your actual system

**Browser
Server Side
Web Server**
- connected to one or more databases
**Database
OS**

### LAMP ---> describes Backend
- linux
    - server OS, runs application
- Apache
    - server applic
    - handles http reqs
- MySQL
    - DMMS (database management system)
    - stores large amounts of data
    - why: there's not enough space on your own RAM to always store these things
- PHP / Node.js
    - server-side scripting lang
    - provides synamic web content and queries DBMS


####HEPJ ---> the modern day lamp
Heroku/AWS/Docker Container
- instead of running something in Linux, host on a cloud host (still running linux but u dont need physical server)

Express.js(node.js)/Flask (python)
PostgreSQL/MongoDb

JavaScript/Python 
- instead of PHP
- js if node , python if flask

##### Node.js
- server-side javascript
- if u seen "require", code is meant for node.js

##### Heroku
- Cloud-based server for web-based apps
- easy to deploy with git-based command

#### Data Sources
- Flat files
    - CSVs
        - good for when a list of rows can be desribed using exactly same columns - not good for objects w dif attributes
    - JSON
        - more flexible than CSV
    - GeoJSON
        - just JSON with some constraints
        - features ave geometry
        - properties 
    - XML
        - similar to JSON w indented hiarch structure w/objs and attributes
        - formatted differently 
        - Looks like HTML
- Relat DBs
    - stores a lot of data that would not otherwise fit into RAM
    - rel means they are like spreadsheets linked tg through common keys
    - schema of table is rigid (format)
    - 
- SQLite
    - in middle 
    - SQL but w out a server
    - Godwin recommended ... easier than buildng a web server
- NoSLQ (eg. MongoDB)
    - 
- APIs 
    - web APIs
    - call a page through an HTTP request
    - message returns as XML or JSON
    - the format of requests affects type & extent of data returned
    - designed as a middleman to let outsiders have access to portions of info
    
 
 #### HTML
 - HTML files are just text files
    - have HTML files as a suffix using a web server
 - not executable code 
 - opening 
 - you can create a file, save it, & just double click it, but you should never do that
    - security features will keep some things from working
    - won't work if it needs to connect to other files in your dir bc it isn't on a server
 - Opening HTML pages
     - start a python web server via terminal
        - python
            - python -m SimpleHTTPServer 8888
        - python 3
            - python -m http.server 8888
      - type in localhost8888 into browser
        - local host is your machine, code is served on port 8888
        - the thing doing the server is python
     - OR if you're using webstorm, just click the run button
     
- Tags
    - h1 - big title, then h2,h3,h4
    - lists
        z unordered list (bulleted)
            <ul> 
                <li> item</li>
                <li> item</li>
               </ul>
         - ordered list (numbered)
        <ol>
        <li>item</li>
        <li> item</li>
        <item> item </item>
        </ol>
        
     <a> "a" tag tells us something is a link </a>
     
     
 ** in webstorm if you type < you can see a list of tags **
 
 ### DOM (document Object Model)
 - refers to hierarch structure of HTML
 - each tag is an element
 - refer to relationship btwn elements
    - parents
    - child
    - sibling
    - ancestor
    - descendant
    
# If a file is really big, you don't want to start drawing shapes or accessing data b4 it has loaded    

### action target pairs
![](action-target.png)

# Marks and Channels 
### dif types of channels
![](channels.png)
- can be width too

### selecting channels based on data types
![](selecting-channels.png)
- be careful not to use wrong types os channels

### grouping
![](Grouping.png)

### tabular data vis
![](tdata.png)

### how to do what how why
![](texptdata.png)
 
#### another what how why 
![](whwbarchart.png)

# MAPS

#### Types of maps:
![](Screen Shot 2021-02-23 at 2.41.46 PM.png)
- fields = heat map

#### different binning yield different results
![](dif-shapes.png)

#### Tobler's First Law
![](Screen Shot 2021-02-23 at 3.07.16 PM.png)

#### 
![](atrrs.png)

#### Tree maps
![](tmap.png)

####Radial Layouts
![](radial.png)



## 2/26/21

#### scalar field 
![](s field.png)
a lot like an isoline

#### space time problem
![](stproblem.png)


#### Clustering trajectory
![](cluster.png)
- type of bundling
- helpful w/time & movement thru space


####map tools
![](tools.png)

#### map tools
![](tools2.png)
- unfolding = similar to proc - has support for touch & pen support
- geotools = for java
- ArcPy & geopandas = for python
- color brewer = good for chlor map coloring

# NETWORKS
![](network-term.png)
- directed network: cycles
### Node-link diagrams
node/tree terminology
![](node-tree-term.png)
- tree root at root

### network centrality
![](net-cent.png)
- betweenness centrality = trickier. Need to determine shortest paths like closeness, then you need to examine it. Means whatever path you have to take through a network will often fall on shortest path
- - example: call - whatever the shortest path is btwn you and caller, that's the path your network will connect you to

### types of network visualizations
![](types-nets.png)

- #### node link networks
    ![](nets-marks-channels.png)    
    - force-directed trees/placement
        ![](force-dir-trees.png)   
        ![](force-dir-idiom.png) 
        
    - arc diagrams
    ![](arc-dia.png)  
        - shows connections
    ![](nl-sum.png)

- ### adjacency matricies
![](adj-id.png)

- rectolinear layout
    - ordering nodes accross top & sides
    
- node-link represented as adjacency matrix 
![](nl-mat.png)

![](mat-sum.png)
- #### Hive plot
![](hive-plot.png)

# 3/23/21
# Network Analysis
### 8 ways to represent tree based data
![](tbd.png)
- A = most intuitive
- B = same as A but rotated to left
- C = icicle diagram
    - root gets full width, elements below are children, their width indicates how many children they have
- D = radial node length
    - lets you follow paths easily bc of lines
- E = instead of lines, uses adjacency
    - not that dif from C
    - C is to A as D is to E
    - subdividing area to show parent child relationships
- F = uses containment
    - set and subset rela
    - root is outer circle
    - how far u have to go 
- G = tree map
    - rectolinear arrangement & using containment
- H = indented view
    - ex. python, browser inspection
- they're all uniform (each parent has same amt of children)

## Tree maps
![](tmaps.png)
- works well for millions of lead nodes & mils of links

#### tmaps kinds of layoutst
![](tmapsL.png)

#### paralell sets
- use categorical dimensions to subdivide
- subdivide by male & female then again based on whether you survive
![](psets.png)
data for trees doesn't have to use tree-like data, you can form data into a tree
####sunbursts
![](sunburst.png)
#### voronoi & quadtree = also a treemap

### PivotGraphs
![](PGCWWH.png)
- given a large graph / network, we might care most about intersection of categories & how they relate to eacother
- basically a node-link network but rolled up
- rolling up a graph and looking at connections
one key:
![](PGC.png)
- most interested in how many links btwn one category to the next

multiple keys:
![](PGC2.png)
- looking at intersections and connections based on category identities on the left
