document.addEventListener("DOMContentLoaded", function () {

    // select the fullsize image and buttons
    var fullsizeImage = document.querySelector("#fullsize");
    var closeButton = document.querySelector("#close-button");
    var nextButton = document.querySelector("#next-button");
    var prevButton = document.querySelector("#prev-button");
  
    // select all thumbnail images and add a click event listener to each
    var thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener("click", function () {
        // get the fullsize image url
        var fullsizeUrl = this.querySelector("img").src.replace("-thumb", "");
        // set the src attribute of the image element to the fullsize image url
        fullsizeImage.setAttribute("src", fullsizeUrl);
        // show the fullsize image
        document.querySelector("#preview").classList.add("show");
  
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
  
        // add innerHTML to the close button
        closeImage.innerHTML = "X";
  
        // add innerHTML to the prev button
        prevButton.innerHTML = "<";
  
        // add innerHTML to the next button
        nextButton.innerHTML = ">";
  
        // add a click event listener to the next button
        nextButton.addEventListener("click", function () {
          // get the next thumbnail element
          var nextThumbnail = thumbnail.nextElementSibling;
          // if the next thumbnail exists
          if (nextThumbnail) {
            // get the fullsize image url of the next thumbnail
            var nextFullsizeUrl = nextThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the next fullsize image url
            fullsizeImage.setAttribute("src", nextFullsizeUrl);
          }
        });
  
        // add a click event listener to the previous button
        prevButton.addEventListener("click", function () {
          // get the previous thumbnail element
          var prevThumbnail = thumbnail.previousElementSibling;
          // if the previous thumbnail exists
          if (prevThumbnail) {
            // get the fullsize image url of the previous thumbnail
            var prevFullsizeUrl = prevThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the previous fullsize image url
            fullsizeImage.setAttribute("src", prevFullsizeUrl);
          }
        });
  
        // add a click event listener to the close button
        closeButton.addEventListener("click",
  


    });

    // add a click event listener to the next button
    nextButton.addEventListener("click", function () {
        // get the next thumbnail element
        var nextThumbnail = thumbnail.nextElementSibling;
        // if the next thumbnail exists
        if (nextThumbnail) {
            // get the fullsize image url of the next thumbnail
            var nextFullsizeUrl = nextThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the next fullsize image url
            fullsizeImage.setAttribute("src", nextFullsizeUrl);
        }
    });

    // add a click event listener to the previous button
    prevButton.addEventListener("click", function () {
        // get the previous thumbnail element
        var prevThumbnail = thumbnail.previousElementSibling;
        // if the previous thumbnail exists
        if (prevThumbnail) {
            // get the fullsize image url of the previous thumbnail
            var prevFullsizeUrl = prevThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the previous fullsize image url
            fullsizeImage.setAttribute("src", prevFullsizeUrl);
        }
    });

    // add a click event listener to the close button for the fullsize image
    closeImage.addEventListener("click", function () {
        // hide the fullsize image and remove the next and previous buttons
        overlay.style.display = "none";
        overlay.removeChild(fullsizeImage);
        overlay.removeChild(nextButton);
        overlay.removeChild(prevButton);
    });

    // append the close, next and previous buttons to the overlay
    overlay.appendChild(closeImage);
    overlay.appendChild(nextButton);
    overlay.appendChild(prevButton);
});

});

