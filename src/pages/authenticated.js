import MyActivities from '../../components/MyActivities.js';
import CompletedActivites from '../../components/completedActivites.js';
import Favorites from '../../components/Favorites.js';
import Cookies from './Login/setCookie.js';
import {useRouter} from 'next/router';
import react, { useEffect, useState } from 'react';
import Image from 'next/image';

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
        <div style={{padding: "2vh 0 0 0"}}>
          <div className='row py-3' style={{margin: "0"}}>

            

            {/* <div className='row' style={{margin: "0"}}>
              <div className='col-sm'>
                <div className='row' style={{margin: "0"}}>
                  <Favorites />
                </div>
                <div className='row' style={{margin: "0"}}>
                  <CompletedActivites />
                </div>
              </div>
              <div className='col-sm'>
                <MyActivities />
              </div>
            </div> */}
            <div className='row' style={{margin: "0", width: "100vw", padding: "0 1vw"}}>
              <div className='col-' style={{padding: "0", margin: "0 1.5vw 0 1.5vw", width: "22vw", minWidth: "23rem"}}>
                <div style={{backgroundColor: "#E9E9E9", paddingTop: "1rem", marginBottom: "1.5vw", width: "100%"}}>
                  <div className='wrapper' style={{position: "relative", float: "center", width: "5.7rem", minWidth: "5.7rem", margin: "auto"}}>
                    <img
                      src="/cntBlue.png"
                      alt="Charge and Tarry Logo"
                      style={{width: "100%", minWidth: "4rem"}}
                    />
                  </div>
                  <div style={{margin: "0 0 1rem 0"}}>
                    <p 
                      className='lead text-center'
                      style={{
                        fontSize: "2.5rem",
                        width: "100%",
                        marginBottom: "0.3rem"
                      }}
                    >{Cookies.getUsername()}</p>
                    <p style={{margin: "0 0 0 0.7rem", fontWeight: "bold"}}>Completed X Activities</p>
                    <p style={{margin: "0 0 0 0.7rem", fontWeight: "bold", paddingBottom: "0.5rem"}}>Created X Activities</p>
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
    </>
  );

}

export default Authenticated;