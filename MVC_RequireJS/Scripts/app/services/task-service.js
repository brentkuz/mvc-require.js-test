//Service to call Task controller

define(["jquery"], function ($) {

    return {
        //Get all
        getTasks: function () {
            return $.getJSON("/api/Task").then(function (resp) {
                return resp;
            });
        },
        addTask: function (task) {
            return $.post("/api/Task", task).then(function (resp) {
                return resp;
            });
        }
    };
    
});