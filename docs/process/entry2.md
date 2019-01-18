Jan 3, 2019<br>
07:21AM

# Most recent progress

I finished the initial loading screen completely including all visual updates as well as functionality changes. The next step is to work on the actual app functionality. The current bug/feature that I'm working on is trying to display the selectable dates. There is a really strange bug where

```javascript
let toGenerate = new Date(Date.UTC(year, month, i));
console.log(toGenerate);
console.log(toGenerate.toDateString());
```
actually display different dates.

I tried looking into this bug I have no idea how it works internally. Regardless, this is a really strange bug and I'm going to work with only one function that will return the same date everytime. I think it has to do with the fact that way I create a Date object (using the Date.UTC function) somehow processes the date differently when using different functions. Also, I'm confident that these functions were not initially developed at the same time or by the same people which is why the class functions are so inconsistent. Regardless, I'm going to stick to the one that works properly and work from there.

# Next steps

After fixing this super weird bug, I'm going to work more into user experience first. I want to finish up the css and user interaction with selecting the dates. I have an idea of how I want the app to look when it's functioning propertly and I want to completely finish a section of the program before I move on.