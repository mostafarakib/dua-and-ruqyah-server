const knex = require("./knex");

async function getAllDuaCategory() {
  try {
    const categories = await knex("category").select("*");
    return categories;
  } catch (error) {
    throw error;
  }
}

async function getSubcategoriesByCategoryId(categoryId) {
  try {
    const subCategories = await knex("sub_category")
      .where({ cat_id: categoryId })
      .select("*");
    return subCategories;
  } catch (error) {
    throw error;
  }
}

async function getDuasBySubcategoryId(subcategoryId) {
  try {
    const duas = await knex("dua")
      .where({ subcat_id: subcategoryId })
      .select("*");
    return duas;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDuaCategory,
  getSubcategoriesByCategoryId,
  getDuasBySubcategoryId,
};
