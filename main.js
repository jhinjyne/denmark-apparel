// Example AJAX request
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      }
    };
    xhr.send();
  }
  
  // Call the function to fetch data
  fetchData();
  