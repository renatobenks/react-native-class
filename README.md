# React Native

A class based project, built to help people participating on a grow-up career program.

> The project below was inspired in the program goals based on the students expertise
and background
 
Introduction
---

This project is an application used to integrate new students into the #AceleraDev React Native program, through the first ones they need to do before starting classes, and after the completion of the steps, promote interaction with integrations of these same ones. The information is needed at the moment, it is all in JSON files statically.

However, the interaction flows after the completion of the challenges still need to be improved. The objective of this challenge is to use QR codes to promote interactions between the participants of the program, by generating a QR code for each member of the platform and a QR code reader to read the content of these codes, which contain the member's personal public information, in order to promote, in a simple and easy way, access to the member's social networks.

Requirements
---

> All the necessary settings have already been created, if you feel something is missing, contact the instructors/mentors.

- node: ^12.16.1 (lts/erbium)
- CocoaPods: ^1.8
- yarn: ^1.17.3 (you're not enabled or allowed to use yarn version 3)

**Installing the supported node version through nvm:**

```bash
$ nvm install # to install and use the project node version specified .nvmrc
```

Getting started
---

### 1. Install

Install the node dependencies configured in the project, you can simply go to the project folder and run the yarn command to install the node dependencies configured in the package.json by the following command:

```bash
$ yarn # to install the lock dependencies at yarn
```

**iOS:**

If you are on macOS, you will need to install the iOS dependencies via cocoapods as well, so make sure you have the 1.8+ version of cocoapods installed correctly:

```bash
$ pod --version # to display the current cocoapods version
```

Simply enter the ios folder in the project and run the cocoapods command to install dependencies via the following command:_

```bash
$ cd ios/ # to open the iOS project directory
$ pod install # to display the current cocoapods version
```

### 2. Start the packager for development with metro bundler:

```bash
$ yarn start # or npm start
```

_If you want to open the react native debugger by default, run the following command:_

```bash
$ REACT_DEBUGGER="yarn open:debugger" yarn start
```

**Windows:**

```bash
$ set REACT_DEBUGGER="yarn open:debugger" && yarn start
```

### 3. Build and test:

**iOS:**

```bash
$ yarn react-native run-ios
```

_If you want to run on a specific model in the simulator, run the following command:_

```bash
$ yarn react-native run-ios --simulator "iPhone 7"
```

_If you want to run the iOS app on a physical device, you will need to use ios-deploy, available for download from npm, so just run the following command to install ios-deploy globally:_

```bash
$ npm install -g ios-deploy # to install `ios-deploy` globally to use it directly
```

_Now, you need to make sure that your device is connected and synchronized correctly with your computer, so you just copy the name of the physically connected device, using the following command:_

> To make sure your device is accessed correctly, make sure the phone is unlocked

```bash
$ ios-deploy --detect # to get and display the connected device
```

The result of the above command should look like the image below:

> In the case of the image below, the device name is `Renato's iPhone`, as selected and demarcated for easy viewing

![iOS Deploy](https://i.imgur.com/j4Mn8Ob.png)

_Now, using the device name that you copied in the command above, you can use it to install and open the application on this device, using the following command:_

```bash
$ yarn react-native run-ios --device "Renato’s iPhone"
```

**Android:**

```bash
$ yarn react-native run-android
```

_If you are using a physical android device, run the following command:_

```bash
$ yarn android:ports
```

### 4. Debugging

```bash
$ yarn open:debugger  # to open the react-native-debugger
```

Project
---

All the basic structure needed for the project is in the /src folder:

> You might want evolve this structure as you see fit and necessary, so feel free to make it better as you judge reasonsable right. what you only cannot do, because it'll probably affect your grade, is deleting or modifying the main component's name because the automation uses it to grade your code and solution.

```unicode
.
├── src/
|   └── App.js # Representação da aplicação a ser renderizada
|   └── config.js # Definições das variáveis e configurações de ambiente
|   └── styles.js Definições e configurações de estilos da aplicação
|   └── onboarding.json # Arquivo JSON estático com os passos e instruções do programa, à serem mostrados no app
|   ├── assets/ # Pasta de conteúdos de representação estáticas, como imagens
|   ├── components/ # Todos componentes reutilizáveis da aplicação
|       └── Steps/ # Passos a serem completados, correspondentes ao fluxo uni-direcional de passos no onboarding
|       └── Step/ # Passo atual correspondente a ser completado no onboarding
|       └── ForwardStep/ # Botão responsável por avançar os passos
|       └── StepTitle/ # Titulo de um passo passo a ser completado no onboarding
|       └── StepDescription/ # Descrição de um passo a ser completado no onboarding
|   ├── router/ # Estrutura de routers da aplicação
|       └── AppRouter # Router principal responsável por renderizar toda a estrutura de navegação
|       └── routes # Nomes das rotas usados para identificar unicamente cada rota
|       └── routers/ # Routers separados por contexto de navegação
|           └── OnboardingRouter # Router responsável por gerenciar as rotas de onboarding do usuario ao programa AceleraDev
|   ├── screens/ # Todas as telas renderizadas pelos routers
|       └── LoookStep/ # Tela responsável pelo fluxo de passos do usuario
|       └── Welcome/ # Tela de boas vindas ao aplicativo e ao fluxo de onboarding
|       └── Home/ # Tela inicial do aplicativo depois que os passos do onboarding estão concluídos
```

Testing
---

You can use the tests to assist you in developing the challenge, and ensure that your fixes had the expected effect:

### Running all tests:

> Using this mode, all tests run all at once, sequentially one by one

```bash
$ yarn test # or npm test
```

**Running tests in development:**

> Using this mode, the tests will be re-run with each change made to the code

```bash
$ yarn test:watch # or npm run test:watch
```
