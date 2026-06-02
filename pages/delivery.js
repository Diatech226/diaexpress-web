import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import DeliveryPage from '../src/shared/pages/DeliveryPage';
import RoleProtected from '../src/shared/components/RoleProtected';

const DeliveryHomePage = () => (
  <ProtectedRoute>
    <RoleProtected role="delivery">
      <DeliveryPage />
    </RoleProtected>
  </ProtectedRoute>
);

export default DeliveryHomePage;
