import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputForm from "../../components/InputForm";
import * as S from './Subscribe.style'
import { debounce } from "lodash";
import HavHabit from "./Components/HavHabit";
import PostLogo from "../../assets/img/habit-post.png";
import SubscribeCheckBox from "../../components/SubscribeCheckBox";
import {CheckModalTitle, CheckModalDesc, AdModalDesc, AdModalTitle} from './Text/Descrition'
import useMatchScreenSize from "../../hooks/useMatchScreenSize";

interface SubscribeUser {
  userEmail: string;
  userName: string;
}

const NOTI_URL = process.env.REACT_APP_SUBSCRIBE_NOTI

function SubscribeForm(){
	const {param} = useParams()
  const navigate = useNavigate();
  const {isLarge} = useMatchScreenSize();
	const [isValid, setIsValid] = useState<Boolean>(false)
	const [emailRequired, setEmailRequired] = useState<Boolean>(false)
	const [nameRequired, setNameRequired] = useState<Boolean>(false)
  const [userInfo, setUserInfo] = useState<SubscribeUser>({
		userEmail: "",
    userName: "",
  });
  const [userCheck, setUserCheck] = useState<boolean>(false)
  const [checkRequired, setCheckRequired] = useState<boolean>(false)
  const [adAgree, setAdAgree] = useState<boolean>(false)
  const EmailValidRegEx = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  const regexEmail = new RegExp(EmailValidRegEx);

  useEffect(()=> {
		setIsValid(regexEmail.test(userInfo.userEmail) && userInfo.userEmail.length > 0)
	}, [userInfo.userEmail])

	const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

	const group = 
		param === 'mbti' ? 
		{
			groupId: 228791,
			groupName: 'MBTI'
		} 
		:
		param === 'instagram' ?
		{
			groupId: 228790,
			groupName: '인스타그램'
		}
		:
		param === 'heybunny' ?
		{
			groupId: 228792,
			groupName: '헤이버니'
		}
		:
		param === 'newletter' ?
		{
			groupId: 231283,
			groupName: '뉴스레터 내 구독'
		}
		:
    param === 'everytime' ?
    {
      groupId: 231771,
      groupName: '에브리타임'
    }
    :
		{
			groupId: 229808,
			groupName: '메인페이지'
		}

	const NotiSlack = () => {
		const subscribeUser = `🎉 ${userInfo.userName}님이 구독했어요! \n 이메일: ${userInfo.userEmail} \n 구독 경로: ${group.groupName}`
		const text = `🎉 ${userInfo.userName}님이 구독했어요! \n 이메일: ${userInfo.userEmail} \n 구독 경로: ${group.groupName}`
		axios.request({
			method: 'POST',
			url: `https://proxy.cors.sh/` + NOTI_URL,
			headers: {
				'x-cors-api-key': process.env.REACT_APP_CORS_KEY,
				"Content-Type": "application/json"
			}, 
			data: {
				text: subscribeUser,
				blocks: [
					{
						type: "section",
						text: {
							type: "mrkdwn",
							text,
						},
					},
				]
			}
		})
	}

	const sendUserInfo = debounce(() => {
		const formData = {
			eventOccuredBy: "SUBSCRIBER",
			confirmEmailYN: "N",
			groupIds: [`${group.groupId}`],
			subscribers: [
				{
					email: userInfo.userEmail,
					name: userInfo.userName,
					$ad_agreed: `${adAgree ? 'Y' : 'N'}`,
				},
			],
		};
		axios.request({
			headers: {
				AccessToken: process.env.REACT_APP_SUBSCRIBE_TOKEN
			},
			baseURL: `https://api.stibee.com/v1`,
			url: `/lists/219682/subscribers`,
			method: "POST",
			data: formData,
		})
		.then(() => {
			window.scrollTo({ top: 0 });
			NotiSlack();
			navigate(`/subscribe/success`, {state: userInfo.userName})
		});
	},500)

	const subscribe = () => {
    if(!isValid){
			return setEmailRequired(true)
		}
    if(userInfo.userName.length == 0){
			return setNameRequired(true)
		}	
    if(!userCheck){
      return setCheckRequired(true)
    }
		return sendUserInfo()
	}

	return (
    <>
      {/* <HavHabit /> */}
		  <S.Container>
        <S.Contents>
        {isLarge ? (
          <>
            <S.Logo>
              <img src={PostLogo} alt="logo"/>
            </S.Logo>
            <S.Heading>
              습관쟁이 김해빗의 습관 편지<br />
              메일함에서 만나요! ✉️
            </S.Heading>
          </>
        )
        :
        (
          <>
            <S.Heading>
              습관쟁이 김해빗의<br /> 
              습관 편지<br />
              메일함에서 만나요! ✉️
            </S.Heading>
            <S.Logo>
              <img src={PostLogo} alt="logo"/>
            </S.Logo>
          </>
        )
        }
        <S.Desc>
          {isLarge ? (
            <>
              <em>해브해빗에는 자신만의 꾸준함을 가지고 싶은 사람들이 모여있어요.</em><br/>
              모두가 자신만의 꾸준함을 만들 수 있도록<br/>
              습관에 대한 아티클, 습관 만들기 챌린지, 다양한 사람들의 이야기를<br/>
              격주 월요일, 아침마다 메일함으로 보내드릴게요.
            </>
          )
            :
            (
              <>
                <em>해브해빗에는 자신만의 꾸준함을 가지고 싶은 사람들이 모여있어요.</em><br/>
                모두가 자신만의 꾸준함을 만들 수 있도록
                습관에 대한 아티클, 습관 만들기 챌린지, 다양한 사람들의 이야기를
                격주 월요일, 아침마다 메일함으로 보내드릴게요.
              </>
            )
          }

        </S.Desc>
          <S.Form>
            <InputForm
              value={userInfo.userEmail}
              name={"userEmail"}
              onChange={onChangeInfo}
              placeholder={"이메일 주소"}
              required={emailRequired}
              result={'이메일 형식을 확인해주세요. 💌'}
            />
            <InputForm
              value={userInfo.userName}
              name={"userName"}
              onChange={onChangeInfo}
              placeholder={"닉네임"}
              required={nameRequired}
              result={'해비터의 이름이 궁금해요! 🤔'}
            />
            <SubscribeCheckBox
              desc={'개인정보 수집·이용'}
              option={'필수'}
              value={userCheck}
              name={"userCheck"}
              onChange={setUserCheck}
              required={checkRequired}
              result={'개인정보 수집 및 이용에 동의해주셔야 편지를 보내드릴 수 있어요.🤙'}
              modalTitle={CheckModalTitle}
              modalDesc={CheckModalDesc}
            />
            <SubscribeCheckBox 
              desc={'광고성 정보 수신'}
              option={'선택'}
              value={adAgree}
              name={"adAgree"}
              onChange={setAdAgree}
              modalTitle={AdModalTitle}
              modalDesc={AdModalDesc}
            />
            <S.Subscribe
              onClick={(e) => {
                e.preventDefault();
                subscribe();
              }}
            >
              <span>
                해빗이가 보내주는 뉴스레터 구독하기 🎉
              </span>
            </S.Subscribe>
          </S.Form>
        </S.Contents>
	  </S.Container>
  </>
	)
}

export default SubscribeForm