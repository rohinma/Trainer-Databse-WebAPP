document.addEventListener('DOMContentLoaded', function () {
    const selectedBeneficiary = localStorage.getItem('selectedBeneficiary');
    const trainerID = localStorage.getItem('trainerID');
    document.getElementById('selectedBeneficiary').textContent = `Beneficiary: ${selectedBeneficiary}`;

    document.getElementById('dataEntryForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const age = document.getElementById('age').value;
        const children = document.getElementById('children').value;
        const goats = document.getElementById('goats').value;

        const postData = {
            trainerID: trainerID,
            beneficiaryName: selectedBeneficiary,
            age: age,
            children: children,
            goats: goats
        };

        fetch('https://script.google.com/macros/s/AKfycbx4VCL13c2UYI2auMucnUTO_hT6GJh2FlBDMD4CrnurVU1asK0MiSoDyriIBT30_6nhmg/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data submitted successfully:', data);
            alert('Data submitted successfully!');
            window.location.href = 'beneficiaries.html';
        })
        .catch(error => {
            console.error('Error submitting data:', error);
            alert('There was an error submitting the data.');
        });
    });
});
