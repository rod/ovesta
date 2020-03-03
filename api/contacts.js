import axios from axios

export default () => {
  const options = {
    headers: {
      'Api-Token': '7f08f1120a2c62f630386a2e25a8c1a356df3a5b6bbae2d6de1cb9739becccc8985d615e'
    }
  }

  axios.get('https://rdennis.api-us1.com/api/v3/contacts', options)
    .then((res) => {
      console.log(res)
    })
}
