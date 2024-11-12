const form = document.getElementById('commentForm');
const message = document.getElementById('message');
const user = document.getElementById('username');
const url = 'http://localhost:80';


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log('abgeschickt');
    console.log(url + '/challenges/1');

    const authResponse = await fetch(url + '/challenges/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });


    if (authResponse === 200 || 201) {
        console.log('Erfolg!');
        console.log(authResponse.headers.get('Authorization'));
        token = authResponse.headers.get('Authorization');

        commentcomment = await fetch(url + '/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                message: 'test',
                username: 'phil'
            })
        });

    } else {
        console.log('Nope');
        console.log(authResponse.status);
    }

    
});














// function sendComment() {
//     const authResponse = await fetch(url + '/challenges/1', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (authResponse.status == 200) {
//         console.log('Erfolg!')
//         console.log(authResponse.headers.get('Authorization'));
//     } else {
//         console.log('Nope')
//     }

//     commentcomment = await fetch(url + '/comments', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             message: 'test',
//             username: 'phil'
//         })
//     });
// };


