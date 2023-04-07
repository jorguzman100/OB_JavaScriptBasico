// Install Axios
import axios from 'axios';

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/ability/1/', {
    params: {
      
    }
  }) // An alternative: axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('Finally');
  });