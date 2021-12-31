import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
const dummyMeetup = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Biblioteca_Estatal_de_Baviera%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_03.JPG/1024px-Biblioteca_Estatal_de_Baviera%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_03.JPG",
    address: "Europe Germany 23 Blvd.",
    description: "This is first",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Biblioteca_Estatal_de_Baviera%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_03.JPG/1024px-Biblioteca_Estatal_de_Baviera%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_03.JPG",
    address: "Europe Germany 23 Blvd.",
    description: "This is Second",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://yechan1:junyc1010!@nodeexpressprojects.iwbad.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find({}).toArray();

  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   return {
//     props: {
//       meetups: dummyMeetup,
//     },
//   };
// }

export default HomePage;
