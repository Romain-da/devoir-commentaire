document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('commentaire-form').addEventListener('submit', function(event) {
      event.preventDefault();

      let firstName = document.getElementById('first-name').value;
      let lastName = document.getElementById('last-name').value;
      let message = document.getElementById('message').value;
      let errorMessage = document.getElementById('error-message');

      if (firstName === '' || lastName === '' || message === '') {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';

        let commentList = document.getElementById('comment-list');

        let newCommentaire = document.createElement('div');
        newCommentaire.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'py-10', 'border-t', 'border-gray-200');
        newCommentaire.innerHTML = `
          <div class="flex-1">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${message}</p>
            </div>
          </div>
        `;
        commentList.appendChild(newCommentaire);

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';
      }
    });
  });