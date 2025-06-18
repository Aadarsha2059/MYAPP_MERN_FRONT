import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

import { useGetOneCategory, useUpdateOneCategory } from '../../hooks/admin/useAdminCategory'

import { useParams } from 'react-router-dom'
import { getBackendImageUrl } from '../../utils/backend-image'

export default function UpdateCategory() {
    const { id } = useParams()

    const validationSchema = Yup.object(
        {
            name: Yup.string().required("Name required"),
            image: Yup.mixed().nullable().test(
                "fileSize",
                "File to large",
                (value) => !value || (value && value.size <= 5 * 1024 * 1024)
            )
        }
    )
    const categoryOne = useGetOneCategory(id)
    // categoryOne.data,categoryOne.isPending
    const UpdateCategory = useUpdateOneCategory()


    const formik = useFormik(
        {
            enableReinitialize: true,
            initialValues: {
                name: categoryOne.category?.name || "",
                image: "" //files/images
            },
            validationSchema,
            onSubmit: (values) => {
                const formData = new FormData()
                formData.append("name", values.name)
                if (values.image) formData.append("image", values.image)
                console.log("even")
                UpdateCategory.mutate(
                    { id, data: formData },
                    {
                        onSuccess: () => formik.resetForm(),
                    }
                )

            }
        }
    )



    return (
        <div>
            CreateCategory
            <form onSubmit={formik.handleSubmit}>
                <label>Category Name</label>
                <input
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                >
                </input>
                {formik.touched && formik.errors.name && <>{formik.errors.name}</>}
                <label>category image</label>
                <input
                    name='image'
                    type='file'
                    accept='image/*'
                    onChange={
                        (e) => {
                            const file = e.currentTarget.files[0]
                            if (file) formik.setFieldValue("image", file)

                        }
                    }
                >
                </input>
                {formik.touched.image && formik.errors.image && <>{formik.errors.image}</>}
                {
                    formik.values.image ?
                        <img
                            className='w-32 h-32 object-Cover'
                            src={URL.createObjectURL(formik.values.image)}
                        >

                        </img>
                        : <img className='w-32 h-32 object-cover'
                            src={getBackendImageUrl(categoryOne.category?.filepath)}></img>
                }

                <button type='submit'>update</button>
            </form>

        </div>
    )

}