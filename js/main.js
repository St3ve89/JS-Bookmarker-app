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

    // // local storage test
    // localStorage.setItem('test', 'hello word');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));
   

    // test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // init array
        var bookmarks = [];
        // add to array
        bookmarks.push(bookmark);
        //set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
    } else {
        // get bookmarks from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // re-set it back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
    }



    // prevent form from submitting
    e.preventDefault();
}