let current_users=["ali","NOMan","fAhad","Shahzaib","AKEEL"]
let new_users=["ALI","zeeshan","fahad","ubaid","akeeL"]
let current_users_lower=current_users.map(user=>user.toLowerCase())
for(let i=0;i<new_users.length;i++){
    let available=new_users[i].toLowerCase()
    if(current_users_lower.includes(available)) {
        console.log(" The person will need to enter a new username.");
    }else{
        console.log(" The username is available.");
    }
}
