$.getJSON("https://api.countapi.xyz/hit/ditzzsenpai.xyz/visits", function(response) {
    $("#visitor").html(`<i class="fas fa-users text-light" aria-hidden="true"></i> Visitor : `+ response.value + " orang");
});