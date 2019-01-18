Jan 07, 2019<br>
05:53PM


# File system updates

## Separating client and host

I'm currently trying to find the best way to separate between client and host code. I'm thinking of not including all the host/client scripts together but not exactly sure the best way to it. Obviously, this is perfect for webpack but I don't really want to rebuild the entire foundation of the app just to save 15kb file size so I'm going to just combine the two files for now.

## Working in calendar.js file

I've been lazily putting alot of hotfixes directly into the calendar file. When you look at it from the outside, there's nothing wrong with that since all the code dealing with the calendar is specifially in the calendar file. However, I orignally had plans to make the calendar file a separate library so that I could incorporate into whatever files I want but I guess that's not happening now. If I go back to change it up, I already have some changes in mind. Namely, using webpack as well as turning it into a more object oriented structure to make it simpler to read and debug.

# Looking at the entire pseudocode path

User enters
Parse URL 
if host:
    Get plan info

if client:
    Get room code info
    make api call for plan info

create calendar with info

- rest of program