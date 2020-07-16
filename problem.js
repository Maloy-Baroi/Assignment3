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
    console.log("Product Unit can't be fractional");
}
else{
    console.log("Total Needed Wood", woodCalculator(chair_unit, table_unit, bed_unit), "Cubic feet");
}
