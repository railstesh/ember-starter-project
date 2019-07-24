import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("dashboard", { path: "" }, function() {});
  this.route('posts', function() {
  	this.route('new')
  	this.route('show', { path: '/:slug' });
  	this.route('edit', { path: '/:slug/edit' });
  });
});

export default Router;
