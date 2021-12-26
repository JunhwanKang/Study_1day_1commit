# 태그 선택자 종류 및 특징

>**document.getElementsByClassName()**

* 클래스 명을 가진 태그를 선택할 수 있다.  
* 클래스 명이 같은 모든 태그를 배열로 가져온다.  
* document.getElementsByClassName("className")[index];  
* 위처럼 원하는 순번의 태그를 선택 할 수 있다.

>**document.getElementByTagName()**

* 태그 명으로 선택 할 수 있다.
* getElementsByClassName()와 동일하다.
>**document.getElementById()**
* 태그 속성 Id로 태그를 선택 가능하다.
* Id 특성상 하나의 태그만 선택한다.
>**document.querySelector()** 
* Id와 class 명 두개 모두 사용 가능하다.
* 하나의 태그만 선택가능하다.
* 같은 class명을 가진 태그가 여러개라면 가장 첫번째 태그를 선택한다.
* id는 #, class는 .을 사용한다.
>**document.querySelectorAll()**
* Id와 class 명 두개 모두 사용 가능하다.
* 클래스 명이 같은 모든 태그를 배열로 가져온다.
* document.querySelectorAll()[idx];로 원하는 순번의 태그를 선택 가능.