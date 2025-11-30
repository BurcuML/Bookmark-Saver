const addBookmarkBtn = document.getElementById('add-bookmark-btn');
const bookmarkList = document.getElementById('bookmark-list');
const bookmarkURLInput = document.getElementById('bookmark-url');
const bookmarkNameInput = document.getElementById('bookmark-name');

addBookmarkBtn.addEventListener('click',() =>{
    const url = bookmarkURLInput.value;
    const name = bookmarkNameInput.value;

    if(url && name){
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.toggle('delete-btn');
        deleteBtn.addEventListener('click', () => {
            bookmarkList.removeChild(listItem);
        });
        link.href = url;
        link.textContent = name;
        link.target = '_blank';
        listItem.appendChild(link);
        bookmarkList.appendChild(listItem); 
        listItem.appendChild(deleteBtn);
    }
})