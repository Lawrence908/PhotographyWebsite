// wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function () {

    // select the fullsize image and buttons
    var fullsizeImage = document.querySelector("#fullsize");
    var closeButton = document.querySelector("#close-button");
    var nextButton = document.querySelector("#next-button");
    var prevButton = document.querySelector("#prev-button");
    
    // select all thumbnail images and add a click event listener to each
    var thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        // get the fullsize image url
        var fullsizeUrl = this.querySelector("img").src.replace("-thumb", "");
        // set the src attribute of the image element to the fullsize image url
        fullsizeImage.setAttribute("src", fullsizeUrl);
        // show the fullsize image
        document.querySelector("#preview").classList.add("show");
      });
    });
    
        // loop through each thumbnail
        for (var i = 0; i < thumbnails.length; i++) {
    
            // add click event listener to thumbnail
            thumbnails[i].addEventListener("click", function () {
    
                // get the fullsize image url
                var fullsizeUrl = this.querySelector("img").src.replace("-thumb", "");
    
                // create a new image element
                var fullsizeImage = document.createElement("img");
    
                // set the src attribute to the fullsize image url
                fullsizeImage.setAttribute("src", fullsizeUrl);
    
                // set the image style to fit the screen
                fullsizeImage.style.maxWidth = "100%";
                fullsizeImage.style.maxHeight = "100%";
                fullsizeImage.style.margin = "auto";
    
                // create a new overlay element
                var overlay = document.createElement("div");
    
                // create a new close button element
                var closeButton = document.createElement("button");
    
                // add a class to the overlay element
                overlay.classList.add("overlay");
    
                // add a class to the close button element
                closeButton.classList.add("close-button");
    
                // add a click event listener to the close button
                closeButton.addEventListener("click", function () {
                    // hide the overlay and remove the image element
                    overlay.style.display = "none";
                    overlay.removeChild(fullsizeImage);
                });
    
                // add the new image element to the overlay element
                overlay.appendChild(fullsizeImage);
    
                // add the new close button element to the overlay element
                overlay.appendChild(closeButton);
    
                // add the overlay element to the body
                document.querySelector("body").appendChild(overlay);
    
                // show the overlay
                overlay.style.display = "block";
    
                // create a new close button element for fullsize image
                var closeImage = document.createElement("button");
    
                // create a new next button element
                var nextButton = document.createElement("button");
    
                // create a new previous button element
                var prevButton = document.createElement("button");
    
                // add a class to the close button element
                closeImage.classList.add("close-button");
    
                // add a class to the next button element
                nextButton.classList.add("next-button");
    
                // add a class to the previous button element
                prevButton.classList.add("prev-button");
    
                // add a click event listener to the close button
                closeImage.addEventListener("click", function () {
                    // hide the overlay and remove the image element
                    overlay.style.display = "none";
                    overlay.removeChild(fullsizeImage);
                });
    
                // add the new close button element to the fullsize image
                fullsizeImage.appendChild(closeImage);
    
                // create a new close button element
                var closeButton = document.createElement("button");
    
                // add a class to the close button element
                closeButton.classList.add("close-button");
    
                // add innerHTML to the close button
                closeButton.innerHTML = "X";
    
                // add innerHTML to the prev button
                prevButton.innerHTML = "<";
    
                // add innerHTML to the next button
                nextButton.innerHTML = ">";
    
                // add a click event listener to the close button
                closeButton.addEventListener("click", function () {
                    // hide the overlay and remove the image element
                    overlay.style.display = "none";
                    overlay.removeChild(fullsizeImage);
                });
    
                // define a variable to keep track of the current thumbnail
                var currentThumb = null;
    
                // add a click event listener to the next button
                nextButton.addEventListener("click", function() {
                    currentThumb = currentThumb === null ? 0 : currentThumb;
                    currentThumb++;
                    if (currentThumb >= thumbnails.length) {
                    currentThumb = 0;
                    }
                    var nextThumb = thumbnails[currentThumb];
                    var nextFullsizeUrl = nextThumb.querySelector("img").src.replace("-thumb", "");
                    fullsizeImage.setAttribute("src", nextFullsizeUrl);
                });
                
                // add a click event listener to the previous button
                prevButton.addEventListener("click", function() {
                    currentThumb = currentThumb === null ? 0 : currentThumb;
                    currentThumb--;
                    if (currentThumb < 0) {
                    currentThumb = thumbnails.length - 1;
                    }
                    var prevThumb = thumbnails[currentThumb];
                    var prevFullsizeUrl = prevThumb.querySelector("img").src.replace("-thumb", "");
                    fullsizeImage.setAttribute("src", prevFullsizeUrl);
                });
    
            // add an event listener to the document object that listens for the keydown event
            document.addEventListener("keydown", function(event) {
                // check if the event key is ArrowRight or ArrowDown
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    // trigger the click event on the next button
                    nextButton.click();
                }
                // check if the event key is ArrowLeft or ArrowUp
                else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    // trigger the click event on the previous button
                    prevButton.click();
                }
                // check if the event key is Escape
                else if (event.key === "Escape") {
                    // trigger the click event on the close button
                    closeButton.click();
                }
            });
    
                // function to close the full-screen preview
                function closePreview() {
                // hide the fullsize image
                document.querySelector("#preview").classList.remove("show");
                }
    
                // add the new image element to the overlay element
                overlay.appendChild(fullsizeImage);
    
                // add the new close button element to the overlay element
                overlay.appendChild(closeButton);
    
                // add the new next button element to the overlay element
                overlay.appendChild(nextButton);
    
                // add the new previous button element to the overlay element
                overlay.appendChild(prevButton);
    
                // add the overlay element to the body
                document.querySelector("body").appendChild(overlay);
    
                // show the overlay
                overlay.style.display = "block";
    
            });
    
        }
    
    });
    
    
    
    