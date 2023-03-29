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
        <div style={{padding: "0"}}>
          <div className='row py-3' style={{margin: "0"}}>

            <p className='lead text-center' style={{fontSize: "calc(2.4rem + 0.8vh)", width: "100vw", margin: "2rem 0 3rem 0"}}>Welcome back, {Cookies.getUsername()}!</p>

            <div className='row' style={{margin: "0"}}>
              <div className='col-sm'>
                <Favorites />
              </div>
              <div className='col-sm'>
                <CompletedActivites/>
              </div>
              <div className='col-sm'>
                <MyActivities />
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