Jan 06, 2019<br>
06:48AM

# Fullscreen functionality

Testing the app and its responsiveness still lead to some problems in mobile devices. This is a problem because the very point of this is to be used on mobile devices - especially due to the fact that the host needs to be connected at all times.

The main problem here is that the app is actually broken on mobile devices since a majority of the css is built using vh units. This works just fine on desktops and the sizes are exactly how they should be but on mobile browsers, the url bar actually takes over a part of the screen and pushes the rest of the site down. Because the app isn't scrollable - and it shouldn't be - the app automatically loses functionality. I've come up with a couple solutions:

1. Use the fullscreen API for browsers
2. Turn the app into a PWA for mobile devices
3. Change all the css so that vh can be changed dynamically through JS and can calculate new dimensions when url bar is there
4. Autohide the URL bar

And looking through the solutions, I decided to implement the PWA solution.

## Progressive Web Apps (PWA)

I developed this app with a native look and feel and so this is the direction I would like to go. However, since I'm developing this in HTML/CSS/JS, I might as well just make it into a website and especially since this is a fairly single function application with very limited usage (most likely you'll make four or five plans with this a year at best) and everyone you're making plans with will need to access the app. Understanding this, it becomes obvious that forcing everyone to install an app is stupid and a terrible idea. Since PWA's have a very simple installation process and I could also very easily write a JS script that would do all the installation with the press of a button, it seems like this is the way to go. 

I also don't want to force people install a PWA if they don't want to so I will also have to go back to the CSS to make it compatible with mobile browers but that's a pretty big undertaking I don't want to deal with just yet.

# Small Changes

## Implemented

* Added manifest file for PWA

* Added meta tags for PWA support


## To Implement

* Revamp CSS so that url bar doesn't affect mobile browser functionality