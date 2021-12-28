# Chrome Extension Wrapper for Deep Insight

This is an attempt to create a chrome extension with an embedded iframe to allow for easier updates and make it easier for the extension to be available on other browsers.
It was created using yeoman generator which has the problem that it generates a v2 manifest which is going to get deprecated in the future.
I have migrated this application to work with the v3 manifest.

To run the application-

`gulp watch` This will run the application with the iframe set to localhost:3000 as defined inside the `.env` file.

`gulp watch --env staging` This will run the application with the source set to whatever url is defined inside staging.

Same for building-

`gulp build` will create the corresponding build files

`gulp build --env staging` This will build the application pointing to staging