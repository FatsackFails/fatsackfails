---
title: >-
  Kruiz Control - Toggle Demo
slug: kc-toggle
date: 2021-05-05T05:06:44.448Z
dateMod: Last Modified
post_type: article
category: Kruiz Control
tags:
  - Toggle
image_card: /images/toggle-demo.png
image_card_alt: Mockup of toggle demo code for Kruiz Control.
image_card_credit: >-
  [snappify](https://snappify.io/) for code mockup
excerpt: >-
  Basic framework of toggle system to switch between two states with the same command or event in [Kruiz Control](https://github.com/Kruiser8/Kruiz-Control). On/Off, Red Mode/Blue Mode, etc.
teaser: Code Demo to Toggle in KC!
seo_title: Kruiz Control - Toggle Demo
seo_desc: Code snippet giving an example of how to toggle between two states in
  Kruiz Control.
---

KC Version: v1.3.4
Usage: !toggle to switch back and forth between two states
Usage !checktoggle to check which state toggle is currently in

```bash
#Sets toggle01 to off when KC starts up
OnInit
Variable Set toggle01 false

#Send Message to switch toggle01
OnCommand b 0 !toggle
Message Send switchToggle

#Checks to see if toggle01 is on or off
OnCommand b 0 !checktoggle
Variable Load toggle01
If 2 {toggle01} = false
Chat Send "This toggle is off!"
exit
Chat Send "This toggle is on!"

#Switches toggle01 on and off with confirmation
OnMessage switchToggle
Variable Load toggle01
Function "var toggle = {toggle01};toggle = !toggle;return {result: toggle};"
Variable Set toggle01 {result}
If 2 {result} = false
Chat Send "This toggle is now off!"
exit
Chat Send "This toggle is now on!"
```
[View the Gist](https://gist.github.com/FatsackFails/4ca2b87384468da79f4538255ef3a319)
