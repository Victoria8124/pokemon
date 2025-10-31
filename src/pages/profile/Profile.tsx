import "./Profile.scss";
import { useAppSelector } from "../../app/hooks";
import Inventory from "../../widgets/inventory/Inventory";
import Shop from "../../widgets/shop/Shop";
import Pokemon from "../../widgets/pokemons/Pokemon";

const Profile = () => {
  const balance = useAppSelector((state) => state.money.balance);

  return (
    <div className="app-container">
      <div className="profile-page">
        <div className="header-image">
          <img src="/image 1.png" alt="clicker" />
          <hr className="divider" />
          <img src="/Clicker-12-14-2023 (3) 1.png" alt="pokemon" />
        </div>
        <div className="profile-content">
          <img className="coin" src="/public/image 2.png" alt="coin" />
          <h1 className="balance">{balance}</h1>
        </div>
      </div>
      <div className="inventory">
        <Inventory />
        <Pokemon/>
        <Shop />
      </div>
    </div>
  );
};

export default Profile;
