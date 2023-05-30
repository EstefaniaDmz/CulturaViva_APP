import React, {useState, useEffect} from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../styles";
import { api } from "../api";
import { Evento } from "../model/Evento";

const HomeScreen = ({navigation}: any) => {
    const [eventos, setEventos] = useState <Evento[]>([]);

    useEffect(() => {
        const obtenerEventos = async() => {
            await fetch(api + "eventos", 
            {method: "GET", 
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(response => response.json())
                .then(data => {
                setEventos(data);
            });
        };
        obtenerEventos();
    }, []);

    return(
        <View style={[globalStyle.container]}>
            <View style={{marginTop: 38}}>
                <Text style={[globalStyle.title]}>Eventos</Text>
            </View>
            <ScrollView style={{padding: 20}}>
                {!eventos && (
                    <View style={[globalStyle.form]}>
                        <Text style={[globalStyle.titleNote]}>Cargando...</Text>
                    </View>
                )}
                {eventos.map(item => (
                    <View key={item.id} >
                        <View style={[globalStyle.containerBus]}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', margin: 5, color: '#ffab3a'}}>{item.fecha}</Text>
                        </View>
                        <TouchableOpacity style={[globalStyle.containerNotes]} onPress={() => navigation.navigate('DetailsScreen', {evento: item})}>
                            <Text style={[globalStyle.titleNote]}>{item.nombre}</Text>
                            <Text style={{fontSize: 18, fontWeight: 'bold', padding: 15, paddingBottom: 0, color:'#ffb41e'}}>{item.lugar}, {item.ciudad}</Text>
                            <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', paddingRight: 40, paddingBottom: 15, paddingLeft: 40, color:'#ffad5b'}}>♪   ♫   ♩   ♬   ♩   ♫   ♪</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};


export default HomeScreen;