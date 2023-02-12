
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

export default function Logout() {
    localStorage.removeItem("user");
    
}
