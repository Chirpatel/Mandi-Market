import axios from 'axios';

const ActivateAPI = async () =>{

    var config = {
        method: 'get',
        url: 'https://mandimarketapi.chir.in/activate',
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
export default ActivateAPI;