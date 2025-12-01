const addBookmarkBtn = document.getElementById('add-bookmark-btn');
const bookmarkList = document.getElementById('bookmark-list');
const bookmarkURLInput = document.getElementById('bookmark-url');
const bookmarkNameInput = document.getElementById('bookmark-name');


document.addEventListener('DOMContentLoaded', loadBookmarks);

addBookmarkBtn.addEventListener('click',() =>{
    const url = bookmarkURLInput.value;
    const name = bookmarkNameInput.value;

    if(url && name){

            saveBookmarkToStorage(name, url);
            addBookmark(name, url);
            bookmarkURLInput.value = '';
            bookmarkNameInput.value = '';
    }


})

function addBookmark(name, url) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.toggle('delete-btn');
        deleteBtn.addEventListener('click', () => {
            bookmarkList.removeChild(listItem);
            clearAllBookmarks(name, url);
        });
        link.href = url;
        link.textContent = name;
        link.target = '_blank';
        listItem.appendChild(link);
        bookmarkList.appendChild(listItem); 
        listItem.appendChild(deleteBtn);

    }

function getBookmarksFromStorage() {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarkToStorage(name, url) {
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({ name, url });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function loadBookmarks() {{
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}}

function clearBookmarks(name, url) {
    const bookmarks = getBookmarksFromStorage();
    bookmarks = bookmarks.filter((bookmark) => bookmark.name != name || bookmark.url != url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}