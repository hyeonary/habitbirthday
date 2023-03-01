import { useEffect, useState } from "react";
import * as S from "./Habit.style";
import Logo from "../../assets/img/makehabit.png";
import Dingul from "../../assets/img/dingul.png";
import Insta from "../../assets/img/dingulinsta.png";
import axios from "axios";
import InputForm from "../../components/InputForm";
import { useNavigate } from "react-router-dom";

interface HabitUser {
  userEmail: string;
  userName: string;
  userHabit: string;
}

const NOTI_URL = process.env.REACT_APP_HABIT_NOTI

function Habit(){

	const [isValid, setIsValid] = useState<Boolean>(false)
	const [required, setEmailRequired] = useState<Boolean>(false)
	const [nameRequired, setNameRequired] = useState<Boolean>(false)
	const [habitRequired, setHabitRequired] = useState<Boolean>(false)
  const [userInfo, setUserInfo] = useState<HabitUser>({
		userEmail: "",
    userName: "",
    userHabit: "",
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
		const subscribeUser = `${userInfo.userName}님이 ${userInfo.userHabit}을 결심했어요! \n 이메일: ${userInfo.userEmail}`
		const text = `🎉 ${userInfo.userName}님이 ${userInfo.userHabit}을 결심했어요! \n 이메일: ${userInfo.userEmail}`
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
					habit: userInfo.userHabit,
					$ad_agreed: "Y",
				},
			],
		};
		axios.request({
			headers: {
				AccessToken: process.env.REACT_APP_SUBSCRIBE_TOKEN
			},
			baseURL: `https://api.stibee.com/v1`,
			url: `/lists/225737/subscribers`,
			method: "POST",
			data: formData,
		})
		.then(() => {
			window.scrollTo({ top: 0 });
			NotiSlack();
			navigate(`/habit/success`, {state: userInfo.userName})
		});
	}
	
  const HabitDeclare = () => {
		if(!isValid) {
			return setEmailRequired(true)
		}
    if(userInfo.userName.length === 0){
			return setNameRequired(true)
		}
		if(userInfo.userHabit.length === 0) {
			return setHabitRequired(true)
		}
		return sendUserInfo()
  };

  return (
    <S.Container>
      <S.SubscribeWrapper>
        <S.LogoWrapper>
					<S.Logo>
						<img src={Logo} alt='딩구리' />
					</S.Logo>
					<S.Dingul>
						<img src={Dingul} alt='딩구리' />
					</S.Dingul>
				</S.LogoWrapper>
				<S.Content>
					해비터가 새해가 되어 했던 다짐, 갖고 싶은 꾸준함을 알려줘!<br />
					오늘의 다짐을 기념하는 편지를 보내준다구리! 💌
				</S.Content>
        <S.Form>
          <InputForm
            value={userInfo.userEmail}
            name={"userEmail"}
            onChange={onChangeInfo}
            placeholder={"이메일 주소"}
						required={required}
						result={'정확한 이메일을 입력해야 습관 메일을 발송한다구리!'}
          />
          <InputForm
            value={userInfo.userName}
            name={"userName"}
            onChange={onChangeInfo}
            placeholder={"이름"}
						required={nameRequired}
						result={'해비터의 이름이 궁금하구리! 🤔'}
          />
          <InputForm
            value={userInfo.userHabit}
            name={"userHabit"}
            onChange={onChangeInfo}
            placeholder={"어떤 습관을 결심했나요?"}
						required={habitRequired}
						result={'결심한 습관을 입력해달라구리!'}
          />
					<S.Subscribe
            onClick={(e) => {
              e.preventDefault();
              HabitDeclare();
            }}
          >
            습관 다짐하기
          </S.Subscribe>
        </S.Form>
				<S.DigulInsta>
					딩구리가 살고 있는 인스타그램에 방문해보세요!
					<img 
					onClick={()=>{window.open('https://www.instagram.com/habit__kim/', '_blank')}}
					src={Insta} 
					alt='딩구리' 
					/>
				</S.DigulInsta>
				
      </S.SubscribeWrapper>
    </S.Container>
  );
}

export default Habit;
