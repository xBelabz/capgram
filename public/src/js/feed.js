var shareImageButton = document.querySelector('#share-image-button');
var createPostArea   = document.querySelector('#create-post');
var closeModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal () {
  createPostArea.style.display = 'block';
}

function closeCreatePostModal () {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);
closeModalButton.addEventListener('click', closeCreatePostModal);
