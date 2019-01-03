Jan 03, 2018<br>
10:10AM

# Figuring out built in Date class

I figured out the source of my problems and it came from using Date.UTC and not using the UTC method interchangeably. If I remember correctly, it was because one of them works off of a 0 index system and the other doesn't but I could be wrong. At the moment, it's not worth looking at that again and I'm gonna focus on the app's main functionality now that I've solved the calendar drawing problem (turns out using .getTime() function makes everything easier to compare).

# Small Changes

I'm thinking of adding this section to all entries from now on as it does detail alot of smaller changes that aren't noted in the big patches.

## Implemented

* Changed the starting month to the month of the start date instead of today's month since if someone is planning a schedule a month from now, it doesn't make sense to make them scroll through until they find the next month.

## To Implement

* Add the year to headline so user doesn't get lost

# Next Steps

The app's main functions has multiple parts to it. 

1. Create calendar interface
2. Take in user input to update their own schedule
3. Convert user data into a format that is parseable
4. If Host
    1. takes in input
5. If Client
    2. sends data to host

The steps past 4 are a bit more complicated but the functionality is mostly implemented in the dataCommunication folder which I believe is mostly tested as well.

The calendar interface is done and so the next thing to work on is recording all the data and making user input work right.