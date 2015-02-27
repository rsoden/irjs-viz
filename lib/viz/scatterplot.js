var jade = require('jade')

module.exports = function(data, options) {

    var plots = []

    data.data.forEach(function(row) {
        var plot = {
            x: row[0],
            y: row[1],
            r: row[2]
        }
        plots.push(plot)
    })

    var html = jade.renderFile(__dirname + '/templates/scatterplot.jade', {
        data: plots, 
        options: data.options,
        h: data.options['canvas-height'],
        w: data.options['canvas-width']
    })
    
    return html
}