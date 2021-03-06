# neural-style-website
### Dependencies:
* [node](https://nodejs.org/en/)
* Install npm 
    
    ```shell
    sudo npm install npm -g
    ```
* Install typescript
   
    ```shell
    npm install -g typescript
    ```
* [mongoDB](https://docs.mongodb.org/manual/installation/)
* [neural-style](https://github.com/jcjohnson/neural-style), if you already have the "neural-style" application installed on your machine, then just copy the directory to the "neural-style-website" dir after you have finsihed the "Setup" instructions.

### Setup:
1. Clone the repositiry.

   ```shell
    git clone --recursive https://github.com/AbdullahAlfaraj/neural-style-website
    ```
    The recursive option will insure to clone the "neural-style" submodule as well.

2. Install the packages dependencies through npm
   
    ```shell
    cd neural-style-website
    npm install
    ```

3. Transpile typescript files to javascript, as long as the command run ignore error messages.
    
    ```shell
    npm run tsc
    ```
4. run gulp to 
    * compile/process scss files to css.
    * move/copy all necessary libs/files to the appropriate directories.

    ```shell
    gulp
    ```
5. lastly, start the server
    
    ```shell
    bash neural-style-website-up.sh
    ```
    
## Usage:

#### Input:
All images, for the time being, must be placed in the "neural-style-website/public/uploads" directory.
#### Output:
The result/output images will be stored in the "neural-style-website/public/output" directory.
#### Settings:
Default neural-style settings are stored in "nerual-style-website/public/default.json" .
####  Website url: 
    * Internal access: "localhost:4000/" or "127.0.0.1:4000/"
    * external access: "serverip:4000/"
#### ScreenShots:

#####On page loading:

<img src="./screenshot/on-loading-page.png" width="680" >

#####Select multiple styles:

<img src="./screenshot/select-two-styles.png" width="680" >

#####Settings section:

<img src="./screenshot/settings-section.png" width="680" >

#####The log Section

<img src="./screenshot/log-command.png" width="680" >

#####Final output 

<img src="./screenshot/final-result.png" width="680" >
