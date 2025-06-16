import React from 'react'
import { useAdminCategory } from '../../hooks/admin/useAdminCategory'
import { getBackendImageUrl } from '../../utils/backend-image'

export default function CategoryTable(){
    const {categories, error, isPending}=useAdminCategory()

    return(
        <div>
            CategoryTable
            <table className='min-w-full table-auto'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((row) => {
                            return (
                                <tr key={row._id}>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td>
                                        <img className='w-16 h-16 object-cover'
                                        src={getBackendImageUrl(row.filepath)}
                                        alt={row.name}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
