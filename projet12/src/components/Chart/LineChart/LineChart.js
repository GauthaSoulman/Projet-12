import React, { useState, useEffect } from "react";
import { Container, Title } from "./lineChartStyle.js";
import { datas } from "../../../utils/Data";
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,} from "recharts";
/* import ToolTips from "./ToolTip.js"; */


/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */

 export default function UserAverageSessions() { 
/*      
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => { */
    const data = async () => {
        const request = await datas("USER_AVERAGE_SESSIONS",id);
       /*  if (!request) return alert("data error");
      const formatData = request.data.sessions.map((data) => {
          
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
      console.log(formatData);    

    };
    data();
  }, [id]);
  if (data.length === 0) return null;    */
  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            
          />
          <Tooltip />
          
          <Line
            type="monotone"
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
                <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}