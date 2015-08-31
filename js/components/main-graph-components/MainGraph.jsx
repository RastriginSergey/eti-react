var React = require('react');
var TimeLine = require('./TimeLine');
var config = require('./config');


var MainGraph = React.createClass({
    componentDidMount: function () {


    },
    render: function() {

        return (
            <svg
                 className='main-graph'>


                MainGraph
                <TimeLine></TimeLine>
            </svg>
        )
    }
});

module.exports = MainGraph;