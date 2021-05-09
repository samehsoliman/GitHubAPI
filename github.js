class Github {
    constructor(){
        this.client_id = 'ac822be6fb2d428fa102';
        this.client_secret = '3fd7927a4dda65b1e5a0e498dafe6f9ec19513d8';
        this.repo_count = 5;
        this.repo_sort = 'created: asc'
    }

    async getUserProfile(user){
        const respProfile =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await respProfile.json();
    
        const respRepos =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await respRepos.json();
        
        return {
            profile,
            repos
        }
    }
}