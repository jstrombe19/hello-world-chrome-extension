# hello-world-chrome-extension

This is a simple approach to the first Chrome extension built in the following tutorial series on YouTube:
https://www.youtube.com/watch?v=7UuM9EXczl0&list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY&index=10

Minor modifications have been employed, as the tutorial series utilizes JQuery and I am using vanilla JavaScript
to perform the same operations. Otherwise, this is identical in its execution and application. The following is an attempt on my part so reinforce and solidify the concepts presented by the tutorial thus far:

All Chrome extensions are essentially self-contained applications that run within Chrome. They can run within the same browser window as that in which they are opened, manipulate windows and/or tabs to run in new windows and/or tabs, or run in the background without any indication that they are actually running.

The basic structure of a Chrome extension consists of five file types:

manifest.json:: MUST BE NAMED AS SUCH - this is the core of the extension, and dictates its behavior within Chrome

\*.html :: the architectural structure for the extension, which also dictates the structure the extension will take just as it does in regular websites

\*.css :: the styling guide for the extension (again, the same as in a website or web app)

\*.js :: the source of interactivity and dynamicism in the extension (once again, as in a website or app) - this is kept within a separate file and run as a script with an independent source in the html file as it is considered bad practice to simply embed script tags with live JavaScript all in the html file; however, the same level of interactivity and dynamicism supported in an independent web application or website that incorporates JavaScript is supported by linking the file as a script with an independent source within the extension

\*.(png, jpeg, pdf, tiff, etc. [verify those file types but if they are supported, then they belong here]) :: any image files associated with the extension - typically they will simply be icons, at 128x128, 48x48, and 16x16 pixel resolutions for displaying within the Chrome extension library, pinning to the extension taskbar within the browser itself, and lastly (48x48) for something as of yet not encountered, though it could be as simple as screen resolution based on device

Upon defining the behavior and structure of the extension, it can be pushed to Chrome at chrome://extensions, where it is also managed throughout its development lifecycle. Extensions can be pushed up, suspended, updated, or decommissioned from the extension home page.

If you are watching this tutorial, follow along and commit at the same points before moving on to get a feel for how extensions function.
