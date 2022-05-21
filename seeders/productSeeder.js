const ProductModel = require('../models/ProductModel')
const CategoryModel = require('../models/CategoryModel')
require('../db/assotiations');

const categories = [
      {
        name: 'Marilee Platform Bed',
        description: 'This platform bed features clean lines and a mixed-material look that rounds out your bedroom or guest room with industrial style.',
        price: 266.99,
        img: 'c0f3575b-46d6-4d57-8bf1-28a427c9cac9.jpg',
        categoryId: 5
      },
      {
        name: 'Middlebury Standard Bed',
        description: 'This platform bed leans into a French country look with its distressed finish and clean lines. Its frame is made from a blend of metal and engineered wood with a two-toned brown and black color palette for a lodge-worthy touch in your space.',
        price: 152.99,
        img: '071a41a8-c417-453c-b08c-ab539617e435.jpg',
        categoryId: 5
      },
      {
        name: 'Riya Low Profile Standard Bed',
        description: 'This standard low-profile bed brings an industrial touch to your main or guest bedroom. Founded on a solid pine wood frame, this bed features a rectangular open-frame headboard with tubular metal bars creating a linear pattern that matches the footboard.',
        price: 299.99,
        img: '476b75bd-d967-4a5c-9d52-e4c3e4d432f1.jpg',
        categoryId: 5
      },
      {
        name: 'Pohlman Upholstered Low Profile Platform Bed',
        description: "This platform elevates your bedroom with a sleek, modern look. It's crafted from solid wood with a black finish contemporary profile. The panel headboard strikes a rectangular silhouette, and it's upholstered and stuffed with polyester.",
        price: 209.99,
        img: '63229413-235a-48e3-a6ac-1fc6a6c11091.jpg',
        categoryId: 5
      },
      {
        name: 'Abernethy Low Profile Platform Bed',
        description: "This platform bed leans into a mid-century modern look with its inset paneling and flared legs. Its low-profile frame is made from a blend of solid and engineered wood with a neutral finish of your choice that works well with your French country decor.",
        price: 198.57,
        img: 'df12806a-ea83-49c5-ab23-fa587e95aa79.jpg',
        categoryId: 5
      },
      {
        name: "Abigail 69.75'' H x 35.25'' W Standard Bookcase",
        description: "Add some stylish functionality to your home with this from the Sauder select collection. With five total shelves, you can stack, store, and display all your books, knick-knacks, magazines, candles, bins, and your collection of DVDs and CDs.",
        price: 199.99,
        img: '0833e659-c239-44f1-9eec-12ae98164611.jpg',
        categoryId: 4
      },
      {
        name: "Landrienne 62.2'' H x 23.6'' W Steel Standard Bookcase",
        description: "17 Stories 5 Tier Landrienne, Tall Bookcase Shelf Storage Organizer, Modern Book Shelf For Bedroom, Living Room And Home Office",
        price: 105.99,
        img: 'aae848fd-7f87-486c-af4b-6a556402619a.jpg',
        categoryId: 4
      },
      {
        name: "Groce 72'' H x 31.5'' W Standard Bookcase",
        description: "This bookcase brings a modern look to your space along with convenience and style, thanks to its clean lines and solid hues. At 6' fall, with five separate shelves, two of them adjustable.",
        price: 213.99,
        img: '3213951a-787a-4d40-a90e-d6fba71e4a0b.jpg',
        categoryId: 4
      },
      {
        name: "Lorraine TV Stand for TVs up to 54''",
        description: "This TV stand has a charming, rustic aesthetic and provides your space with plenty of room. The frame is built from engineered wood.",
        price: 119.99,
        img: 'eea5b3b3-1c11-40dc-83dc-a3bb11e55dc7.jpg',
        categoryId: 3
      },
      {
        name: "Guertin TV Stand for TVs up to 65''",
        description: "This TV stand lights up your living room with a modern, sleek design and built-in LEDs. This media center includes six open shelves for displaying books and decorative items.",
        price: 235.99,
        img: 'edb1fc0b-8b6c-4dbd-8927-86062da0088c.jpg',
        categoryId: 3
      },
      {
        name: "Aurora Task Chair",
        description: "Whoever said office chairs had to look like they rolled out of a cubicle clearly hadn't met this one.",
        price: 194.99,
        img: '8b4f10bc-476e-41dd-a6e2-b74b9b972dbe.jpg',
        categoryId: 2
      },
      {
        name: "Greta Karat Home Inc Task Chair",
        description: "This task chair features chic channel tufting and gold-finished nailhead trim for a classic glam look in your home office. It's made from iron and engineered woo, and it's built on a five-pronged gold metal base for smooth movement across carpeting.",
        price: 209.99,
        img: 'f75a40eb-5975-42ad-9895-8131644169da.jpg',
        categoryId: 2
      },
      {
        name: "Dingler 77'' Round Arm Sleeper",
        description: "TThis clean-lined convertible sofa easily turns into a twin-sized bed to accommodate extra overnight guests. The solid and engineered wood frame is built on tapered legs, and it features rounded arms for an elegant look.",
        price: 459.99,
        img: '26e4b7c8-1628-4d71-879f-dcf6a63825ad.jpg',
        categoryId: 1
      },
    ]

ProductModel.bulkCreate(categories, {include: [{model: CategoryModel, as: "category"}]}).catch((err)=>{console.log(err)})