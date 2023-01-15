import * as S from './Subscribe.style'
import Logo from "../../assets/img/habitLogo.png";

function SubscribeSuccess (){
	return (
		<S.Container>
			<S.Contents>
				<S.HBDLogo src={Logo}/>
				<S.Headline>
					기념 레터를 보내드렸어요! <br />
					메일함을 확인해보세요!
				</S.Headline>
			</S.Contents>

		</S.Container>
	)
}

export default SubscribeSuccess