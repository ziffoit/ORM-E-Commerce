const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  }).then(data => res.json(data)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  const requestedId = req.params.id;
  // be sure to include its associated Product data
  Tag.findOne({
    include: [Product],
    where: {
      id: requestedId
    }
  }).then(data => res.json(data)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({tag_name: req.body.tag_name})
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
  // delete on tag by its `id` value
});

module.exports = router;
