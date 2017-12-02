var a = 1;
var b = 1;
var value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
    console.log('wynik dodatni');
} else if (value == 0) {
    console.log('wynik równy zero');
} else {
    console.log('wynik ujemny');
}