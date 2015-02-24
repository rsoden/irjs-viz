var jade = require('jade')

module.exports = function(data) {

    var circles = []

    data.data.forEach(function(row) {
        var circle = {
            x: row[0],
            y: row[1],
            r: row[2]
        }
        circles.push(circle)
    })

    var html = jade.renderFile(__dirname + '/templates/circles.jade', {
        data: circles, 
        options: data.options,
        h: data.options['canvas-height'],
        w: data.options['canvas-width']
    })

    return html
}