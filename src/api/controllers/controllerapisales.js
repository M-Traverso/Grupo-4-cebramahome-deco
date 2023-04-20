
const db = require('../../database/models');


const apiSalesController = {
  create: async (req, res) => {
    const { product_id, user_id } = req.body;
    const tempData = [];
    
    user_id.forEach(user => {
      product_id.forEach(product => {
        tempData.push({ user_id: user, product_id: product });
      });
    });

    try {
      for (const data of tempData) {
        const user = await db.User.findByPk(data.user_id);
        const product = await db.Products.findByPk(data.product_id);

        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }

        await user.addProduct(product);
      }

      res.json({ message: 'Data loaded successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};


module.exports = apiSalesController;
