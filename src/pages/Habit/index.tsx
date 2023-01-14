import { useEffect, useRef, useState } from "react";
import * as S from "./Subscription.style";
import Logo from "../../assets/img/habitLogo.png";
import axios from "axios";
import InputForm from "../../components/InputForm";
import { useNavigate } from "react-router-dom";

interface userInfo {
  userEmail: string;
  userName: string;
  userHabit: string;
}

const NOTI_URL = process.env.REACT_APP_HABIT_NOTI

function Habit() {

	const [isValid, setIsValid] = useState<Boolean>(false)
	const [required, setRequired] = useState<Boolean>(false)
  const [userInfo, setUserInfo] = useState<userInfo>({
		userEmail: "",
    userName: "",
    userHabit: "",
  });

	const navigate = useNavigate();

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
		.then(()=>{
			console.log('노티 성공!')
		})
	}

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
	
  const HabitDeclare = () => {
    if(userInfo.userName.length > 0){
			if(userInfo.userHabit.length > 0) {
				if(isValid) {
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
							AccessToken: process.env.REACT_APP_STIBEE_TOKEN
						},
						baseURL: `https://api.stibee.com/v1`,
						url: `/lists/228056/subscribers`,
						method: "POST",
						data: formData,
					})
					.then(() => {
						window.scrollTo({ top: 0 });
						NotiSlack();
						navigate(`/habit/success`)
						console.log('성공!')
					});
				} else {
					setRequired(true)
					console.log('이메일 오류!')
				}
			} else {
				alert('습관을 1자 이상 적어주세요!')
			}
		} else {
			alert('이름을 1자 이상 적어주세요!')
		}
  };

  return (
    <S.Container>
      <S.SubscribeWrapper>
        <S.HBDLogo src={Logo} />
				<S.Content>
					다짐한 습관을 적어주세요! <br />
					오늘의 다짐을 기념하는 메일을 보내드릴게요!
				</S.Content>
        <S.Form>
          <InputForm
            value={userInfo.userEmail}
            name={"userEmail"}
            onChange={onChangeInfo}
            placeholder={"이메일 주소"}
						required={required}
						result={'정확한 이메일을 입력해주셔야 기념 메일을 발송해드려요!'}
          />
          <InputForm
            value={userInfo.userName}
            name={"userName"}
            onChange={onChangeInfo}
            placeholder={"이름"}
          />
          <InputForm
            value={userInfo.userHabit}
            name={"userHabit"}
            onChange={onChangeInfo}
            placeholder={"결심한 습관을 입력해주세요!"}
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
      </S.SubscribeWrapper>
    </S.Container>
  );
}

export default Habit;
