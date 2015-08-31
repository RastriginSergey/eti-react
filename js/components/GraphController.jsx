var React = require('react');
var MainGraph = require('./main-graph-components/MainGraph');
var InfoPanel = require('./info-panel-components/InfoPanel');

var GraphController = React.createClass({
    componentDidMount: function () {
        console.log('load');
    },
    render: function() {
        return (
            <div>
                <MainGraph></MainGraph>
                <InfoPanel></InfoPanel>
            </div>
        )
    }
});

module.exports = GraphController;