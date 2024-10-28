import {Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'



export default function App() {
  return(
    // <View className="bg-black items-center justify-center">
    <View className='bg-black'>
      <Text className="text-3xl">New App !</Text>
      <StatusBar style='auto'/>
      <Link href='/profile'>Go to Profile</Link>
    </View>
  )
}


