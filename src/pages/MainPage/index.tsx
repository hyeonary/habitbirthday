import * as S from "./MainPage.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../../assets/img/HabitKim.png";

interface userInfo {
  userEmail: string;
  userName: string;
}

function MainPage() {
  
  useEffect(()=>{

  }, [])

  //@ts-ignore
	window.TallyConfig = {
    "formId": "mOQNkg",
    "popup": {
      "width": 370,
      "emoji": {
        "text": "👋",
        "animation": "wave"
      }
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Habit>
          <img src={Logo} />
        </S.Habit>
        <S.Title>안녕하세요, 해브해빗입니다!</S.Title>
        <S.Description>
          해브해빗은 Have A Valuable Habit 이라는 뜻으로 <br />
          <em>모두가 자신만의 꾸준함을 만들 수 있도록</em> <strong>습관으로 나를 알아가는 습관 커뮤니티입니다.</strong><br/>
          </S.Description>

          <S.Description>
            언제나 생각만 하고 실천하지 못한 계획, 마음 같은 것들이 있잖아요.<br/>
            더 나은 내가 되기 위한 마음가짐은 실천을 통해 비로소 이루어질 수 있지만<br/>
            새롭게 무언갈 시작한다는 것 그리고 그것을 꾸준히 실천하는 일은 많은 노력이 필요해요.<br/>
          </S.Description>
          <S.Description>
            세상에는 잘하기 위한 방법이나 정보는 많으니,<br/>
            우리의 꾸준함을 응원하고 기념해주는 존재가 있다면 어떨까요?<br/>
            잠시 멈추거나 좌절했을 때 ‘다시 할 수 있어!’라고, ‘잠깐 쉬어도 괜찮다.’라고 말해주는 존재가 있다면<br/>
            나만의 꾸준함이 더 오래 지속될 수 있을 거예요.<br/>
          </S.Description>
          <S.Description>
            앞으로 해브해빗은 <em>모두가 자신만의 꾸준함을 가질 수 있도록</em> 여러 방법을 고민하고 보여드릴게요!
          </S.Description>


       
      </S.Content>
    </S.Container>
  )
}

export default MainPage;
