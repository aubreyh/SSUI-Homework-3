    window.onload = function() {
        var photoIndex = 0;
        changePhoto();

        function changePhoto() {
            var i;
            var photos = document.getElementsByClassName("photos");
            for (i = 0; i < photos.length; i++) {
               photos[i].style.display = "none";  
            }
            photoIndex++;
            if (photoIndex > photos.length) {
                photoIndex = 1
            }    
            photos[photoIndex-1].style.display = "block";  
            setTimeout(changePhoto, 5000); // Image changes every 3 seconds
        }
    }