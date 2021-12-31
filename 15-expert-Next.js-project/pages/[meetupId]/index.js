import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yechan1:junyc1010!@nodeexpressprojects.iwbad.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: result.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://yechan1:junyc1010!@nodeexpressprojects.iwbad.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  //extract url params
  return {
    props: {
      meetupData: {
        id: result._id.toString(),
        title: result.title,
        image: result.image,
        address: result.address,
        description: result.description,
      },
    },
  };
}

export default MeetupDetails;
