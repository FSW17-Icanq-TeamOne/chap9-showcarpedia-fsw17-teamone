const { Wishlist, Product, User } = require("../models")
const user = require("../seeders/user")

class wishlistController {
    static create = async (req,res) => {
        const { ProductId, UserId } = req.body
        const payloadWishlist = {
            ProductId, UserId
        }
        try {
            const wishlist = await Wishlist.create(payloadWishlist)
            if (wishlist){
                return res.status(200).json({
                    message: "wishlist created"
                })
            }
            
        } catch (error){
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async getWishlists(req,res){
        const UserId = req.params.id
        try {
            const data = await Wishlist.findAll({
                where: {
                    UserId: UserId
                },
                order:[['id',"ASC"]],
                include: [ 
                    {
                        model: User,
                        attributes: ['username']
                    }, 
                    {   
                        model: Product,
                        attributes: ['title', 'description']
                    } 
                ],
            })
            if(!data.length) res.json("please add new product")
            res.status(200).json(data)
        } catch (error) {
            throw error
        }
    }

    // static async getProductById(req, res){
    //     try{
    //         const { idProduct } = req.params
    //         const data = await Product.findByPk(idProduct)
    //         if (data){
    //             return res.status(200).json({
    //                 result: "Success",
    //                 data: data
    //             });
    //         }    
    //     } catch (error){
    //         throw error
    //     }
    // }

    // static async updateProductById(req, res){
    //     try{
    //         const { id } = req.params
    //         const {
    //             title,
    //             brand,
    //             year,
    //             kiloMeter,
    //             grade,
    //             category,
    //             description,
    //             photoProduct
    //         } = req.body
    //         const updateDataCars = {
    //             title,
    //             brand,
    //             year,
    //             kiloMeter,
    //             grade,
    //             category,
    //             description,
    //             delete: false,
    //             photoProduct
    //         }
    //         const data = await Product.update(updateDataCars, { where: { id: id } })
    //         if (data == 1){
    //             return res.status(200).json({
    //                 message: "updated!", 
    //                 data: req.body
    //             })
    //         }
    //     } catch (error){
    //         throw error
    //     }
    // }
    static async deleteWishlist (req, res){
        try {
            const { id } = req.body
           
            const data = await Wishlist.destroy( {
                where: { id: id }  
            })
            if(data == 1){
                return res.status(200).json({
                    data: "deleted"
                })
            }
        } catch (error) {
            throw error
        }
    }
}
module.exports = wishlistController