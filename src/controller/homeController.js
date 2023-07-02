
let getHomepage = (req, res) => {
    // logic
    console.log(">>> handle the get homepage")
    res.render('test/index.ejs')
}

module.exports = {
    getHomepage
}