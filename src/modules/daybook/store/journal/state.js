export default () => ({
  isLoading: true,
  entries: [
      {
          id: new Date().getTime(),
          date: new Date().toDateString(),
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa unde, in obcaecati quas doloremque quaerat commodi magnam harum, exercitationem praesentium deserunt repudiandae explicabo mollitia beatae cumque aliquid nam ipsam.',
          picture: null
      },
      {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString(),
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa unde, in obcaecati quas doloremque quaerat commodi magnam harum, exercitationem praesentium deserunt repudiandae explicabo mollitia beatae cumque aliquid nam ipsam.',
        picture: null
      },
      {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa unde, in obcaecati quas doloremque quaerat commodi magnam harum, exercitationem praesentium deserunt repudiandae explicabo mollitia beatae cumque aliquid nam ipsam.',
        picture: null
      }
  ]
});
