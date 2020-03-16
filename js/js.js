ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.8993305, 30.5194076],
            zoom: 7
        });
    
        var myPlacemark = new ymaps.Placemark([59.8993305, 30.5194076], {
            balloonContentHeader: 'Агенство Кирилла Пелиниченко',
            balloonContentBody: 'Штаб-квартира',
            balloonContentFooter: 'в Кудрово',
        });
        
        myMap.geoObjects.add(myPlacemark);
        
        myPlacemark.balloon.open();
    }
