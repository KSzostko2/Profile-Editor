# Setup

- `npm install`
- `npm run dev` to run the app

# Comments

- In the [Anatomy of a global header](https://carbondesignsystem.com/patterns/global-header/#anatomy-of-a-global-header) section I did not find any mention of adding a logo in the form of the image/svg, co I've decided to stick with the text logo.
- For such small applications with only one basic form it might not be entirely necessary to use libraries for form handling and schema validation but generally in bigger apps some kind of library for handling forms is used and I wanted to verify how smooth it would be to integrate `react hook form` with `carbon/react` form controls.
- For form schema validation I considered using `zod` or `yup`, mainly verifying whether they can handle file validations. I think that they both can do that and I went with `zod` just because it was mentioned in the company's tech stack.
- `DatePicker` component is pretty complex so I've decided to stick to handling only `datePickerType="single"` to keep it simple but in the actual full app `datePickerType="range"` would need to be handled differently than the solution here.
- To make it easy to connect to an existing backend API for storing data, I've used a data-fetching library. To connect a real backend API, it is necessary only to swap query and mutation callbacks (apart from updating query-client config) with the actual API call. I've decided to use TanStack Query, as it is by far the most popular data-fetching library. As with form handling, using a data-fetching library may not have been entirely necessary in this scenario. However, I wanted to do so to create a more realistic example, given that many commercial applications nowadays are using such libraries.
- For the sake of simplicity, I've used base64 format for storing images to be able to encode it as a simple text field without any additional setup. In the real world scenario for bigger files storage, it would probably often be better to use some kind of file hosting and provide a URL to the image.
- I've disabled retries for getting the user profile data to just make it quicker to see the message that the data needs to be filled. Normally request retries are often desired feature.
- In the profile page error handling is simplified by just checking text because there is no real backend here. Normally this would be handled more properly by checking error codes
