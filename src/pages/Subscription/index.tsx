import { useState } from 'react'
import * as S from './Subscription.style'
import Logo from '../../assets/img/habitLogo.png'
import axios from "axios";

interface userInfo {
  userEmail: string;
  userName: string;
	userHabit: string;
}

function Subscription(){

	const [userInfo, setUserInfo] = useState<userInfo>({
    userEmail: '',
    userName: '',
		userHabit: '',
  })

	const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value})
  }

	const HabitDeclare = () => {
		const formData = {
			eventOccuredBy: "SUBSCRIBER",
			confirmEmailYN: 'N',
			subscribers: [
				{
					email: userInfo.userEmail,
					name: userInfo.userName,
					habit: userInfo.userHabit,
					$ad_agreed: "Y",
				}
			]
		}
		axios.request({
			baseURL: `https://api.stibee.com/v1`,
			url: `/lists/228056/subscribers`,
			method: 'POST',
			data: formData
		})
	}

	return (
		<S.Container>
			<S.SubWrapper>
				<S.HBDLogo src={Logo}/>
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
						<S.InputForm
							value={userInfo.userHabit}
							name={'userHabit'}
							onChange={onChangeInfo}
							placeholder={'기념하고 싶은 습관을 입력해주세요.'}
						/>
						<S.Subscribe
							onClick={(e)=>{
								e.preventDefault()
							}}
						>습관 기념하기!</S.Subscribe>
					</S.Form>
			</S.SubWrapper>
		</S.Container>
	)
}

export default Subscription