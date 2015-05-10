. clean.sh
cd sales_nologin 
COPYFILE_DISABLE=1 tar czf ../sales_nologin.tgz  --exclude='./.meteor' . 
cd ../sales
COPYFILE_DISABLE=1 tar czf ../sales.tgz  --exclude='./.meteor' .
cd ../fotoshare
COPYFILE_DISABLE=1 tar czf ../fotoshare.tgz  --exclude='./.meteor' .
cd ..
zip code4meteor`cat meteor_version_required.txt`.zip ./*.xlsx  ./*.tgz ./*.txt ./instcode.sh licenses/*  ./license.txt
