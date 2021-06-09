import { NavigatorScreenParams } from'@react-navigation/native'

export type QueueType = {
    ticketNumber: string
    name: string
    age: number
    clinic: string
}

export type RootNavigationParamsList = {
    Main: NavigatorScreenParams<TopNavigatorParamsList>
}
export type TopNavigatorParamsList = {
    Form: undefined
    Home: undefined
    Started: undefined
    TicketSummary: undefined
}