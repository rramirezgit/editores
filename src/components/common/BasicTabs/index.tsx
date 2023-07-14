import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { colors } from '@/styles/variables'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ overflowY: 'scroll', height: 'calc(100vh - 49px)' }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const StyledTabs = styled(Tabs)({
  '.MuiTabs-indicator': {
    borderBottom: '2px solid var(--primary_yellow)'
  }
})

const StyledTab = styled(Tab)({
  '&.Mui-selected': {
    color: colors.primary_yellow
  }
})

type tabPanels = {
  index: number
  Panel: React.ReactNode | JSX.Element | any
}
type tabs = {
  index: number
  label?: string
  icon?: any
}

interface BasicTabsProps {
  tabPanels: tabPanels[]
  tabs: tabs[]
  submitForm?: () => void
}

const BasicTabs = ({ tabPanels, tabs, submitForm }: BasicTabsProps) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{ justifyContent: 'center' }}
        >
          {tabs &&
            tabs.map(({ index, label, icon }) => (
              <StyledTab
                key={index}
                label={label}
                icon={icon}
                sx={{ flex: 1 }}
                {...a11yProps(index)}
              />
            ))}
        </StyledTabs>
      </Box>
      {tabPanels &&
        tabPanels.map(({ Panel, index }) => (
          <TabPanel key={index} value={value} index={index}>
            <Panel />
          </TabPanel>
        ))}
    </Box>
  )
}

export default BasicTabs
