var React = require('react');
var MainGraph = require('./main-graph-components/MainGraph');
var InfoPanel = require('./info-panel-components/InfoPanel');
var config = require('./main-graph-components/config');

var App = React.createClass({
    componentDidMount: function () {
        console.log('load');
    },
    render: function() {
        return (
            <div>
                <MainGraph></MainGraph>
                /*<InfoPanel></InfoPanel>*/
            </div>
        )
    }
});

var element = React.createElement(App);

React.render(element, document.body);
