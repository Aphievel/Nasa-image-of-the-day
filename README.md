# NASA Image Of The Day

A React App that uses the NASA APOD API to get astronomical pictures. Uses Vite as a build tool.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APOD_KEY`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Aphievel/Nasa-image-of-the-day.git
```

Go to the project directory

```bash
  cd Nasa-image-of-the-day
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Deployment

Deployment on Github Pages is automatic as configured in `.github\workflows`

## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/83160024/202983410-cf688536-b44e-4565-8cc9-a4979f492347.png)

## Contributing

Contributions are always welcome!

## Lessons Learned

While building this project, I learnt how to correctly deploy an app built with vite and Github Actions  

Notable lessons include:  
1. Adding `base: './'` to vite.config.js
2. Learning how to use Github Actions to build and deploy the app
2. Configuring environment secrets correctly in `.github\workflows`<br>
[This answer](https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page) and [this answer](https://stackoverflow.com/questions/66398572/cannot-access-environment-secrets-variables-passing-it-from-gh-pages-to-reactapp/66629983#66629983) helped a lot
