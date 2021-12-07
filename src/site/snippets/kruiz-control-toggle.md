---
excerpt: Basic framework of toggle system to switch between two states with the
  same command or event in [Kruiz
  Control](https://github.com/Kruiser8/Kruiz-Control). On/Off, Red Mode/Blue
  Mode, etc.
image_card_credit: "[snappify](https://snappify.io/) for code mockup"
title: Kruiz Control - Toggle Demo
slug: kruiz-control-toggle
date: 2021-05-05T05:06:44.448Z
dateMod: Last Modified
post_type: article
category: Kruiz Control
tags:
  - Streamer Resources
  - Toggle
image_card: /images/toggle-demo.png
image_card_alt: Mockup of toggle demo code for Kruiz Control.
teaser: Learn to Toggle in Kruiz Control!
seo_title: Kruiz Control - Toggle Demo
seo_desc: Breakdown and explanation of how to create a toggle system framework
  for your Twitch channel with Kruiz Control.
---
This is how I made a toggle framework for Kruiz Control. I use a version of this system to turn chat interactions, alerts, and sound effects with my Fallout 4 game on and off.

Breaking it down to its basic parts, this framework of events will take a `false` value and flip it to `true` (or vice versa) and save it to the `toggle01` variable. You can then build other events that check the value of `toggle01` and make them perform different actions depending on the result.

<a name="toc" class="mb-0"></a>

[[toc]]

## The Code

### Updated Method

As of v1.5.4 Kruiz Control added some built in Actions to achieve the same result as writing out custom Functions for the toggle system. The original method still works, and is a great way to learn more about how KC works as well as dip your toes into JavaScript. Here's the updated method for the toggle system.

```bash
# Sets toggle01 to off when KC starts up
OnInit
Variable Set toggle01 false

# Send Message to switch toggle01
OnCommand b 0 !toggle
switchToggle

# Switches toggle01 on and off
OnAction switchToggle
Variable Load toggle01
Param Negate toggle01
Variable Set toggle01 {toggle01}
Chat Send "toggle01 set to {toggle01}"

# Checks to see if toggle01 is set to true or false
OnCommand b 0 !checktoggle
Variable Load toggle01
Chat Send "toggle01 set to {toggle01}"

# Tests toggle01 and does a different action depending on if its on or off
OnCommand b 0 !testtoggle
Variable Load toggle01
If 2 {toggle01} = false
Chat Send "Toggle is off!"
Exit
Chat Send "Toggle is on!"
```

##### New Triggers and Actions Used
[`OnAction` Used to define a list of actions that will get inserted into an event when the provided '<action>' is called.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#onaction)

[`Param Negate` Negates the value within the parameter.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#param-negate)

[Back to Contents](#toc)

### Original Method

KC Version: v1.3.4

Usage: `!toggle` to switch back and forth between two states

Usage `!checktoggle` to check which state toggle is currently in

```bash
#Sets toggle01 to off when KC starts up
OnInit
Variable Set toggle01 false

#Send Message to switch toggle01
OnCommand b 0 !toggle
Message Send switchToggle

#Switches toggle01 on and off
OnMessage switchToggle
Variable Load toggle01
Function "var toggle = {toggle01};toggle = !toggle;return {result: toggle};"
Variable Set toggle01 {result}

#Checks to see if toggle01 is on or off
OnCommand b 0 !checktoggle
Variable Load toggle01
If 2 {toggle01} = false
Chat Send "This toggle is off!"
exit
Chat Send "This toggle is on!"
```
[View the Gist](https://gist.github.com/FatsackFails/4ca2b87384468da79f4538255ef3a319)

[Back to Contents](#toc)

## Breaking Down Each Section

### Setting Toggle Default
```bash
#Sets toggle01 to off when KC starts up
OnInit
Variable Set toggle01 false
```
Our toggle works by switching a variable back and forth between `true` and `false` and allowing for different actions to occur depending on the value.

We use `OnInit` to create our variable called `toggle01` and set it to `false`. This will happen every time KC starts up (refreshing the browser source, using the default `!kcreset` command.) Keep that in mind for whatever events and actions you tie to this toggle, as the default will be whatever you have set this variable.

##### New Triggers and Actions Used
[`OnInit` Used to fire a set of actions when Kruiz Control starts.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#oninit)

[`Variable Set` Used to set a variable during the current session.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#variable-set)

[Back to Contents](#toc)

### One Way to Activate Toggle
```bash
#Send Message to switch toggle01
OnCommand b 0 !toggle
Message Send switchToggle
```
This event creates a command for the broadcaster to toggle the `toggle01` variable from `true` to `false` or vice versa, depending on what it's currently set to.

Using `Message Send` allows us to set up multiple triggers to fire off the toggle, not just a command. We've created a unique message called `switchToggle` that will do all the heavy lifting later in the code.

##### New Triggers and Actions Used
[`OnCommand` Used to trigger a set of actions when a command is used at the beginning of a message.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#oncommand)

[`Message Send` Used to send a message and trigger other events.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#message-send)

[Back to Contents](#toc)

### Making the Toggle Switch
```bash
#Switches toggle01 on and off with confirmation
OnMessage switchToggle
Variable Load toggle01
Function "var toggle = {toggle01};toggle = !toggle;return {result: toggle};"
Variable Set toggle01 {result}
```
This event is the meat and potatoes behind our toggle, which is triggered by our `switchToggle` message we set up earlier. Any event that uses the `Message Send` action will fire the `OnMessage` trigger if they use the same message.

Once the `switchToggle` message is received we use the `Variable Load` action with the `toggle01` variable to get its current state. We then use the `Function` action to write some custom JavaScript code which will create a new variable called `result`. This new variable is set to have the opposite value of `toggle01`. Now we can set `toggle01` to have the same value as the `result` variable, effectively flipping the switch. And now `toggle01` is flipped until we run the same event! If we reset KC, it will revert back to its default value that we set in the `OnInit` event.

##### New Triggers and Actions Used
[`OnMessage` Used to fire a set of actions when a message is sent with `Message Send`.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#onmessage)

[`Variable Load` Used to load a previously set variable during the current session.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#variable-load)

[`Function` Used to create a JavaScript function using the input text.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#function)

#### Tangent on Custom JavaScript Code in KC
Our Javascript is written in a specific way so that Kruiz Control can use the result of our custom coding while still maintaining the structure KC needs of 1 action per line. All code inside of the `Function` action is closed, meaning it doesn't see or affect any code out of the quotes unless we specify it. We'll need to pull in and push out variables that can be used outside of the function.

Looking at our custom code in the `Function` action, one can read it as "create a variable called `toggle` that uses the same value as our `toggle01` variable we're pulling in from outside this function. Then take the value of our newly created `toggle` variable and set it to the opposite of what it currently is. Finally, create a new variable called `result` that can be used outside this function that has the same value of our now modified `toggle` variable." We can now use the `result` variable in this event as we need to. Note that our `toggle = !toggle` statement only works if the values of our variable are Boolean `true` or `false`.

[Back to Contents](#toc)

### Example of Using Toggle
```bash
#Checks to see if toggle01 is on or off
OnCommand b 0 !checktoggle
Variable Load toggle01
If 2 {toggle01} = false
Chat Send "This toggle is off!"
exit
Chat Send "This toggle is on!"
```
Now we take everything we've built and test it. This command is just one of the many ways this toggle event can be used. There's a lot to cover here, but the logic behind it is simple: *Trigger*, *Load*, *Compare*, *Result*. When the event is *Triggered*, KC *Loads* the variable to get its state. We then use an `If` action to *Compare* the variable to a value. Depending on the *Result* it will do a specific action.

In our example our *Trigger* is `OnCommand`, we *Load* the `toggle01` variable, and *Compare* our variable to the `false` value. The *Result* chooses our actions of either `Chat Send` "This toggle is off!" if `false` or "This toggle is on!" if `true`.

`If` actions use logic operators to compare and can use `Skip` actions if the comparison is false, which can get confusing when doing double negatives or something similar.

Starting from the `If` line, the example can be read as "If the `toggle01` variable returned as `false` when it was loaded in, send a message in chat saying, 'This toggle is off!' and then `Exit`. Otherwise `Skip` these next 2 lines of code and send a message in chat that says, "This toggle is on!"

The `Exit` action after the first `Chat Send` action tells KC to stop after sending the message in chat if `toggle01` is `false`, but will be skipped if `toggle01` is `true`.

##### New Triggers and Actions Used

[`If` Used to determine whether or not the trigger should complete the rest of the actions.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#if)

[`Skip` Used to skip over the specified number of lines in an event.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#skip)

[`Chat Send` Used to send a message to chat.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#chat-send)

[`Exit` Used to exit an event without processing the rest of the actions.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#exit)

[Back to Contents](#toc)

## Final Words
There's a lot of cool ways you could use this framework. If you come up with a way to use this toggle framework, I'd love to see it! Feel free to [get in touch](/contact) as well if you come up with a better way to implement something like this!

If you love Kruiz Control as much as I do, consider [supporting the project on Patreon](https://www.patreon.com/kruiser8). This invaluable tool that [Kruiser8](https://twitch.tv/kruiser8) has created for Twitch streamers deserves as much support as it can get.
