// need to add id for thoughts and friends
// const mongoose = require("mongoose");
const {Schema, model} = require('mongoose');
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
    toJSON: {
        virtuals: true
    },
    id:false,
}
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;