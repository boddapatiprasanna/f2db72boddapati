const mongoose = require("mongoose") 
const Library = mongoose.Schema({ 
 Library_style: String, 
 Library_type: String, 
 Library_Size: Number 
}) 
 
module.exports = mongoose.model("Library", 
Library) 