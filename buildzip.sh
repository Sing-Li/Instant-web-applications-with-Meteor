. clean.sh
COPYFILE_DISABLE=1 tar czf sales_nologin.tgz  --exclude='**/.meteor' sales_nologin 
COPYFILE_DISABLE=1 tar czf sales.tgz  --exclude='**/.meteor' sales
COPYFILE_DISABLE=1 tar czf fotoshare.tgz  --exclude='**/.meteor' fotoshare
zip code4meteor`cat meteor_version_required.txt`.zip ./*.xlsx  ./*.tgz ./*.txt ./instcode.sh
