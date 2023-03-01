import * as S from './Habit.style'
import Logo from "../../assets/img/welcomedingul.png";
import Insta from "../../assets/img/dingulinsta.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HabitSuccess (){

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(()=>{
		if(location.state === null){
			navigate(`/habit`)
		}
	},[])


	return (
		<>
			{location.state && (
				<S.Container>
					<S.SuccessWrapper>
						<S.Welcome>
							<img src={Logo} alt="welcome"/>
						</S.Welcome>
						<S.Headline>
							{location.state} 해비터, 앞으로 30일간 잘 부탁한다구리.<br />
							딩구리가 보낸 편지가 잘 도착했는지 메일함을 확인해줘!
						</S.Headline>
						<S.DigulInsta>
							딩구리가 살고 있는 인스타그램에 방문해보세요!
							<img 
							onClick={()=>{window.open('https://www.instagram.com/habit__kim/', '_blank')}}
							src={Insta} 
							alt='딩구리' 
							/>
						</S.DigulInsta>
					</S.SuccessWrapper>
				</S.Container>
			)}	
		</>
	)
}

export default HabitSuccess