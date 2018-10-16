'use strict';'use strict';

/*
 * Require the path module
 */
const path = require('path');

const _ = require('lodash');
/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'FooCorp Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.components.set('ext', '.hbs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.set('server.sync', true); // default is false

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');


// NOT WORKING vvvv
const hbs = require('@frctl/handlebars')({
  helpers: {
      concat: function(...params) {
          // Ignore the object appended by handlebars.
            if (params[params.length - 1]) {
                params.pop();
            }

        return params.join('');
      }
  }
});


fractal.components.set('engine', hbs);

// Docs config
fractal.docs.set('engine', hbs);
fractal.docs.set('ext', '.md');


const instance1 = fractal.components.engine(hbs);
/// ^^^^^^

const instance2 = fractal.docs.engine(hbs);

// Not the same instance - possible bug?
console.log(instance1.handlebars === instance2.handlebars);

// vvvWORKING vvvv
// const instance = fractal.components.engine();

// Using handlebars-layouts (https://www.npmjs.com/package/handlebars-layouts)

const layouts = require('handlebars-layouts');
layouts.register(instance1.handlebars);

// Using handlebars-helpers (https://github.com/assemble/handlebars-helpers)

const helpers1 = require('handlebars-helpers');
const helpers2 = require('handlebars-helpers');

helpers1({
  handlebars: instance1.handlebars
});
helpers2({
  handlebars: instance2.handlebars
})




