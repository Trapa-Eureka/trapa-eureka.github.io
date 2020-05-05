---
layout: post
title:  "Github Blog - jekyll Plainwhite 테마 설치"
date:   2020-05-04 23:06:30 +0530
categories: Jekylle Theme GithubBlog
---

(포스팅 테스트 용으로 간단하게)

준비물(맥 OS X 기준) :
1. 터미널(iterms2)
2. [Jekyll’s GitHub repo][jekyll-gh].
3. VSCode

[jekyll-gh]: https://github.com/thelehhman/plainwhite-jekyll

과정 :
- 본인의 Github에 아래와 같은 형식의 저장소를 하나 생성한다.

```
username.github.io
```
- 생성한 후 터미널을 이용, 원하는 폴더 경로까지 접근 후 아래와 같은 명령어를 입력한다. 
   
```
$ git clone (생성한 해당 저장소 링크)
```
- git clone하면 원하는 경로상에 폴더가 생성되고, 이후 준비물 2번의 저장소에서 zip파일을 내려받은 후 압축을 풀어서 git clone하여 생성된 폴더에다가 그대로 덮어씌운다.
  
- 이후 과정은 일부 파일 수정이 필요하지만 과정에 대한 설명은 준비물 2번 링크의 README.md 화면에 잘 기술되어 있으니 참고할것.

- 그 외 참고하면 좋은 자료
  
   [글 작성에 필요한 markdown 사용법][markdown-use]

[markdown-use]: https://gist.github.com/ihoneymon/652be052a0727ad59601

* 기타
- 로컬 폴더에서 파일을 싹 지우고 Github에서 pull, clone시 jekyll serve가 안되는 경우
1. 터미널에서 해당 폴더 위치까지 접근 후 아래와 같이 한다.(순서대로)
   ```
   $ bundle
   ```
   *****
   ```
   $ gem install plainwhite
   ```
   *****
   ```
   $ jekyll serve
   ```