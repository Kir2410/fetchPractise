const getData = (url) => {
    return fetch(url)
}

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())
}

getData('db.json')
    .then(response => response.json())
    .then(data => sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)))
    .then(data => console.log(data))
    .catch(error => console.log(error))