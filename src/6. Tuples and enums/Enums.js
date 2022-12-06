"use strict";
/*
Enums : Enums doesn't exist in javaScript

Enums allow us to define a set of names constants.
we can give these constans numeric or string values.

There's uite a few options when it comes to enums!
*/
// Numeric Enums
var Resposnse;
(function (Resposnse) {
    Resposnse[Resposnse["no"] = 0] = "no";
    Resposnse[Resposnse["yes"] = 1] = "yes";
    Resposnse[Resposnse["maybe"] = 2] = "maybe";
})(Resposnse || (Resposnse = {}));
(function (Resposnse) {
    Resposnse[Resposnse["no_1"] = 2] = "no_1";
    Resposnse[Resposnse["yes_1"] = 3] = "yes_1";
    Resposnse[Resposnse["maybe_1"] = 4] = "maybe_1";
})(Resposnse || (Resposnse = {}));
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 2] = "no";
    Responses[Responses["yes"] = 10] = "yes";
    Responses[Responses["maybe"] = 24] = "maybe";
})(Responses || (Responses = {}));
