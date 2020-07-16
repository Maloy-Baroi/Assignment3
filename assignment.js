// Feet to Mile Conversion 
function feetToMile(given_feetValue){
    let Mile = feet/5280;
    return Mile.toFixed(7);
}

var feet = 10000;
if (feet < 0)
{
    console.log("Feet can't be negative.");
}
else {
    console.log(feet, "Foot = ", feetToMile(feet), "Miles");
}

// <--End 1-->

// Calculate required wood(Cubic feet) for making chair, table, and bed
function woodCalculator(given_unit_chair, given_unit_table, given_unit_bed)
{
    let wood_for_chair = given_unit_chair * 1;
    let wood_for_table = given_unit_table * 3;
    let wood_for_bed = given_unit_bed * 5;
    let total_wood = wood_for_chair + wood_for_table + wood_for_bed;
    return total_wood;
}

var chair_unit = 10;
var table_unit = 5;
var bed_unit = 2;

if (chair_unit < 0 || table_unit < 0 || bed_unit < 0){
    console.log("Product Unit can't be negative.");
}
else if ((Math.round(chair_unit) != chair_unit) || (Math.round(table_unit) != table_unit) || (Math.round(bed_unit) != bed_unit)){
    // example: chair_unit = 5.3;
    console.log("Product Unit can't be fractional");
}
else{
    console.log("Total Needed Wood", woodCalculator(chair_unit, table_unit, bed_unit), "Cubic feet");
}

// <--End 2-->

// Calculate number of bricks for specific height of building

function brickCalulator(number_of_floor)
{
    let brick_for_feet = 1000;
    let total_bricks;
    if(number_of_floor <= 10)
    {
        total_needed_bricks = brick_for_feet * 15 * number_of_floor; 
    }
    else if(number_of_floor > 10 && number_of_floor <=20)
    {
        total_needed_bricks = brick_for_feet * 12 * number_of_floor;
    }
    else if (number_of_floor > 20)
    {
        total_needed_bricks = brick_for_feet * 10 * number_of_floor;
    }
    return total_needed_bricks;
}


var floor_number = 50;
if (floor_number < 0)
{
    // example: floor_number = -3;
    console.log("Not calculating underground.");
}
else if (Math.round(floor_number) != floor_number)
{
    // example: floor_number = 7.5;
    console.log("Floor should be completed. Floor number is not acceptable as fractional.");
}
else {
    console.log("Total needed bricks:", brickCalulator(floor_number));
}
// <--End 3-->

// Finding the smallest length of my friends name.
function tinyFriend(friends_name)
{
    var tinyfriend_name;
    var min = friends_name[0].length;
    for (var i=0; i < friends_name.length; i++)
    {
        if (friends_name[i].length < min)
        {
            tinyfriend_name = friends_name[i];
        }
    }
    return tinyfriend_name;
}

var friends_name = ['Rana', 'Alim', 'Jannat', 'Rifat', 'Eva'];
for(var i = 0; i < friends_name.length; i++)
{
    if (friends_name[i] === '')
    {
        // example: friends_name = ['Rana', 'Alim', 'Jannat', 'Rifat', 'Eva', ''];
        console.log("Array item can't be null");
    }
}
console.log("My tiny friend:", tinyFriend(friends_name));

// <--End 4-->
