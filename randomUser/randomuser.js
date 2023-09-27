const randomUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then (data => displayUser(data.results))
}

const displayUser = users => {
    // for (const user of users) {
    //     console.log(user)
    // }   //using for of
    // using ForEach

    users.forEach(user => {
        const userContainer = document.getElementById('user-container');
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h4>Name: ${user.name.title}  ${user.name.first}  ${user.name.last} </h4>
        <p>Gender: ${user.gender} </p>
        <p>Phone: ${user.phone} </p>
        <p>Email: ${user.email} </p>
        <p>DOB: ${user.dob.date} </p>
        <p>Phone: ${user.phone} </p>
        <p>ID: ${user.id.name ? user.id.name : 'No Id' }   </p>
        <p>Value: ${user.id.value ? user.id.value : 'No Value'}   </p>

        <img src = "${user.picture.large}"> </img>

        
        `;
        userContainer.appendChild(userDiv)

    })
}

randomUser();