// select all thumbnail images and add a click event listener to each
var thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(function (thumbnail) {
thumbnail.addEventListener("click", function () {
// get the fullsize image url
var fullsizeUrl = this.querySelector("img").src.replace("-thumb", "");
// set the src attribute of the image element to the fullsize image url
fullsizeImage.setAttribute("src", fullsizeUrl);
// show the fullsize image
document.querySelector("#preview").classList.add("show");

    // update next and previous buttons with new thumbnail list
    updateButtons(this);
});


);

// function to update next and previous buttons with new thumbnail list
function updateButtons(thumbnail) {
// get all thumbnail images
var allThumbnails = document.querySelectorAll(".thumbnail");
// get the index of the current thumbnail
var currentIndex = Array.prototype.indexOf.call(allThumbnails, thumbnail);
// get the next thumbnail element
var nextThumbnail = allThumbnails[currentIndex + 1];
// get the previous thumbnail element
var prevThumbnail = allThumbnails[currentIndex - 1];
// set the next button's thumbnail to the next thumbnail element's image
if (nextThumbnail) {
var nextFullsizeUrl = nextThumbnail.querySelector("img").src.replace("-thumb", "");
nextButton.setAttribute("thumbnail", nextThumbnail);
nextButton.setAttribute("src", nextFullsizeUrl);
} else {
// disable next button if there's no next thumbnail
nextButton.setAttribute("disabled", true);
}
// set the previous button's thumbnail to the previous thumbnail element's image
if (prevThumbnail) {
var prevFullsizeUrl = prevThumbnail.querySelector("img").src.replace("-thumb", "");
prevButton.setAttribute("thumbnail", prevThumbnail);
prevButton.setAttribute("src", prevFullsizeUrl);
} else {
// disable previous button if there's no previous thumbnail
prevButton.setAttribute("disabled", true);
}
}

// add a click event listener to the next button
nextButton.addEventListener("click", function () {
var nextThumbnail = nextButton.getAttribute("thumbnail");
if (nextThumbnail) {
var nextFullsizeUrl = nextThumbnail.querySelector("img").src.replace("-thumb", "");
fullsizeImage.setAttribute("src", nextFullsizeUrl);
updateButtons(nextThumbnail);
}
});

// add a click event listener to the previous button
prevButton.addEventListener("click", function () {
var prevThumbnail = prevButton.getAttribute("thumbnail");
if (prevThumbnail) {
var prevFullsizeUrl = prevThumbnail.querySelector("img").src.replace("-thumb", "");
fullsizeImage.setAttribute("src", prevFullsizeUrl);
updateButtons(prevThumbnail);
}
});

// add a click event listener to the close button
closeButton.addEventListener("click", function () {
// hide the fullsize image and remove the next and previous buttons
document.querySelector("#preview").classList.remove("show");
nextButton.removeAttribute("thumbnail");
prevButton.removeAttribute("thumbnail");
nextButton.removeAttribute("src");
prevButton.removeAttribute("src");
nextButton.removeAttribute("disabled");
prevButton.removeAttribute("disabled");
});

// wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function () {

    // select the fullsize image and buttons
    var fullsizeImage = document.querySelector("#fullsize");
    var closeButton = document.querySelector("#close-button");
    var nextButton = document.querySelector("#next-button");
    var prevButton = document.querySelector("#prev-button");

    // select all thumbnail images and add a click event listener to each
    var thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            // get the fullsize image url
            var fullsizeUrl = this.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the fullsize image url
            fullsizeImage.setAttribute("src", fullsizeUrl);
            // show the fullsize image
            document.querySelector("#preview").classList.add("show");

            // add click event listeners to the next and previous buttons
            nextButton.addEventListener("click", nextImage);
            prevButton.addEventListener("click", prevImage);

            // add click event listener to the close button
            closeButton.addEventListener("click", function () {
                // hide the fullsize image, remove the next and previous buttons, and remove the event listeners
                document.querySelector("#preview").classList.remove("show");
                nextButton.removeEventListener("click", nextImage);
                prevButton.removeEventListener("click", prevImage);
                nextButton.style.display = "none";
                prevButton.style.display = "none";
            });
        });
    });

    // function to display the next image
    function nextImage() {
        // get the next thumbnail element
        var nextThumbnail = document.querySelector(".thumbnail img[src='" + fullsizeImage.src.replace("-thumb", "") + "']").parentNode.nextElementSibling;
        // if the next thumbnail exists
        if (nextThumbnail) {
            // get the fullsize image url of the next thumbnail
            var nextFullsizeUrl = nextThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the next fullsize image url
            fullsizeImage.setAttribute("src", nextFullsizeUrl);
        }
    }

    // function to display the previous image
    function prevImage() {
        // get the previous thumbnail element
        var prevThumbnail = document.querySelector(".thumbnail img[src='" + fullsizeImage.src.replace("-thumb", "") + "']").parentNode.previousElementSibling;
        // if the previous thumbnail exists
        if (prevThumbnail) {
            // get the fullsize image url of the previous thumbnail
            var prevFullsizeUrl = prevThumbnail.querySelector("img").src.replace("-thumb", "");
            // set the src attribute of the image element to the previous fullsize image url
            fullsizeImage.setAttribute("src", prevFullsizeUrl);
        }
    }
});
