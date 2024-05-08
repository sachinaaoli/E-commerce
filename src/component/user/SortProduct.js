import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const SortProduct = () => {
    const dispatch= useDispatch();
    const  {data, loding} =useSelector((state) => state?.sort)

    React.useEffect(()=>{
        dispatch(SortProduct());
    } ,[]);
    const options =[
        {
        value:"hoddie",
        label:"Hoddie",
        },
        {
            value:"bag",
        label:"Bag",
        }
    ]
    const handleChange=(value, Option) => {
        console.log("hi",value, Option);
        dispatch(SortProduct(value));
    }

  return (
    <div>
      hellooooooooooooooo
    </div>
  )
}

export default SortProduct
