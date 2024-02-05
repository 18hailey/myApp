import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
const [number, setNumber] = useState(0);
const handleMinus = () => {
  setNumber(number-1);
};

const handlePlus = () => {
  setNumber(number+1);
};

  return (
  <View style={styles.container}>
  <View style={styles.box}>
    <Text style={styles.title}>This is My Counter</Text>
  </View>
  <View style={styles.box}>
    <Text style={styles.number}>{number}</Text>
  </View>
  <View style={styles.buttonBox}>
    <TouchableOpacity style={styles.minusButton} onPress={handleMinus} disabled={number<=0}>
    <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.plusButton} onPress={handlePlus} disabled={number>=10}>
    <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor:'#d3d3d3',
 },
 box: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 title: {
  fontSize: 30,
  fontWeight: '800',
 },
 number: {
  color:'#006400',
  fontSize: 80,
  fontWeight: '800',
 }, 
 buttonBox: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 30,
 },
 plusButton: {
  backgroundColor: '#00bfff',
  justifyContent: 'center',
  alignItems: 'center',
  width: 70,
  height: 70,
  borderRadius: 35,
 },
 minusButton: {
  backgroundColor: '#ffa500',
  justifyContent: 'center',
  alignItems: 'center',
  width: 70,
  height: 70,
  borderRadius: 35,
 },
 buttonText: {
  color: '#ffffff',
  fontSize: 50,
  fontWeight: '600',
  paddingBottom: 6,
 }
});
