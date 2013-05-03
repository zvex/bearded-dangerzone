requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'public/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs([ 'jquery', 'socket.io',  ],
function   ($, io,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});

require(["some/script.js"], function() {
    //This function is called after some/script.js has loaded.
});