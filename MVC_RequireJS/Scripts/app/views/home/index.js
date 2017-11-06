

define(["knockout", "jquery", "moment", "models/index-vm", "ko/binding-handlers"], function (ko, $, moment, homeIndexVM, bindingHandlers) {  
  
    console.log("Index");
    var vm = new homeIndexVM();
    
    ko.applyBindings(vm, document.getElementById("homeIndexContainer"));
});