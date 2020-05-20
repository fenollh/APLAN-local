
import { AsyncStorage } from 'react-native';


const setData = async (context, type) => {
    await AsyncStorage.setItem(type, JSON.stringify(context.state.data))    
}
    
const getData = async(context, type) => {

    try {
        const value = await AsyncStorage.getItem(type);
        if (value != null){
            const data = JSON.parse(value)
            context.setState({ data:  data})
        }
        else{
            context.setState({ data: ['primero'] })
        }
    } catch (error) {
    console.log('ERROR: '+error)
    }
}


const saveNote = (context) => {
    getData(context, 'notes')
    .then(() => { 
        context.setState({ data: [...context.state.data, {title: context.state.title, body: context.state.body}] })
    })
    .then(() => setData(context, 'notes')) 
    return new Promise((resolve) => {
        console.log('en la promesa')
        resolve()
    })
}

const saveReminder = (context) => {
    
    getData(context, 'reminders')
    .then(() => { 
        const that = context.state
        context.setState({ data: [...that.data, {title: that.title, body: that.body, date: that.stringDate, importance: that.radio, notifications: that.cbNotifications}] })
    })
    .then(() => setData(context, 'reminders'))  
}

export {saveNote}
export {saveReminder}
export {getData}
export {setData}