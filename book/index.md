---
layout: default
work: true
main: true
title: Book recommendation & Reading
description: 읽었던 책들 내 마음대로 리뷰 및 소개
project-header: true
header-img: "img/project_bg.jpg"
---

<div class="catalogue">
{% assign sorted = site.pages | sort: 'order' | reverse %}
{% for page in sorted %}
{% if page.book == true %}

     {% include post-list.html %}

{% endif %}
{% endfor %}
</div>