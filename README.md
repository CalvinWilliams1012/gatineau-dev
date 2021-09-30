
## Gatineau Dev
```diff
- Abandoned: 
- I implemented a back end API first that was able to request the assessment, if it received a captcha it would send it to the requestor, then postback with the captcha answer + address and return with the assessment data.
- I then implemented this site, and one day found my back end wasn't working due to a change on the cities assessment search which made submit more complicated including a hidden field that seems to need a browser to generate the correct value and an extra request which I have not investigated...
- I could use puppeteer, try to figure out the hidden field or something like that but as a hobby project I didn't want to spend the time.
- The site utilized google places autocomplete and was ready to send the data to the api, it is unfortunate that it will never truly work! This was private but I am now making it public as an example project.
```

The project was related to the City of Gatineau, originally created this personal project as I noticed that the cities assessment search was outdated, not only with styling, but also the address entry was multiple fields rather than utilizing a more modern location autocomplete search service. It was also only available in French.

The assessment is also accessible through the main gatineau website if you have registered for an account, however even then, when viewed it will display the data on this outdated website.

While the current assessment functionality is "good enough" and most likely the developers have better things to focus on as it works, I decided to try and improve it for fun.

![screenshot of this website, search bar with fake city of gatineau logo, language selector and notice](https://github.com/CalvinWilliams1012/gatineau-dev/blob/main/GatineauDev.JPG)

