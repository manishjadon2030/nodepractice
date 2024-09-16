function Home(req, res) {
    res.send("<h1>home page </h1> <br> <a href='/' >Home</a> <br> <a href='/about' >about</a><br> <a href='/contact' >Contact</a>")
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


module.exports = { Home, About, Contact, notfound }