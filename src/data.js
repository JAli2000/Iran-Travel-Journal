const src = process.env.PUBLIC_URL;

const data =[
    {
        id:'1',
        title: 'Azadi Tower',
        location: 'IRAN',
        googleMapsUrl: 'https://www.google.com/maps/place/Azadi+Tower/@35.6997331,51.3380361,15z/data=!4m6!3m5!1s0x3f8dfe05732c2e91:0xfcbec017befd15f4!8m2!3d35.6997331!4d51.3380361!16zL20vMDR4ZHMw?entry=ttu',
        startDate: '8 Mar 2022',
        endDate: '18 Mar 2022',
        description: 'the tower is about 45 metres (148 ft) tall and is completely clad in cut marble.',
        imageUrl: `${src}/images/azadi-tower.jpg`
    },
    {
        id:'2',
        title: 'Allahverdi Khan Bridge',
        location: 'IRAN',
        googleMapsUrl: 'https://www.google.com/maps/place/Siosehpol+Bridge/@32.6444188,51.6674667,15z/data=!4m14!1m7!3m6!1s0x3fbc35e1f8bd8c83:0x526db19f6d3d332d!2sSiosehpol+Bridge!8m2!3d32.6444188!4d51.6674667!16zL20vMGJmZHA3!3m5!1s0x3fbc35e1f8bd8c83:0x526db19f6d3d332d!8m2!3d32.6444188!4d51.6674667!16zL20vMGJmZHA3?entry=ttu',
        startDate: '1 April 2018',
        endDate: '6 April 2018',
        description: 'The Allahverdi Khan Bridge (Persian: پل الله‌وردی خان), popularly known as Si-o-se-pol (Persian: سی‌وسه‌پل, lit. bridge of thirty-three, is the largest of the eleven historical bridges on the Zayanderud, the largest river of the Iranian Plateau, in Isfahan, Iran.',
        imageUrl: `${src}/images/Allahverdi-khan-bridge.jpg`
    },
    {
        id:'',
        title: '',
        location: '',
        googleMapsUrl: '',
        startDate: '',
        endDate: '',
        description: '',
        imageUrl: ''
    },

]

export default data;
