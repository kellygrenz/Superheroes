const express = require('express')
const Router = express.Router()
const SuperHero = ('../models/SuperHero')



Router.route('/api/superheroes')
.get((req, res) => {
  console.log('route found')
  SuperHero.find((err, superHeroes) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', results: superHeroes })
    }
  })
})

  // Router.route('/api/superheroes')
  // .post((req, res) => {
  //   const {name, universe, superPower, img, nemesis} = req.body
  //   const newSuperHero = {
  //     name,
  //     universe,
  //     superPower,
  //     nemesis,
  //     img
  //   }
  
  //   SuperHero(newSuperHero).save((err, hero) => {
  //     if (err) {
  //       res.json({ msg: err })
  //     } else {
  //       res.json({ msg: 'Success', data: hero })
  //     }
  //   })
  // })

 


  module.exports = Router
