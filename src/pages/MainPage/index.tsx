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
        <S.Form>
          <S.InputForm 
            value={userInfo.userEmail}
            name={'userEmail'}
            onChange={onChangeInfo}
            placeholder={'이메일 주소'}
          />
          <S.InputForm
            value={userInfo.userName}
            name={'userName'}
            onChange={onChangeInfo}
            placeholder={'이름'}
          />
          <S.Subscribe
            onClick={(e)=>{
              e.preventDefault()
              subscribe()
            }}
          >뉴스레터 구독</S.Subscribe>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

export default MainPage;
