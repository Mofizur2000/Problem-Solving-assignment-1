

// 1. KILOMETRE TO METER START

function kilometreToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
// 1. KILOMETRE TO METER END

// 2. BUDGT CALCULATOR START
function budgetCalculator(watch, mobile, laptop) {
    var preiceOfWatch = watch * 50;
    var preiceOfMobile = mobile * 100;
    var preiceOfLaptop = laptop * 500;
    var total = preiceOfWatch + preiceOfMobile + preiceOfLaptop;
    return total;
}
// 2. BUDGT CALCULATOR END

// 3. HOTEL COST START
function hotelCost(stay) {
    var cost = 0;
    if (stay <= 10) {
        cost = stay * 100;
    } else if (stay <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = stay - 10;
        var secound10Days = remainingDays * 80;
        cost = first10Days + secound10Days;
    } else {
        var first10Days = 10 * 100;
        var secound10Days = 10 * 80;
        var remainingDays = stay - 20;
        var aftersecound10Days = remainingDays * 50;
        cost = first10Days + secound10Days + aftersecound10Days;
    }
    return cost;
}
// 3. HOTEL COST END

// 4. MEGA FRIEND START
function megaFriend(bigword) {
    var word = "";
    for (var i = 0; i < bigword.length; i++) {
        if (word.length < bigword[i].length) {
            word = bigword[i];
        }
    }
    return word;
}
// 4. MEGA FRIEND END