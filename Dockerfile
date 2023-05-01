FROM node:16-bullseye

# Set environment variables
ENV ANDROID_HOME /opt/android-sdk
ENV PATH ${PATH}:${ANDROID_HOME}/emulator
ENV PATH ${PATH}:${ANDROID_HOME}/cmdline-tools/latest/bin
ENV PATH ${PATH}:${ANDROID_HOME}/platform-tools

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y curl openjdk-11-jre-headless unzip && \
    apt-get install -y libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libnss3 libxcursor1 libpulse-dev libxshmfence-dev xauth xvfb x11vnc fluxbox wmctrl libdbus-glib-1-2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Prepare folder for cmdline-tools
RUN mkdir -p /opt/android-sdk/cmdline-tools

# Download and extract the Android SDK
RUN curl -s https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -o /tmp/tools.zip && \
    unzip -q /tmp/tools.zip -d /opt/android-sdk/cmdline-tools && \
    rm /tmp/tools.zip && \
    mv /opt/android-sdk/cmdline-tools/cmdline-tools /opt/android-sdk/cmdline-tools/latest

# Install SDK packages
RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "emulator" "build-tools;30.0.3" "platforms;android-30" "system-images;android-30;google_apis;x86_64"

# Create and start an AVD (emulator) in the background
RUN echo "no" | avdmanager create avd --force --name "Pixel_5_API_30" --device "pixel_5" --package "system-images;android-30;google_apis;x86_64"

# Set up Appium
RUN npm i -g appium@next && \
    appium driver install uiautomator2

# Set the working directory to /app
WORKDIR /app

# Copy the application and test code to the container
COPY . .

# Run the tests
CMD emulator -avd Pixel_5_API_30 -no-window -no-audio -no-boot-anim -netdelay none -netspeed full & \
    sleep 30 && \
    yarn test:local
