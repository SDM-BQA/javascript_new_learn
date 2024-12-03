const img = document.querySelector("img")
const followers = document.querySelector("#followers")
const userName = document.querySelector("#userName")

const requsetUrl = "https://api.github.com/users/john";

const xhr = new XMLHttpRequest();

xhr.open("GET", requsetUrl);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    img.setAttribute('src', data.avatar_url)
    userName.innerHTML = `<span>Name : ${data.name}</span>`
    followers.innerHTML = `<span>Followers : ${data.followers}</span>`
  }
};
xhr.send();
