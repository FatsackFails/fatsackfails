---
excerpt: >-
   My job at [autocode](https://autocode.com) has a few different
   responsibilities, but one big part is community management.

   A few months ago I was seeing a bottleneck in the feedback and bug report
   channels on Discord.

   Here's how I improved our community feedback system in a single afternoon.
image_card_credit: null
title: How I Improved My Job's Discord Community with Autocode
slug: improve-discord-community-with-autocode
date: 2022-09-10T00:34:37Z
dateMod: Last Modified
post_type: article
category: Autocode
tags:
  - Community Management
  - Discord Server
  - Work
image_card: /images/improve-discord-community-with-autocode-splash.jpg
image_card_alt:
teaser: Streamer Assets to Make Your Alerts Make It Rain!
seo_title: How I Improved My Job's Discord Community with Autocode
seo_desc: Here's how I improved my work's community feedback system on Discord in a single afternoon using Autocode.
---
This blog post is an expanded version of a [tweet thread I recently wrote](https://twitter.com/FatsackFails/status/1568379697645637633). Both the tweet and this post are companion pieces to a [post I wrote for Autocode](https://autocode.com/autocode/threads/how-we-improved-community-feedback-with-autocode-and-discord-solutions-community-manager-85bbc67c/?utm_campaign=communityfeedback&utm_source=solutions&utm_medium=ethanblog). Check 'em out if you want!

I've been working at Autocode for nearly 8 months now (at time of writing). My job title is 'Content Producer', but being a small startup company I wear many hats. The majority of my work surrounds marketing and community management. I spend a lot of time in our community Discord server chatting with folks and answering questions. Our server has almost 40,000 members. That's a lot of chit chat. 😅 A few months back I began to see an issue crop up in our feedback and bug report channels: they were noisy.

![Autocode's Discord feedback channel with lots of messages.](/images/autocode-community-feedback-old-message-method.jpg)

The biggest problems I identified were

- lots of messages with no context
- no way to track conversations or give updates
- people felt like they weren't being heard

I had an idea of how this could be improved and ran it by my team. I took an afternoon and built a bot using Autocode's Discord API integration that would track reports and put them in their own channel. After 3 hours of building and testing, we could now track any message on the server using Discord's Context Menu. Just right click, or hold tap and BAM. Tracked ✨

![Autocode's Discord showing the context menu being used to track feedback of a message.](/images/autocode-community-feedback.context-menu.jpg)

The way it works is pretty straight forward. The bot copypastas the original message and puts it in its own thread. This lets the conversation remain focused and on topic and it means I can come back to it later without having to scroll up past a bunch of unrelated messages. Best part? The whole thing is just over 100 lines of code 😄 Most of it was filled in
automatically by Autocode as I typed. EZ PZ

![Tracked reports channel showing two user reports as Discord message threads.](/images/autocode-community-feedback-tracked-reports-channel.jpg)

This alone made it worth the afternoon spent setting it up, but it keeps getting better. Using embed button interactions, staff can lock down a thread and update the title with one click so everyone can see at a glance when feedback or a report has been RESOLVED 🙌 This is really cool because it allows for small updates and changes to be shared in one place quickly and easily.

![user report thread in Discord marked as resolved](/images/autocode-community-feedback-resolved-thread.jpg)

The final touch for my feedback bot was to add in a way to acknowledge users when feedback is tracked. it's important to make sure folks know staff saw their report 👀 The bot replies to the original message when tracked, and tags them in the newly created thread.

This gives 2 opportunities for a user to see that we've acknowledged their feedback. It also shows the rest of the server as well meaning no dupe reports FTW

![reply message in Autocode's Discord feedback channel](/images/autocode-community-feedback-message-reply.jpg)

The cherry on top of all of it was we were able to take the work I did and create some Autocode content around it! Scott took my bot code and wrote a [technical guide](https://autocode.com/autocode/threads/how-to-build-a-super-pin-system-in-discord-tutorial-ed49ffff/?utm_campaign=communityfeedback&utm_source=solutions&utm_medium=ethanblog) on how to build it yourself. He also built out an [example app](https://autocode.com/threesided/apps/super-pins/?utm_campaign=communityfeedback&utm_source=solutions&utm_medium=ethanblog) that you can just add to your project and skip the coding.

Nestor and I worked together on the [YouTube version of the guide](https://www.youtube.com/watch?v=ShXIxfnzIco), walking you through setting up the example app and how it works.

All in all it took about 3 hours or so of building and testing before it was live on the Autocode community server. It's definitely helped me keep track of feedback and reports better, as well as make sure our community feels like they're being heard when they reach out 👍

Thanks for reading! Feel free to share this blog or the [original tweet thread](https://twitter.com/FatsackFails/status/1568379697645637633) or signal boost my work as you see fit 😎

{% cta "I use Autocode to improve my Discord community", "You can too.", "Sign Up", "https://fatsackfails.com/autocode/?utm_campaign=communityfeedback&utm_source=solutions&utm_medium=ethanblog" %}
