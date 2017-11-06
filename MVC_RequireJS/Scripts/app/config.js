requirejs.config({
    baseUrl: "/Scripts/app",
    paths: {
        "knockout": "/Scripts/knockout-3.4.2",
        "knockout.validation": "/Scripts/knockout.validation.min",
        "jquery": "/Scripts/jquery-1.10.2.min",
        "blockUI": "/Scripts/block-ui",
        "moment": "/Scripts/moment.min",
        "bootstrap": "/Scripts/bootstrap.min"
    },
    shim: {
        "blockUI": {
            deps: ["jquery"]
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

