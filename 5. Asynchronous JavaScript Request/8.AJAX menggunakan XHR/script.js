const xhr = new XMLHttpRequest();

xhr.onload = function () {
    const users = JSON.parse(this.responseText);
    //     console.log(users);
    for (user of users) {
        console.log(`${user.id}. ${user.name} (${user.username})`);
    }
}

xhr.onerror = function () {
    console.log('ups, something error');
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();