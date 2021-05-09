const github = new Github();
const ui = new UI();
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', function(e){
    const user = e.target.value;
    if (user!=='') {
        // http call to get user profile
        github.getUserProfile(user).then(data=>{
            console.log(data);
            if (data.profile.message === "Not Found") {
                // show alert
                ui.showAlert('User not exist', 'alert alert-danger')
                
            } else {
                // show user profile
                ui.showUserProfile(data.profile);
                ui.showUserRepos(data.repos);
            }
        })
    } else {
        // clear profile
        ui.clearProfile();
    }
})