import React from 'react';
import { Text, View,Image,TextInput,TouchableOpacity,ScrollView, StyleSheet, Share,KeyboardAvoidingView } from 'react-native';

export default class MenuScreen extends React.Component{
   constructor() {
    super();
    this.state = {
      text:'',
      address:'',
      phone:''
    };
     }
    SubPre= async()=>{
       this.setState({
         text:'',
         address:'',
         phone:''
       })
       alert("gmail creativeoven71@gmail.com")
           const uri = this.state.text+this.state.address+this.state.phone

    Share.share(
      {
        title: 'test title',
        url: uri,
      Share},
    );
     }
    render(){
    return(
        <View style={{backgroundColor:'#F9EDE6'}}>
        <ScrollView>
        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Home')}}>
       <Image style={{height:60,width:60}} source={require('../assets/Back.png')}/>
        </TouchableOpacity>
        <Image 
        style = {{ height: 120, width: 280, marginLeft:40, marginTop: 20, paddingTop:10,alignSelf:'center'}}
        source = {require ('../assets/Co.png')}
        />
        <View>
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center',marginBottom:20}}
        source = {require ('../assets/menu1.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center',marginBottom:20}}
        source = {require ('../assets/menu2.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center',marginBottom:20}}
        source = {require ('../assets/menu3.jpeg')}
        />
        <Image 
        style = {{ height: 300, width: 250,alignSelf:'center',marginBottom:20}}
        source = {require ('../assets/menu4.jpeg')}
        />
        </View>
         <KeyboardAvoidingView>
    <Text style={{marginTop:20,fontSize:22}}>Your Order:</Text>
    <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <Text style={{marginTop:10,fontSize:22}}>Details:</Text>
        <TextInput
          style={styles.inputBox}
          placeholder ={"Address"}
          onChangeText={text => {
            this.setState({ address: text });
          }}
          value={this.state.address}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder ={"Phone number"}
          onChangeText={text => {
            this.setState({ phone: text });
          }}
          value={this.state.phone}
        />
    
    <TouchableOpacity style={styles.button2} onPress={this.SubPre}>
     <Text style={styles.buttonText}>Submit</Text>
     </TouchableOpacity>
     </KeyboardAvoidingView>
        </ScrollView>
        </View>
    )
        
}
}
const styles = StyleSheet.create({
  button: {
    marginTop:10,
    backgroundColor:'#dc0f7a',
    height:30,
    width:200,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
  }, 
    button2: {
    marginTop:10,
    backgroundColor:'#dc0f7a',
    height:40,
    width:200,
    borderWidth:2,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100
  },
  buttonText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20
  },
  inputBox:{
    width:300,
    color:"black",
    borderWidth:2,
    height:40,
    alignItems:'center',
    alignSelf:'center'
  },
  inputBox2:{
    width:300,
    color:"black",
    borderWidth:2,
    height:40,
    alignItems:'center',
    alignSelf:'center',
    marginTop:5
  }
});