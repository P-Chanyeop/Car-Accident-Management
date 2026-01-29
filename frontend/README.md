# Do You Love Me - React SPA

React + Vite로 만든 "Do you love me?" 인터랙티브 페이지입니다.

## 설치 및 실행

```bash
cd frontend
npm install
npm run dev
```

## 비디오 파일 추가

`frontend/public/` 폴더에 다음 비디오 파일들을 추가해주세요:
- `Reply me love.mp4` - 질문 화면에 표시될 비디오
- `Love me.mp4` - 결과 화면에 표시될 비디오

## GitHub Pages 배포

1. 비디오 파일을 `public/` 폴더에 추가
2. 패키지 설치 및 배포:
```bash
npm install
npm run deploy
```

3. GitHub 저장소 Settings > Pages에서:
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Save

배포 후 `https://[username].github.io/CarAccidentManagement/`에서 확인 가능합니다.

