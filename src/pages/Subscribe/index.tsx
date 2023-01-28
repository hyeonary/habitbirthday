import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/habitLogo.png";
import InputForm from "../../components/InputForm";
import * as S from './Subscribe.style'

interface SubscribeUser {
  userEmail: string;
  userName: string;
}

const NOTI_URL = process.env.REACT_APP_SUBSCRIBE_NOTI

function Subscribe(){

	const [isValid, setIsValid] = useState<Boolean>(false)
	const [emailRequired, setEmailRequired] = useState<Boolean>(false)
	const [nameRequired, setNameRequired] = useState<Boolean>(false)
  const [userInfo, setUserInfo] = useState<SubscribeUser>({
		userEmail: "",
    userName: "",
  });

	const navigate = useNavigate();

	const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

	const EmailValidRegEx = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	const regexEmail = new RegExp(EmailValidRegEx);
	
	useEffect(()=> {
		setIsValid(regexEmail.test(userInfo.userEmail) && userInfo.userEmail.length > 0)
	}, [userInfo.userEmail])

	const NotiSlack = () => {
		const subscribeUser = `🎉 ${userInfo.userName}님이 구독했어요! \n 이메일: ${userInfo.userEmail}`
		const text = `🎉 ${userInfo.userName}님이 구독했어요! \n 이메일: ${userInfo.userEmail}`
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

	const sendUserInfo = () => {
		const formData = {
			eventOccuredBy: "SUBSCRIBER",
			confirmEmailYN: "N",
			subscribers: [
				{
					email: userInfo.userEmail,
					name: userInfo.userName,
					$ad_agreed: "Y",
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
			navigate(`/success`)
		});
	}

	const subscribe = () => {
		if(!isValid){
			return setEmailRequired(true)
		}	
    if(userInfo.userName.length == 0){
			return setNameRequired(true)
		}
		return sendUserInfo()
	}
	 
	//@ts-ignore
	window.TallyConfig = {
		"formId": "mOQNkg",
		"popup": {
			"emoji": {
				"text": "👋",
				"animation": "wave"
			}
		}
	};

	return (
		<S.Container>
		<S.SubscribeWrapper>
			<S.HBDLogo src={Logo} />
			<S.Content>
			세상에는 잘하기 위한 방법이나 정보는 많으니, 우리의 꾸준함을 응원하고 격려해주는 존재가 있다면 어떨까요?<br />
			잠시 멈추거나 좌절했을 때 ‘다시 일어나도 된다’고, ‘잠깐 쉬어도 괜찮다’고 말해주는 존재가 있다면 습관을 더 오래 지속할 수 있을 거예요.<br />
			스튜디오 해빗은 모두가 자신만의 건강한 꾸준함을 가질 수 있도록 여러 방법을 고민하고 보여드릴게요!<br />
			나를 위한 습관을 기념해요, Habit Birthday to you 🎉<br />
				
			</S.Content>
			<S.Form>
				<InputForm
					value={userInfo.userEmail}
					name={"userEmail"}
					onChange={onChangeInfo}
					placeholder={"이메일 주소"}
					required={emailRequired}
					result={'정확한 이메일을 입력해주셔야 기념 메일을 발송해드려요!'}
				/>
				<InputForm
					value={userInfo.userName}
					name={"userName"}
					onChange={onChangeInfo}
					placeholder={"닉네임"}
					required={nameRequired}
					result={'이름을 입력해주세요.'}
				/>
				<S.Subscribe
					onClick={(e) => {
						e.preventDefault();
						subscribe();
					}}
				>
					뉴스레터 구독하기
				</S.Subscribe>
			</S.Form>
		</S.SubscribeWrapper>
	</S.Container>
	)
}

export default Subscribe