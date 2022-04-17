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
      photoProduct,
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
      photoProduct,
    };
    try {
      const cars = await Product.create(payloadCars);

      return res.status(201).json({
        title: cars.title,
        brand: cars.brand,
        year: cars.year,
        kiloMeter: cars.kiloMeter,
        grade: cars.grade,
        category: cars.category,
        description: cars.description,
        photoProduct: cars.photoProduct,
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
      });
      if (!data.length) res.json("please add new product");
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(req, res) {
    try {
      const { idProduct } = req.params;
      const data = await Product.findByPk(idProduct);
      if (data) {
        return res.status(200).json({
          result: "Success",
          data: data,
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
        photoProduct,
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
        photoProduct,
      };
      const data = await Product.update(updateDataCars, {
        where: {
          id: id,
        },
      });
      if (data == 1) {
        return res.status(200).json({
          message: "updated!",
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
          data: "deleted",
        });
      }
    } catch (error) {
      throw error;
    }
  }
  static async findFilteredCar(req, res) {
    const { kilometer, brand, title, minYear, grade, category } = req.query;
    const query = {
      brand,
      title,
      category,
    };

    const filteredQuery = Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null));
    try {
        console.log(filteredQuery)
      const data = await Product.findAll({
        where:{
          ...filteredQuery,
          kiloMeter: {
            [Op.gt]: kilometer ?? 0,
          },
          year: {
            [Op.gt]: minYear ?? 0,
          },
          grade: {
            [Op.gt]: grade ?? 0,
          },
       }
      });
      if (!data.length) return res.json("data not found");
     return  res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = carsController;
