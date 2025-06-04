const espacoBranco = (x,y,z) => {
    if(/\s/.test(x)){
        return false
    }
    return true
}

module.exports = espacoBranco