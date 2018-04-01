// listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    var bookmark = {
        name: siteName,
        url: siteURL
    }

    // local storage test
    localStorage.setItem('test', 'hello word');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
   
    // prevent form from submitting
    e.preventDefault();
}