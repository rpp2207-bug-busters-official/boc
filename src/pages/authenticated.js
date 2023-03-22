import MyActivities from '../../components/MyActivities.js';
import CompletedActivites from '../../components/completedActivites.js';
import Favorites from '../../components/Favorites.js';
import Cookies from './Login/setCookie.js';
import {useRouter} from 'next/router';
import react, { useEffect } from 'react';

const Authenticated  = () => {
  let router = useRouter();
  let cookie = Cookies.getCookie();
  useEffect(() => {
    if (Cookies.getCookie() === undefined) {
      router.push('/')
    }
  }, [router]);


  return (
    <>
      {cookie !== undefined &&
        <div>
          <Favorites />
          <MyActivities />
          <CompletedActivites/>
        </div>
      }
    </>
  );

}

export default Authenticated;