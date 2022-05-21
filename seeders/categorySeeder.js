const CategoryModel = require('../models/CategoryModel')

const categories = [
      {
        name: 'Sofa'
      },
      {
        name: 'Chair'
      },
      {
        name: 'TVStand'
      },
      {
        name: 'Bookcase'
      },
      {
        name: 'Bed'
      }
    ]

CategoryModel.bulkCreate(categories)