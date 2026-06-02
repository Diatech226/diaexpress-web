import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import UserShipments from '../src/shared/pages/UserShipments';

const UserShipmentsPage = () => (
  <ProtectedRoute>
    <UserShipments />
  </ProtectedRoute>
);

export default UserShipmentsPage;
