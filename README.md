# Team Discord Presentation
This repo contains the source files for the Team Discord presentation, which is a simple Discord bot.

## How to Copy the Code
To try out the code yourself, you can download the ZIP file of the code and save it to your drive.

## Installation
To run this code, you'll need:

### A Discord account.
### A private Discord server where you can test the bot.

## Setting Up the Discord Bot

### Create a Discord Application:

Go to discord.com/developers.
Click on "Applications", then click "New Application".
Give your application a name and click "Create".

### Generate the Bot Token:

Go to the "Bot" section.
Click "Reset Token" to generate a new token for your bot. Copy the token and keep it safe, as you can only view it once.

### Set Up OAuth2 Permissions:

Go to the "OAuth2" section.
In the OAuth2 URL Generator, select "bot" and "application.commands" as the scopes.
Under "Bot Permissions", select "Administrator".

### Invite the Bot to Your Server:

Copy the generated URL at the bottom of the page and paste it into your browser. This will redirect you to Discord, where you can invite the bot to your private server.

## Preparing the Code
Before running the app, you'll need to configure it with your bot's token.
Create a .env file in the project directory
Add your token in the .env file like: TOKEN=your_token

## Running the App

Open Terminal in project directory
Run the command "Node ."