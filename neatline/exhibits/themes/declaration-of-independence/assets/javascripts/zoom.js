
/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 * @jsx         React.DOM
 */

Neatline.module('Zoom', function(Zoom) {


  var ZoomButtons = React.createClass({

    /**
     * Render the buttons.
     */
    render: function() {
      return (
        <div className="buttons">
          <div className="btn in" onClick={this.zoomIn}>
            <i className="fa fa-plus" />
          </div>
          <div className="btn out" onClick={this.zoomOut}>
            <i className="fa fa-minus" />
          </div>
        </div>
      );
    },

    /**
     * Zoom the map in.
     */
    zoomIn: function() {
      Neatline.request('MAP:getMap').zoomIn();
    },

    /**
     * Zoom the map out.
     */
    zoomOut: function() {
      Neatline.request('MAP:getMap').zoomOut();
    }

  });


  Zoom.addInitializer(function() {
    React.renderComponent(<ZoomButtons />, $('#zoom').get(0));
  });


});