document.addEventListener('DOMContentLoaded', function () {
    const trainerID = localStorage.getItem('trainerID');
    const beneficiaryDropdown = document.getElementById('beneficiaryDropdown');

    fetch(`https://script.google.com/macros/s/AKfycbx4VCL13c2UYI2auMucnUTO_hT6GJh2FlBDMD4CrnurVU1asK0MiSoDyriIBT30_6nhmg/exec?trainerID=${trainerID}`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(beneficiary => {
                    const option = document.createElement('option');
                    option.value = beneficiary.beneficiaryName;
                    option.textContent = beneficiary.beneficiaryName;
                    beneficiaryDropdown.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.textContent = 'No beneficiaries found';
                option.disabled = true;
                beneficiaryDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching beneficiaries:', error));

    document.getElementById('beneficiaryForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedBeneficiary = beneficiaryDropdown.value;
        localStorage.setItem('selectedBeneficiary', selectedBeneficiary);
        window.location.href = 'data-entry.html';
    });
});
 
