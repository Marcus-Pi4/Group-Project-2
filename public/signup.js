document.getElementById("signup-button").addEventListener("click", async () => {
    console.log("signing up")
    try {
    const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        redirect: 'follow', 
        body: JSON.stringify({
            email: document.getElementById('user-email').value,
            password: document.getElementById('user-password').value,
          })
    })
    console.log(response) 
    if (response.status === 200) {
        window.location.href = window.location.origin;

    }
    } catch (error){
        console.log(error)
    }
}) 

// document.getElementById("signup-button").addEventListener("click", async ()=> { 
//     window.location.href = window.location.href.replace('signup', '/');
// })

