

define(["knockout", "jquery", "moment", "services/task-service", "objects/task-item"], function (ko, $, moment, taskService, taskItem) {
    var HomeIndexVM = function () {
        var self = this;
        self.tasks = ko.observableArray([]);
        self.newTask = new taskItem();
        self.newTaskVisible = ko.observable(false);
        self.blockNewTask = ko.observable(false);
        self.blockTasks = ko.observable(false);

        self.refresh = function () {
            self.blockTasks(true);
            taskService.getTasks().then(function (resp) {   
                var ts = [];
                $.each(resp, (idx, val) => {
                   ts.push(new taskItem(val.Id, val.Title, val.Description, moment(val.TaskDate).format("lll"), val.Status));
                })
                self.tasks(ts);
                self.blockTasks(false);
            });
        };
        self.addNew = function () {
            if (self.newTask.isValid()) {
                self.blockNewTask(true);
                taskService.addTask(self.newTask()).then(function (resp) {
                    self.blockTasks(false);
                })
            }
        };
        self.showNewTask = function () {
            self.newTaskVisible(!self.newTaskVisible());
        };
        self.cancelNewTask = function () {
            self.newTaskVisible(false);
            self.newTask = new taskItem();
        };

        //init
        self.refresh();
    };


    return HomeIndexVM;
});