$(document).ready(function(){
    $("#text-input").keyup(function(event){
        var data = $(this).val().split("\n");
        var string = "";
        $.each(data, function(d) {
            string = data + ","
        })
        $("#text-output").text(string.slice(0,-1));
    })
});