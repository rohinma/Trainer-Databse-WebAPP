document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const trainerID = document.getElementById('trainerID').value;
    localStorage.setItem('trainerID', trainerID);
    window.location.href = 'beneficiaries.html';
});
