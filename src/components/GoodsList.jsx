import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem';

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h2>Nothing here</h2>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export { GoodsList };
