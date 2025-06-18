import React, { useState } from 'react'
import { useAdminCategory, useDeleteOneCategory } from '../../hooks/admin/useAdminCategory'

import { Link } from 'react-router-dom'
import DeleteModal from '../DeleteModal'
import { getBackendImageUrl } from '../../utils/backend-image'

function Welcome(props) {
    return <h1>{props.name}</h1>
}

function NameComponent({ name, age }) {
    return <h1>{name} {age}</h1>
}



export default function CategoryTable() {
    const { categories, error, isPending } = useAdminCategory()
    const deleteOneCategoryHook = useDeleteOneCategory()
    const [deleteId, setDeleteId] = useState(null)

    const handleDelete = () => {
        deleteOneCategoryHook.mutate(
            deleteId,
            {
                onSucess: () => {
                    setDeleteId(null)
                }
            }
        )
    }

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <Welcome name="Ram" />
            <NameComponent name="Shyam" age="20" />
            <DeleteModal
                isOpen={deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={handleDelete}
                title="delete confirmation"
                description="are you sure you want to delete "
            >

            </DeleteModal>
            CategoryTable
            <table className='min-w-full table-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((row) =>
                            <tr key={row._id}>
                                <td>{row.name}</td>
                                <td>
                                    <img
                                        className='w-16 h-16 object-cover'
                                        src={getBackendImageUrl(row.filepath)}
                                        alt={row.name}
                                    />
                                </td>
                                <td className="flex gap-2">
                                    <Link to={`/admin/category/${row._id}`}>
                                        <button>View</button>
                                    </Link>
                                    <Link to={`/admin/category/${row._id}/edit`}>
                                        <button>Edit</button>
                                    </Link>
                                    
                                    <button onClick={()=>setDeleteId(row._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}