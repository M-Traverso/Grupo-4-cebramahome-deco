
const db = require('../../database/models');

const apiSalesController = {
  create: async (req, res) => {
    let { product_id, user_id } = req.body;
    const tempData = [];

    if (!Array.isArray(user_id) || !Array.isArray(product_id)) {
   
      tempData.push({ user_id: user_id, product_id: product_id });
    } else {

      for (let i = 0; i < user_id.length; i++) {
        tempData.push({ user_id: user_id[i], product_id: product_id[i] });
      }
    }

    try {
      for (const data of tempData) {
        const user = await db.User.findByPk(data.user_id);

        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        await user.addProduct(data.product_id);
      }

      res.json({ message: 'Data loaded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};


module.exports = apiSalesController;
