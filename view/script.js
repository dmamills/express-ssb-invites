const inviteEl = document.getElementById('invite');
const inviteBtn = document.getElementById('inviteBtn');

inviteBtn.addEventListener('click', (e) => {
  inviteBtn.disabled = true;
  inviteBtn.innerText = 'Fetching Invite Code!';

  fetch('/invite')
    .then(res => res.json())
    .then(res => {
      inviteEl.innerText = res.invite;
    });
});