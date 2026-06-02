import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import ProfileAddresses from '../src/shared/pages/ProfileAddresses';

const ProfileAddressesPage = () => (
  <ProtectedRoute>
    <ProfileAddresses />
  </ProtectedRoute>
);

export default ProfileAddressesPage;
