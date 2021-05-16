const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then(data => res.json(data)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const requestedId = req.params.id;
  // Category.findOne({
  //   include: [Product],
  //   where: {
  //     id: {
  //       [Op.eq]: requestedId
  //   }
  // }
  Category.findOne({
    include: [Product],
    where: {
      id: requestedId
    }
  }).then(data => res.json(data)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({category_name: req.body.category_name})
  .then(data => res.json(data)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  const requestedId = req.params.id
  // update a category by its `id` value
  Category.update({category_name: req.body.category_name}, {
    where: {
      id: requestedId
    }
  })
  .then(data => res.json(data)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

});

module.exports = router;

// id == 2
// id eq 2