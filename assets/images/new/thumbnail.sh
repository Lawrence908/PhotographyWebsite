#!/bin/bash

# Set the directory containing your photos
photo_dir="/mnt/c/Users/chris/Documents/GitHub/PhotographyWebsite/assets/images/new"
# This script creates thumbnails for all images titled photoX.jpg



# Loop over each photo in the directory
for photo in $photo_dir/*.jpg; do
  # Set the name of the thumbnail file
  thumb="${photo_dir}/$(basename ${photo} .jpg)-thumb.jpg"
  
  # Create the thumbnail using the convert command
  convert ${photo} -resize 200x200^ -gravity center -extent 200x200 ${thumb}
done
