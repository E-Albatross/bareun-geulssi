# 딥러닝 기반 글씨 검사 기능을 탑재한 태블릿 PC용 글씨 연습 어플, 바른 글씨

### :movie_camera: 시연영상 링크(Youtube)
알바트로스-바른글씨 UI 프로토타입 링크: https://youtu.be/PXyZEEkt-OQ  
알바트로스-바른글씨 시연영상 링크: https://youtu.be/vZpOjUITChw
알바트로스-포스터세션 발표영상 링크: https://youtu.be/TbxrhyyXWp4
알바트로스-한국정보처리학회 2022 ASK 참여-논문 게재 및 학술발표대회 참여: https://youtu.be/5G6AKJ6-9jo 
## 프로젝트 소개

 
### :file_folder: 프로젝트 레포지토리 정리 (소스코드)
프론트엔드: https://github.com/E-Albatross/Albatross-FE     
컴퓨터비전: https://github.com/E-Albatross/Albatross-OpenCV  
백엔드: https://github.com/E-Albatross/Albatross-BE-re  

### :pushpin: 프로젝트의 필요성 & 목적
태블릿 PC 보급이 활성화되면서 모바일 필기를 하는 인구가 증가하고 있습니다.
종이에 하는 필기와 태블릿에 하는 필기는 펜의 형태, 종이와 전자기기의 차이 등 여러모로 차이점이 존재합니다.  
하지만 현재 어플 시장에서는 모바일 필기를 위한 어플은 존재하지 않습니다.  
사용자들이 보다 예쁜 글씨, 깔끔한 모바일 필기를 하는 것을 돕기 위해서 이 프로젝트를 시작하였습니다.  

### :pushpin: 프로젝트의 타겟층
 1) 악필인 사용자
    : 악필인 사용자는 악필을 교정할 수 있습니다.
 2) 원하는 글씨체를 가지고 싶은 사용자
    : 악필이 아니더라도 예쁜 글씨체를 가지고 싶은 사용자는 자신이 원하는 글씨체를 선택해서 해당 글씨체를 학습할 수         있습니다.
 3) 한글 글씨 연습이 필요한 아동 및 학생
    : 요즘 학교에도 1인 1태블릿을 보급하는 등 전자기기 보급이 증가하고 있습니다. 따라서 전자 필기 연습이 필요한 학생들에게 도움을 줄 수 있습니다. 

### 📱미리보기
<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ad2ef10-5adb-4d4b-b57a-5d1666b7e992/001.png" align="left"/>
<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64cff134-2778-4f63-ab9c-a047ce8e4ee4/002.png" align="left"/>
<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a0b921c-a451-42fc-8f8a-fde91122ccf8/003.png" />


###  :pencil2: 제품 설명서
1. 메인 화면의 줄긋기 연습 버튼 / 자음모음 연습 버튼을 누르면 기초적인 연습이 가능합니다. 
2. 설정에서 사용자가 원하는 글씨체를 선택하고 메인 화면에서 작품 선택을 합니다. 그리고 문학작품을 쓸 수 있는 화면으로 이동합니다.
3. 첫 번째 칸은 검은 글씨, 두 번째 칸은 회색 글씨, 세 번째 칸은 빈칸으로 구성된 화면이 나타납니다.
4. 검은 글씨를 보고 빈칸에 글씨를 따라 쓴 후 검사하기 버튼을 누르면 사용자 글씨에 대한 검사가 진행됩니다.
5. 검사가 진행된 후 교정이 필요한 부분에 느낌표 버튼을 표시하고 오른쪽 상단에 점수를 표시합니다.
6. 다운로드 버튼을 누르면 사용자의 갤러리에 글씨 이미지를 저장할 수 있다.
7. 검사하기 버튼을 누르면 사용자의 점수, 사용자의 글씨 이미지는 자동으로 저장되므로 사용자가 본인의 진행 상황 및 발전 정도 등을 파악할 수 있습니다.

### :house_with_garden: 프로젝트 개발환경
프론트엔드: React Native  
컴퓨터비전: OpenCV, BentoML, PyTorch, Docker   
백엔드: SpringBoot, MariaDB, AWS EC2, AWS S3, AWS RDS  
