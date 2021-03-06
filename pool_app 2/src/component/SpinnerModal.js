
import React from 'react';
import { View, Text , ActivityIndicator , TouchableOpacity, Modal} from 'react-native';


const SpinnerModal = (props) => {
return (
    <Modal 
     visible={props.visible}
     transparent={true}
    >
        <View style={styles.conatinerStyle}>

        <View style={{ 
            justifyContent: 'center', alignItems: 'center', 
            margin: 20, marginBottom: 30, marginTop: 30, 
            backgroundColor: '#FFFF', height: 80, width : "95%", 
            borderRadius: 10, flexDirection: 'row' }}>
           
           <ActivityIndicator 
           size={"large"}
           style={{ marginRight: 15, }}
           color= '#12AAFE'
           />
           <Text style={styles.headingStyle}>{props.heading}</Text>

          
        </View>

        </View>

    </Modal>
);
};

const styles = {
conatinerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    
  },
  headingStyle: {
      color: "#000",
      fontSize: 16,
      
      textAlign: 'center'
  }
};
export  default SpinnerModal;
