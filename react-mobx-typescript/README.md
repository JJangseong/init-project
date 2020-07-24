# 프로젝트 기본 구조 백업

## React and Mobx with Typescript V1
1. React
2. Mobx
3. Typescript
4. Webpack
5. Nginx
6. DockerFile

## 사용법

####  1. Development
개발할 때 사용 할 명령어 입니다. <br>
Webpack-dev-server를 사용하여 서버를 구동합니다. <br>
서버 실행은 밑 명령어로 실행합니다.

``` bash
$ docker-compose -f docker-compose-dev.yml up --build
```

테스트 서버는 http://localhost:3000 로 접속하시면 됩니다.

### 2. Production
다음은 실제 배포할 때 사용하는 명령어 입니다. <br>
``` bash
$ docker-compose up --build
```
실제 배포할 서버라서 포트는 80으로 로컬에서 실행 시 http://localhost 로 접속이 가능합니다.






