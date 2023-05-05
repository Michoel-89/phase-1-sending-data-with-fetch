function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(resp => resp.json())
    .then(obj => {
        const h = document.createElement('h1');
        h.textContent = obj.id;
        document.body.appendChild(h);})
    .catch(error => {
        const h = document.createElement('h1');
        h.textContent = error.message;
        document.body.appendChild(h);
    })
}
submitData('joe', 'balmer');
