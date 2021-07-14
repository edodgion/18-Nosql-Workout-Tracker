const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
	Workout.aggregate([
		  {
			  $addFields: {
				  totalDuration: {
					  $sum: '$exercises.duration',
				  },
			  },
		  },
	  ]).then((workoutDb) => {
		  res.json(workoutDb);
	  }).catch((err) => {
		  console.log(err)
		  res.json(err);
	  });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .then((workoutDb) => {
        res.json(workoutDb)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post("/api/workout", (req, res) => {
    Workout.create({}).then(workoutDb => {
      res.json(workoutDb);
    }).catch(err => {
      res.status(400).json(err);
    });
});



router.put('/api/workout/:id', async ({body, params}, res) => {
	try {
		const workout = await Workout.findById(params.id)
		workout.exercises.push(body)
		await workout.save()
		res.status(200).json(workout)
	}
	catch (err) {
		console.log(err)
		res.status(400).json(err)
	}
});

router.get("/api/workout/range", (req, res) => {
	Workout.aggregate([
		{
			$addFields: {
				totalDuration: {
					$sum: '$exercises.duration',
				},
			},
		},
	]).then(workoutDb => {
		res.json(workoutDb);
	}).catch(err => {
		console.log(err),
		res.json(err);
	});
});


module.exports = router;