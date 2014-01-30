Background
----------

Please see [Instant web applications with Meteor](http://www.ibm.com/developerworks/opensource/library/wa-meteor-webapps/index.html)  for detailed information on working with this code.

While the original code worked well with Meteor 0.6.3.1; the Meteor platform itself is undergoing some rapid changes as it heads towards release 1.0. Some changes broke compatibility with 0.6.3.1.

This repository contains code that will be updated periodically to work with the current version of Meteor.

### UPDATE

If you are already using Docker and want the fastest path to samples nirvana, you can have all three applications running in under
a minute within a single LXC on a host/VPS (with 1GB RAM or more - otherwise you may run of ofmemory) using just these two commands:

    docker pull singli/instantmeteor
    docker run -p=3000:3000 -p=3010:3010 -p=3020:3020 -t -i singli/instantmeteor

Then access the three applications over the Web using port 3000,3010, and 3020 respectively.


### UPDATES

The code is now compatible with Meteor 0.7.0.1.  Download [the zip file here](https://bitbucket.org/singli/instant-web-applications-with-meteor/downloads/code4meteor0_7_0_1.zip). 

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

#### NOTE

When you run the sales and fotoshare projects for the very first time, 
Meteor may immediately reboot with an exception thrown.  The bootstrap code
will create the two users - sing and joe - the first time it is executed.



