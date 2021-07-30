// Add your code here
function submitData(name, email){
    
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userName: `${name}`, 
            userEmail:`${email}`
        })
    })
    .then(res => {return res.json()})
    .then(user => (user))

    .catch(function(error){
        alert('Invalid user')
        console.log(error.message)
    })
}

submitData()