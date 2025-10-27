import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeMoney } from "../../../features/money/moneySlice";
import { toast } from "react-toastify";
import './Shop.scss'
import { searchQuery } from "../../../features/query/queryActions";
import SearchField from '../searchField/searchField'

const Shop = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.money.balance);
  const queryItems = useAppSelector((state) => state.query.queryItems)
  //const [query, setQuery] = useState<string>('');

  const removeMoneyBalance = () => {
    if (balance >= 1000) {
      dispatch(removeMoney(1000));
    } else {
        toast.info('Недостаточно средств')
    }
  };

  const handleSearch = (query: string) => {
    dispatch(searchQuery(query));
  };

  return (
    <div className="shop-wrapper">
      <h1 className="shop-title">Shop</h1>
      <div>
        <SearchField onSearch={handleSearch} />
        {queryItems.map((it) => (
          <div
            className="queryItems"
            key={it.name}
            style={{ marginTop: "20px" }}
          >
            <h3>{it.name}</h3>
            {it.image && <img src={it.image} alt={it.name} />}
          </div>
        ))}
      </div>
      <div>
        <button className="shop-button" onClick={removeMoneyBalance}>
          Купить за {`1000`}
        </button>
      </div>
    </div>
  );
};

export default Shop;