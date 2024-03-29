import MyActivities from '../../components/MyActivities.js';
import CompletedActivites from '../../components/completedActivites.js';
import Favorites from '../../components/Favorites.js';
import Cookies from '../../helper_functions/setCookie.js';
import {useRouter} from 'next/router';
import react, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from './footer.js';

const Authenticated  = () => {
  let router = useRouter();
  const [cookie, setCookie] = useState(undefined);
  useEffect(() => {
    let currCookie = Cookies.getCookie();
    setCookie(currCookie);
    if (currCookie === undefined) {
      router.push('/')
    }
  }, [router]);


  return (
    <>
      {cookie !== undefined &&
      <>
        <div style={{padding: "2vh 0 0 0", backgroundColor: "white"}} >
          <div className='row py-3' style={{margin: "0"}}>
            <div className='row' style={{margin: "0", width: "100vw", padding: "0 1vw"}}>
              <div className='col-' style={{padding: "0", margin: "0 1.5vw 0 1.5vw", width: "22vw", minWidth: "23rem"}}>
                <div style={{backgroundColor: "white", paddingTop: "1rem", marginBottom: "1.5vw", width: "100%", border: "3px solid #FF5533", borderRadius: "8px"}}>
                  <div className='wrapper' style={{position: "relative", float: "center", width: "5.7rem", minWidth: "5.7rem", margin: "auto"}}>
                    <Image
                      src="/CNTLogo.png"
                      alt="Charge and Tarry Logo"
                      style={{width: "100%", minWidth: "4rem"}}
                      width='100'
                      height='180'
                    />
                  </div>
                  <div style={{padding: "0 0 1rem 0", color: "black"}} >
                    <p
                      className='lead text-center'
                      style={{
                        fontSize: "2.5rem",
                        width: "100%",
                        marginBottom: "0.3rem"
                      }}
                    >{Cookies.getUsername()}</p>
                  </div>
                </div>
                <Favorites />
                <div style={{width: "100%"}}>
                </div>
              </div>
              <div className='col-lg' style={{padding: "0", margin: "0 1.5vw 0 1.5vw", width: "69vw", minWidth: "23rem"}}>
                <MyActivities />
                <CompletedActivites/>
              </div>
            </div>
          </div>
        </div>
      </>
      }
      <Footer/>
    </>
  );

}

export default Authenticated;