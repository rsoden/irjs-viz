var jade = require('jade')

module.exports = function(data) {

	var lines = []

	data.data.forEach(function(row) {
        var line = {
            x1: row[0],
            y1: row[1],
            x2: row[2],
            y2: row[3]
        }
        lines.push(line)
    })

    var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
        data: lines,
        w: data.options['canvas-width'],
        h: data.options['canvas-height'],
        stroke: data.options['stroke'],
        stroke_width: data.options['stroke_width']
    })

    return html
}