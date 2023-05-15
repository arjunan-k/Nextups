import { Fragment } from "react";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    console.log(data);
    router.push('/')
  }
  return (
  <Fragment>
      <Head>
        <title>New Nextups</title>
        <meta name="description" description="Browse a huge list of highly active Next Meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
  </Fragment>
  )
}

export default NewMeetupPage;
