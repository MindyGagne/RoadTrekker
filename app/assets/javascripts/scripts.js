
navigator.geolocation.getCurrentPosition(function (pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    $("#lat").text(lat);
    $("#lng").text(lng);
    var url = '<a href="http://maps.google.com/maps?q=' + lat + ',' + lng + '>Your Location</a>';

    $("#url").html(url);

    var daddr = "+1231+E+Mission+Ave,+Spokane,+WA+99207";
    var saddr = lat + ',' + lng

    var urlDirection = '<a href="http://maps.google.com/maps?q=daddr=' + daddr + '&saddr=' + saddr + '"></a>';
    $("#urldir").html(urlDirection);

    var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d47.728427599999996!2d-117.35238059999999!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';

    $(".directions").html(dir_map);
});

$(document).ready(function () {
    
    $('#submit').click(function () {
        //variables to store the start and destination locations
        var daddr = $("#end").val();
        var saddr = $("#start").val();
        //var daddr_state = $("#end_state").val();
        //var saddr_state = $("#start_state").val();

        // these just show what's in the variables in the top left of index page
        $("#lat").text(daddr);
        $("#lng").text(saddr);

//these are different ways I have tried to get the map from google
//var urlDirection = "http://maps.google.com/maps?daddr=" + daddr + '&saddr=' + saddr
//var dir_map = '<iframe src="http://maps.google.com/maps?daddr=" + daddr + "&saddr=" + saddr></iframe>'
//$("#urldir").html(urlDirection);

//var dir_map = '<iframe src="https://www.google.com/maps/dir/' + saddr + ',+' + saddr_state + '/' + daddr + ',+' + daddr_state + '/@36.1902922,-105.6427175,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864c19f77b45974b:0xb9ec9ba4f647678f!2m2!1d-96.7969879!2d32.7766642!1m5!1m1!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!2m2!1d-104.990251!2d39.7392358" width="600" height="450" frameborder="0" style="border:0"></iframe>';
//     var dir_map = '<iframe src="https://www.google.com/maps/dir/3210+E+44th+Ave,+Spokane,+WA/1209+E+Mission+Ave,+Spokane,+WA+99202/@47.6390674,-117.4113776,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x549e23ab3516ca8f:0x44a0e586249abf23!2m2!1d-117.361875!2d47.611601!1m5!1m1!1s0x549e18c1747b1501:0xa449b1790eac640!2m2!1d-117.3915283!2d47.6719452"></iframe>';
//     var dir_map = '<iframe src="https://maps.googleapis.com/maps/api/directions/json?origin=' + saddr + ',' + saddr_state + '&destination=' + daddr + ',' + daddr_state + '%2C%20United%20States&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>';
//var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="' + urlDirection + '"key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>'
//var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin="'  + saddr + '"%2C%20' + saddr_state + '%2C%20United%20States&destination="' + daddr + '"%2C%20' + daddr_state + '%2C%20United%20States&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>'
//        var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=Spokane%2C%20WA%2C%20United%20States&destination=Phoenix%2C%20AZ%2C%20United%20States&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>'

//$(".directions").html(dir_map);

//var urlDirection = '<a href="http://maps.google.com/maps?daddr=' + daddr + '&saddr=' + saddr + '"></a>';
//$("#urldir").html(urlDirection);
//
////var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d47.728427599999996!2d-117.35238059999999!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';
var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d6594345.042848299!2d-105.64041557294979!3d36.19343439229377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C+CO!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C+TX!3m2!1d32.7766642!2d-96.79698789999999!5e0!3m2!1sen!2sus!4v1422749982527" width="600" height="450" frameborder="0" style="border:0"></iframe>'
        $(".directions").html(dir_map);

    })

})