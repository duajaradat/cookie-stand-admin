# Welcome to React, Next.js & TailwindCSS

## Author : 

Du'a Jaradat

## Colleagues : 

Mohammad Silwadi
Faisal Kushha
Abdallah Nazzal

---

## Links and Resources

- [Pull Request lab 37](https://github.com/duajaradat/cookie-stand-admin/pull/1)
- [Pull Request lab 38](https://github.com/duajaradat/cookie-stand-admin/pull/2)
- [Pull Request lab 39](https://github.com/duajaradat/cookie-stand-admin/pull/3)

---

## Deployment App

[Cookie Stand]()

---
## Overview

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

---
## Feature Tasks and Requirements 37 

 - The spec for lab is screen shot of [Cookie Stand Admin Version 1](https://codefellows.github.io/code-401-python-guide/curriculum/class-37/lab/cookie-stand-admin-version-1.png)

 - pages/Index.js should…

         - Have <Head> component with page title set to Cookie Stand Admin
         - Have a header component that matches spec.
         - Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.
         - Have a <footer> component that matches spec.  

 - Style app using TailwindCSS utility classes.              
---
## Feature Tasks and Requirements 38
 - The specs for lab are screen shots [Cookie Stand Admin Version 2](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-version-2.png) and [Cookie Stand Admin No Stands]https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-no-stands.png)

 - pages/Index.js should return top level component <CookieStandAdmin>
 - <CookieStandAdmin> details…
         - Will contain the following components:
                 - <Head>, <Header>, <main>, <CreateForm>, <ReportTable>, and<Footer> component that matches spec.
 - Import time slot data from supplied data.js file.
 - <CreateForm> component details…
         - Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
 - <ReportTable> details…
         - If reports is empty then render <h2>No Cookie Stands Available</h2>
         - If reports is not empty then render a table with thead,tbody and tfoot components.
 - Components should render to match spec.
 - Style all components using TailwindCSS utility classes to match spec.

## Implementation Notes

 - npx create-next-app –example with-tailwindcss cookie-stand-admin
         
 - strip out unused files

        - Won’t break if they get left in, but a good practice to remove stuff you’re not using.

 - Pro tip: Tailwind CSS Extension Pack

--- 

## User Acceptance Tests

 - No testing required.


