import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Plugin from './Plugin';

//TODO: Move logic from electron/renderer/index.js to this file (AppRegistry)

// Since we are using HtmlWebpackPlugin WITHOUT a template,
// we should create our own root node in the body element before rendering into it.
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Create a HMR enabled render function
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

// Render our plugin
render( Plugin );

if (module.hot) {
    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (message) => { // eslint-disable-line no-console
        if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
            // Log the error as normally
            orgError.apply(console, [message]);
        }
    };

    module.hot.accept('./Plugin', () => {
        // Because Webpack 2 has built-in support for ES2015 modules,
        // you won't need to re-require your app root in module.hot.accept
        render( Plugin );
    });
}