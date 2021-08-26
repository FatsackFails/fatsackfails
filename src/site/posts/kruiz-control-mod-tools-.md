---
title: Kruiz Control Mod Tools
slug: kruiz-control-mod-tools
date: 2021-08-25T04:49:49Z
dateMod: Last Modified
post_type: article
category: Kruiz Control
tags:
  - Streamer Resources
  - Moderation
image_card: /images/kruiz-control-mod-tools.png
image_card_alt: Kruiz Control logo with a Twitch Mod Badge.
excerpt: >-
  Here are some Twitch chat moderation tools and filters powered by [Kruiz Control](https://github.com/Kruiser8/Kruiz-Control) to protect your channel. Thank you [Kruiser8](https://twitter.com/kruiser8) for looking over my ideas for these KC events, writing and improving on them, as well as letting me share these with others.
teaser: Protect your stream chat with Kruiz Control!
seo_title: Kruiz Control Mod Tools
seo_desc: Here are some Twitch chat moderation tools and filters powered by Kruiz Control to protect your channel.
---
<a name="toc" class="mb-0"></a>

[[toc]]

## Hate Raids on Twitch

Follow botting, chat spam, and hate raids are unfortunately nothing new on Twitch. However, there's been a recent surge of hate raids, doxxing, and other targeted attacks against creators on Twitch that has brought more attention to its happenings on the platform and elsewhere on the internet. Many BIPOC, LGBTQ+, and other marginalized creators are being specifically targeted, attacked, and harassed by these hate raids. It's gotten so bad that even [mainstream news has started to talk about it](https://www.washingtonpost.com/video-games/2021/08/25/twitch-hate-raids-streamers-discord-cybersecurity/).

Twitch itself has mentioned that it is working on better moderation tools, and that they're coming soon, but that means until that happens we as creators are pretty much on our own when it comes to protecting our channels and protecting our communities. If you or someone you know is worried about hate raids and need info on how to protect your Twitch channel, check out [Hate Raid Response](https://hateraidresponse.carrd.co/). It's a resource roundup that has tons of good advice, tools, and tips for what to do before, during, and after a hate raid occurs.

[![Hate raid response. Hate raids are over. Twitch users providing preventative resources, reactive measures, temporary mods, and general support. Before, during, and after hate raids occur. Together.](/images/hate-raid-response-splash.png)](https://hateraidresponse.carrd.co/)

The Hate Raid Response community is a hard working group of creators, developers, moderators and more all pooling their knowledge and experience dealing with hate raids and helping others do the same. I want to contribute by sharing these Kruiz Control powered chat commands and filters that can help protect your Twitch channel.

[Back to Contents](#toc)

## Kruiz Control

If you're not familiar with Kruiz Control at all, it's an automation tool for Twitch that allows you to create events that can be triggered by chat, by alerts, by channel points, by OBS, and more. It's powerful enough to be a full fledged Twitch bot by itself, but can also be used to boost the customization and power of other bots you're using. KC runs locally, which means everything needed to make it work runs on your computer, so KC is only on when your OBS is open.

There's a [quick setup guide](https://github.com/Kruiser8/Kruiz-Control#setup-guide) and a full [settings walkthrough](https://github.com/Kruiser8/Kruiz-Control/blob/master/settings/Settings.md#kruiz-control-settings) for getting Kruiz Control running on your channel. There's also a friendly [support Discord](https://discord.gg/wU3ZK3Q) if you have any questions. I hang out there a lot answering questions and [sharing fun things you can do with KC](https://fatsackfails.com/category/kruiz-control/).

All of these Kruiz Control events can be placed in the `triggers.txt` file so that they fire as soon as needed and won't queue up.

### Panic Button

This KC event is a simple command that can be used by you and your mods to quickly shutdown chat in the case of a hate raid. It'll make a wall of emotes to push out anything in chat you don't want to see right away, purge and clear chat out, activate Follower mode so only followers of a certain age can chat, and activate Slow mode so messages can only be sent out every few seconds and can't be spammed further. There's also a command to revert back to regular chat mode if and when things calm down.

```bash
OnCommand bm 0 !lock
# time is in minutes 1440 = 1 day
Chat Send "/followers 1440"
Chat Send "/slow 5"
Chat Send "/clear"
Loop 1 10
Chat Send "TransgenderPride PansexualPride NonbinaryPride LesbianPride IntersexPride GenderFluidPride GayPride BisexualPride AsexualPride TwitchUnity TransgenderPride PansexualPride NonbinaryPride LesbianPride IntersexPride GenderFluidPride GayPride BisexualPride AsexualPride TwitchUnity TransgenderPride PansexualPride NonbinaryPride LesbianPride IntersexPride GenderFluidPride GayPride BisexualPride AsexualPride TwitchUnity TransgenderPride PansexualPride NonbinaryPride LesbianPride IntersexPride"

OnCommand bm 0 !unlock
Chat Send "/followersoff"
Chat Send "/slowoff"
```

This lockdown command can be further modified to also [turn off browser sources in OBS](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#obs-scenesource) so names don't display in alerts, chat doesn't appear on stream, and any other number of things that you might not want up on stream during a hate raid. You can also swap out `/followers 1440` for `/subscribers 1440` to filter down even further and only allow subs to chat. (Note that mods and VIPs are not affected by any of these chat restrictions and can still chat freely)

[Back to Contents](#toc)

### Account Age Filter

The next KC event fires the first time anyone speaks and times out the user if their account was created within the last 48 hours. You can change how old the account needs to be by changing `48` to any other age in hours. The user is timed out until their account is older than age restriction set.

```bash
# KC event provided by Kruiser8
OnSpeak *
API GET "https://decapi.me/twitch/creation/{user}?format=c&tz=UTC"
Function "const userDate = Date.parse([api_data]); const diff = (new Date().getTime() - userDate) / 3600000; return { hourDiff: Math.abs(Math.round(diff)) };"
if hourDiff < 48
Function "return { timeout: (48 - {hourDiff}) * 3600 };"
Chat Send "/timeout {user} {timeout} Account Age Restriction"
```

If you want to instead ban any account that is under the threshold you set, you can delete the `Function "return { timeout: (48 - {hourDiff}) * 3600 };"` line and change the `Chat Send` action to `Chat Send "/ban {user} Account Age Restriction"`

[Back to Contents](#toc)

### Phone Number Filter

This final Kruiz Control event is a filter that will purge messages sent in chat that may contain phone numbers. By default this will NOT purge messages sent by the broadcaster, mods, founders, subs, or VIPs.

```bash
# KC event provided by Kruiser8
OnEveryChatMessage
Function "const data = [data]; return { user: [user].toLowerCase(), ...data.flags };"
# Possible values to check: broadcaster, mod, founder, subscriber, vip
if {broadcaster} == false and {mod} == false and {founder} == false and {subscriber} == false and {vip} = false
Function "const phoneRe = new RegExp(/(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/, 'gi'); const result = [message].match(phoneRe); return { continue: !!result }"
Chat Send "/timeout {user} 1 Phone Number Protection"
```

You could just as easily change it to ban users instead, or add a message to warn users to not put phone numbers in chat. The RegEx should catch most ways of writing a phone number, but there may be ways around the filter.

[Back to Contents](#toc)

## Final Thoughts

At the end of the day, these moderation tools and filters are not enough to completely protect Twitch streamers, as Kruiz Control can only do so much given the limitations Twitch has with its own moderation tools. This is true for all the third party tools, chat bots, and services that have been absolutely slammed as they work as hard as possible cobbling together solutions that can help curb the vitriol and hate that has targeted marginalized creators on Twitch, and in particular BIPOC and LGBTQ+ creators.

If we want Twitch to do something about this, we need to keep making noise about it and keep bringing it up. One thing you can do right now is vote for better moderation tools Twitch on their UserVoice feature requests page. There's a curated list called [Twitch #NotFinishedYet](https://twitchnotfinishedyet.carrd.co/) that has many ideas of how Twitch can start making the platform safer for all creators. I highly suggest going there, voting on the features you want implemented, and sharing with others.

Thank you again to [Kruiser8](https://twitch.tv/kruiser8) for taking the time looking over my KC events and improving on them so that they can protect everyone's chat better. [Kruiz Control](https://github.com/Kruiser8/Kruiz-Control) is a fantastic tool that allows for so many cool, useful, and powerful options in your Twitch channel, and I recommend it to any and every creator wanting to take their stream to the next level.

Are you a BIPOC, LGBTQ+, and any other marginalized creator who's worried about hate raids, but doesn't know how to get Kruiz Control setup or any of the other tools? I'm here to help! [Contact me](/contact) and I will help you setup KC or any other mod tools for free.
