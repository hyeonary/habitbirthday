import * as S from './Subscribe.style'
import WelcomeLogo from "../../assets/img/welcome.png";
import InstaLogo from "../../assets/img/instagram.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SubscribeSuccess (){
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(()=>{
		if(location.state === null){
			navigate(`/`)
		}
	},[])

	return (
		<>
			{location.state && (
				<S.Container>
					<S.SuccessWrapper>
						<S.Welcome>
							<img src={WelcomeLogo} alt='welcomeImage' />
						</S.Welcome>
						<S.Headline>
							{location.state} 해비터, 뉴스레터 구독이 완료되었어요.<br />
							웰컴레터가 잘 도착했는지 메일함을 확인해주세요!
						</S.Headline>
						<S.HabitInstagram
							onClick={()=>{window.open('https://www.instagram.com/habit__kim/', '_blank')}}
						>
							<img src={InstaLogo} alt='인스타그램' />
							<span>
								해빗이 인스타그램 보러가기
							</span>
						</S.HabitInstagram>
					</S.SuccessWrapper>
				</S.Container>
			)}
		</>
	)
}

export default SubscribeSuccess