import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Layout } from './components'
import { Dashboard, Finance, Goals, Message, Products, SalesInsights, SalesOrders, Store, ToDo } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='dashboard' element={<Dashboard />} />
        <Route path='finance' element={<Finance />} />
        <Route path='goals' element={<Goals />} />
        <Route path='message' element={<Message />} />
        <Route path='products' element={<Products />} />
        <Route path='sales-insights' element={<SalesInsights />} />
        <Route path='sales-orders' element={<SalesOrders />} />
        <Route path='store' element={<Store />} />
        <Route path='todo' element={<ToDo />} />
      </Route>
    </Routes>
  )
}

export default App