import * as React from "react";
import {
  Link,
  // Outlet
  // useNavigate
} from "react-router-dom";
import { 
  useState, 
  // useRef
 } from 'react';
import { useAuth } from "./useAuth";
import "./Profile.css";
import ProfileDB from "./Profile.json";
import AreaDB from "./Area.json";


export function BoshuList() {
  let auth = useAuth();
  // const intervalRef = useRef(null);

  const [BoshuList, setBoshuList] = useState([]);
  const [initialized, setinitialized] = useState(false);

  const initialRequestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"UUID":auth.user})
  }

  // ページが読み込まれる時に実行し、BoshuListとして登録する。
  if (initialized===false) {
    console.log(initialRequestOptions)
    fetch("../boshu_list.php",initialRequestOptions)
    .then((response)=> response.json())
    .then(result =>{
      // console.log(result)
      setBoshuList(result.result)
      console.log(result.result)
    })
    setinitialized(true)
  }
  
  // if (intervalRef.current === null) {
  //   intervalRef.current = setInterval(() =>{
  //     fetch("../boshu_list.php",initialRequestOptions)
  //       .then((response)=> response.json())
  //       .then(result =>{
  //         console.log("result.pythonout2: ", result.pythonout2)
  //         setBoshuList(result.pythonout2)
  //       })
  //   }, 10000);
  // }

  // useEffect(() => {
  //   // componentDidMount のタイミングで実行したい処理を記述
  //   return () => {
  //     // componentWillUnmount のタイミングで実行したい処理を記述
  //     clearInterval(intervalRef.current)
  //   }
  // }, []);

  if (BoshuList === []) {
    return (
      <div>
        <h1>Boshu List</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Boshu List</h1>
        <div>
        <ul>
            {BoshuList.map((Boshu, i) => {
              return <li key={i} onClick={() => {
                  auth.setBoshuID(Boshu.BoshuID)
                  auth.setAite(Boshu.UUID)
              }}>
                {ProfileDB.BoshuCategory[Boshu.BoshuCategory]}<br />
                エリア表示はロジックを考える必要あり。
                {/* {AreaDB.Area[Boshu.BoshuArea]["AreaName"]} */}
                {/* {AreaDB.Area[Boshu.BoshuPrefecture]}
                {AreaDB.Area[Boshu.BoshuCity]} */}
                {/* 詳細エリアの表示にはロジックが必要 */}
                <br />
                {Boshu.nickname}　{ProfileDB.Gender[Boshu.gender]}　{Boshu.age}
                <br />
                <Link to="../BoshuDetail">
                  {Boshu.BoshuTitle}
                </Link><br />
                {Boshu.PostDateTime}<br/>
              </li>
            })}
        </ul>
        </div>

      </div>
    )
  }
}
