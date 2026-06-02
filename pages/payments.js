import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import Payments from '../src/shared/pages/Payments';
import RoleProtected from '../src/shared/components/RoleProtected';

const PaymentsPage = () => (
  <ProtectedRoute>
    <RoleProtected role="client">
      <Payments />
    </RoleProtected>
  </ProtectedRoute>
);

export default PaymentsPage;
