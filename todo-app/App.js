//import stuff
import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={{backgroundColor:'#a00037',height: 20,width:400}}></Text>
          <Text style={styles.header}>Notes App</Text>
          <View style={{height: 150,backgroundColor: '#D4D6D7'}}><TextInput 
            style={styles.inputStyle}
            textAlign= 'center'
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          </View>
          <Button 
						title="Add Todo"
						color="#ff5c8d" style={{width: 100,backgroundColor: 'black'}}
						onPress={this.addTodo}
					/>
         
          <View style={{marginTop: 20}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#F0F2F3",
    flex:1,
    fontStyle: ('normal', 'italic')
  },
  viewStyle: {
    marginTop: 30,    
  },
  inputStyle:{
    marginTop: 40,
    margin: 40,
    backgroundColor: 'white', 
    height: 40,
    width:300,
  	alignItems:'center',
  	justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  header:{
    fontSize: 30,
    color: 'black',
    backgroundColor: '#d81b60',
    fontWeight: 'bold',
    padding: 5
  },
  todo: {
    fontSize: 24,
    color: 'black',
    backgroundColor: '#FEF367',
    borderRadius: 7,
    paddingLeft: 10,
    margin: 10
  }
}

//export stuff
export default App;