/**
 * Este será um componente baseado em função
 */

import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/padrao'
import padrao from '../estilo/padrao';

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

/**
 * Arrow Function
 */
export default (props) => {
    return <Text style={[padrao.ex]}>Arrow: {props.texto}</Text>
}

// export default props => {
//     return <Text>Arrow: {props.texto}</Text>
// }

// export default props => 
//     <Text>Arrow: {props.texto}</Text>

// export default props => 
//     <View>
//         <Text>Arrow: {props.texto}</Text>
//         <Text>Arrow: {props.texto}</Text>
//     </View>

// export default props => [
//     <Text>Arrow: {props.texto}</Text>,
//     <Text>Arrow: {props.texto}</Text>
// ]


// export default props => { 
//     return [
//         <Text>Arrow: {props.texto}</Text>,
//         <Text>Arrow: {props.texto}</Text>
//     ]
// }
    
        
    