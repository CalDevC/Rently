const express = require('express');
const router = express.Router();

router.get("/chase-alexander", (req, res) => {
   res.send({
     name: "Chase Alexander",
     role: "Team lead, full stack support",
     img: "images/Chase.jpg",
   });
 });
 
 router.get("/yuhang-lee", (req, res) => {
   res.send({
     name: "YuHang Lee",
     role: "Frontend Lead",
     img: "images/Member1.jpg",
   });
 });
 
 router.get("/chucheng-situ", (req, res) => {
   res.send({
     name: "Chu Cheng Situ",
     role: "Backend Lead",
     img: "images/Chu.jpg",
   });
 });
 
 router.get("/benjamin-mccullough", (req, res) => {
   res.send({
     name: "Benjamin McCullough",
     role: "GitHub Master",
     img: "images/BensPic.jpg",
   });
 });
 
 router.get("/lauren-barer", (req, res) => {
   res.send({
     name: "Lauren Barer",
     role: "Scrum Master, Cloud",
     img: "images/Lauren.jpg",
   });
 });

module.exports = router;