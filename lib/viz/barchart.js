var jade = require('jade')

module.exports = function(data) {

    var ys = []
    // Loop through once to build array of y's for normalization
    data.data.forEach(function(row) {
        var y = row[2]
        ys.push(y)
    })

    var max = Math.max.apply(null,ys)
    var min = Math.min.apply(null,ys)

    var bars = []
    var i=1

    // Loop through again to build actual bars
	data.data.forEach(function(row) {

        // normalize data on 0-100 scale
        row[2] = ((row[2]-min)/(max-min)) * 100


        // handle odd requests re: fill color
        switch (data.options.fill) {
            case 'zebra' :
                if (i%2==0) {
                    row.push(data.options.color_odd)                
                }
                else {
                    row.push(data.options.color_even)
                }
                break
            case 'one' :
                if (i==data.options.color_column) {
                    row.push(data.options.color_one)                
                }
                else {
                    row.push(data.options.color_default)
                }
                break
            default :
                row.push(data.options.fill)
                break
        }
    
        // populate bar
        var bar = {
            x: row[0],
            width: row[1],
            height: row[2],
            fill: row[3]
        }

        bars.push(bar)
        i +=1
    })

    // push to jade
    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        data: bars,
        w: data.options['canvas-width'],
        h: data.options['canvas-height'],
        title: data.options['title']
    })

    return html
}