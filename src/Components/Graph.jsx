import React from "react";
import {BarChart,Bar,Legend,Tooltip,CartesianGrid,XAxis,YAxis, Cell,ResponsiveContainer} from 'recharts';


function PlacementGraph(){
    const datasheet=[{name:"Tata",value:25},{name:"TCS",value:23}]
    const data = [
        {
          "name": "TCS Ninja",
          "placed": 41
        },
        {
          "name": "TATA ELXSI",
          "placed": 30
        },
        {
          "name": "COGNIZANT",
          "placed": 29
        },
        {
          "name": "WIPRO",
          "placed": 24
        },
        {
          "name": "UST",
          "placed": 20
        },
        {
          "name": "VIRTUSA",
          "placed": 20
        },
        {
          "name": "QBURST",
          "placed": 19
        },
        {
          "name": "QUEST GLOBAL",
          "placed": 18
        },
        {
          "name": "DEXLOCK",
          "placed": 13
        },
        {
          "name": "IBS",
          "placed":13
        },
        {
          "name": "GADGEON",
          "placed":12
        },
        {
          "name": "INFOSYS",
          "placed":8
        },
        {
          "name": "FOUNDING MINDS",
          "placed":8
        },
        {
          "name": "EXPERION",
          "placed":6
        },
        {
          "name": "IBM",
          "placed":6
        },
        {
          "name": "FACEPREP",
          "placed":6
        },
        {
          "name": "TCS DIGITAL",
          "placed":5
        },
        {
          "name": "MAR LABS",
          "placed":5
        },
        {
          "name": "REVATURE",
          "placed":4
        },
        {
          "name": "PIVOT SYSTEMS",
          "placed":4
        },
        {
          "name": "SOTI",
          "placed":3
        },
        {
          "name": "NUCHANGE INFORMATICS",
          "placed":3
        },
        {
          "name": "SPERIDIAN",
          "placed":3
        },
        {
          "name": "ZOHO",
          "placed":3
        },
        {
          "name": "SPEKTRA",
          "placed":3
        },
        {
          "name": "TECH MAHINDRA CERIUM",
          "placed":3
        },
        {
          "name": "6D TECHNOLOGIES",
          "placed":2
        },
        {
          "name": "TRAVANCORE ANALYTICS",
          "placed":2
        },
        {
          "name": "ZENSAR",
          "placed":2
        },
        {
          "name": "LINWAYS",
          "placed":2
        },
        {
          "name": "ALGOMOX",
          "placed":1
        },
        {
          "name": "MITSOGO",
          "placed":1
        },
        {
          "name": "EY GDS",
          "placed":1
        },
        {
          "name": "MOUNT BLUE TECHNOLOGIES",
          "placed":1
        },
        {
          "name": "JUSPAY",
          "placed":1
        },
        {
          "name": "TIGER ANALYTICS",
          "placed":1
        },
        {
          "name": "CSS CORP",
          "placed":1
        },
        {
          "name": "INSEMI TECHNOLOGIES",
          "placed":1
        },
        {
          "name": "FEDERAL BANK",
          "placed":1
        },
        {
          "name": "TOSIL",
          "placed":1
        },
        {
          "name": "APEX SEMI",
          "placed":1
        }
      ]
    
      const Barcolour=["#FFC107", "#FF9800", "#FF5722", "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFCDD2", "#E57373", "#F06292", "#BA68C8", "#9575CD", "#7986CB", "#64B5F6", "#4FC3F7", "#4DD0E1", "#81C784", "#AED581", "#DCE775", "#FFF176", "#FFF59D", "#FFE082", "#FFB74D", "#FF8A65", "#F48FB1", "#CE93D8", "#B39DDB", "#90CAF9", "#80DEEA", "#A5D6A7"
    ]

    const graphelement=(
    <>
    
    <BarChart width={600} height={200}  data={data}>

        <XAxis dataKey="name"  hide={true}/>
        <Tooltip
        itemStyle={{color:"#8c1515" }}
        />
        <Bar dataKey="placed" fill={'#5472d2'} barSize={500}>
        {/* {
            data.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={Barcolour[index%20]}/>

            ))
        } */}
        </Bar>
        

    </BarChart>
    
    
    
    </>
        );
    return graphelement;
}

export default PlacementGraph;