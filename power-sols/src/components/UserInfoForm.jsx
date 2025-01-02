import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserInfoForm = ({ onFormFilled, setUserInfo }) => {
  const [userInfo, setLocalUserInfo] = useState({
    userName: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  // Memoize the `isFormFilled` value to prevent unnecessary updates
  const isFormFilled = Object.values(userInfo).every((field) => field.trim() !== '');

  // Update parent state only when form data changes and is valid
  useEffect(() => {
    if (isFormFilled) {
      onFormFilled(true);
      setUserInfo((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(userInfo)) {
          return userInfo;
        }
        return prev;
      });
    } else {
      onFormFilled(false);
    }
  }, [isFormFilled, userInfo, onFormFilled, setUserInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Enter Your Information</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="userName"
          value={userInfo.userName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="phoneNumber"
          value={userInfo.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full border p-2 rounded-md"
        />
      </div>
    </div>
  );
};

UserInfoForm.propTypes = {
  onFormFilled: PropTypes.func.isRequired,
  setUserInfo: PropTypes.func.isRequired,
};

export default UserInfoForm;
