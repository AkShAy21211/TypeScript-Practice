"use strict";
//numberic enum
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["down"] = 9] = "down";
    Direction[Direction["up"] = 4] = "up";
    Direction[Direction["right"] = 8] = "right";
})(Direction || (Direction = {}));
//string enum
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
    Status["ONHOLD"] = "ONHOLD";
    Status["ONSTOP"] = "ONSTOP";
})(Status || (Status = {}));
console.log(Status);
function appStatus(status) {
    console.log(status);
}
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('Dominoz')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'Dominoz')
        return 3;
}
var Demo;
(function (Demo) {
    Demo[Demo["A"] = 0] = "A";
    Demo[Demo["B"] = 1] = "B";
    Demo[Demo["C"] = 2] = "C";
})(Demo || (Demo = {}));
function dis(obj) {
    return obj.A;
}
console.log(dis(Demo));
