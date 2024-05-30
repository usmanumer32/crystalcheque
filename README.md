# Introduction

An ionic app project developed for android and ios. This guide is to give developers a hint on how to install, build, test and fix problems while working on this project.

## Getting Started

This project was developed in Visual Studio Code, so make sure you have that installed.

Crystal Cheque app is designed to communicate with an [API endpoint](htttps://appliedline.com) and this is found in the _"src/providers/api.provider.ts"_ file. For testing locally, you need to change that endpoint address to that of your local test server e.g. <http://192.168.0.101>, which is address on my computer where I have hosted the CrystalChequeAPI.

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process
2. Software dependencies
3. Latest releases
4. API references

## Build and Test

Ensure you have run "npm install" to get your nodemodules correctly in place.
To see a list of available ios emulators run the following command

```cmd
cordova emulate ios --list
```

### iOS Build Guide

*Kindly note that the icon.png used for the iOS project was altered to meet the iOS guidelines.

1. Ensure you have minimum XCode 7 installed.

2. Copy the project to a Mac computer if you haven't already done so.

3. Open Terminal and cd to your project root directory.

4. Add ios platform to project if it doesn't exist

    ```cmd
    ionic cordova platform add ios
    ```

5. Build the iOS project

    ```cmd
    ionic cordova build ios
    ```

6. Run the iOS app on default emulator or device with or without --prod flag

    ```cmd
    ionic cordova run ios
    ```

    ```cmd
    ionic cordova run ios --device --prod
    ```

    You could specify a target using the --target flag and passing a value from the output of the command "cordova emulate ios --list":

    ```cmd
    ionic cordova emulate ios --target="iPhone-6, 9.2"
    ```

7. If you encounter error (process launch failed: security) when testing on an iOS device, do the following:
 i. Launch Settings on the iOS device
 ii. Tap General
 iii. Tap Device Management
 iv. Tap the developer account email that was used to build the app
 v. Tap Trust on the account email. This will automatically verify the app
 vi. Tap Verify App if automatic verification failed (internet is required)

8. If you encounter a BUILD FAILED error, run the following command

    ```cmd
    ionic cordova plugin rm cordova-plugin-ionic-webview
    ```

## iOS App Store Process

> [Launchkit](https://github.com/launchkit/launchkit/), hosted on github, is used to speed up the process of generating the screenshots for your app review process. Apple requires screenshots for _iPhone 5.5-inch_ and _iPad 12.9-inch_ devices (if app runs on iPad), so Launchkit comes in handy when you don't have any of these real devices.

Visit the [Launchkit github repo](https://github.com/launchkit/launchkit/) for instructions on how to setup your Mac.

> If you are using the president's MacBook for development, all configuration are already in place.
Launchkit directory on the MacBook is _~/LaunchKit_

- iPhone Screenshot 1242 x 2208 pixels for portrait
- iPhone Screenshot 2208 x 1242 pixels for landscape
- iPad Screenshot 2732 x 2048 pixels for landscape
- iPad Screenshot 2048 x 2732 pixels for portrait

### Android Build Guide

> Ensure you have Android Studio installed

1. Open a terminal window and cd to your project root directory.

2. Add android platform to project

    ```cmd
    ionic cordova platform add android
    ```

3. Build the android project

    ```cmd
    ionic cordova build android
    ```

4. Run the android app in emulator or device with or without --prod flag. You may need to enable ADB on your android phone to run directly from terminal

    ```cmd
    ionic cordova run android
    ```

    ```cmd
    ionic cordova run android --device --prod
    ```

### Troubleshooting

> cordova.plugins.diagnostic.requestCameraAuthorization() returns **DENIED** on anroid. To fix this, you need to explicitly state the camera permission in _platforms\android\AndroidManifest.xml_

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## Git

Here are some git helpers:

> git fetch --prune **refresh origin branches**

> git branch [branch_name] -d **delete a local branch**

## Contribute

TODO: Explain how other users and developers can contribute to make your code better.

If you want to learn more about creating good readme files then refer the following [guidelines](https://www.visualstudio.com/en-us/docs/git/create-a-readme). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

## Android Play Store Process (Sign .apk)

### keytool is in [PROGRAM_FILES]/Java/[jdk_highest_version]/bin folder

1. create your digial signed key

    ```cmd
    keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
    ```

2. build a release version of your app

    ```cmd
    ionic cordova build android --prod --release
    ```

3. Sign your release build apk by copying the apk to the same directory as your keystore then execute the cmd

    ```cmd
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
    ```

4. Align your build with zipalign tool for android build tool.

    ```cmd
    C:\Users\denja\AppData\Local\Android\Sdk\build-tools\27.0.3\zipalign -v 4 android-release-unsigned.apk myapp-signed.apk
    ```