# UI Microservice Template

Microservice template description.

#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the AngularJS code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the AngularJS framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
material-start changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a web server.*

### Automated Development

There's a few goodies in here to help speed up and optimize your development.

* `grunt` - The default grunt task will concat and minify all css and js files for this microservice.  Make sure the update the grunt configuration when you add files to the project.

### Testing

Use npm to install Protractor globally with:

```
npm install -g protractor
```

This will install two command line tools, `protractor` and `webdriver-manager`. Try running `protractor --version` to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```
webdriver-manager update
```

Now start up a server with:

```
webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at `http://localhost:4444/wd/hub`.




