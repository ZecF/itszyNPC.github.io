$.getJSON("https://api.countapi.xyz/hit/ditzzsenpai.xyz/visits", function(response) {
    $("#visitor").html(`<i class="fas fa-users text-light" aria-hidden="true"></i> Visitor : `+ response.value + " orang");
});


var favicons_images = [
                    'favicons/d.png',
                    'favicons/i.png',
                    'favicons/t.png',
                    'favicons/z.png',
                    'favicons/y.png',
                    'favicons/zy.png'
                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    // remove current favicons
    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
        
    // add new favicons image
    document.querySelector("head").insertAdjacentHTML('beforeend', '');
    
    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicons_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 200);