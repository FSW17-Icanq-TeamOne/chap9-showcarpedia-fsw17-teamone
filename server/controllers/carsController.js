const { Product } = require("../models");
const { Op } = require("sequelize");
class carsController {
  static create = async (req, res) => {
    const {
      title,
      brand,
      year,
      kiloMeter,
      grade,
      category,
      description,
      photoProducts,
    } = req.body;
    const payloadCars = {
      title,
      brand,
      year,
      kiloMeter,
      grade,
      category,
      description,
      delete: false,
      photoProducts,
    };
    try {
      const cars = await Product.create(payloadCars);

      return res.status(201).json({
        message: "Success",
        title: cars.title,
        brand: cars.brand,
        year: cars.year,
        kiloMeter: cars.kiloMeter,
        grade: cars.grade,
        category: cars.category,
        description: cars.description,
        photoProducts: cars.photoProducts,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };

  static async getAllProduct(req, res) {
    try {
      const data = await Product.findAll({
        order: [["id", "ASC"]],
        where:{
          delete: false
        }
      });
      if (!data.length) res.json("please add new product");
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const data = await Product.findByPk(id);
      if (data) {
        return res.status(200).json({
          title: data.title,
          brand: data.brand,
          year: data.year,
          kiloMeter: data.kiloMeter,
          grade: data.grade,
          category: data.category,
          description: data.description,
          photoProducts: data.photoProducts,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateProductById(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        brand,
        year,
        kiloMeter,
        grade,
        category,
        description,
        photoProducts,
      } = req.body;
      const updateDataCars = {
        title,
        brand,
        year,
        kiloMeter,
        grade,
        category,
        description,
        delete: false,
        photoProducts,
      };
      const data = await Product.update(updateDataCars, {
        where: {
          id: id,
        },
      });
      if (data == 1) {
        return res.status(200).json({
          message: "Success",
          data: req.body,
        });
      }
    } catch (error) {
      throw error;
    }
  }
  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const deleteData = {
        delete: true,
      };
      const data = await Product.update(deleteData, {
        where: {
          id: id,
        },
      });
      if (data == 1) {
        return res.status(200).json({
          message: `Success`,
        });
      }
    } catch (error) {
      throw error;
    }
  }
  static async findFilteredCar(req, res) {
    const { mileages, brand, title, minYear, grade, category } = req.query;
    const query = {
      brand,
      title,
      category,
    };

    const filteredQuery = Object.fromEntries(Object.entries(query).filter(([_, v]) => Boolean(v)));
    console.log(filteredQuery)
    try {
        
      const data = await Product.findAll({
        where:{
          ...filteredQuery,
          kiloMeter: {
            [Op.gte]: Number(mileages) 
          },
          year: {
            [Op.gte]: Number(minYear) 
          },
          grade: {
            [Op.gte]: Number(grade) 
          },
       }
      });
      if (!data.length) return res.json("data not found");
     return  res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }

  static async getFilterData(req,res) {
    const list = require("list-of-cars")
    list.getListSync()
    const brand = list.getCarMakes()
    const category = list.getCarCategories()
    try{
      const year = await Product.findAll({
        attributes:["year"],
        group: "year",
        order:[["year","ASC"]]
      })
      if(year) return res.status(200).json({category,brand,year})
    }
    catch(err){
      throw err
    }
  }
}
module.exports = carsController;