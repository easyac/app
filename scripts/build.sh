ROOT=`pwd`

# Build app
cordova build --release android

# Go to Folder
cd ./platforms/android/build/outputs/apk/

# Remove previous version
rm easyac.apk

# something I don't know, but needs the password
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $ROOT/scripts/my-release-key.keystore android-release-unsigned.apk alias_name

# Make the App
~/Applications/android-sdk/build-tools/23.0.3/zipalign -v 4 android-release-unsigned.apk easyac.apk

Thunar ./
