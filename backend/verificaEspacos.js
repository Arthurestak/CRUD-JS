const espacoBranco = (x,y,z) => {
    if(/\s/.test(x,y,z)){
        return false
    }
    return true
}

module.exports = espacoBranco