---
layout: post
title:  "MAC에서 터미널을 이용한 아마존 서버 접속"
subtitle: "터미널을 이용한 ssh 접속방법"
type: "Development"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
order: 4
---

1. 초반에 삽질을 통한 느낌을 정리 및 기록하고자 포스팅함.
2. 준비물 :
- putty 설치
- .ppk 파일 혹은 .pem파일 (맥에서는 .ppk 파일을 .pem파일로 변환해야함 - 아래에 기술)
- 접근하려는 IP 정보.
  
## 시작
- Terminal에서 homebrew를 이용하여 putty를 설치
{% highlight markdown %}
$ brew install putty
{% endhighlight %}

만약, brew가 설치되어 있지 않다면, brew를 먼저 설치 후 putty 설치
{% highlight markdown %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

- puttygen을 이용하여 확장자 .ppk파일을 .pem으로 변환
{% highlight markdown %}
$ puttygen [file name].ppk -O private-openssh -o [file name].pem
{% endhighlight %}

- 그리고 변환된 키 파일을 등록. 이런저런 소개글에 보면 400, 500, 600, 700으로 설정을 권유하고 있으나 본인의 경우는 700으로 했을때 변환 되었음
{% highlight markdown %}
$ chmod 700 [fime name].pem
{% endhighlight %}

- 여기까지 하면 해당 폴더에 변환된 파일이 생성되는데, 이것을 가지고 aws에 ssh로 접속.
{% highlight markdown %}
$ ssh -i [file name].pem ubuntu@아이피
{% endhighlight %}

- exit로 빠져나오거나 새 터미널 열어서 파일 업로드를 하는 몇가지 과정

단일 파일 전송
{% highlight markdown %}
$ scp -i [pem file name] [업로드할 파일이름] [user id]@[아이피]:~/
$ scp -i example.pem example.py ubuntu@100.1.1.1:~/
{% endhighlight %}

폴더 째로 전송
{% highlight markdown %}
$ scp -i [pem file name] -r [업로드할 폴더이름] [user id]@[아이피]:~/
$ scp -i example.pem example ubuntu@100.1.1.1:~/
{% endhighlight %}