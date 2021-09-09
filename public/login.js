
document.getElementById("login-button").addEventListener("click", async ()=> { 
    console.log("logging in")
    try {
        const userData =  JSON.stringify({
            email: document.getElementById('user-email').value,
            password: document.getElementById('user-password').value,
          })
        console.log('user data is ---------', userData);
    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        redirect: 'follow', 
        body: userData
    })
    console.log(response) 
    if (response.status === 200) {
        window.location.href = window.location.origin;

    }
    } catch (error){
        console.log(error)
    }
})

document.getElementById("signup-button").addEventListener("click", async ()=> { 
    window.location.href = window.location.href.replace('login', 'signup');
})