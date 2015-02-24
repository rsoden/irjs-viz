var jade = require('jade')

module.exports = function(data) {

	var bars = []

	data.data.forEach(function(row) {
        var bar = {
            x: row[0],
            width: row[1],
            height: row[2]
        }
        bars.push(bar)
    })

    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        data: bars,
        w: data.options['canvas-width'],
        h: data.options['canvas-height'],
        title: data.options['title']
    })

    return html
}