var jade = require('jade')

module.exports = function(data) {

    var html = jade.renderFile(__dirname + '/templates/table.jade', {
        data: data.data,
        options: data.options
    })

    return html
}