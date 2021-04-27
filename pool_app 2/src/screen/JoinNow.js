import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image,FlatList,StatusBar, AsyncStorage, ScrollView, } from 'react-native'
import axios from 'axios'


export default class JoinNow extends Component {


    constructor(props) {
        super(props);
        this.state = {
          show: false,
          selectedItem: null,
          item: ''
        }
      }

     componentDidMount(){
        
         
     }
     _choosen(selectedItem, item) {
        this.setState({ selectedItem , item});
       
      }

     renderList(item,index){
        const isSelected = (this.state.selectedItem === index);

        const color = isSelected ? "#00818A" : "black";
        const fontWeight = isSelected ? "bold" : "normal";
         return(
            <TouchableOpacity style={{flexDirection:'row',justifyContent: 'space-between'}}  onPress={() => this._choosen(index,item)} >
                <Text style={{fontSize: 20,marginLeft: 20,marginTop: 5,color, fontWeight}}>{item}</Text>
            </TouchableOpacity>
         )
     }

    

    render() {
       
       
        return (
            <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}>
                 <StatusBar   barStyle={'dark-content'} />
                <View style={{marginTop: '8%', flexDirection: 'row',alignSelf: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 23}}>Join</Text>
                    {/* <Text style={{textAlign: 'center', fontSize: 23,color:"#00818A", fontWeight: 'bold'}}> {val}</Text> */}
                    <Text style={{textAlign: 'center', fontSize: 23,color:"#00818A", fontWeight: 'bold'}}>hey</Text>
                    <Text style={{textAlign: 'center', fontSize: 23}}> Pool!</Text>
                </View>

                <View style={{marginTop: 10, flexDirection: 'row',alignSelf: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>There are just </Text>
                    {/* <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}> {val}</Text> */}
                    <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}>hello</Text>
                    <Text style={{textAlign: 'center', fontSize: 20}}> Spots open</Text>
                </View>

                <View style={{marginTop: 30,alignSelf: 'center',width: 200,height: 200, backgroundColor: '#e9e9e9', borderRadius: 100,borderColor: '#000' }}>
                    <View style={{marginTop: 45, flexDirection: 'row',alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 20}}>Contribute </Text>
                        {/* <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}> ${amount}</Text> */}
                        <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}> greeennn</Text>
                    </View>
                    <Text style={{textAlign: 'center', fontSize: 20,marginTop: 5}}> Monthly</Text>
                    <Text style={{textAlign: 'center', fontSize: 22,marginTop: 5}}>to receive a</Text>
                    <View style={{marginTop: 5, flexDirection: 'row',alignSelf: 'center'}}>
                        {/* <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}> ${num1}</Text> */}
                        <Text style={{textAlign: 'center', fontSize: 20,color:"#00818A", fontWeight: 'bold'}}>yellow</Text>
                        <Text style={{textAlign: 'center', fontSize: 20}}> Payout</Text>
                   </View>
                </View>

                <Text style={{textAlign: 'center', fontSize: 22,marginTop: 30}}>Join In Before It's Full </Text>

                <Text style={{textAlign: 'center', fontSize: 18,marginTop: 30,marginLeft: 30, marginRight: 30}}>You can select any month to receive your payout that hasn't be choosen yet by one of your Friends</Text>


                <Text style={{ fontSize: 25,marginTop: 30,marginLeft: 20, fontWeight: 'bold'}}>Available Months:  </Text>

               <View style={{height: '15%', alignSelf:'center',width: '100%',marginTop: 10}}>
                <FlatList
                
                // data={available_months}
                renderItem={({item,index})=>
                this.renderList(item,index)}/>
                </View>


                <TouchableOpacity onPress={()=>this.joinPool()} style={{justifyContent:'center',alignSelf: 'center',alignItems: 'center',marginTop:10,width: '40%',borderRadius: 15, height: 50, backgroundColor: '#f3f3f3',marginTop: 80}}>
                  <Text style={{color:"#00818A",fontSize:20,}}>Join Pool</Text>
              </TouchableOpacity>

            </ScrollView>
        )
    }
}
