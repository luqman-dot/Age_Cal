function calculateAge() {
    const birthdayInput = document.getElementById('birthday').value;
    const birthday = new Date(birthdayInput);
    const today = new Date();

    if (!birthdayInput) {
        document.getElementById('result').textContent = "Please select your birth date.";
        return;
    }

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();
    const dayDifference = today.getDate() - birthday.getDate();

    // Adjust if birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years old.`;
}
