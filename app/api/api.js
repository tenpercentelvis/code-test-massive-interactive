
import axios from 'axios';

// api data

const url = 'http://localhost:3000/api/list';

// connect to api end point using axios get request

class api {

  static getData() {

    return axios.get(url)
      .then(response => response.data)
      .then((data) => {
        return {
          items: data.items,
        };
      })

      .catch((error) => {
        throw (error);
      });
  }

}

export default api;
