## Sample Progressive Web App

## What is a Progressive Web App
An application that combines the best of both web and mobile applications. Combines the reach of web apps with the capabilities, reliability & installability of native apps to make Progressive Web Apps

Key features:
- application size is fractional in comparison to traditional mobile applications
- allow for offline state of application which a standard web application does not allow for
- multi OS solutions. So eliminates the need to creating and maintaining multiple platform specific apps


## Who uses them now?
- Starbucks 
	- has the company logo & looks and feels like an mobile app
- 2048 game
	- not as smooth as mobile app in terms of user experience. PWA feels more like a web page vs a mobile app
- Tinder:
	- [found interesting case study on performance](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)

## My first thoughts on PWA:
- never realized that pwa is downloadable though the `Add to Home Screen` tab on iOS. previously used that to bookmark pages/recipes on the home screen, but never came around to a PWA. Also haven't seen many companies advertise the PWA
- when does a PWA come in handy vs a full iOS application
	- depending on users network connectivity/region or device type recommending PWA over native app (lower connectivity & older/devices with lesss storage)
	- number of features and capabilities of an app

## What makes an app progressive:
- includes a manifest.json with app name, logos
- includes a service worker which does caching

Questions to answer/Things to look into:
- understand what capabilities it can leverage that mobile apps have & web apps typically don’t
	- push notifications
- what type of features/products would work well as PWAs
- Lighthouse - haven't used before seen it in a lot of articles, can be used to test performance

Steps to get started with an app progressive:
- The sample react app is already a basic PWA


## HOW TO:
- Create a basic html + javascript app
	- index.html & add javascript index script tag
- Add manifest.json & add link tag with manifest.json
	- need to play around with possible options
- add service worker... this is where the magic happens and adds all the cool functionality of PWA
	- service worker caches data & servers content offline
	- can send push notification through service worker
	- must be on https... can host on netlify, or github pages for free

## REFERENCES:
https://web.dev/what-are-pwas/
https://www.simicart.com/blog/progressive-web-apps-examples/
