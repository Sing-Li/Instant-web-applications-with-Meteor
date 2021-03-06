Background
----------

Meteor simplifies the development of single page, real-time, streaming data update applications by moving the entire 
client and server stack to JavaScript.  Meteor offers an elegant consistent high level "reactive" programming 
model throughout the stack. 

See how you can build a web accessible, real-time updated, security access controlled sales chart web application in minutes.

Please see [Instant web applications with Meteor](http://www.ibm.com/developerworks/opensource/library/wa-meteor-webapps/index.html)  for detailed information on working with this code.

![Real time udpated sales chart with full user access control](http://www.ibm.com/developerworks/opensource/library/wa-meteor-webapps/figure3.jpg)

[**Try this app now on IBM BlueMix**](http://meteorsales1.mybluemix.net)

Open up multiple browser windows running the app; update sales in one of the windows, and observe the pie charts update across all.

[**Try an access controlled version of the app now on IBM BlueMix**](http://meteorsales2.mybluemix.net)

Mobile Photo Sharing Example on Meteor
--------------------------------------

Take Meteor mobile.  Build a photo sharing app for your mobile phone using Meteor.

![dW Foto Share - a mobile photo sharing service](http://www.ibm.com/developerworks/opensource/library/wa-meteor-webapps/figure7.jpg)

[**Try this mobile web app now on your phone - hosted on IBM's Codename BlueMix**](http://meteorfotoshare.mybluemix.net)

Please see [Instant web applications with Meteor](http://www.ibm.com/developerworks/opensource/library/wa-meteor-webapps/index.html)  for detailed information on working with this code.


This repository contains code that will be updated periodically to work with the most current version of Meteor.

### NEW UDPATE - To Production Meteor 1.1.0.2 !

The stable version of Meteor has come a long way since 0.6.3.1 !
Code revamped to take advantage of per-template subscription, working Blaze reactive updates, plus other features and bug fixes.
Tested with the latest available 1.1.0.2, and should be compatible with all 1.x releases.
Download [the zip file here](https://bitbucket.org/singli/instant-web-applications-with-meteor/downloads/code4meteor1_1_0_2.zip).

### NEW UPDATE - Code now Meteor 1.0 Ready! 

Meteor is now finally production ready at release 1.0!
The code has been fully updated and tested with the official 1.0 release of Meteor. 
Download [the zip file here](https://bitbucket.org/singli/instant-web-applications-with-meteor/downloads/code4meteor1_0.zip). 

### NEW UPDATE for IBM BlueMix users

This code works with Meteor 1.0 release deployable on production Bluemix.
See my article on developerworks on how to work with Meteor applications on Bluemix.  [Build a reactive sales chart app with Meteor](http://www.ibm.com/developerworks/library/wa-bluemix-meteor-app/index.html)

### NEW UPDATE for Docker 0.8+ users

If you are already using Docker and want the fastest path to samples nirvana, you can have all three applications running in under
a minute within a single LXC on a host/VPS (with 1GB RAM or more - otherwise you may run of of memory) using just these two commands:



    docker pull singli/instantmeteor
    docker run -p=3000:3000 -p=3010:3010 -p=3020:3020 -t -i singli/instantmeteor

Then access the three applications over the Web using port 3000, 3010, and 3020 respectively.



### Original Readme.txt

To try out this sample code, you need to first make sure that
Meteor is installed and running on your system.

This sample code has been tested against Meteor 0.6.3.1.

Please note that Meteor 0.6.3.1 officially supports only MacOSX and Linux.

See official Meteor website for support of Windows.

Once you are sure that Meteor is running fine, perform the following:

1. create a new directory for the code
2. copy the content of the download to the new directory
3. chmod +x instcode.sh
    (you may wish to perform the steps inside the instcode.sh script manually)
4. ./instcode.sh

### Included instcode.sh

The instcode.sh script performs the following:

1.	use meteor to create three new projects
2.	remove the default contents of the projects
3.	add and remove the security and login packages required for each project
4.	replace the contents of the projects with the downloaded code




