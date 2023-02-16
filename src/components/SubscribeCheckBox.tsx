import { SetStateAction, useRef } from "react";
import useModal from "../hooks/useModal";
import * as S from './SubscribeCheckBox.style'

interface Props {
	desc: string;
	option: string;
	value: boolean;
	name: string;
	onChange: React.Dispatch<SetStateAction<boolean>>
	required?: boolean;
	result?: string;
	modalTitle?: string;
	modalDesc?: string;
}

function SubscribeCheckBox({desc, option, value, name, onChange, required, result, modalTitle, modalDesc}:Props){
	
	const modalRef = useRef<HTMLDivElement>(null);
  const [modal, openModal] = useModal(modalRef);
	
	const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(!value)
  }	

	return (
		<>
			<S.Container>
				<S.InputContainer>
					<S.CheckBoxForm
						type="checkbox" 
						checked={value}
						name={name}
						onChange={onChangeCheck}
					/>
					<S.Description>
						({option}) <em onClick={()=>openModal(true)}>{desc}</em>에 동의합니다
					</S.Description>
				</S.InputContainer>
				{required && <S.ValidResult>{result}</S.ValidResult>}
			</S.Container>
			{modal && (
				<S.ModalContainer>
					<S.Modal>
						<h3>{modalTitle}</h3>
						<div>
							{modalDesc}
						</div>
						<S.CloseButton
							onClick={() => openModal(false)}
						>
							닫기
						</S.CloseButton>
					</S.Modal>
				</S.ModalContainer>
			)}
		</>
	)
}

export default SubscribeCheckBox