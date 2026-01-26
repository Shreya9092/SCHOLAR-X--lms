function checkLogin() {
    
    var userId = document.getElementById("idInput").value;
    var userName = document.getElementById("nameInput").value;
    var userRole = document.getElementById("roleInput").value;
    var userSubject = document.getElementById("subjectInput").value;

    
    if (userId == "" || userName == "") {
        alert("Please fill all details!");
        return;
    }

    
    alert("Welcome " + userName + "! You are a " + userRole + " for " + userSubject);

    
    if (userRole == "teacher") {
        console.log("Teacher is logging in...");
        
    } else {
        console.log("Student is logging in...");
        
    }
}