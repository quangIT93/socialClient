# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

###

Khi bạn sử dụng Redux trong ứng dụng React, thường sẽ có các file sau:

Components: Thư mục chứa các React components được sử dụng trong ứng dụng. Các components này thường được chia thành các phần nhỏ hơn, nhằm tách biệt trách nhiệm và dễ bảo trì.

Reducers: Thư mục chứa các reducers của Redux. Mỗi reducer đại diện cho một phần của trạng thái của ứng dụng và xử lý các action tương ứng với phần đó của trạng thái.

Store: Thư mục chứa file index.js hoặc configureStore.js để tạo store của Redux. Store lưu trữ toàn bộ trạng thái của ứng dụng và là nơi thực hiện các middleware.

Actions: Thư mục chứa các action của Redux. Các action đại diện cho các sự kiện xảy ra trong ứng dụng và được sử dụng để thay đổi trạng thái của ứng dụng.

Constants: Thư mục chứa các hằng số được sử dụng trong ứng dụng. Hằng số này thường được sử dụng để định nghĩa các loại action và giá trị của chúng.

Selectors: Thư mục chứa các selectors của Redux. Các selector là các hàm được sử dụng để truy xuất trạng thái của ứng dụng và trả về các giá trị cụ thể.

Middleware: Thư mục chứa các middleware của Redux. Middleware là các hàm được thực thi trước khi action đến reducers, để thực hiện các tác vụ khác nhau như ghi log, xử lý bất đồng bộ, ...
