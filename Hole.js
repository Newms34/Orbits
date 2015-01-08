//stuff
var convert = 1;//This is the unit conversion factor. It defaults to 1 (i.e., 1 kg per kg)
function pickUnit(){
    var unitNames = ['kg','g','lbs','oz','batman','sol','jup','ear'];
    var unitVals = [1,.001,0.453592,0.0283495, 5.7521, 1.9891e30,1.89813e27,5.97219e24];
    var e = document.getElementById("unitList");
    var myUnit = e.options[e.selectedIndex].value;
    convert = unitVals[unitNames.indexOf(myUnit)];
}
function calcMe() {
    var num = document.getElementById('Mass').value;
    var result = document.getElementById('calc');
    var G = 6.67e-11;
    var C =  299792458;
    var prop =((4*G)/(C*C));
    var resultCalc = (num*convert*prop).toPrecision(4);
    var lUnit='meters';//the length unit to use
    if (resultCalc<=1e-35) {
        lUnit = 'an electron!';
    }
    else if (resultCalc<=1e-15) {
        lUnit = 'a proton!';
    }
    else if (resultCalc<=1e-12) {
        lUnit = 'a hydrogen atom!';
    }
    else if (resultCalc<=1e-9) {
        lUnit = 'a virus!';
    }
    else if (resultCalc<=1e-6) {
        lUnit = 'a bacterium!';
    }
    else if (resultCalc<=1e-3) {
        lUnit = 'a golf ball!';
    }
    else if (resultCalc<=1e3) {
        lUnit = 'a person!';
    }
    else if (resultCalc<=1e6) {
        lUnit = 'Mount Everest!';
    }
    else if (resultCalc<=1e9) {
        lUnit = 'the planet Earth!';
    }
    else if (resultCalc<=1e12) {
        lUnit = 'the Sun!';
    }
    else if (resultCalc<=1e15) {
        lUnit = 'the Solar System!';
    }
    else if (resultCalc<=1e18) {
        lUnit = 'one light year!';
    }
    else {
        lUnit = 'the Milky Way!';
    }
    result.innerHTML='To make a black hole, your object would need to be <br/>squashed down to '+resultCalc + ' meters, or smaller than '+ lUnit;
}
var BHNodes = document.getElementsByClassName('BHole');
window.onload=function(){
    //on window load, set up the BH nodes.
    var currCol = 34; //current node's color (blue component)
    for (var i=0; i<BHNodes.length;i++){
        BHNodes[i].style.borderColor='rgb(0,0,'+currCol+')';
        currCol+=6;
    }
}
window.onmousemove = moveBH;
function moveBH(event){
    event = event || window.event; // IE-ism
    // event.pageX and event.pageY contain the mouse position
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    var x = Math.floor(event.pageX - (pageWidth/2));
    var y = Math.floor(event.pageY - $('#BHoleBox').offset().top - 150);
    var thisPercX;
    var thisPercY;
    for (var t=0; t< BHNodes.length;t++){
        thisPercX = (((1064+x)/1064)*5)-2.5;
        BHNodes[t].style.left = thisPercX+'%';
        thisPercY = (((564+y)/564)*5)-2.5;
        BHNodes[t].style.top = thisPercY+'%';
    }

}