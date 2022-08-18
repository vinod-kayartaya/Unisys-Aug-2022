import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const formikCfg = {
    initialValues: {
        productName: '',
        unitPrice: '',
        supplierEmail: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object({
        productName: yup
            .string()
            .required('Required but missing')
            .min(3, 'At least 3 letters required')
            .max(25, 'Must not exceed 25 letters'),
        unitPrice: yup
            .number()
            .required('Required but missing')
            .positive('Must be > 0'),
        supplierEmail: yup
            .string()
            .required('Required but missing')
            .email('Does not look like a proper email!'),
    }),
};

const ProductForm = () => {
    const f = useFormik(formikCfg);

    return (
        <>
            <h3>Add new product data</h3>
            <form onSubmit={f.handleSubmit}>
                <div>
                    <label htmlFor='productName'>Product name</label>
                    <div>
                        <input
                            type='text'
                            name='productName'
                            id='productName'
                            className='form-control'
                            value={f.values.productName}
                            onChange={f.handleChange}
                        />
                        {f.errors.productName && (
                            <div className='text-danger'>
                                {f.errors.productName}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor='unitPrice'>Unit price (INR)</label>
                    <div>
                        <input
                            type='text'
                            name='unitPrice'
                            id='unitPrice'
                            className='form-control'
                            value={f.values.unitPrice}
                            onChange={f.handleChange}
                        />
                        {f.errors.unitPrice && (
                            <div className='text-danger'>
                                {f.errors.unitPrice}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor='supplierEmail'>
                        Supplier's email address
                    </label>
                    <div>
                        <input
                            type='supplierEmail'
                            name='supplierEmail'
                            id='supplierEmail'
                            className='form-control'
                            value={f.values.supplierEmail}
                            onChange={f.handleChange}
                        />
                        {f.errors.supplierEmail && (
                            <div className='text-danger'>
                                {f.errors.supplierEmail}
                            </div>
                        )}
                    </div>
                </div>
                <button className='btn btn-primary'>Save</button>
            </form>
        </>
    );
};

export default ProductForm;
