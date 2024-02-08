import React from "react";
//import caloriesIcon from "../assets/calories-icon.svg";
//import proteinsIcon from "../assets/proteines-icon.svg";
//import glucidesIcon from "../assets/glucides-icon.svg";
//import lipidesIcon from "../assets/lipides-icon.svg";
import { useState, useEffect } from "react";
import { datas } from "../utils/Data";
import { useParams } from "react-router";
import {Main,Head, Name} from "../styles/userStyle";
import BarCharts from "../components/Chart/BarChart/BarChart";
import LineChart from "../components/Chart/LineChart/LineChart";

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
            <Head>
                <h1>Bonjour <Name>{data.userInfos.firstName}</Name></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </Head>
            <BarCharts />
            <LineChart/>
            </Main>
    )
  
}