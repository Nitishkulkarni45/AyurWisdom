window.onload = function() {
    if (!sessionStorage.getItem('loggedIn')) {
        alert("You just logged in!!");
        sessionStorage.setItem('loggedIn', true);
    }
}

