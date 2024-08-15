import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosCommon from '../../../hooks/useAxiosCommon';

const ProductDetail = () => {
   const {id} = useParams()
   const axiosCommon = useAxiosCommon()
   const {data:product={}} = useQuery({
    queryKey:["product"],
    queryFn: async()=>{
        const {data} = await axiosCommon.get(`/product-detail/${id}`)
        console.log(data)
        return data
    }
   })
    return (
        <div>
            this is product details
        </div>
    );
};

export default ProductDetail;