// Get the date the document was last modified
const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-us');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `last modified on: ${lastModifiedDate} ${lastModifiedTime}`;