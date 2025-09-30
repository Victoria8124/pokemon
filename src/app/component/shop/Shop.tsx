import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeMoney } from "../../../features/money/moneySlice";
import { toast } from "react-toastify";
import './Shop.scss'

const Shop = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.money.balance);

  const removeMoneyBalance = () => {
    if (balance >= 1000) {
      dispatch(removeMoney(1000));
    } else {
        toast.info('Недостаточно средств')
    }
  };
  return (
    <div className="shop-wrapper">
      <h1 className="shop-title">Shop</h1>
      <div>
        <button className="shop-button" onClick={removeMoneyBalance}>Купить за {`1000`}</button>
      </div>
    </div>
  );
};

export default Shop;