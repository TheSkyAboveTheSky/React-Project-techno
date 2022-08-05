const {Router} = require('express');
const timelineRouter = Router();
const Timeline = require('../models/Timeline');


timelineRouter.get('/timeline/:userid', async (req ,res) => {
  try {
    const timelines = await Timeline.find({user : {$eq : req.params.userid}});
    console.log('succes');
    res.json(timelines);
  }catch(err){
    console.log(err);
  }
});
timelineRouter.post('/timeline', async (req,res) => {
  const timeline = new Timeline({
    body : req.body.body,
    user : req.body.user,
  })
  try {
    const newTimeline = await timeline.save()
    res.json(newTimeline);
  }catch(err) {
    res.status(500).json({ message : err.message});
  }
});
module.exports = timelineRouter;