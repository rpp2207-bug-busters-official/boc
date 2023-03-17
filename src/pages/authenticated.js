import MyActivities from '../../components/MyActivities.js';
import Favorites from '../../components/Favorites.js';

const Authenticated  = () => {

  return (
    <div >
      <h3>Authenticted page for reviews and other cool things like that</h3>
      <Favorites />
      <MyActivities />

    </div>
  );

}

export default Authenticated;