import MeetupList from "../../components/meetups/MeetupList";
import { MongoClient } from 'mongodb'
import Head from 'next/head'
import { Fragment } from "react";

function HomePage(props) {
  return <Fragment>
      <Head>
        <title>Nextups</title>
        <meta name="description" description="Browse a huge list of highly active Next Meetups!" />

      </Head>
      <MeetupList meetups={props.meetups} />;
  </Fragment>
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = contest.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://appu:mqrstLbVhCMJafME@cluster0.8cychvr.mongodb.net/meetups?retryWrites=true&w=majority')

  const db = client.db();

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  };
}

export default HomePage;
