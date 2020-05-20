import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles'
import FabButton from '../../../components/fabButton'
import { getData } from '../../../dataBaseFunctions/saveData'
import NotesList from './notesList'


export default class NotesScreen extends React.Component{

    constructor(props){
        super(props)

        console.ignoredYellowBox = ['Setting a timer'];
        this.state={
            favouritesFilter: false,
            data: []
        }
    }
    componentDidMount = () => {
        getData(this, 'notes')
    }

    componentDidUpdate = () => {
        setTimeout(() => {
            getData(this, 'notes')
        },100)
    }


    render(){

        return(
            <View style={styles.container}>      
                <View style={styles.subHeader}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> NOTES SCREEN </Text>         
                    </View>
                </View>

                <View style={styles.body}>
                    <NotesList context={this}/>
                    <FabButton type = 'notes' navigation = {this.props.navigation}/>
                </View>
            </View>
        )
    }
} 