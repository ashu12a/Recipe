import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen() {
    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar style='light' />

            
            <Text>Welcome Screen</Text>
        </View>
    )
}