//TaskItem obj

define(["knockout", "jquery", "knockout.validation", "ko/extenders"], function (ko, $, validation, extenders) {

    var TaskItem = function (id, title, description, taskDate, status) {
        return ko.validatedObservable({
            Id: ko.observable(id || ""),
            Title: ko.observable(title || "").extend({ required: true }),
            Description: ko.observable(description || ""),
            TaskDate: ko.observable(taskDate).extend({ required: true }),
            Status: ko.observable(status || "")
        });
    };

  
    return TaskItem;
});