import React from 'react'
import { useAdminProduct } from '../../hooks/admin/useAdminProduct'

export default function ProductTable() {
    const {data, error, isPending}=useAdminProduct()

    if(error) return <>{error.message}</>
  
    
  return (
    <div>ProductTable
        {data.message} {data.success}
        {
            data.data && data.data.map(
                (row) =>{
                    <>
                    <p>{row.name}</p>
                    <p>{row.price}</p>
                    </>
                }
            )
        }
    </div>
  )
}