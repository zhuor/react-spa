var React = require("react");
var Router = require("react-router");
var connect= require("client/libraries/tmp_connect");

var sessionStore = require("client/stores/session");
var ImmutableRenderMixin = require("react-immutable-render-mixin");
var authRouteMixin = require("client/mixins/authRoute");

var Profile = React.createClass({
  mixins: [ImmutableRenderMixin, authRouteMixin],
  render: function() {
    return (
      <div>
        <h1>Profile: {this.state.session.get("username")}</h1>
        <span>id: {this.state.session.get("id")}</span>
      </div>
    );
  }
});

module.exports = Profile;
