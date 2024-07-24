import { useDispatch, useSelector } from "react-redux";
import { deposit, withdrow } from "../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const credits = useSelector((state) => state.balance.value);

  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch(deposit(value));
  };

  const handleWithdrow = () => {
    dispatch(withdrow(value));
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>Balance: {credits} credits</p>
      <button onClick={handleDeposit}>Deposit {value}</button>
      <button onClick={handleWithdrow}>Withdrow {value}</button>
    </div>
  );
}
