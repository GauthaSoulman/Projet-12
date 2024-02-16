import React from "react";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import { useState, useEffect } from "react";
import { datas } from "../utils/Data";
import { useParams } from "react-router";
import {Main,Head, Name, BottomChart, Content, Container} from "../styles/userStyle";
import BarCharts from "../components/Chart/BarChart/BarChart";
import LineChart from "../components/Chart/LineChart/LineChart";
import RadarChart from "../components/Chart/RadarChart/RadarChart";
import RadialChart from "../components/Chart/RadialChart/RadialChart";
import KeyData from "../components/Keydata/KeyData"


export default function User() {


    const [data, setData] = useState([]);
    const { id } = useParams(); 
    
    useEffect(() => {
      const data = async () => {
        const request = await datas("USER_MAIN_DATA",id);
        if (!request) return alert("data error");
        setData(request.data);
      };
      data();
    }, [id]);
    if (data.length === 0) return null; 

    return(
   
        <Main>
            
            <Container>
            <Head>
                <h1>Bonjour <Name>{data.userInfos.firstName}</Name></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </Head>
              <Content>
                <section>
                <BarCharts />
                <BottomChart>
                  <LineChart/>
                  <RadarChart/>
                  <RadialChart data={data}/>
                </BottomChart>
                </section>
                  <aside>
                    <KeyData icon={caloriesIcon} info={`${data.keyData.calorieCount}kCal`} text='Calories' />
                    <KeyData icon={proteinsIcon} info={`${data.keyData.proteinCount}g`} text='Proteines' />
                    <KeyData icon={glucidesIcon} info={`${data.keyData.carbohydrateCount}g`} text='Glucides' />
                    <KeyData icon={lipidesIcon} info={`${data.keyData.lipidCount}g`} text='Lipides' /> 
                    </aside>
                  
            </Content>
            </Container>
            </Main>
    )
  
}