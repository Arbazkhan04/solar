import React, { useState, useEffect } from 'react';

const UserInfoForm = ({ onFormFilled, setUserInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({}); // To track validation errors

  // Notify parent about form validity and send data
  useEffect(() => {
    const { name, address, email, phone } = formData;
    const isValid = name && address && email && phone && !Object.keys(errors).length;

    onFormFilled(isValid); // Notify parent whether form is valid
    setUserInfo(formData); // Pass complete form data to parent
  }, [formData, errors, onFormFilled, setUserInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validate field on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'address':
        if (!value.trim()) error = 'Address is required';
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email format';
        break;
      case 'phone':
        if (!/^\d{10,15}$/.test(value)) error = 'Phone must be 10-15 digits';
        break;
      default:
        break;
    }

    // Update errors state
    setErrors((prevErrors) => {
      if (error) {
        return { ...prevErrors, [name]: error };
      } else {
        const { [name]: _, ...rest } = prevErrors;
        return rest;
      }
    });
  };

  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">Enter Your Information</h2>
      <div className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
