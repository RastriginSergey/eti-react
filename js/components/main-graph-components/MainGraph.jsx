var React = require('react');
var TimeLine = require('./TimeLine');
var config = require('./config');
var d3 = require('d3');
var $ = require('jquery');


var MainGraph = React.createClass({
    componentDidMount: function () {


    },

    drag: function (selection, fn) {
        var drag = d3.behavior.drag();
        selection.call(drag);

        selection.on('technology.drag', fn);
    },

    removeTechnology: function () {

    },

    createTechnology: function (event) {

        var technology = d3.select('.main-graph')
            .append('div')
            .attr('class', 'technology')
            .text('myDick')
            .style({
                'top': function () {
                    return event.clientY - $(this).height() / 2 + 'px';
                },
                'left': function () {
                    return event.clientX - $(this).width() / 2 + 'px';
                }
            });

        var closeBtn = technology
            .append('div')
            .attr('class', 'technology-close');

        var leftBtn = technology
            .append('div')
            .attr('class', 'technology-left');

        var rightBtn = technology
            .append('div')
            .attr('class', 'technology-right');

        var topBtn = technology
            .append('div')
            .attr('class', 'technology-top');

        var bottomBtn = technology
            .append('div')
            .attr('class', 'technology-bottom');

        technology.on('click', function () {
            console.log(this)
        });

    },
    render: function() {

        return (
            <div className='main-graph'
                 onDoubleClick={this.createTechnology}
                >

                <TimeLine></TimeLine>
            </div>
        )
    }
});

module.exports = MainGraph;