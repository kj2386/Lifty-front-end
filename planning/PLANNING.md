Objective:

App that tracks workouts. User’s will be able to keep track of their workouts as well as keep track of the date of the workout/weights used, sets and reps. App will call from an API that has a collection of workouts and users can pick and choose what they will like to do for that day.

Workout’s DB endpoints:

/GET - see all completed workouts

/GET/:day - see a specific workout by day including exercises done with weights, sets and reps.

/POST/:exercise - create an exercise that will be attached to the workout object (we want the user to be able to add on exercises as they complete them during the workout, can delete if this is not needed)

/POST - create a workout for that day
/GET call for exercises
We would want to save the selected exercises to the workout. It would be like pushing into an array of objects.

/DELETE/:day - delete a workout by day

/DELETE/:exercise - delete individual exercise record

/PUT/:day - update a specific day’s workout
Maybe need to add or remove an exercise.
Be able to update weight, rep and/or sets.

An exercise schema example:

A workout will contain multiple exercise objects as well as a date associated with the workout completion date.

const workout = {
date: String,
exercise: [{
id: Number,
exercise: String,
sets: Number,
reps: Number,
weight: Number }] }

We want users to be able to view past workouts, and create new workouts in real time.

If time allows, we would also like to add a timing feature that tracks how long a user has worked out for. We would also like to add a list of exercises, with each exercise having a description of the exercise, the muscles that are worked, and instructions on how to properly perform said exercise. It is our hope that this feature would inspire users to try and incorporate new exercises into their routine.

Calls to this API would just be different GETs. For example GET all or GET by a specific workout.
