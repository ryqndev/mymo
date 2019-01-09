Jan 08, 2018<br>
01:56PM


# Changing it up

I came up with a new way of working through the differences that I think will have a positive impact on the sites functionality. Originally, the host would plan an important role in deciding which plans to made and whatnot but I'm considering a purely serverless system in which we won't need a host. If I have a mcast server that has a tally of all the schedules, the burden of calculating schedules would be on every client. This new way solves a lot of the problems originally associated with the app so I'm going to try to get this to work

# The roadmap

When a host creates a schedule, the host will generate an id for the mcast and post it first

# How to

So I kinda scrap most of the code I have in my testComm folder. Since everyone will be a client/host mix, 