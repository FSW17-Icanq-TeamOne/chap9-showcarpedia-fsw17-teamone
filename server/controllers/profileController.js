const { Profile } = require("../models");

class ProfileController {
  static async createProfile(req, res) {
    //  ini tunggu auth jadi dulu
    const userId = req.user.id;

    const { fullName, birthDate, city, country, mobilePhone, profilePicture } = req.body;
    

    const payload = {
      fullName,
      birthDate,
      city,
      country,
      mobilePhone,
      profilePicture,
    };

    try {
      if (!userId) return res.json("user not found");
      const data = await Profile.create(payload, {
        where: { userId },
      });

      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }

  static async readProfile(req, res) {
    // ini tunggu auth jadi dl
    const userId = req.user.id;
    try {
      if (!userId) return res.json("user not found");
      const data = Profile.findOne({ where: { userId } });
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(req,res){
      // ini tunggu auth jadi dl
    const userId = req.user.id;
    const 
    const payload = {}
  }
}

module.exports = ProfileController;
