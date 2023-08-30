"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          item: "Concrete Mixer",
          description: "Heavy-duty concrete mixer for construction sites.",
          image: "https://www.structuralguide.com/wp-content/uploads/2022/07/Tilting-drum-concrete-mixer.jpg",
          price: 120.0,
          technical_information: "Capacity: 2 cubic meters",
          weekly_price: 500.0,
          daily_price: 80.0,
          monthly_price: 1500.0,
          fortnightly_price: 800.0,
        },
        {
          item: "Scaffold Tower",
          description: "Sturdy scaffold tower for reaching elevated areas.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIXlVs1vPslfXQPGH_a-mXFlkhZXw_pdt5Q&usqp=CAU",
          price: 180.0,
          technical_information: "Height: 6 meters",
          weekly_price: 700.0,
          daily_price: 100.0,
          monthly_price: 2000.0,
          fortnightly_price: 1000.0,
        },
        {
          item: "Jackhammer",
          description: "Powerful jackhammer for breaking tough surfaces.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafS9Tx7USvucEvBqR3MBjz6AoKWvVH-ETaB_ItBrFpqGqbtui8oC096SWuZ6_UQGDTcc&usqp=CAU",
          price: 220.0,
          technical_information: "Power: 1500W",
          weekly_price: 800.0,
          daily_price: 120.0,
          monthly_price: 2400.0,
          fortnightly_price: 1300.0,
        },
        {
          item: "Excavator",
          description: "Versatile excavator for digging and moving earth.",
          image: "https://diecastmastersamerica.com/cdn/shop/products/85569_03__FINAL31000_700x700.jpg?v=1582649708",
          price: 350.0,
          technical_information: "Bucket Capacity: 1 cubic meter",
          weekly_price: 1200.0,
          daily_price: 180.0,
          monthly_price: 3500.0,
          fortnightly_price: 1600.0,
        },
        {
          item: "Concrete Breaker",
          description: "High-performance concrete breaker for demolition.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxM4ePJoLi3Jveb5ICQdBjEhpZhSSraf4rywLeQVxUFTTdG-SqRkwJajjKezQQsClyHY&usqp=CAU",
          price: 250.0,
          technical_information: "Impact Energy: 40 Joules",
          weekly_price: 900.0,
          daily_price: 140.0,
          monthly_price: 2700.0,
          fortnightly_price: 1500.0,
        },
        {
          item: "Cement Mixer Truck",
          description:
            "Large cement mixer truck for delivering concrete to construction sites.",
          image: "https://media.gettyimages.com/id/157681635/pt/foto/misturador-de-cimento.jpg?s=612x612&w=gi&k=20&c=tgnxJeWqUw_GQ7hchI2gcohGPMiMas-LGmCEdUZWvIg=",
          price: 450.0,
          technical_information: "Capacity: 8 cubic meters",
          weekly_price: 1500.0,
          daily_price: 250.0,
          monthly_price: 4000.0,
          fortnightly_price: 2000.0,
        },
        {
          item: "Trencher",
          description:
            "Trencher machine for digging trenches quickly and efficiently.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fAD22pc4heWsBTl_Nwj-BHHnZvTwFDZjIw&usqp=CAU",
          price: 280.0,
          technical_information: "Digging Depth: 1.2 meters",
          weekly_price: 1000.0,
          daily_price: 150.0,
          monthly_price: 2800.0,
          fortnightly_price: 1400.0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
