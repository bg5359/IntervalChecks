General App Info:

This app was built to be able to flexibly run checks and perform actions on them using JSON files to configure the checks. Currently it can only do GET and POST requests to an API and then pop-up a notification or log a message when a condition is met.

The JSON files in the interval-checks folder are the checks that it will run that are configured. When the app gets built, these JSON files get copied to the build folder.





Installation & Running:

Requires Node.js installed (currently running node version 14.15.4)

Set the current directory to the main app folder.

Run `npm install` to install the node_modules.

Run `npm run build` to then build the application.

Run `npm run start` to then start the application.

Note: `npm run clean` will clean out the build, temp and log folders, similar to a Visual Studio clean action.



Vaccine Setup Info:

CVS: https://www.cvs.com/vaccine/intake/store/cvd-schedule?icid=coronavirus-lp-vaccine-pa-statetool
Riteaid: https://www.riteaid.com/pharmacy/covid-qualifier

Go through the questionaires/prompts of those links and have the website ready to go to the point where you can check for availability. For the rite-aid JSON file setups, just copy and change the files so that the IDs of the rite-aids that you want to check are replaced in the files because only the ID needs to change in the couple of spots in the JSON.

For CVS, however, use the Chrome DevTools with the network tab open and run a vaccine availability check. You should see a getIMZStores POST with the information it needs in the request. The request body that it sends to the server is JSON. This has the ZIP code you're searching from and other important information. Update the httpRequestBody of the CVS JSON file with the correct information you found from DevTools.

When running the application have the website open and then when you get notified of availability check the page and try to sign up. There are a lot of false positives (especially with Rite-aid) due to their API setup.




General JSON Info:

The various main fields of the JSON schema is as follows:

name - Just a name, doesn't really change much

enabled - When set to false it will not run

intervalSeconds - How often the check will run in seconds.

intervalFirstDelay - How many seconds it will wait on application start before starting the interval.

methods - An array of check methods that actually defines what it is going to check. The conditions of the methods are important too because the conditions are what it uses to check if it is 'triggered' or not when the interval is ran.

actions - An array of actions that happen when the interval is 'triggered'.

failActions - An array of actions that happen when the interval is not 'triggered'.