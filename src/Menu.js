import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi';

export default createDrawerNavigator({
    MegaSena : {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativ" />
    },
    ParImpar: {
        screen: () => {
            <ParImpar numero={30} />
        },
        navigationOptions: { title: "Par ou Impar" }
    },
    Simples: {
        screen: () => <Simples texto="Flexivel"></Simples>
    }
}, { drawerWidth: 300 });