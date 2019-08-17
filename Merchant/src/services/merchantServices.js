const { merchantDb } = require('../db')

const createMerchant = async (user, content) => {
  try {
    return await merchantDb(user, content)
  } catch (e) {
    throw new Error(e.message)
  }
}
var merchants = [
  { id: 1, name: 'How to train your dragon' },
  { id: 2, name: 'Queen of Katwe' },
]


const listMerchant = () => {
  return (merchants);
}

const getMerchant = (id) => {
  const merchant = merchants.find((m) => m.id === id);
  return merchant
}

module.exports = {
  createMerchant,
  listMerchant,
  getMerchant
}