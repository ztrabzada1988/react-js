var React = require('react');

var Person = require('./person');

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="http://mcgrelio.com/gallery/var/albums/vacanze/capodanno2004/capodanno2004_bluesteel/derek.jpg?m=1286923065"
                    job="Male Model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever Chap" />
        </div>
    );
};




//var PersonList = React.createClass({
//    render: function () {
//        var people = [];
//        for (var i = 0; i < 5; i++) {
//            people.push( < Person / > );
//        }
//        return (
//            <div className="person-list">
//                {people}
//            </div>
//        );
//    }
//});


module.exports = PersonList;
