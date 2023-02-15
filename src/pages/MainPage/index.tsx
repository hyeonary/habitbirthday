import * as S from "./MainPage.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../../assets/img/HabitKim.png";
import IntroduceLogo from "../../assets/img/introduce.png";
import useMatchScreenSize from "../../hooks/useMatchScreenSize";
import { useParams, useLocation } from "react-router-dom";

function MainPage() {
  const {isLarge} = useMatchScreenSize();
  const {param} = useParams()
  
	const group = 
  (param == 'mbti') ? 
  {
    groupId: 228791,
    groupName: 'MBTI'
  } 
  :
  (param == 'instagram') ?
  {
    groupId: 228790,
    groupName: '인스타그램'
  }
  :
  (param == 'heybunny') ?
  {
    groupId: 228792,
    groupName: '헤이버니'
  }
  :
  {
    groupId: 229808,
    groupName: '홈페이지!'
  }

  return (
    <S.Container>
      {isLarge ? (
        <>
          <S.Content>
            <S.Introduce>
              <S.Habit>
                <img src={Logo} />
              </S.Habit>
              <S.Title>모두가 자신만의 <br /> 꾸준함을 만들 수 있도록</S.Title>
              <S.Description>
                해브해빗은 'Have A Valuable Habit' 이라는 뜻으로 <br />
                <em>습관으로 나를 알아가는 습관 커뮤니티입니다.</em><br/>
              </S.Description>
              <br/>
              <S.Description>
                세상에는 잘하기 위한 방법이나 정보는 많으니,<br/>
                <em>우리의 꾸준함을 응원하고 기념해주는 존재가 있다면 어떨까요?</em><br/>
                잠시 멈추거나 좌절했을 때 ‘다시 할 수 있어!’라고, ‘잠깐 쉬어도 괜찮다.’라고<br/>
                말해주는 존재가 있다면 나만의 꾸준함이 더 오래 지속될 수 있을 거예요.<br/>
              </S.Description>
              <br/>
              <S.CTA
                data-tally-open="mOQNkg" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
              >
                뉴스레터 구독하고 습관 만들기
              </S.CTA>
            </S.Introduce>
            <S.IntroduceImg src={IntroduceLogo}/>
          </S.Content>
        </>
      ) 
      :
      (
        <>
          <S.Content>
            <S.IntroduceImg src={IntroduceLogo}/>
            <S.Title>모두가 자신만의 <br /> 꾸준함을 만들 수 있도록</S.Title>
            <S.Description>
              해브해빗은 'Have A Valuable Habit' 이라는 뜻으로 <br />
              <em>습관으로 나를 알아가는 습관 커뮤니티입니다.</em><br/>
            </S.Description>
            <br/>
            <S.Description>
              세상에는 잘하기 위한 방법이나 정보는 많으니,<br/>
              <em>우리의 꾸준함을 응원하고 <br/>
              기념해주는 존재가 있다면 어떨까요?</em><br/>
              <br/>
              잠시 멈추거나 좌절했을 때<br/>
              ‘다시 할 수 있어’라고, ‘잠깐 쉬어도 괜찮아’라고<br/>
              말해주는 존재가 있다면<br/> 
              나만의 꾸준함이 더 오래 지속될 수 있을 거예요.<br/>
            </S.Description>
          </S.Content>
          <S.SubscribeTab
            data-tally-open="mOQNkg" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"
          >
            <span>뉴스레터 구독하고 습관 만들기</span>
          </S.SubscribeTab>
        </>
      )
      }

    </S.Container>
  )
}

export default MainPage;
