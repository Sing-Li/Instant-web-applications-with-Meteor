To try out this sample code, you need to first make sure that
Meteor is installed and running on your system.

This sample code has been tested against Meteor 0.6.3.1.

Please note that Meteor 0.6.3.1 officially supports only MacOSX and Linux.

See official Meteor website for support of Windows.

Once you are sure that Meteor is running fine, perform the following:

1 create a new directory for the code
2 copy the content of the download to the new directory
3 chmod +x instcode.sh
    (you may wish to perform the steps inside the instcode.sh script manually)
4 ./instcode.sh

-------------------------------------------------------------------------------
The instcode.sh script performs the following:

1.	use meteor to create three new projects
2.	remove the default contents of the projects
3.	add and remove the security and login packages required for each project
4.	replace the contents of the projects with the downloaded code

-------------------------------------------------------------------------------

NOTE: When you run the sales and fotoshare projects for the very first time, 
Meteor may immediately reboot with an exception thrown.  The bootstrap code
will create the two users - sing and joe - the first time it is executed.




