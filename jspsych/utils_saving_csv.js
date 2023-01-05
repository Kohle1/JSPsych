function download_CSV(csv, filename) {
  var csvFile
  var downloadLink
  // Retrieve csv file from experiment
  csvFile = new Blob( blobParts [csv], options: {type: "text/csv"});

  // Download Link
  downloadLink = document.createElement( tagName: "a");
  
  // Retrive File name
  downloadLink.download = filename;

  // Create a link to th file
  downloadLink.helf = window.URL.createObjectURL (csvFile)
  
  // Hide download link
  downloadLink.style.display = 'none';

  // Add link to the DOM?
  document.body.appendChild(downloadLink);

  downloadLink.click();
}