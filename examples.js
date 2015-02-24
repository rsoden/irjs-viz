var domout = require('./lib/domout')
var viz = require('./lib/viz')
var parse = require('csv-parse')
var fs = require('fs')

// Circles
var circles = {}
circles.options = {
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'black',
	'stroke-width' : '3',
	'fill' :'red'
}

circle_data = fs.readFileSync('./data/circle.csv','utf-8')
parse(circle_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		circles.data = res
		domout.html('<h1>Circles</h1>')
		domout.svg(viz.circles(circles))
	}
})

// Barcharts
var barchart = {}
barchart.options = {
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'black',
	'stroke-width' : '3',
	'fill' :'red',
	'title' : 'Test Bar Chart'
}

barchart_data = fs.readFileSync('./data/barchart.csv','utf-8')
parse(barchart_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		barchart.data = res
		domout.html('<h1>Barchart</h1>')
		domout.svg(viz.barchart(barchart))
	}
})

// Linegraph
var linegraph = {}
linegraph.options = {
	'canvas-height' : '200',
	'canvas-width' : '1500',
	'stroke' : 'black',
	'stroke-width' : '3',
	'fill' :'red',
	'title' : 'Linegraph'
}

linegraph_data = fs.readFileSync('./data/linegraph.csv','utf-8')
parse(linegraph_data, function(err, res) {
	if (err) { console.log(err) }
	else if(res) {
		linegraph.data = res
		domout.html('<h1>Linegraph</h1>')
		domout.svg(viz.linegraph(linegraph))
	}
})