# Flow

1. 첫화면에는 내 발 측정하러가기 버튼이 있어.
2. 발압력측정하기 버튼.(10초 동안 측정 중 애니메이션 생성), 아두이노 시리얼 통신을 통해 압력값 받아오기
3. 휴대폰 / 아이패드 카메라를 통해 발 사이즈 측정하기(파이썬으로 open cv2 활용하여 모델 만들 예정). 사이즈 모델은 추후에 연결예정이므로 카메라 기능만 구현하여 png파일을 저장하여 백엔드로 보낼 것(python)
4. 나에게 맞는 신발 진단 중 (로딩창)
5. 상단 30%에 신발 하나 추천, 하단에는 3개 이상 carousel

# Structure Example

```
/project-root
│
├── /assets
│   ├── /images
│   └── /fonts
│
├── /components
│   ├── Button.js
│   ├── LoadingAnimation.js
│   ├── ShoeCarousel.js
│   └── CameraCapture.js
│
├── /screens
│   ├── HomeScreen.js
│   ├── MeasurePressureScreen.js
│   ├── CaptureFootSizeScreen.js
│   ├── RecommendShoeScreen.js
│   └── LoadingScreen.js
│
├── /utils
│   ├── api.js
│   ├── styles.js
│   └── helpers.js
│
└── App.js
```

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
