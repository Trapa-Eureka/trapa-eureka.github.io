---
layout: post
title:  "Connecting to an Amazon Server from a Mac Using the Terminal"
subtitle: "How to connect via SSH using the terminal"
type: "Development"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
order: 4
---

1. I'm posting this to organize and record what I learned while struggling through this early on.
2. What you'll need:
- Install putty
- A .ppk file or a .pem file (on a Mac you need to convert the .ppk file to a .pem file - described below)
- The IP information of the server you want to access.
  
## Getting Started
- Install putty in the Terminal using homebrew
{% highlight markdown %}
$ brew install putty
{% endhighlight %}

If brew is not installed, install brew first and then install putty
{% highlight markdown %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

- Use puttygen to convert the .ppk file extension to .pem
{% highlight markdown %}
$ puttygen [file name].ppk -O private-openssh -o [file name].pem
{% endhighlight %}

- Then register the converted key file. Various guides recommend setting it to 400, 500, 600, or 700, but in my case it worked when I set it to 700
{% highlight markdown %}
$ chmod 700 [fime name].pem
{% endhighlight %}

- Once you've done this, the converted file is created in that folder, and you use it to connect to aws via ssh.
{% highlight markdown %}
$ ssh -i [file name].pem ubuntu@ip-address
{% endhighlight %}

- A few steps for exiting with exit or opening a new terminal to upload files

Transferring a single file
{% highlight markdown %}
$ scp -i [pem file name] [name of file to upload] [user id]@[ip-address]:~/
$ scp -i example.pem example.py ubuntu@100.1.1.1:~/
{% endhighlight %}

Transferring an entire folder
{% highlight markdown %}
$ scp -i [pem file name] -r [name of folder to upload] [user id]@[ip-address]:~/
$ scp -i example.pem example ubuntu@100.1.1.1:~/
{% endhighlight %}