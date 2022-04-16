const { Product } = require("../models")

class carsController {
    static create = async (req,res) => {
        const { title, brand, year, kiloMeter, grade, category, description, photoProduct } = req.body
        const payloadCars = {
            title, brand, year, kiloMeter, grade, category, description, delete: false, photoProduct
        }
        try {
            const cars = await Product.create(payloadCars)
            
            return res.status(201).json({
                title: cars.title,
                brand: cars.brand,
                year: cars.year,
                kiloMeter: cars.kiloMeter,
                grade: cars.grade,
                category: cars.category,
                description: cars.description,
                photoProduct: cars.photoProduct
            })
            
        } catch (error){
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async getAllProduct(req,res){
        try {
            const data = await Product.findAll({order:[['id',"ASC"]]})
            if(!data.length) res.json("please add new product")
            res.status(200).json(data)
        } catch (error) {
            throw error
        }
    }
}
module.exports = carsController