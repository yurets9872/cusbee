$(document).ready(function () {
 resizeDiv();
});

window.onresize = function (event) {
 resizeDiv();
};

function resizeDiv() {
 vpw = $(window).width();
 vph = $(window).height(); 
 $('.pagespan').css({ 'padding-top': vph*0.08 + "px"});

 $('.example .pages').css({ 'margin-top': vph*0.04 + "px"});


}
