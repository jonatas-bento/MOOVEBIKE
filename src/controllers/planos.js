const planos = function (req, res) {
    const packages = getPackages();
    const packageselectric = getPackagesE()

    res.render('planos', { packages, packageselectric });
}

module.exports = {
    planos
}