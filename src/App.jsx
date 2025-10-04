import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import DashboardLayout from './components/pages/Dashboard/DashboardLayout'
import { Dashboard, Finance, Goals, Message, Products, SalesInsights, SalesOrders, Store, ToDo } from './components/pages/Dashboard/Routes'

function App() {
  return (
    <Routes>
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='finance' element={<Finance />} />
        <Route path='goals' element={<Goals />} />
        <Route path='message' element={<Message />} />
        <Route path='products' element={<Products />} />
        <Route path='sales-insights' element={<SalesInsights />} />
        <Route path='sales-orders' element={<SalesOrders />} />
        <Route path='store' element={<Store />} />
        <Route path='todo' element={<ToDo />} />
      </Route>
      <Route path='auth'>
        <Route path='signup' />
        <Route path='login' />
      </Route>
    </Routes>
  )
}

export default App