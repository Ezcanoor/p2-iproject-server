const axios = require('axios')

class HotelController{
  static async list(req, res){
    try {
      const longLang = req.query.ll || '-6.905977,107.613144'
      const venueType = req.query.venue || 'Hotel'
      const client_id = 'ARRNKMVHAIQTI3KZ3MROUGZJ1IWBHSELDDPX4QWBOVISBYJC'
      const client_secret = 'R4UMNMO5RXULK1MU0HKBQ5ZR21EH5IV3BPOQCXEZJAZGJO0H'
      const list = await axios.get(
        'https://api.foursquare.com/v2/venues/explore',
        {
          params: {
            client_id,
            query:venueType,
            ll: longLang,
            limit: 8,
            v:20180323,
            client_secret
          }
        }
      )
      let venue = list.data.response.groups[0].items
      res.status(200).json(venue)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = HotelController