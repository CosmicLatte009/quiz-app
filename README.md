<div align="center">

# ⭐Quiz App⭐

</div>
</br>

### **[배포 URL]**

- URL: https://quiz-app-for-test.netlify.app/

- 서비스 배포 환경: 🔗netlify

</br>

# 1. 개발 환경

### **[개발 환경]**

- React
- React-router
- useState, useEffect, useNavigate
- CSS module, Sass

```
"react": "^18.2.0",
"react-router-dom": "^6.13.0",
"@types/node-sass": "^4.11.3",
"sass": "^1.63.4"
"sass-loader": "^13.3.2",
```

</br>

# 2. 구현 기능

<div align="center">
## 홈페이지

|                                                      닉네임 입력 전                                                      |                                                      닉네임 입력 후                                                      |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| <img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/814ab275-d8f3-4bcd-9507-327e4e82ad5f"/> | <img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/d13409dc-4f12-4ce2-93cb-a11e710efe6f"/> |

사용자는 닉네임을 입력하면 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
</br>

## 퀴즈 페이지

|                                                       퀴즈 풀기 전                                                       |                                                       오답 선택 시                                                       |                                                       정답 선택 시                                                       |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| <img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/45429a0a-49f2-4516-9fdc-1357a5a5681e"/> | <img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/d38273a8-2e77-405f-8db7-75ebedfe5a7e"/> | <img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/cd59b65d-4638-4f88-b377-f0b4dd44fbfb"/> |

- 답안 선택 후 다음 문항 버튼을 볼 수 있다.
- 답안이 맞았는지 틀렸는지 바로 알 수 있다.
- 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.

   </br>

## 결과 페이지

<img width="300" src="https://github.com/CosmicLatte009/quiz-app/assets/87015026/cee1c449-86cb-4ed5-b495-7fbcafc59b24"/>

모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.

1. 소요 시간
2. 정답 수
3. 오답 수

</div>

# 3. 성능 최적화

### 1. loading state로 초기 데이터 요청 최적화

```tsx
    const [loading, setLoading] = useState(true); // 데이터 요청 성능 최적화용 state

    useEffect(() => {
    //...
    const fetchData = async () => {
    try {
    const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
    );
    const data = await response.json();
    const resultData: Question[] = data.results;
    setQuestionData(resultData);
    setLoading(false); // 데이터 로딩 완료
    //...
    }, [navigate]);

    //...

    if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중 표시
    }
```

### 2. React.memo로 리렌더링 최적화

```tsx
export default React.memo(QuizPage);
```
