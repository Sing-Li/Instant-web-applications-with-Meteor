meteor create sales_nologin
meteor create sales
meteor create fotoshare
cd sales_nologin
rm *.html *.js *.css
tar zxvf ../sales_nologin.tgz
cd ..
cd sales
meteor remove insecure autopublish
meteor add accounts-password accounts-ui
rm *.html *.js *.css
tar zxvf ../sales.tgz
cd ..
cd fotoshare
meteor remove insecure autopublish
meteor add accounts-password accounts-ui
rm *.html *.js *.css
tar zxvf ../fotoshare.tgz
cd ..

