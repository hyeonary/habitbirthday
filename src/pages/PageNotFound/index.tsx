import styled, { keyframes } from "styled-components";
import { onNotLarge } from "../../styles/mediaQueries";

const Contaier = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff2d1;
`

const Contents = styled.div`
	h2 {
		margin-bottom: 10px;
	}
`

function PageNotFound (){
	return (
		<Contaier>
			<Contents>
				<h2>404</h2>
				<h3>This Page could not be found</h3>
			</Contents>
		</Contaier>
	)
}

export default PageNotFound