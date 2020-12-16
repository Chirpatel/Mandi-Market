import axios from 'axios';

const MarketApi = async ({state,district}) =>{
    //console.log(State);
    var config = {
        method: 'get',
        url: `https://mandi-market.glitch.me/search/${state}/${district}`,
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
export default MarketApi;