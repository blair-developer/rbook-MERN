import express from "express";
import Hotel from "../models/hotel.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);
   try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
   } catch (error) {
     res.status(500).json(error);
   }
});
//update
router.put("/:id", async (req, res) => {
   try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
   } catch (error) {
     res.status(500).json(error);
   }
});
//delete
router.delete("/:id", async (req, res) => {
    try {
     await Hotel.findByIdAndDelete(req.params.id,);
     res.status(200).json("Hotel deleted");
    } catch (error) {
      res.status(500).json(error);
    }
 });
//get
router.get("/:id", async (req, res) => {
    try {
     const Hotel = await Hotel.findById(req.params.id,);
     res.status(200).json(Hotel);
    } catch (error) {
      res.status(500).json(error);
    }
 });
//get all
router.get("/", async (req, res) => {
    try {
     const Hotels = await Hotel.find(req.params.id,);
     res.status(200).json(Hotels);
    } catch (error) {
      res.status(500).json(error);
    }
 });


export default router;