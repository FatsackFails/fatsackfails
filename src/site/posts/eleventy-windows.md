---
title: Setting Up Windows 10 to Learn Eleventy
slug: eleventy-windows
date: 2020-07-22T14:40:35.381Z
dateMod: Last Modified
post_type: article
category: Web Dev
tags:
  - Eleventy
image_card: /images/blog-eleventy-windows.png
excerpt: >
  I set up my Windows 10 PC to use WSL 2, Hyper terminal, and VS Code so I could
  take an online course to learn Eleventy. Here's how you can do it that too.
teaser: I set up my Windows 10 PC to use WSL 2, Hyper terminal, and VS Code.
seo_title: Setting Up Windows 10 to Learn Eleventy
seo_desc: I set up my Windows 10 PC to use WSL 2, Hyper terminal, and VS Code
  for front end web development.
---
I recently signed up for the online course [Learn Eleventy From Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) by Andy Bell. It's been a great source of knowledge not only for how to use the static site generator, but also some super advanced design techniques and web developer best practices. Here's how I got my Windows 10 PC set up to be able to go through the course, and how you can do something similar for front end web development.

## Enabling WSL 2 and Installing Linux

I'm on PC, so to avoid issues with the course work it's suggested I look into setting up Windows Subsystem Linux (WSL 2 to be specific). This will let me use Linux in my Windows operating system and therefore let me go through the course without a hitch. The future is now, folks.

Getting WSL 2 set up took way longer than it should have due to my Windows not wanting to update properly. WSL 2 requires Windows 10 to be version 2004, Build 19041 or higher. You can check your version by pressing **Windows key + R** to open the Run program, typing in `winver.exe`, and selecting **OK**. If you need to update, I suggest downloading and using the [Windows Update Assistant](https://www.microsoft.com/en-us/software-download/windows10). This resolved my issues of the update not sticking.

Once Windows is updated to the correct version, we can [enable WSL 2 as described by Microsoft's help docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Make sure you open PowerShell as an Admin or the commands won't go through.

#### Enable Windows Subsystem for Linux

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

#### Enable the 'Virtual Machine Platform' component

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

#### Set WSL 2 as your default version

```
wsl --set-default-version 2
```

You'll probably see a message after running that command: `WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel.` Simply [follow the link](https://aka.ms/wsl2kernel), install the MSI and after it's finished run the command again.

Once that's all done, WSL 2 is enabled on your PC! Now you can install Linux. Go to the Microsoft Store and head to the [WSL section](https://aka.ms/wslstore) and get whichever flavor of Linux you want to use. I picked Ubuntu as that's the one I'm most familiar with. Launch it once it's installed, and then you can [set up the user name and password](https://docs.microsoft.com/en-us/windows/wsl/user-support).

If there's any issues with launching Linux at this point, make sure your CPU has Virtualization set to Enabled by opening the Task Manager and looking at the CPU in the Performance tab. If it's disabled, you'll have to enable it inside the BIOS. The BIOS can look different depending on your motherboard, processor type, chipset and OEM, so you might have to do a little research. For my set up I had to enable Intel Virtualization Technology and Intel VT-D.

## Setting Up Hyper and VS Code

With WSL 2 enabled and Linux installed, we can now get our tools installed and configured properly to use our unique set up. Andy suggests Microsoft Visual Studio Code and Hyper as the code editor and terminal emulator to use for the online course. We'll be able to set them up to integrate with WSL 2, which is just peachy. Download and install [Hyper](https://hyper.is/) and [VS Code](https://code.visualstudio.com/).

Open Hyper and navigate to Edit >> Preferences. This will open the hyper.js settings file in Notepad so you can make changes. Find the line that reads `shell: '',` and change it to `shell: 'C:\\Windows\\System32\\bash.exe',` You can now save and close the file. This change makes it so when you open Hyper it will use your WSL 2 instance of Linux instead of your PC's command prompt.

Once you've swapped to use your Linux command line in Hyper, type in `code .` and press enter. Hyper will then open VS Code with the path set to your virtual Linux path. VS Code should then display a notification asking you if you want to install the Remote - WSL extension. This extension makes it easier for WSL 2 and VS Code to play nice, so definitely do that. After that you're all set and ready to start!

## Final Touches

From here you'll want to download all the different packages you'll need for whatever projects you're working on. Any dependencies that you may have installed on your PC will need to be installed again in your virtual Linux before they can be used.

For my online course I first needed to install Node.js with `npm init -y`, but I had to install curl and nvm before I could run that command.

`sudo apt install curl`

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

It took me some time getting WSL 2, Linux, Hyper, and VS Code up and running, but once I did I was able to jump into the course work and start learning! I highly recommend checking out [Learn Eleventy From Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) if you want an in depth look at Eleventy, great design practices, and a lot of practical knowledge of creating accessible web content. If you want to get the basics of what Eleventy can do, Tatiana Mac has a great blog series: [Beginner's Guide to Eleventy](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/). I hope my words here help you in getting Windows 10 ready for front end web development! Let me know if you find something that would make this setup more useful!