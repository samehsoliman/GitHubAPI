class UI {
    constructor(){
        this.userProfile = document.querySelector('#profile');
    }

    // show profile
    showUserProfile(userProfile){
        const output = `
            <div class="card card-body"> 
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid" src=${userProfile.avatar_url}>
                        <a class="btn btn-danger btn-block my-3" href=${userProfile.html_url}>User Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary p-2">Public Repos: ${userProfile.public_repos}</span>
                        <span class="badge badge-secondary p-2">Public Gits: ${userProfile.public_gists}</span>
                        <span class="badge badge-danger p-2">Followers: ${userProfile.followers}</span>
                        <span class="badge badge-success p-2">Following: ${userProfile.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${userProfile.company}</li>
                            <li class="list-group-item">created At: ${userProfile.created_at}</li>
                            <li class="list-group-item">location: ${userProfile.location}</li>
                        </ul>
                    </div>
                </div>                         
            </div>
            <br>
            <div id="repos"></div>   
        `
        this.userProfile.innerHTML = output;

    }

    // show user repos
    showUserRepos(userRepos) {
        let output = `<h4> User Repos</h4>
                    `;

        userRepos.forEach(repo =>{
            output += `                
            <div class="card card-body">
                <div class="row"> 
                    <div class="col-md-6">
                        <a target="_blank" href=${repo.html_url}> ${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-2">Repo Watcher: ${repo.watchers}</span>
                        <span class="badge badge-secondary p-2">Repo Forks: ${repo.forks_count}</span>
                    </div>           
                </div>
            </div>    
            `
        })

        document.querySelector('#repos').innerHTML = output;

    }

    // show alert
    showAlert(msg, className){
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const parent = document.querySelector('.search-user');
        const cardSearch = document.querySelector('.card-search');
        parent.insertBefore(div,cardSearch);

        setTimeout(()=>{
            this.clearAlert();
        },2000)

    }

    // clear alert
    clearAlert(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
        
    }

    // clear profile
    clearProfile(){
        this.userProfile.innerHTML = '';
    }

}