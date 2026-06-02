import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import ClientPage from '../src/shared/pages/ClientPage';
import RoleProtected from '../src/shared/components/RoleProtected';

const ClientHomePage = () => (
  <ProtectedRoute>
    <RoleProtected role="client">
      <ClientPage />
    </RoleProtected>
  </ProtectedRoute>
);

export default ClientHomePage;
