function getRepositories(){
  fetch('https://api.github.com/users/octocat/repos')
  .then(response => response.json())
  .then(jsonData => {
    showRepositories(jsonData)
  })
}

function showRepositories(jsonData) {
  const repoList = `<ul>${jsonData.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const name = el.dataset.repo
  fetch('https://api.github.com/repos/octocat/' + name + '/commits')
  .then(response => response.json())
  .then(jsonData => {
    showCommits(jsonData)
  })
}

function showCommits(jsonData) {
  const commitsList = `<ul>${jsonData.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
