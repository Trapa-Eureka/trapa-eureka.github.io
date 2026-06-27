---
layout: post
title:  "TypeScript Concepts (Concept of TS)"
subtitle: "A summary of concepts worth understanding"
type: "Learning & Study"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
order: 4
---

- TypeScript is a typed language: at the initial setup, you need to specify in advance what kind of variables and data you're dealing with.
- If you search the internet (the Google gods), there will be documents or files about the options you can add to tsconfig.json, so look them up.
- Since Node.js doesn't understand the TS language, you need to compile it into regular JS code, and you can also configure which version of JS to compile to.
- When you want to pass an object (return it?): you have to make TS able to understand that object. You also have to make it able to distinguish whether the object is the correct type or not (code that validates it?). In other words, you pass an object to a function, and the function that receives it does something inside with the object it was given (interface...??).
- But since regular JS doesn't have interfaces, you can also put a class in place of an interface in TS. However, when declaring a class in TS, you have to declare what properties that class should have. Even the access permissions.
- The method called constructor is invoked every time the class starts.
- When using a class, if you set a variable to private, it protects that variable. In other words, it isn't exposed. (property protection)
