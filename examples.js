var domout = require('./lib/domout')
var viz = require('./lib/viz')
var parse = require('csv-parse')
var fs = require('fs')


// Barchart
var barchart = {}
barchart.options = {
	'title' : 'Barchart',
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'black',
	'stroke-width' : '3',
	'fill' :'zebra',
	'color_odd': 'blue',
	'color_even': 'red',
	'file' : './data/barchart.csv'
}

barchart_data = fs.readFileSync(barchart.options.file,'utf-8')
parse(barchart_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		barchart.data = res
		domout.html('<h1>' + barchart.options.title + '</h1>')
		domout.svg(viz.barchart(barchart))
	}
})

// Linegraph
var linegraph = {}
linegraph.options = {
	'title' : 'Linegraph',
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'blue',
	'stroke_width' : '2',
	'file' : './data/linegraph.csv'
}

linegraph_data = fs.readFileSync(linegraph.options.file,'utf-8')
parse(linegraph_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		linegraph.data = res
		domout.html('<h1>' + linegraph.options.title + '</h1>')
		domout.svg(viz.linegraph(linegraph))
	}
})

// Scatterplot
var scatterplot = {}
scatterplot.options = {
	'title' : 'Scatterplot',
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'blue',
	'stroke_width' : '2',
	'file' : './data/scatterplot.csv'
}

scatterplot_data = fs.readFileSync(scatterplot.options.file,'utf-8')
parse(scatterplot_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		scatterplot.data = res
		domout.html('<h1>' + scatterplot.options.title + '</h1>')
		domout.svg(viz.scatterplot(scatterplot))
	}
})

// Table
var table = {}
table.options = {
	'title' : 'Table',
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'file' : './data/table.csv',
	'header' : ['name', 'age', 'height', 'weight']
}

table_data = fs.readFileSync(table.options.file,'utf-8')
parse(table_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		table.data = res
		domout.html('<h1>' + table.options.title + '</h1>')
		domout.svg(viz.table(table))
	}
})