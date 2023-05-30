import React, {useState, useEffect} from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../styles";
import { api } from "../api";
import { Evento } from "../model/Evento";

const DetailEvento = ({route, navigation}: any) => {
    const {evento}: {evento: Evento} = route ? route.params: {};

    return(
        <View style={[globalStyle.container]}>
            <View style={{marginTop: 38}}>
                <Text style={[globalStyle.title]}>{evento.nombre}</Text>
            </View>
            <View style={[globalStyle.whiteSheetSU]} />
            <View style={[globalStyle.form]}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyle.titleParada]}>Fecha: </Text>
                        <Text style={[globalStyle.textoInfo]}>{evento.fecha}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyle.titleParada]}>Lugar: </Text>
                        <Text style={[globalStyle.textoInfo]}>{evento.lugar}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyle.titleParada]}>Ciudad: </Text>
                        <Text style={[globalStyle.textoInfo]}>{evento.ciudad}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyle.titleParada]}>Estado: </Text>
                        <Text style={[globalStyle.textoInfo]}>{evento.estado}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[globalStyle.titleParada]}>Link: </Text>
                        <TouchableOpacity style={{marginRight: 30}}>
                            <Text style={[globalStyle.textoInfo]}>{evento.link}</Text>
                        </TouchableOpacity>
                    </View>
                
            </View>
        </View>
    );
};

export default DetailEvento;