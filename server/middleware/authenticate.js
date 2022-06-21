

const authenticate = async (req, res, next) => {

    try {
        const user = false
        if (!user) {
            console.log(error)
        } else (
            next()
        )

    } catch (error) {
        res.status(401).json("Unautharised")
    }
}

module.exports = authenticate