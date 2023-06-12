import { AppShell } from '@mantine/core'
import { FC } from 'react'
import Dashboard from '../../components/Dashboard'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

export const HomePage: FC = () => {
  return (
    <AppShell
      navbar={<Navbar />}
      header={<Header />}
      navbarOffsetBreakpoint="md"
    >
      <Dashboard />
    </AppShell>
  )
}
