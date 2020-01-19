import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView, ScrollView, TextInput, Button, TouchableHighlight, TouchableOpacity, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';


//login and register actions
import {registerUser,login,facebookLogin,standAloneGoogleLogin,expoGoogleLogin} from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';


//TextInput

import TextInputField from '../../components/form/TextInput';

const mapActions={
  registerUser,
  login,
  facebookLogin,
  standAloneGoogleLogin,
  expoGoogleLogin
}


const mapStateToProps=state=>({
  auth:state.firebase.auth
})

class LoginScreen extends React.Component{

  state={isLogin:true}

  componentDidMount=()=>{
    console.log('component mounted')
    console.log(this.props.auth)
  }

  
  componentDidUpdate=()=>{
    console.log('componentDidUpdate')
    console.log(this.props.auth)
    if(this.props.auth.isLoaded && !this.props.auth.isEmpty){
      console.log('in component did Update to be checked if logged in or not')
      this.props.navigation.navigate('main')
    }
  }


  
  render(){
    console.log()
    
    const {handleSubmit}=this.props;
    let googleSignInFunction=this.props.standAloneGoogleLogin;
    if(Constants.appOwnership==='expo'){
      googleSignInFunction=this.props.expoGoogleLogin
    }
    console.log(
      'component rendered'
    )
    return (
      <View style={styles.container}>
      <LinearGradient
      colors={['#33FFB8','#CE33FF']}
      style={styles.linearGradient}>
        <KeyboardAvoidingView  style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}} >
          <View style={styles.card} >
              {!this.state.isLogin?(
                <Field name="displayName" component={TextInputField} type="text" placeholder='username' />
              ):null}
              <Field name="email" component={TextInputField} type="text" placeholder='email' />
              <Field name="password" component={TextInputField} type="password" placeholder='password' secureTextEntry={true} />

              
            <View style={styles.buttonContainer} >
              {
                this.state.isLogin?(
                  <Button title="login"  color='#CE33FF' onPress={handleSubmit(this.props.login)} ></Button>
                ):(
                  <Button title="sign up"  color='#CE33FF' onPress={handleSubmit(this.props.registerUser)} ></Button>
                )
              }
              
            </View>
            <View style={styles.buttonContainer} >
              <Button title={this.state.isLogin?"switch to signup":'switch to login'}  color='#33FFB8' onPress={()=>this.setState(prevState=>({isLogin:!prevState.isLogin}))}></Button>
            </View>
          </View>
          <View style={{marginTop:9}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'700'}} >Or login with </Text>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>this.props.facebookLogin()} >
              <Ionicons size={44} name='logo-facebook' style={styles.icon}  ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>googleSignInFunction() } >
              <Ionicons size={44} name='logo-google' style={styles.icon}  ></Ionicons>
            </TouchableOpacity>
          </View>
          </View>
          
        </KeyboardAvoidingView>
      </LinearGradient>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    width:'100%',
  },
  linearGradient:{
    flex:1,
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center'
  },
  card:{
    backgroundColor:'transparent',
    width:'80%',
    maxHeight:400,
    maxWidth:400,
  },
  input:{
    backgroundColor:'white',
    marginTop:4,
    borderRadius:5,
    padding:7,
    borderBottomWidth:2,
  },
  buttonContainer:{
    width:'100%',
    alignSelf:'center',
    justifyContent:'space-between',
    marginTop:10,
  },
  icon:{
    color:'white',
    paddingHorizontal:8,
  }
})


export default connect(mapStateToProps,mapActions)(reduxForm({form:'login'})(LoginScreen))


