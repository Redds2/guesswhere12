

var markers = [];
var map;

$( document ).ready(function() {
        change_score(0,0,0);
         
            DG.then(function () {
                map = new DG.map('map', {
                    center: [40.0, 10.0],
                    zoom: 2,
                    dragging : true,
                    touchZoom: true,
                    scrollWheelZoom: true,
                    doubleClickZoom: true,
                    boxZoom: true,
                    geoclicker: false,
                    zoomControl: true,
                    fullscreenControl: false,



                });

            });
        
    });

export function update_score_bar(data) {

         let base_width = 200;

            $('.score-bar').each(function() {
                $( this ).text( data[ this.id ] );
                $( this ).css('width',base_width * (data[this.id] / data.played) )
            });


    }


export function change_score(played,guessed,attempt) {


         var $crf_token = $('[name="csrfmiddlewaretoken"]').attr('value');
        $.ajax({
        headers:{"X-CSRFToken": $crf_token},
        url: "/change_score",
        type: "POST",
        data: { played:played,guessed:guessed,first_try: +(attempt==1) ,second_try: +(attempt==2),third_try: +(attempt==3) },
        success: function(data){
         
         update_score_bar(data);


    }
        });

    }
export function clear_map() {

    for (let i = 0; i < markers.length; i++) {

        markers[i].remove();

    }
    }
export function get_random_photo() {

    clear_map();

    $.ajax({
    url: "/get_random_photo",
    type:"GET",
    success: function(data){


        let attempt = 0;
        let done = false;
        for (let i = 0; i < data.length; i++) {
                if (data[i].link) {
                    let point = [data[i].coords.lat,data[i].coords.lon]

                    markers.push( DG.marker(point).addTo(map).bindPopup('Угадали! Ура! <br><a style="font-weight:bold" href="https://maps.google.com/maps?ll='+data[i].coords.lat+','+data[i].coords.lon+'">Посмотреть это меcто в GoogleMaps</a>').on('click', function() { attempt = attempt + 1; if (!done) {done=true; change_score(1,1,attempt) } } ) );
                    $("#photo").css("background-image", "url("+data[i].link+")");
                }
                else {
                    markers.push(DG.marker([data[i].coords.lat, data[i].coords.lon]).addTo(map).bindPopup('Увы! Не попали.').on('click', function() { attempt = attempt + 1; if (attempt==3 && !done) { done=true; change_score(1,0,0) } } ) );

                }
        }


    }
});


};
    

    
export function toggle_two(obj1,obj2) {

        obj1.toggle();
        if (obj1.css('display')!='none') {obj2.css('display','none') }

    }
    
export function get_link() {
    $.ajax({
      url: "/links/get_new_link",
      type: "GET",
      success: function(data) { $("#link").val( 'https://guesswhere12.herokuapp.com/'+data ); }
    })
    }
    