import MyActivities from '../../components/MyActivities.js';
import CompletedActivites from '../../components/completedActivites.js';
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
      <>
        <div className='container'>
          <div className='row py-3' >
            <div className='col-3 order-2'>
              <div className='sticky top'>
                <p className='lead text-center'>Welcome back, {Cookies.getUsername()}!</p>

              </div>

            </div>
            <div className='col'>

              <div className='row'>
                <div className='col-sm'>
                  <Favorites />
                </div>
                <div className='col-sm'>
                  <MyActivities />
                </div>
                <div className='col-sm'>
                  <CompletedActivites/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      }
    </>
  );

}

export default Authenticated;