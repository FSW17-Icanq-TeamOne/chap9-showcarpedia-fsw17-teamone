const {About} = require("../models")

class AboutController{
    static async readAbout(req,res){
        try {
            const data = await About.findAll()
            console.log(data)
            if(!data.length) return res.json("data not found")
            res.status(200).json(data)
        } catch (error) {
            throw error
        }
    }
}

module.exports = AboutController