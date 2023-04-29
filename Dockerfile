FROM node:16-alpine

# Install necessary dependencies
RUN apk add --no-cache curl unzip git openjdk11-jre-headless

# Prepare folder for cmdline-tools
RUN mkdir -p /opt/android-sdk/cmdline-tools

# Download and extract the Android SDK
RUN curl -s https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -o /tmp/tools.zip && \
    unzip -q /tmp/tools.zip -d /opt/android-sdk/cmdline-tools && \
    rm /tmp/tools.zip && \
    mv /opt/android-sdk/cmdline-tools/cmdline-tools /opt/android-sdk/cmdline-tools/latest

# Set environment variables
ENV ANDROID_HOME /opt/android-sdk
ENV PATH ${PATH}:${ANDROID_HOME}/cmdline-tools/latest/bin
ENV PATH ${PATH}:${ANDROID_HOME}/emulator
ENV PATH ${PATH}:${ANDROID_HOME}/platform-tools

# Install SDK packages
RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "emulator" "platforms;android-30" "system-images;android-30;google_apis;x86_64"

# Create and start an AVD (emulator) in the background
RUN echo no | avdmanager create avd --force --name test --device "pixel_5" --package "system-images;android-30;google_apis;x86_64" && \
    emulator -avd test -no-window -no-audio &

# Set up Appium
RUN npm i -g appium@next && \
    appium driver install uiautomator2

# Set the working directory to /app
WORKDIR /app

# Copy the application and test code to the container
COPY . .

# Run the tests
CMD yarn install && yarn test:local
