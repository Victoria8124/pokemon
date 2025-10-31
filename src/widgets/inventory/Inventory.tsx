import './Inventory.scss'
import { useAppDispatch } from '../../app/hooks.ts';
import { addMoney } from '../../features/money/moneySlice.ts';

const Inventory = () => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="inventory-wrapper">
      <h1 className="inventory-title">Inventory</h1>
      <button className="inventory-button" onClick={() => dispatch(addMoney(1000))}>
        <img src="/public/image 2.png" alt="icon" />
        <span className="inventory-value">1000</span>
      </button>
    </div>
  );
};
export default Inventory;
