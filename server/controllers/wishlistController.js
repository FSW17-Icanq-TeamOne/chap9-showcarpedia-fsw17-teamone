const { Wishlist } = require("../models")

class wishlistController {
    static create = async (req,res) => {
        const { productId, userId } = req.body
        const payloadWishlist = {
            productId, userId
        }
        try {
            const wishlist = await Wishlist.create(payloadWishlist)
            if (wishlist == 1){
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


    static async getWishlistById(req, res){
        try{
            const { id } = req.params
            const data = await Wishlist.findAll({
                where: {
                    userId: id
                }
            })
            if (data){
                return res.status(200).json({
                    result: "Success",
                    data: data
                });
            }    
            
        } catch (error){
            throw error
        }
    }

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