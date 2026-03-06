(() => {
    const birthDate = new Date(2001, 2, 6);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = age;
})();