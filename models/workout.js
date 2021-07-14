const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
    
  exercises: [
  {
  type: {
    type: String,
    trim: true,
    required: "Type of Excercise:"
  },

  name: {
    type: String,
    trim: true,
    required: "Name of Exercise:"
  },

  duration: {
    type: Number,
    required: "Duration of Exercise"
  },

  weight: {
    type: Number
  },

  reps: {
    type: Number
  },

  sets: {
    type: Number
  },

  distance: {
    type: Number
  }
 }
]
});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;

