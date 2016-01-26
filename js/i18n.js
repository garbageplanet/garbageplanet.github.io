_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

var template = _.template('<li>{{ name }}</li>');