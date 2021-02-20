// Components
import LevelTableField from 'src/alerting/components/LevelTableField'
import TimeTableField from 'src/alerting/components/TimeTableField'
import CheckTableField from 'src/checks/components/CheckTableField'
import NotificationRuleTableField from 'src/alerting/components/NotificationRuleTableField'
import NotificationEndpointTableField from 'src/notifications/endpoints/components/NotificationEndpointTableField'
import SentTableField from 'src/alerting/components/SentTableField'

// Types
import {Fields} from 'src/eventViewer/types'

export const STATUS_FIELDS: Fields = [
  {
    rowKey: 'time',
    columnName: 'Time',
    columnWidth: 160,
    component: TimeTableField,
  },
  {
    rowKey: 'level',
    columnName: 'Level',
    columnWidth: 50,
    component: LevelTableField,
  },
  {
    rowKey: 'checkID',
    columnName: 'Check',
    columnWidth: 150,
    component: CheckTableField,
  },
  {
    rowKey: 'message',
    columnName: 'Message',
    columnWidth: 300,
  },
]

export const NOTIFICATION_FIELDS: Fields = [
  {
    rowKey: 'time',
    columnName: 'Time',
    columnWidth: 160,
    component: TimeTableField,
  },
  {
    rowKey: 'level',
    columnName: 'Level',
    columnWidth: 50,
    component: LevelTableField,
  },
  {
    rowKey: 'checkID',
    columnName: 'Check',
    columnWidth: 150,
    component: CheckTableField,
  },
  {
    rowKey: 'notificationRuleID',
    columnName: 'Notification Rule',
    columnWidth: 200,
    component: NotificationRuleTableField,
  },
  {
    rowKey: 'notificationEndpointID',
    columnName: 'Notification Endpoint',
    columnWidth: 200,
    component: NotificationEndpointTableField,
  },
  {
    rowKey: 'sent',
    columnName: 'Sent',
    columnWidth: 50,
    component: SentTableField,
  },
]

export const EXAMPLE_STATUS_SEARCHES = [
  '"checkName" == "my check"',
  '"level" != "ok"',
  '"level" == "warn"',
  '"level" == "crit"',
  '"message" =~ /exceeded capacity/',
  '"checkName" == "my check" and ("level" == "crit" or "level" == "warn")',
]

export const EXAMPLE_NOTIFICATION_SEARCHES = [
  '"checkName" == "my check"',
  '"level" == "crit"',
  '"level" != "ok"',
  '"notificationRuleName" == "my rule"',
]

export const HISTORY_TYPE_QUERY_PARAM = 'type'
export const SEARCH_QUERY_PARAM = 'filter'
