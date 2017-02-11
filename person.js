var React = require('react');
var ReactDOM = require('react-dom');

//var Person = function(props) {
    //var name = 'Derek Zoolander';
    //var imageUrl = 'http://mcgrelio.com/gallery/var/albums/vacanze/capodanno2004/capodanno2004_bluesteel/derek.jpg?m=1286923065';
    //var job = 'Male model';
  //  return (
        //<div className="person">
          //  <div className="person-name">{props.name}</div>
          //  <img className="person-img" src={props.imageUrl} />
          //  <div className="person-job">
                //{props.job}
          //  </div>
       // </div>
   // );
//};
 //});


var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

module.exports = Person;
