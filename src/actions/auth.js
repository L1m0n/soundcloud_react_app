import SC from 'soundcloud';

const  auth = () => {
    SC.connect().then((session) => {
        fetchMe(session);
    });
};

const fetchMe = (session) => {
  fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
};

export default auth;