function Home(req, res) {
    res.send("<h1>home page </h1> <br> <a href='/' >Home</a> <br> <a href='/about' >about</a><br> <a href='/contact' >Contact</a>  <br> <a href='/login' >login</a> <br>  <a href='/signup' >signup</a> ")
}
function About(req, res) {
    res.send("<h1>aboutus page  </h1><br> <a href='/' >Home</a> ")
}
function Contact(req, res) {
    res.send("<h1>contact page </h1><br> <a href='/' >Home</a> ")
}
function notfound(req, res) {
    res.send("<h1>page is not found </h1><br> <a href='/' >Home</a> ")
}
function login(req, res) {
    res.send("<h1> login page </h1><br> <a href='/' >Home</a> ")
}
function signup(req, res) {
    res.send("<h1> signup page </h1><br> <a href='/' >Home</a> ")
}


module.exports = { Home, About, Contact, notfound  , login, signup }