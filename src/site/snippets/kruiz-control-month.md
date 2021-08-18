---
excerpt: Example of how to make [Kruiz
  Control](https://github.com/Kruiser8/Kruiz-Control) write the month into an OBS Text Source.
image_card_credit: "[snappify](https://snappify.io/) for code mockup"
title: Kruiz Control - Write Month to OBS Text Source
slug: kruiz-control-month
date: 2021-08-06
dateMod: Last Modified
post_type: article
category: Kruiz Control
tags:
  - Streamer Resources
  - JavaScript
image_card: /images/kruiz-control-month.png
image_card_alt: Mockup of month code for Kruiz Control.
teaser: Write the Month to OBS Text Source with Kruiz Control!
seo_title: Kruiz Control - Write Month to OBS Text Source
seo_desc: Example of how to make Kruiz
  Control write the month into an OBS Text Source.
---
I recently finished a stream overlay commission for [SajochiSama](https://twitch.tv/sajochisama) that was comic book themed. One fun detail I added was to the comic cover on the "Starting Soon" screen. It will automatically update the issue month to match the current date. Here's the code I used in Kruiz Control to do that!

<a name="toc" class="mb-0"></a>

[[toc]]

## The Code
KC Version: v1.5.0

Usage: `OnInit`

```bash
OnInit
Function "var date = new Date();var  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; return {monthName: months[date.getMonth()]}"
OBS Source "Date" Text "{monthName}"
```
[View the Gist](https://gist.github.com/FatsackFails/764c73df268a4fe30cf127625b21ebcd)

[Back to Contents](#toc)

## Breaking It Down

Our action works by using a `Function` event to run a small bit a JavaScript to determine the current month and write that data into an `OBS Source Text` we have set up.

We use `OnInit` to run this action every time KC starts up (on OBS startup, refreshing the browser source, using the default `!kcreset` command.)

### Triggers and Actions Used
[`OnInit` Used to fire a set of actions when Kruiz Control starts.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#oninit)

[`Function` Used to create a JavaScript function using the input text.](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#function)

[Back to Contents](#toc)

#### JavaScript Code

```JavaScript
var date = new Date();
```
Our first piece of JavaScript creates a new date object named `date`. This will pull the entire date all the way down to the millisecond from KC's browser source when called, but for our purposes we only need the month. JavaScript counts months from 0 to 11, with `January = 0` all the way to `December = 11`.

### JavaScript Documentation
[JavaScript Date Objects - Used to work with dates.](https://www.w3schools.com/js/js_dates.asp)

```JavaScript
var  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
```
The second part of our code creates an array named `months` with each element holding a string representing the different months of the year. Later in the code we'll access the array and reference its index numbers. Array indexes start at 0, so the first element in our example is `[0] 'JAN'`, the second element is `[1] 'FEB'`, and so on. This is what will eventually be written into the OBS Text Source.

Since our `Function` action has to be written in double quotes to be properly parsed by Kruiz Control, we use single quotes in the array for each element to avoid syntax errors.

### JavaScript Documentation
[Array - Used to store multiple values in a single variable.](https://www.w3schools.com/js/js_arrays.asp)

```JavaScript
return {monthName: months[date.getMonth()]}
```

All of our JavaScript code inside of the `Function` action is closed, meaning it doesn't affect any code outside of the `Function` action quotes unless we specify it. Our third and final part of JavaScript tells our code to stop running the function and create a new variable named `monthName`. This new `monthName` variable is one that can be accessed outside of the `Function` action by KC elsewhere in our event.

The variable is set to the result of a *getMonth()* Method using our `date` variable we set at the beginning, and then matched to our `months` variable's index to give us the name of the month. That sentence is a bit of a word salad, so let's walk through it step by step:

- `date.getMonth()` uses our `date` variable, grabbing the full date. `getMonth()` filters our result to just the month, labeled 0 through 11. Let's say for example if the month is August, our result would be 7.

- `months[date.getMonth()]` is `months[7]` in our example. After our month has been determined, we use the number given as an index call for our `months` array we named earlier. If our index number is [7], that would be `'AUG'` from our `months` array.

- `monthName: months[date.getMonth()]` in our example is now `monthName: 'AUG'`. This is our final result that will get passed to the OBS Text Source and show up in the overlay.

- `return {monthName: months[date.getMonth()]}` becomes `return {monthName: 'AUG'}` in our example, and creates a parameter in Kruiz Control called `{monthName}` with the value of `'AUG'`. This passing the result of our calculation inside the `Function` action outside allows the it to be used anywhere else in the event we are running. This parameter can be used like any other parameter in KC, so we use at as a parameter for the `OBS Text Source` action to write in the month in our overlay.

### JavaScript Documentation
[getMonth() Method - Returns the month (from 0 to 11) for the specified date, according to local time.](https://www.w3schools.com/jsref/jsref_getmonth.asp)

[return Statement - Stops the execution of a function and returns a value from that function.](https://www.w3schools.com/jsref/jsref_return.asp)

[Back to Contents](#toc)

## End Result
Here's a little demo showing how all of this comes together for [SajochiSama](https://twitch.tv/sajochisama)'s overlay:

@[vimeo](588778678)

Do you have a cool Kruiz Control event that you want to share? [Get in touch!](/contact)

If you love [Kruiz Control](https://github.com/Kruiser8/Kruiz-Control) as much as I do, consider [supporting the project on Patreon](https://www.patreon.com/kruiser8). This invaluable tool that [Kruiser8](https://twitch.tv/kruiser8) has created for Twitch streamers deserves as much support as it can get!
