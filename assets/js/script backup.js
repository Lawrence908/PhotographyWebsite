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
    // add a click event listener to the next button
    nextButton.addEventListener("click", function() {
    // get the next thumbnail
    var nextThumb = thumbnails[i+1];
    if (nextThumb) {
    // get the fullsize image url of the next thumbnail
    var nextFullsizeUrl = nextThumb.querySelector("img").src.replace("-thumb", "");
    // set the src attribute of the image element to the next fullsize image url
    fullsizeImage.setAttribute("src", nextFullsizeUrl);
    // update the current thumbnail to the next thumbnail
    currentThumb = nextThumb;
    }
    });

    // add a click event listener to the previous button
    prevButton.addEventListener("click", function() {
    // get the previous thumbnail
    var prevThumb = thumbnails[i-1];
    if (prevThumb) {
      // get the fullsize image url of the previous thumbnail
      var prevFullsizeUrl = prevThumb.querySelector("img").src.replace("-thumb", "");
      // set the src attribute of the image element to the previous fullsize image url
      fullsizeImage.setAttribute("src", prevFullsizeUrl);
      // update the current thumbnail to the previous thumbnail
      currentThumb = prevThumb;
    }
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
  
            // add the new close button element to the fullsize image
            fullsizeImage.appendChild(closeButton);

            // add the new next button element to the fullsize image
            fullsizeImage.appendChild(nextButton);
    
            // add the new previous button element to the fullsize image
            fullsizeImage.appendChild(prevButton);
    
            // add an event listener to the document object that listens for the keydown event
            document.addEventListener("keydown", function(event) {
                // check if the escape key was pressed
                if (event.key === "Escape") {
                    // hide the overlay and remove the image element
                    overlay.style.display = "none";
                    overlay.removeChild(fullsizeImage);
                }
                // check if the left arrow key was pressed
                else if (event.key === "ArrowLeft") {
                    // trigger a click event on the previous button
                    prevButton.click();
                }
                // check if the right arrow key was pressed
                else if (event.key === "ArrowRight") {
                    // trigger a click event on the next button
                    nextButton.click();
                }
            });
    
        });
    
    }
        // add the new close button element to the fullsize image
        fullsizeImage.appendChild(closeButton);

        // add the new next button element to the fullsize image
        fullsizeImage.appendChild(nextButton);

        // add the new previous button element to the fullsize image
        fullsizeImage.appendChild(prevButton);

        // add an event listener to the document object that listens for the keydown event
        document.addEventListener("keydown", function(event) {
            // check if the escape key was pressed
            if (event.key === "Escape") {
                // hide the overlay and remove the image element
                overlay.style.display = "none";
                overlay.removeChild(fullsizeImage);
            }
            // check if the left arrow key was pressed
            else if (event.key === "ArrowLeft") {
                // trigger a click event on the previous button
                prevButton.click();
            }
            // check if the right arrow key was pressed
            else if (event.key === "ArrowRight") {
                // trigger a click event on the next button
                nextButton.click();
            }
        });

    });

});

    

  
  