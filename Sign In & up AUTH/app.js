function onSignUp() {
    ///GET USER INFORMATION
    var userName = document.getElementById("userName").value
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value
    var userPhone = document.getElementById("userPhone").value
    var userAddress = document.getElementById("userAddress").value

    // console.log(userName + userEmail + userPassword)

    ///ALL USER INFO CONVERT INTO OBJECT
    var user = {
        name: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        address: userAddress
    }

    // console.log(user.name)

    var users = JSON.parse(localStorage.getItem("users")) || []
    // console.log(getUser)

    var userIndex = users.findIndex((value) => {

        return value.email.toLowerCase() == user.email.toLowerCase() || value.phone == user.phone

        // return value.phone == user.phone
    }
    )
    console.log(userIndex)

    if (userIndex === -1) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html"
    }
    else {
        alert("already!")
    }

}
var alertBox = document.getElementById("alertBox")

function onLogin() {

    var userEmail = document.getElementById("email").value
    var userPassword = document.getElementById("password").value

    var user = {
        email: userEmail,
        password: userPassword

    }


    var users = JSON.parse(localStorage.getItem("users")) || []
    // console.log(users)

    var userIndex = users.find(value => value.email.toLowerCase() === user.email.toLowerCase() &&
        value.password === user.password)
    console.log(userIndex)

    if(userIndex != -1){
        ///Current USer index
        localStorage.setItem("currentUser" , JSON.stringify(userIndex))
        window.location.href = "index.html"
    }
    else{
        alertBox.innerHTML = "Invalid credentials"
        alertBox.style.display = "block"
    }
    setTimeout(function(){
        alertBox.style.display = "none"
    },3000)
}

function logout(){
    localStorage.removeItem("currentUser")
    alertBox.style.display = "block"
     alertBox.innerHTML = "GOOD BYE...."
    setTimeout(()=>{
        window.location.href = "login.html"
        alertBox.style.display = "none"
    },2000)
}


function currentUser(){
    var showUserName = document.getElementById("showUserName")
    var  showUserEmail = document.getElementById("showUserEmail")
    var  showUserPhone = document.getElementById("showUserPhone")
    var  showUserAddress = document.getElementById("showUserAddress")
    
    var user = JSON.parse(localStorage.getItem("currentUser"))
    
    showUserName.innerHTML = user.name
    showUserEmail.innerHTML = user.email
    showUserPhone.innerHTML = user.phone
    showUserAddress.innerHTML = user.address
}


function post(){
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    var postTitle = document.getElementById("postTitle")
    var postDes = document.getElementById("postDes")
    var posting = {
        title : title.value,
        description : description.value
    }

    localStorage.setItem("post" , JSON.stringify(posting))
    
    var getPost = JSON.parse(localStorage.getItem("post"))

    postTitle.innerHTML = getPost.title
    postDes.innerHTML = getPost.description


    var postBox = document.getElementById("postBox")
    // postBox.className("hide").remove()
    postBox.classList.remove("hide")


}