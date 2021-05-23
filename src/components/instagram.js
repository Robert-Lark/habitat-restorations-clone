import React, { useEffect } from "react";

import axios from 'axios'


function Instagram(props) {

useEffect(() => {
    axios.get('https://api.instagram.com/oauth/authorize?client_id=839943530261406&redirect_uri=https://loving-mcclintock-637b40.netlify.app/&scope=user_profile,user_media&response_type=code')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}, [])


  return (
    <div>
      TEST
    </div>
  );
}

export default Instagram;
