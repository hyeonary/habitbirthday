import * as S from "./MainPage.style";
import axios from "axios";
import { useState } from "react";

interface userInfo {
  userEmail: string;
  userName: string;
}

function MainPage() {
  const [letter, setLetter] = useState()
  // const [userEmail, setUserEmail] = useState<string>('')
  // const [userName, setUserName] = useState<string>('')
  const [userInfo, setUserInfo] = useState<userInfo>({
    userEmail: '',
    userName: ''
  })

  const subscribe = () =>{
    const formData = {
      eventOccuredBy: "MANUAL",
      confirmEmailYN: "N",
      groupIds: ["185170"],
      subscribers: [
        {
          email: userInfo.userEmail,
          name: userInfo.userName,
          $ad_agreed: "Y",
        }
      ]
    }
    axios.request({
      method: 'POST',
      baseURL: 'https://api.stibee.com/v1',
      url: '/lists/171854/subscribers',
      data: formData
    })
  }

  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value})
  }

  console.log(userInfo)
  

  return (
    <S.Container>
      <S.Content>
        <form>
          <input 
            value={userInfo.userEmail}
            name={'userEmail'}
            onChange={onChangeInfo}
          />
          <input 
            value={userInfo.userName}
            name={'userName'}
            onChange={onChangeInfo}
          />
          <button
            onClick={(e)=>{
              e.preventDefault()
              subscribe()
            }}
          >제출</button>
        </form>
      </S.Content>
    </S.Container>
  )
}

export default MainPage;
