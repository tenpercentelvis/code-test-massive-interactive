
// mock data

const mockData = {
  items: [
    {
      imageurl: 'images/image-1.jpg',
      title: 'Image 1',
      synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'www.good.com',
    },
    {
      imageurl: 'images/image-2.jpg',
      title: 'Image 2',
      synopsis: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      link: 'www.bad.com',
    },
    {
      imageurl: 'images/image-3.jpg',
      title: 'Image 3',
      synopsis: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      link: 'www.imdb.com',
    },
  ],
};

// mock connect to api end point

class api {
  static getData() {

    return new Promise((resolve, reject) => {

      if (resolve) {
        resolve(Object.assign([], mockData));
      } else {
        console.log(reject);
      }

    });

  }
}

export default api;
