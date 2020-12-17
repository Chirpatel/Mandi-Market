import axios from 'axios';

const CommodityDataApi = async ({state,district,market,commodity}) =>{
    var config = {
        method: 'get',
        url: `https://mandi-market.glitch.me/search/${state}/${district}/${market}/${commodity}/data`,
        headers: { }
      };
      let returndata;
      await axios(config)
      .then(function (response) {
        returndata=response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      //console.log(returndata);
      return returndata;
}
export default CommodityDataApi;