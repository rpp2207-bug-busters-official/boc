# Charge and Tarry

Charge & Tarry is a website that electric vehicle owners can use to find charging stations and explore nearby recreational activities while they are waiting for their vehicles to be charged. This website is designed to be mobile friendly for the owners to access its contents easily on the go.

![homepage](https://user-images.githubusercontent.com/42246116/230190467-e666ce0c-0c76-4c36-a6d1-dac032e0217a.png)

## Table of Contents
* [Features](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#features)
   * [Charging Station Map](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#charging-station-map)
   * [Nearby Activities and Reviews](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#nearby-activities-and-reviews)
   * [Add new Activity/Review](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#add-new-activityreview)
   * [Charging Timer](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#charging-timer)
   * [Authentication](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#authentication)
   * [Profile Page](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#profile-page) 
	 
* [Getting Started](https://github.com/rpp2207-bug-busters-official/boc/blob/main/README.md#getting-started)

## Features:

### Charging Station Map

On the homepage, the EV owners will be able to find charging stations by:
* current location
* search by zipcode
* search by address/point of interest

The charging stations in the specified area will appear on the map as dots; their availabilities can be indicated by color: green for "available", orange for "occupied".

Once the user places his/her mouse over the charging station, detailed info will pop up:
* availability
* provider
* name
* connection type
* address

The user can also filter charging stations by their provider/connection type.

https://user-images.githubusercontent.com/42246116/230183327-76e2ac4a-b5d4-432b-91ee-f58bb694c338.mp4

### Nearby Activities and Reviews
The user can get a list of nearby activities when he/she clicks on a charging station; rating and reviews for each individual activity will also be shown.
<img width="1996" alt="Screen Shot 2023-04-05 at 10 51 22 AM" src="https://user-images.githubusercontent.com/42246116/230147436-05cfdba0-bcf2-4382-be6f-2d30ff46bef1.png">

### Charging Timer
Default timer is 30 mins. The user will be able to customize the timer and check approximate time remaining; if the user choose to, he/she can receive email notifications when the charging status changes.

https://user-images.githubusercontent.com/42246116/230148711-d2284059-ada3-483f-8fca-c11cfe927aa9.mp4

### Authentication
The user can sign up with emails or through google/facebook to access profile page and submitting new activities/reviews.

<img width="1191" alt="Screen Shot 2023-04-05 at 2 26 03 PM" src="https://user-images.githubusercontent.com/42246116/230184689-9b9a71f2-f9be-46a6-a26a-ba606f880216.png">

### Add new Activity/Review (Authenticated users only)
Authenticated users can submit review and add new activities via forms.

<img width="1193" alt="Screen Shot 2023-04-05 at 2 26 34 PM" src="https://user-images.githubusercontent.com/42246116/230184734-9f2ec8cd-9886-4788-93b0-e62c0e1d4338.png">


### Profile Page (Authenticated users only)
Authenticated users will have a profile where they can store favorite and completed activities, and also add reviews to existing ones. Users without profiles cannot access these features.

<img width="1185" alt="Screen Shot 2023-04-05 at 2 27 08 PM" src="https://user-images.githubusercontent.com/42246116/230184770-38e1ce9d-64e8-4d07-a88f-2af2f4f319ee.png">

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
