
import merchantServices from '../../services/merchantServices'

function listMerchants(req, res) {
  var merchants = merchantServices.listMerchant()
  res.send(merchants)
}

function getMerchant(req, res) {
  
  var merchants = merchantServices.getMerchant(parseInt(req.params.id))
  res.send(merchants)
}


module.exports = {
  getMerchant,
  listMerchants
}