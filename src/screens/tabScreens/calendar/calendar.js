import React from 'react';

import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars'

import styles from './styles'
import FabButton from '../../../components/fabButton'
import { getData } from '../../../dataBaseFunctions/saveData'
import ReminderList from './remindersList'


export default class CalendarScreen extends React.Component{

    constructor(props){
        super(props)
        console.ignoredYellowBox = ['Setting a timer'];
        this.state={
            favouritesFilter: false,
            data: [],
            date: []
            
        }
    }

    markDays = () => {
        let days={}
        for(let i=0; i<this.state.date.length; i++){
            days= {...days, [this.state.date[i]]: {selected: true, textColor: 'green'}}
        }
        return days
    }

    saveDates = () => {
        let dates=[]
        for(let i=0; i<this.state.data.length; i++){
            dates=[...dates, this.state.data[i].date]
        }
        return dates
    }


    componentDidMount = () => {
        getData(this, 'reminders')
        .then(() => this.setState({ date: this.saveDates()}))
    }
    componentDidUpdate = () => {
        getData(this, 'reminders')
    }


    render(){ 

        return(
            <View style={styles.main}>      
                <View style={{flex: 1, flexDirection: 'row', marginTop: '1%'}}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> ESTO ES CALENDAR </Text>         
                    </View>
                    
                </View>
                <View style={{flex: 14, flexDirection: 'column'}}>
                    <Calendar
                        markedDates={this.markDays()}
                    />
                    <ReminderList context={this}/>
                    <FabButton type = 'calendar' navigation = {this.props.navigation}/>
                </View>
            </View>
        )
    }
} 
