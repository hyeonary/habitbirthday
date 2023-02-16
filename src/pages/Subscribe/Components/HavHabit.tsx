import * as S from "./HavHabit.style"
import Logo from "../../../assets/img/havhabit.png";
import useMatchScreenSize from "../../../hooks/useMatchScreenSize";

function HavHabit (){
	const {isLarge} = useMatchScreenSize();
	return (
		<S.Container>
			<S.Contents>
				<S.Heading>
					나만의 꾸준함을 만드는<br />
					습관 커뮤니티
				</S.Heading>
				<S.Logo>
					<img src={Logo} alt="logo"/>
				</S.Logo> 
				<S.Desc>
					{isLarge ? (
						<>
							해브해빗은 <em>모두가 자신만의 꾸준함을 만들 수 있도록</em> 여러 방법을 생각하고 있어요.<br/><br/>
							세상에는 잘하기 위한 방법이나 정보는 많으니,<br/>
							<em>우리의 꾸준함을 응원하고 기념해주는 존	재가 있다면 어떨까요?</em><br/>
							잠시 멈추거나 좌절했을 때 ‘다시 할 수 있어!’라고, ‘잠깐 쉬어도 괜찮다.’라고<br/>
							말해주는 존재가 있다면 나만의 꾸준함이 더 오래 지속될 수 있을 거예요.<br/>
						</>
						)	
						: 
						(
							<>
								해브해빗은 <em>모두가 자신만의 꾸준함을 만들 수 있도록</em> 여러 방법을 생각하고 있어요.<br/><br/>
								세상에는 잘하기 위한 방법이나 정보는 많으니, <em>우리의 꾸준함을 응원하고 기념해주는 존재가 있다면 어떨까요?</em><br/>
								잠시 멈추거나 좌절했을 때 ‘다시 할 수 있어!’라고, ‘잠깐 쉬어도 괜찮다.’라고 말해주는 존재가 있다면 나만의 꾸준함이 더 오래 지속될 수 있을 거예요.<br/>
							</>
						)
					}
				</S.Desc>
			</S.Contents>
		</S.Container>
	)
}

export default HavHabit