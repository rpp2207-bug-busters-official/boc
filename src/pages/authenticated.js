import MyActivities from '../../components/MyActivities.js';
import Favorites from '../../components/Favorites.js';
import Cookies from './Login/setCookie.js';
import {useRouter} from 'next/router';
import react, { useEffect, useState } from 'react';

const Authenticated  = () => {
  let router = useRouter();
  const [cookie, setCookie] = useState(undefined);
  useEffect(() => {
    let currCookie = Cookies.getCookie();
    setCookie(currCookie);
    if (currCookie === undefined) {
      router.push('/')
    }
  }, []);


  return (
    <>
      {cookie !== undefined &&
        <div>
          <Favorites />
          <MyActivities />
        </div>
      }
    </>
  );

}

export default Authenticated;