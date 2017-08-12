import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { SideBar } from 'components'
import { ExpenseScreen } from 'expense'
import { IncomeScreen } from 'income'
import { DashboardScreen, AddIncomeScreen, AddExpenseScreen } from 'dashboard'

const DashboardNavigator = StackNavigator({
  Home: {
    screen: DashboardScreen,
  },
  AddIncome: {
    screen: AddIncomeScreen,
  },
  AddExpense: {
    screen: AddExpenseScreen,
  },
})

export const MoneyTracking = DrawerNavigator(
  {
    Dashboard: { screen: DashboardNavigator },
    Expense: { screen: ExpenseScreen },
    Income: { screen: IncomeScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  }
)
