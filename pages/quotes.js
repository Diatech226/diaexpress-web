import React from 'react';
import ProtectedRoute from '../src/shared/components/ProtectedRoute';
import Quotes from '../src/shared/pages/Quotes';

const QuotesPage = () => (
  <ProtectedRoute>
    <Quotes />
  </ProtectedRoute>
);

export default QuotesPage;
