

require(["knockout", "moment", "knockout.validation"], function (ko, moment, validation) {
    console.log("extenders");
    //check if date is valid using momentjs
    ko.validation.rules["validDate"] = {
        validator: function (val, otherVal) {
            console.log(val);
            var date = moment(val);
            return date.isValid();
        },
        message: "Invalid date"
    };



    ko.validation.registerExtenders();
})