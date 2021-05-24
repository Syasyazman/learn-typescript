var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// typescript files can't be executed in browsers
var a = "1";
var hello = "world";
// type stays consistent for each variable defined
var bye = "world"; // var bye is of type string
// functions
// specify type of parameters as well as what is returned
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("syasya", "azman"));
// objects
var user1 = {
    name: "syasya",
    age: 21
};
;
var user2 = {
    name: "syafiq", age: 18
};
// types and properties
// recommended to use default values for variables
var username = "alex";
var pageName = "1"; // union operator for values of diff types
var errorMessage = null; // set by default null
var user3 = null;
// for better readability and compartmentalisation
var popularTags = ['dragon', 'coffee'];
var dragonsTag = null;
// any/void/never/unknown
// void is a set of undefined and null
var doSomething = function () {
    console.log("do something");
};
var foo = "foo"; // silver bullets for all your problems ...
var doNothing = function () {
    // function that never ends
    throw "never";
};
var unknown = 10; // cannot assign unknown directly in another type
// type assertion / type casting
// let s2: string = (string) unknown;
var s3 = unknown;
// working with DOM
var page = "1";
var pageNo = page; // type assertion
// type script does not know about markup
// can use type casting too
var someElement = document.querySelector('.foo');
// listener
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
// creating classes in typescript
// all classes are public by default
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var currUser = new Person("syafiq", "azman");
console.log(currUser.getFullName());
// inheritance
// child can use parent's methods
// consider overrides and overwrites
// consider private constructors
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, editor) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.editor = editor;
        return _this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(Person));
// generic interfaces and functions
var addId = function (obj) {
    var id = Math.random();
    return __assign(__assign({}, obj), { id: id });
};
var result = addId(user3); // explicit declaration
var user4 = {
    name: "jack",
    data: "foo"
};
// enums
// popular in static type languages ! enums is a datatype
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
// highly recommended to name the enum properly
var Status;
(function (Status) {
    Status[Status["NOTSTARTED"] = 0] = "NOTSTARTED";
    Status[Status["INPROGRESS"] = 1] = "INPROGRESS";
    Status[Status["DONE"] = 2] = "DONE";
})(Status || (Status = {}));
console.log(Status.DONE); // can use as value as well as datatype
var notStartedStatus = Status.NOTSTARTED;
