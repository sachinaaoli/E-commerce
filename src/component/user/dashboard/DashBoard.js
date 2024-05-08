import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../../../services/allProducts';
// import { fetchCarousal } from '../../../services/allProducts';
// import Carousel from './Carousel';
import LatestProduct from './LatestProduct';
import ReusableComponent from './ReusableComponent';
import ReusableComponentSecond from './ReusableComponentSecond';
import ReusableComponentThird from './ResusableComponentThird';
import { handiCrafts, hotproducts } from '../../utiles/Product'

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allproduct);
  const { data } = useSelector((state) => state.carousalslice);

  // React.useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(fetchCarousal());
  // }, [dispatch]);

  console.log('Products:', products); // Log products to console
  console.log('Data:', data); // Log data to console

  return (
    <div>
      {/* <Carousel title={"Trending"} data={data.data}/> */}
      <LatestProduct title={"New Arrival"} data={handiCrafts}/>
      {/* <ReusableComponent
        title={"Hot Products"}
        data={products.data ? products.data.map((item) => ({
          ...item,
          qty: 1
        })) : []}
      /> */}
      <ReusableComponent title={"Handicrafts"} data={handiCrafts} />
      <ReusableComponentSecond title={"Trending"} data={hotproducts} />
      <ReusableComponentThird title={"Hot products"} data={hotproducts} />
    </div>
  );
};

export default Dashboard;
