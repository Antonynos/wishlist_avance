const CallBackendGET = async (endpoint) => {
    await fetch(`http://localhost:8000/api/${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
            return(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

const CallBackendPOST = async (endpoint, users_id) => {

    await fetch(`http://localhost:8000/api/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify({
            users_id: users_id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setPosts((posts) => [data, ...posts]);
            setTitle('');
            setBody('');
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export default CallBackendPOST;



