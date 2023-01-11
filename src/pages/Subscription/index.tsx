import { useEffect, useState } from "react";
import * as S from "./Subscription.style";
import Logo from "../../assets/img/habitLogo.png";
import axios from "axios";
import InputForm from "../../components/InputForm";

interface userInfo {
  userEmail: string;
  userName: string;
  userHabit: string;
}

function Subscription() {
  const [userInfo, setUserInfo] = useState<userInfo>({
    userEmail: "",
    userName: "",
    userHabit: "",
  });

  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [isValid, setIsValid] = useState<Boolean>(false);

  const regexEmailCheck = () => {
    const EmailValidRegEx = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    const regexEmail = new RegExp(EmailValidRegEx);

    const NameValidRegEx = "^[가-힣a-zA-Z]+$";
    const regexName = new RegExp(NameValidRegEx);

    console.log(regexEmail.test(userInfo.userEmail));
    console.log(regexName.test(userInfo.userName));
    console.log(regexName.test(userInfo.userHabit));
    console.log(userInfo);
  };

  // const regexNameCheck = (name: string;) => {
  //   const inputValidRegEx = "^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$";
  //   const regex = new RegExp(inputValidRegEx);
  //   regex.test(e.target.value);
  // };

  // 버튼을 누를 경우
  // email: 이메일 형식, 글자수가 0 이상인지
  // name: 영어 or 이름(자음, 모음 안됨), 글자수가 0 이상인지
  // habit: 영어 or 이름(자음, 모음 안됨), 글자수가 0 이상인지

  useEffect(() => {
    const validEmail = userInfo.userEmail.length > 0;
    const validName = userInfo.userName.length > 0;
    const validHabit = userInfo.userHabit.length > 0;
    setIsValid(validEmail && validName && validHabit);
  }, [userInfo]);

  const HabitDeclare = () => {
    const validEmail = userInfo.userEmail.length > 0;
    const validName = userInfo.userName.length > 0;
    const validHabit = userInfo.userHabit.length > 0;
    const validCheck = validEmail && validName && validHabit;

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
    const accessToken = "";
    axios
      .request({
        headers: {
          AccessToken: accessToken,
        },
        baseURL: `https://api.stibee.com/v1`,
        url: `/lists/228056/subscribers`,
        method: "POST",
        data: formData,
      })
      .then(() => {
        setUserInfo({
          userEmail: "",
          userName: "",
          userHabit: "",
        });
      });
  };

  return (
    <S.Container>
      <S.SubscribeWrapper>
        <S.HBDLogo src={Logo} />
        <S.Form>
          <InputForm
            value={userInfo.userEmail}
            name={"userEmail"}
            onChange={onChangeInfo}
            placeholder={"이메일 주소"}
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
              // HabitDeclare();
              regexEmailCheck();
            }}
          >
            습관 결심하기
          </S.Subscribe>
        </S.Form>
      </S.SubscribeWrapper>
    </S.Container>
  );
}

export default Subscription;
