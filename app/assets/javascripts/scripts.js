
    navigator.geolocation.getCurrentPosition(function (pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        $("#lat").text(lat);
        $("#lng").text(lng);
        var url = '<a href="http://maps.google.com/maps?q=' + lat + ',' + lng + '>Your Location</a>';

        $("#url").html(url);

        var daddr = "+1231+E+Mission+Ave,+Spokane,+WA+99207";
        var saddr = lat + ',' + lng;

        var urlDirection = '<a href="http://maps.google.com/maps?q=daddr=' + daddr + '&saddr=' + saddr + '"></a>';
        $("#urldir").html(urlDirection);

        var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d47.728427599999996!2d-117.35238059999999!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';

        $(".directions").html(dir_map);
    });

$(document).ready(function () {
    $('#submit').click (function () {
        //variables to store the start and destination locations
        var daddr = $("#end").val();
        var saddr = $("#start").val();
        var daddr_state = $("#end_state").val();
        var saddr_state = $("#start_state").val();

        // these just show what's in the variables in the top left of index page
        $("#lat").text(daddr);
        $("#lng").text(saddr);

        //these are different way I have tried to get the map from google
        //var urlDirection = "http://maps.google.com/maps?daddr='" + daddr + ",+" + daddr_state + "'&saddr='" + saddr + ",+" + saddr_state + "'";
        //var urlDirection = "origin=" + saddr + "," + saddr_state + "&destination=" + daddr + "," + daddr_state;
        //var urlDirection = saddr + ", " + saddr_state + "&destination=" + daddr + ", " + daddr_state;
        var urlDirection = "https://www.google.com/maps/embed/v1/directions?&origin=" + saddr + "%2C%20" + saddr_state + "&destination=" + daddr + "%2C%20" + daddr_state + "&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA></iframe>";
        $("#urldir").html(urlDirection);

        //$("#urldir").html("https://www.google.com/maps/dir/Spokane,+WA/Oakland,+CA/@42.6473921,-124.8106265,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x549e185c30bbe7e5:0xddfcc9d60b84d9b1!2m2!1d-117.4260466!2d47.6587802!1m5!1m1!1s0x80857d8b28aaed03:0x71b415d535759367!2m2!1d-122.2711137!2d37.8043637")

        //var dir_map = '<iframe src="https://www.google.com/maps/dir/' + saddr + ',+' + saddr_state + '/' + daddr + ',+' + daddr_state + '/@36.1902922,-105.6427175,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864c19f77b45974b:0xb9ec9ba4f647678f!2m2!1d-96.7969879!2d32.7766642!1m5!1m1!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!2m2!1d-104.990251!2d39.7392358" width="600" height="450" frameborder="0" style="border:0"></iframe>';

        //var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="' + urlDirection + '"key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>'
        //var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin="'  + saddr + '"%2C%20' + saddr_state + '%2C%20United%20States&destination="' + daddr + '"%2C%20' + daddr_state + '%2C%20United%20States&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>'
        //var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=Spokane%2C%20WA%2C%20United%20States&destination=Phoenix%2C%20AZ%2C%20United%20States&key=AIzaSyD-dLh3Bbh0_NbTfwUKoRuem-9vbXUbfSA"></iframe>';
        var dir_map = '<iframe onchange="" width="800" height="420" frameborder="0" style="border:0" src=' + urlDirection;


        $(".directions").html(dir_map);
   });
})
