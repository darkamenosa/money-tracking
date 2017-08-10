import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import { SideBar } from 'components'
import { ExpenseScreen } from 'expense'
import { IncomeScreen } from 'income'
import { DashboardScreen } from 'dashboard'

export const MoneyTracking = DrawerNavigator(
  {
    Expense: { screen: ExpenseScreen },
    Income: { screen: IncomeScreen },
    Dashboard: { screen: DashboardScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  }
)
