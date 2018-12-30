Dec 29, 2018<br>
06:41PM

# Restarting the project

I started creating readme's for my development process way after I started this project. After some hiatus, I'm restarting this project after losing interest since my last couple updates were during the fall hackathon season and I couldn't devote all my time to this. Now it's break so I'm ready to get started again. Right off the bat, I had some quick design changes that really helped make this app look presentable and I haven't been working on the app functionality but I've been doing a ton of work on the User Experience.

## Maximizing Materialize.css

For the longest time, I've been using Materialize.css as a library rather than a framework. For example, I've been using it mainly to help design buttons and stuff without having to do much work of my own (while incorporating the entire 300 or so kb without using a sass compiler which I know how to do now) but I recently looked over the entire documentation and I've implemented a ton of interesting features such as the native datepicker and timepicker so now the file size is a lot smaller. I'm also removing any assets that aren't either in svg or a bunch of css animations so the file size is relatively small compared to what it is before.

With that being said, I designed every part of the app with user experience in mind. Right now, the entire site works smoothly with my computer and the only testing I have yet to do is use it on an older device. The biggest problem here is using VW and VH units because on safari and some other mobile browsers, the browser pushes the url bar into the screen and thus making the entire site scrollable which is not what I want. Now that I'm thinking about it, I might just force the full screen options on mobile users. Still not sure how I'm going to work around that.

## Current direction

Right now, I want to wrap up the entire starting screen so I can start getting to work on the meat of the whole app. I did some testing before I stopped working on this project dealing with the whole p2p connection thing and if I rememeber correctly, I managed to get the thing to work but it's a pretty convoluted process since I'm doing a bunch of hacky shit since I didn't think I knew enough about networks to use an RTC implementation and I ended up using httpsrelays instead. Whatever the case, once I'm done with the landing page, I'll figure it out.