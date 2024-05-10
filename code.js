let x = 0;
let y = 1;
let page = 1;

function right() {
if (page < 22) {
page += 1;
refreshPage()
}} function left() {
if (page > 1) {
page -= 1;
refreshPage()
}} function refreshPage() {
display('pd',"page " + page)
let i = 1;
let m = 0;
while (i<6) {
m = i + 5 * page - 6
z = shortenNumber(10 ** m)
n = shortenNumber(50 * 10 ** m)
display('shop' + i,'+'+z+' points per click <b>(cost: '+n+' points)</b>')
i++
}}
function cl() {
x += y;
display('score',"Score is " + shortenNumber(x) + " points")
}
function by(a, b) {
let mu = Math.pow(100000, page - 1);
let ga = a * mu;
let pr = b * mu;

if (x >= pr) {
y = y + ga;
x = x - pr;
display('ppc',"You get " + shortenNumber(y) + " points per click")
display('score',"Score is " + shortenNumber(x) + " points")
}} function display(id,some) {
document.getElementById(id).innerHTML=some;
} function shortenNumber(number) {
const suffixes = ["", "k", "m", "b", "qd", "qt", "sx", "sp", "oc", "no", "dc", "udc", "ddc", "tdc", "qtdc", "qndc", "sxdc", "spcd", "ocdc", "nodc", "vg", "uvg", "dvg", "tvg", "qtvg", "qnvg", "sxvg", "spvg", "ocvg", "novg", "td", "utg", "dtg", "ttg", "qttg", "qntg", "sxtg", "sptg"];
const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);
const shortNumber = number / Math.pow(1000, suffixIndex);
let roundedNumber;
if (shortNumber >= 100) {
roundedNumber = parseFloat(shortNumber.toFixed(0));
} else if (shortNumber >= 10) {
roundedNumber = parseFloat(shortNumber.toFixed(1));
} else {
roundedNumber = parseFloat(shortNumber.toFixed(2));
}
const result = roundedNumber + suffixes[suffixIndex];
return result;
}
