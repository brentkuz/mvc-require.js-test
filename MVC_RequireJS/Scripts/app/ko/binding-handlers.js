//source: http://knockoutjs.com/examples/animatedTransitions.html

require(["knockout", "jquery", "blockUI"], function (ko, $, blockUI) {    

    ko.bindingHandlers.fadeVisible = {
        init: function (element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
        },
        update: function (element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
        }
    };

    var loader = '<img src="/Content/img/loader.gif" />';
    ko.bindingHandlers.block = {
        init: function (element, valueAccessor) { },
        update: function (element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).block({ message: loader }) : $(element).unblock();
        }
    };

    //ko.bindingHandlers.datepicker = {
    //    init: function (element, valueAccessor) {

    //    },
    //    update: function (element, valueAccessor) {
    //        // Whenever the value subsequently changes, slowly fade the element in or out
    //        var value = valueAccessor();
    //        console.log(value);
    //    }
    //}

})