// =======================
function goDashboard() {

    const role = localStorage.getItem("userRole");

    if(role === "admin"){

        window.location.href = "admin-dashboard.html";

    }else if(role === "user"){

        window.location.href = "user-dashboard.html";

    }else{

        // If not logged in
        window.location.href = "index.html";

    }
}